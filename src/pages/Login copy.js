
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Mail, Lock, User, Phone, Briefcase, Home, Link } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser } from '../app/servies/userAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal';

const LoginSignin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginCreadentials, setLoginCreadentials] = useState({
    email:"",
    password:""
  })
  const [signUpCreadentials, setSignUpCreadentials] = useState({
  name: "",
  password: "",
  email: "",
  lastName: "",
  country: "US",
  jobTitle: "",
  company: "",
  phone:""
  })
  const [errorMsg, setErrorMsg] = useState("")
  const [signUpErrors, setSignUpErros] = useState({})
  const [verifyEmail, setVerifyEmail] = useState("")
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    // Fetch country data from API
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://infiniteb2b.com:8443/api/country");
        // console.log("response", response)
        if (response.data.status) {
          setCountries(response.data.data); // Set the countries data
        } else {
          console.error("Error fetching countries:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const toggleSignUp = () => setIsSignUp(!isSignUp);
  const location = useLocation();
  const { pathname } = location;
  const navigate= useNavigate()
  const handleCredentialChange = (e)=>{
    const {name,value} = e.target
    setLoginCreadentials({
      ...loginCreadentials,
      [name]:value
    })

  }
  const validateInputs = ()=>{
    if(!loginCreadentials.email || !loginCreadentials.password) {
      return true
    }
    else{
      return false
    }
  }
  const handleLogin = ()=>{
    const isError = validateInputs()
    if(isError){
      alert("Please enter all fields")
    }
    else{
      const formData = new FormData()
      formData.append('email',loginCreadentials.email)
      formData.append('password',loginCreadentials.password)
      dispatch(loginUser(formData,dispatch,(res,err)=>{
        if(err){
          setErrorMsg(res)
        }
        else{
          navigate("/home")
          // navigate("https://dashboard.infiniteb2b.com/user/dashboard")
          
//           const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;
// const dashboardUrl = `https://dashboard.infiniteb2b.com/user/login?token=${encodeURIComponent(token)}`;

// window.location.href = dashboardUrl;

          setErrorMsg("")
        }
      }))
    }
  }
const handleSignUpChange=(e)=>{
  const {name,value} = e.target
    setSignUpCreadentials({
      ...signUpCreadentials,
      [name]:value
    })
}
// console.log("verifyEmail",verifyEmail)
const validateSignUp = () => {
  const errors = {}; // Object to store any validation errors
  
  // Check for empty fields
  Object.keys(signUpCreadentials).forEach((key) => {
    if (!signUpCreadentials[key]) {
      errors[key] = `${key} cannot be empty`;
    }
  });

  // Validate name and lastName (minimum 3 characters)
  if (signUpCreadentials.name && signUpCreadentials.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  if (signUpCreadentials.lastName && signUpCreadentials.lastName.length < 3) {
    errors.lastName = 'Last name must be at least 3 characters';
  }

  // Validate email (basic regex for email format)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (signUpCreadentials.email && !emailRegex.test(signUpCreadentials.email)) {
    errors.email = 'Invalid email address';
  }

  // Validate phone number (only numbers allowed, optional)
  if (signUpCreadentials.phone && !/^[0-9]*$/.test(signUpCreadentials.phone)) {
    errors.phone = 'Phone number must only contain numbers';
  }
  setSignUpErros(errors)
  console.log("errors",errors)
  return errors;
};

const handleSignUpSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validateSignUp();
  if (Object.keys(validationErrors).length === 0) {
    const formData = new FormData()
    Object.keys(signUpCreadentials).map(key=>{
      formData.append([key],signUpCreadentials[key])
    })
    dispatch(signupUser(formData,(res,err)=>{
      if(err){
        setErrorMsg(res)
      }
      else{
        setErrorMsg("")
        setVerifyEmail(res.data)
        toggleSignUp()
      }
    }))
    // console.log('Form data is valid:', formData);
  } else {
    console.log('Form validation errors:', validationErrors);
  }
};
const handleCloseModal = () => {
  setSignUpErros({});
};
// console.log("signUpErrors",signUpErrors)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl mb-5 h-[500px] flex overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-1000">
        <div
          className={`w-1/2 h-full flex flex-col justify-center items-center p-8 transform transition-all duration-1000 ease-in-out ${
            isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
          }`}
        >
   

<div className="absolute top-8 justify-center animate-bounce">
  <img 
    src={require('../assets/Infinite-b2b-1-scaled.png')} 
    alt="Logo" 
    className="h-8 w-auto"
  />
</div>


          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      
          <p className="mb-4 text-gray-600">or use your account</p>
          {verifyEmail && <p className="mb-4 text-teal-400 font-semibold">{verifyEmail}</p>}
          {errorMsg && <p className='text-red-500'>{errorMsg}</p>}
          <div className="w-full mb-4 p-2 border rounded flex items-center">
            <Mail size={20} className="mr-2 text-gray-600" />
            <input onChange={handleCredentialChange} value ={loginCreadentials.email} type="email"  name="email" placeholder="Email" required className="w-full outline-none" />
          </div>
          <div className="w-full mb-4 p-2 border rounded flex items-center">
            <Lock size={20} className="mr-2 text-gray-600" />
            <input onChange={handleCredentialChange} value ={loginCreadentials.password} required name="password" type="password" placeholder="Password" className="w-full outline-none" />
          
          </div>
          <button className="text-sm text-blue-600 mb-4">Forgot your password?</button>
          <button
            className="w-full py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>

        {/* Right Side (Welcome) */}
        <div
          className={`w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out ${
            isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">Hello, Friend</h2>
          <p className="mb-6">Enter your personal details and start your journey with us</p>
          <button
            className="w-full py-2 bg-white text-blue-500 font-semibold rounded-full"
            onClick={toggleSignUp}
          >
            Sign Up
          </button>
        </div>

        {/* Sign Up and Welcome Divs............ */}
        <div
          className={`absolute inset-0 w-full h-full flex transform transition-all duration-1000 ease-in-out ${
            isSignUp ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
      
      <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center p-4 sm:p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out">
  <h2 className="text-xl sm:text-2xl font-bold mb-4">Welcome Back!</h2>
  <p className="mb-4 text-sm sm:text-base">To stay connected with us, please login with your personal info</p>
  <button
    className="w-full py-2 bg-white text-blue-500 font-semibold rounded-full"
    onClick={toggleSignUp}
  >
    Sign In
  </button>
</div>

<div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center p-4 sm:p-8 transform transition-all duration-1000 ease-in-out">
  <h2 className="text-xl sm:text-2xl font-bold mb-2 mt-3">Create Account</h2>
  {Object.keys(signUpErrors).length > 0 && (
        <ErrorModal errors={signUpErrors} onClose={handleCloseModal} />
      )}
  <div className='relative flex flex-col sm:flex-row gap-2 w-full'>
    <div className="w-full sm:w-1/2 mb-1 px-2 border rounded flex items-center">
      <User size={18} className="mr-2 text-gray-600" />
      <input type="text" name="name" onChange={handleSignUpChange} value={signUpCreadentials.name} placeholder="First Name" className="w-full outline-none" />
    </div>
    <div className="w-full sm:w-1/2 mb-1 p-2 border rounded flex items-center">
      <User size={18} className="mr-2 text-gray-600" />
      <input name="lastName" onChange={handleSignUpChange} value={signUpCreadentials.lastName} type="text" placeholder="Last Name" className="w-full outline-none" />
    </div>
  </div>
  
  <div className="w-full mb-2 mt-1 border rounded flex items-center">
   
      <select
      value={countryCode}
      onChange={handleCountryCodeChange}
      className="w-1/4 p-2 border-r-2 border-gray-300 text-gray-600 bg-white rounded-l"
    >
      <option value="" disabled>
        Select a country
      </option>
      {countries.map((country) => (
        <option key={country.id} value={`${country.code} ${country.name}`}>
          {country.code}           {country.name}
        </option>
      ))}

    </select>
    <div className="w-2/3 flex items-center ml-2">
      <Phone size={18} className="mr-2 text-gray-600" />
      <input
        type="text"
        name="phone" 
        onChange={handleSignUpChange} 
        value={signUpCreadentials.phone}
        placeholder="555 555 5555"
        className="w-full outline-none p-1"
      />
    </div>
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Home size={18} className="mr-2 text-gray-600" />
    <input name="company" onChange={handleSignUpChange} value={signUpCreadentials.company} type="text" placeholder="Company Name" className="w-full outline-none" />
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Briefcase size={18} className="mr-2 text-gray-600" />
    <input name="jobTitle" onChange={handleSignUpChange} value={signUpCreadentials.jobTitle} type="text" placeholder="Job Title" className="w-full outline-none" />
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Mail size={18} className="mr-2 text-gray-600" />
    <input name="email" onChange={handleSignUpChange} value={signUpCreadentials.email} type="email" placeholder="Email" className="w-full outline-none" />
  </div>

  <div className="w-full mb-2 p-2 border rounded flex items-center">
    <Lock size={18} className="mr-2 text-gray-600" />
    <input name="password" onChange={handleSignUpChange} value={signUpCreadentials.password} type="password" placeholder="Password" className="w-full outline-none" />
  </div>
  <div className="space-y-2 text-sm font-poppins text-gray-600">
  <div className="flex items-start">
    <input type="checkbox" id="ageCheckbox" className="mr-2 mt-1" />
    <label htmlFor="ageCheckbox" className="leading-tight">
      By clicking this checkbox you confirm that you are 18 years of age or older.
    </label>
  </div>

  <div className="flex">
    <input type="checkbox" id="termsCheckbox" className="mr-2 mt-1" />
    <label htmlFor="termsCheckbox" className="leading-tight">
      By clicking this checkbox you agree to the{' '}
      <p className="text-blue-600 underline">Terms of Service & Privacy Policy.</p>
     
    </label>

  </div>
</div>

  <button
    className="w-full py-2 mb-4 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
    onClick={handleSignUpSubmit}
  >
    Sign Up
  </button>
  
</div>

        </div>
      </div>
    </div>
  );
};

export default LoginSignin;

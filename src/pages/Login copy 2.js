import React, { useState, useEffect } from "react";
import axios from "axios";
import { Mail, Lock, User, Phone, Briefcase, Home, Link } from 'react-feather';
import { useDispatch } from 'react-redux';
import { loginUser, signupUser } from '../app/servies/userAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal';

const LoginSignin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginCreadentials, setLoginCreadentials] = useState({
    email: "",
    password: ""
  });
  const [signUpCreadentials, setSignUpCreadentials] = useState({
    name: "",
    password: "",
    email: "",
    lastName: "",
    country: "US",
    jobTitle: "",
    company: "",
    phone: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [signUpErrors, setSignUpErros] = useState({});
  const [verifyEmail, setVerifyEmail] = useState("");
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch country data from API
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://infiniteb2b.com:8443/api/country");
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query on input change
  };

  // Filter countries based on search query
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSignUp = () => setIsSignUp(!isSignUp);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setLoginCreadentials({
      ...loginCreadentials,
      [name]: value
    });
  };

  const validateInputs = () => {
    if (!loginCreadentials.email || !loginCreadentials.password) {
      return true;
    } else {
      return false;
    }
  };

  const handleLogin = () => {
    const isError = validateInputs();
    if (isError) {
      alert("Please enter all fields");
    } else {
      const formData = new FormData();
      formData.append('email', loginCreadentials.email);
      formData.append('password', loginCreadentials.password);
      dispatch(loginUser(formData, dispatch, (res, err) => {
        if (err) {
          setErrorMsg(res);
        } else {
          navigate("/home");
          setErrorMsg("");
        }
      }));
    }
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpCreadentials({
      ...signUpCreadentials,
      [name]: value
    });
  };

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

    setSignUpErros(errors);
    return errors;
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignUp();
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      Object.keys(signUpCreadentials).map(key => {
        formData.append([key], signUpCreadentials[key]);
      });
      dispatch(signupUser(formData, (res, err) => {
        if (err) {
          setErrorMsg(res);
        } else {
          setErrorMsg("");
          setVerifyEmail(res.data);
          toggleSignUp();
        }
      }));
    } else {
      console.log('Form validation errors:', validationErrors);
    }
  };

  const handleCloseModal = () => {
    setSignUpErros({});
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl mb-5 h-[500px] flex overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-1000">
        <div
          className={`w-1/2 h-full flex flex-col justify-center items-center p-8 transform transition-all duration-1000 ease-in-out ${isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'}`}
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
            <input
              onChange={handleCredentialChange}
              value={loginCreadentials.email}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full outline-none"
            />
          </div>
          <div className="w-full mb-4 p-2 border rounded flex items-center">
            <Lock size={20} className="mr-2 text-gray-600" />
            <input
              onChange={handleCredentialChange}
              value={loginCreadentials.password}
              required
              name="password"
              type="password"
              placeholder="Password"
              className="w-full outline-none"
            />
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
          className={`w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white transform transition-all duration-1000 ease-in-out ${isSignUp ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'}`}
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

        {/* Sign Up and Welcome Divs */}
        <div
          className={`absolute inset-0 w-full h-full flex transform transition-all duration-1000 ease-in-out ${isSignUp ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="w-1/2 h-full flex flex-col justify-center items-center p-8 bg-white shadow-xl">
            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <User size={20} className="mr-2 text-gray-600" />
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={signUpCreadentials.name}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              />
            </div>
            {signUpErrors.name && <p className="text-red-500">{signUpErrors.name}</p>}

            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <User size={20} className="mr-2 text-gray-600" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={signUpCreadentials.lastName}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              />
            </div>
            {signUpErrors.lastName && <p className="text-red-500">{signUpErrors.lastName}</p>}

            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <Mail size={20} className="mr-2 text-gray-600" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signUpCreadentials.email}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              />
            </div>
            {signUpErrors.email && <p className="text-red-500">{signUpErrors.email}</p>}

            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <Phone size={20} className="mr-2 text-gray-600" />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={signUpCreadentials.phone}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              />
            </div>
            {signUpErrors.phone && <p className="text-red-500">{signUpErrors.phone}</p>}

            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <Lock size={20} className="mr-2 text-gray-600" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUpCreadentials.password}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              />
            </div>

            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <Briefcase size={20} className="mr-2 text-gray-600" />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={signUpCreadentials.company}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              />
            </div>

            <div className="w-full mb-4 p-2 border rounded flex items-center">
              <Home size={20} className="mr-2 text-gray-600" />
              <select
                name="country"
                value={signUpCreadentials.country}
                onChange={handleSignUpChange}
                className="w-full outline-none"
              >
                {filteredCountries.map((country, index) => (
                  <option key={index} value={country.name}>{country.name}</option>
                ))}
              </select>
            </div>
            <button
              className="w-full py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full"
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


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Menu, ChevronDown, User, LogOut } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../app/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);

  const handleClickOutside = (e) => {
    if (
      !e.target.closest(".menu-container") &&
      !e.target.closest(".menu-toggle") &&
      !e.target.closest(".dropdown-container")
    ) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (

   
    <header className="px-4 py-3 relative shadow-md bg-gradient-to-r from-purple-800 to-cyan-400"
    style={{
      backgroundImage: `url(${require("../assets/assetsFromyash/bagImg.png")})`,
    }}
    >
   
      <div className="flex justify-between items-center">
     
        <div className="flex items-center space-x-8">
  
          <img
  src={require("../assets/Infinite-b2b-1-scaled.png")}
  alt="Logo"
  className="h-14 w-auto cursor-pointer"
  style={{
    // height: "48px",
    // width: "48px",
    borderRadius: "8px", 
    cursor: "pointer",
  }}
  onClick={() => navigate("/home")}
/>

          <nav className="hidden lg:flex space-x-8">
            <button
              className="text-white hover:underline hover:font-bold font-montserrat"
              onClick={() => navigate("/home")}
            >
              HOME
            </button>
            <button
              className="ml-2 text-white hover:underline hover:font-bold font-montserrat"
              onClick={() => navigate("/whitepapers-set")}
            >
              WHITEPAPERSET
            </button>
            <button
              className="text-white hover:underline hover:font-bold font-montserrat"
              onClick={() => navigate("/newsletters")}
            >
              NEWSLETTERS
            </button>
            <button
              className="text-white hover:underline hover:font-bold w-full font-montserrat"
              onClick={() => {setMenuOpen(!menuOpen);
                 navigate("/newsletters")}}
            >
             BLOGS
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white">
            {showInput && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-b border-white text-white text-sm outline-none mr-2"
                autoFocus
              />
            )}
            <div onClick={() => setShowInput(!showInput)} className="cursor-pointer">
              <Search className="h-5 w-5" />
            </div>
          </div>

          {token && (
            <div className="relative text-white">
              <Bell className="h-5 w-5 cursor-pointer" />
              <div className="font-montserrat absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </div>
            </div>
          )}

          {token && (
            <div className="relative flex items-center space-x-2 dropdown-container">
              <div className="p-[2px] rounded-full">
                <User className="rounded-full text-gray-400 bg-gray-50" />
              </div>
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-white font-semibold font-montserrat">{username}</span>
                {/* <ChevronDown className="w-5 h-5 text-white" /> */}
              </div>

              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 p-1 z-50">
             
                  <button
                    className="block text-left w-full text-red-500 hover:bg-red-100 px-3 py-2 rounded-md"
                    onClick={() => {
                      console.log("Logged out");
                      dispatch(clearUser());
                      navigate("/home");
                    }}
                  >
                    <div className="flex gap-2">  <LogOut className="w-5 h-5 mt-1"/>  Log Out</div>
                
                  </button>
                </div>
              )}
            </div>
          )}

          {!token && (
         
            <button
  className="bg-white text-[#4702a2] text-sm font-semibold px-6 py-2 rounded-2xl border border-white hover:bg-teal-400 hover:text-teal-500 lg:block hidden font-montserrat"
  onClick={() => navigate("/login")}
>
  SIGN IN
</button>

          )}

          <div className="lg:hidden menu-toggle">
            <Menu
              className="mr-1 h-6 w-6 text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden menu-container absolute top-16 left-0 w-full bg-gradient-to-r from-teal-500 to-white p-4 z-10">
          <nav className="space-y-4">
            <button
              className="text-white hover:underline hover:font-bold w-full text-sm font-montserrat"
              onClick={() => {setMenuOpen(!menuOpen);
                navigate("/home");

              }}
            >
              HOME
            </button>
            <button
              className="text-white hover:underline hover:font-bold w-full font-montserrat"
              onClick={() =>  {setMenuOpen(!menuOpen);
                navigate("/whitepapers-set")}}
            >
              WHITEPAPERS
            </button>
            <button
              className="text-white hover:underline hover:font-bold w-full font-montserrat"
              onClick={() => {setMenuOpen(!menuOpen);
                 navigate("/newsletters")}}
            >
              NEWSLETTERS
            </button>
            <button
              className="text-white hover:underline hover:font-bold w-full font-montserrat"
              onClick={() => {setMenuOpen(!menuOpen);
                 navigate("/newsletters")}}
            >
              BOLGS
            </button>





            {!token && (
              <button
                className="bg-white text-white text-sm font-semibold w-full mt-2 py-2 rounded-sm hover:bg-gray-100"
                onClick={() => navigate("/login")}
              >
                SIGN IN
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;  


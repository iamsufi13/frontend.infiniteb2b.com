import React from 'react';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="bg- shadow">
            <div className="container mx-auto px-1 py-4">
                <div className="flex justify-between items-center">
                    {/* Left-aligned Logo */}
                    <div>
                        <img src={require('../assets/Infinite-b2b-1-scaled.png')} alt="Logo" className="h-12 w-auto" />
                    </div>
                       {/* Search Box */}
                       <div className="flex-1 mx-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>

                    {/* Right-aligned Navigation Buttons */}
                    <nav className="flex space-x-4">
                        <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded hover:bg-gray-600 hover:text-white"
                            onClick={() => navigate('/whitepapers')}>
                           WhitePapers
                        </button>
                        <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded hover:bg-gray-600 hover:text-white"   onClick={() => navigate('/newsletters')}>
                            Newsletter
                        </button>
                        <button
                            className="bg-gray-600 text-white px-4 py-2 rounded"
                            onClick={() => navigate('/login')} 
                        >
                            Login
                        </button>
                        <button className="bg-[#4702a2] text-white px-4 py-2 rounded">
                            Sign Up
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

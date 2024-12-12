import React from 'react';
import { Facebook, Twitter, Linkedin, Upload } from 'react-feather'; 
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-black py-8 text-white relative px-2 mt-6">
            
            <div 
                className="absolute inset-0 w-full bg-cover bg-center opacity-20 h-[60%]" 
                style={{ backgroundImage: `url(${require('../assets/img/Img5.jpg')})` }}
            ></div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-15 px-6 relative z-10">
                {/* 1st Section */}
                <div className="text-left flex flex-col items-start space-y-4">
                    <span className="text-4xl font-extrabold">INFINITEB2B</span>
                    {/* <img 
                        src=".." 
                        alt="Company Logo" 
                        className="w-32 h-auto mb-4"
                    /> */}
                    <img 
                        src={require('../assets/Infinite-b2b-1-scaled.png')} 
                        alt="Logo" 
                        className="h-10 w-auto" 
                    />
                    <div className="flex space-x-4">
                        <Link to="#" className="bg-white text-black rounded-full p-2">
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link to="#" className="bg-white text-black rounded-full p-2">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link to="#" className="bg-white text-black rounded-full p-2">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* 2nd Section */}
                <div className="text-left flex flex-col justify-center">
                    <p>B2B solutions from all vendors in all industries aggregated and curated in an easy-to-use discovery platform</p>
                </div>

                {/* 3rd Section */}
                <div className="text-left">
                    <ul className="space-y-2">
                        <li><Link className='no-underline text-white cursor-pointer' to="#">Blogs</Link></li>
                        <li><Link className='no-underline text-white cursor-pointer' to="#">Vendor Centers</Link></li>
                        <li><Link className='no-underline text-white cursor-pointer' to="/whitepapers">WhitePapers</Link></li>
                        <li><Link className='no-underline text-white cursor-pointer' to="/aboutus">About us</Link></li>
                        <li><Link className='no-underline text-white cursor-pointer' to="#">Contact us</Link></li>
                    </ul>
                </div>

                {/* 4th Section */}
                <div className="flex flex-col items-start space-y-4">
                    <span>Follow Us</span>
                    <Link to="https://dashboard.infiniteb2b.com/vendor/login" className="flex items-center space-x-2 no-underline text-white">
                    {/* <Link to="http://localhost:3001/vendor/login" className="flex items-center space-x-2 no-underline text-white"> */}
                        <Upload className="w-6 h-6" />
                        <span>Sign in as Vendor</span>
                    </Link>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-600 mt-8"></div>

            {/* Bottom Section */}
            <div className="container mx-auto text-center mt-4">
                <span className="text-gray-400">&copy;2024 InfiniteB2B. All Rights Reserved | Privacy and Cookies | Legal | Do not sell my info</span>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Header from './Header'; // Import the Header component

const HeroSection = () => {
  return (
    <div>
      {/* Add Header component here */}
    

      <div className="relative flex h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <video
            src={require('../assets/assetsFromyash/new.mp4')}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0">
          <img
            src={require('../assets/assetsFromyash/HeroBg1.png')}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-20 mt-36">
          <h1 className="text-white text-6xl font-bold mb-0 leading-none font-montserrat">
            SOLUTIONS FOR
          </h1>
          <h1 className="text-white text-6xl font-bold mb-0 leading-none font-montserrat">
            EVERY BUSINESS
          </h1>
          <h1 className="text-white text-6xl font-bold mb-0 leading-none font-montserrat">
            CHALLENGE
          </h1>
          <div className="h-[1px] bg-white w-[10%] mt-1"></div>

          <p className="text-white text-lg font-montserrat">
            Access 600+ industries, connect with <br />
            thousands of vendors, and uncover insights <br />
            that propel your business forward
          </p>

          <div className="flex space-x-4">
            <button
              className="bg-[#4702a2] text-white px-6 py-2 rounded hover:bg-[rgb(147,101,203)] transition duration-300 font-montserrat"
              // onClick={() => navigate('/login')}
            >
              GET STARTED
            </button>
            <button className="text-white px-6 py-2 rounded border border-white hover:text-black transition duration-300 font-montserrat">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


// import React from 'react';
// import Header from './Header';

// const HeroSection = () => {
//   return (
//     <div className="relative flex h-screen">

      
//       <div className="w-full h-full flex justify-center items-center">
        
//         <video
//           src={require('../assets/assetsFromyash/new.mp4')}
//           autoPlay
//           loop
//           muted
//           className="w-full h-full object-cover"
//         />
//       </div>

     
//       <div className="absolute inset-0">

   

//         <img
//           src={require('../assets/assetsFromyash/HeroBg1.png')}
//           alt="Hero Background"
//           className="w-full h-full object-cover"
//         />
//       </div>

   
//       <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-20 mt-36">
//         <h1 className="text-white text-6xl font-bold mb-0 leading-none font-montserrat">
//           SOLUTIONS FOR
//         </h1>
//         <h1 className="text-white text-6xl font-bold mb-0 leading-none font-montserrat">
//           EVERY BUSINESS
//         </h1>
//         <h1 className="text-white text-6xl font-bold mb-0 leading-none font-montserrat">
//           CHALLENGE
//         </h1>
//         <div className="h-[1px] bg-white w-[10%] mt-1"></div>

//         <p className="text-white font-montserrat">
//           Access 600+ industries, connect with <br />
//           thousands of vendors, and uncover insights <br />
//           that propel your business forward
//         </p>

//         <div className="flex space-x-4">
//           <button
//             className="bg-[#4702a2] text-white px-6 py-2 rounded hover:bg-[rgb(147,101,203)] transition duration-300 font-montserrat"
//             // onClick={() => navigate('/login')}
//           >
//             GET STARTED
//           </button>
//           <button className="text-white px-6 py-2 rounded border border-white hover:text-black transition duration-300 font-montserrat">
//             LEARN MORE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


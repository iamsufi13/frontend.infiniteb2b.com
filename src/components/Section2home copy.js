import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Bookmark } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FeatureCard = ({ featureCard }) => {
  // console.log("featureCard", featureCard)
  const navigate = useNavigate();


  const generateSlugByName = (name = "testing name") => {
    const sanitizedString = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

    return "/category/" + sanitizedString;
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="w-full px-2 flex-none">
      <div
        onClick={() =>
          navigate(`/category/${featureCard.title}`, { state: featureCard })
        }
        className="bg-white shadow-lg overflow-hidden h-full"
      >
        <div
          className="w-full h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${featureCard.imgSrc || 'placeholder.jpg'})` }}
        />
        <div className="px-2">
          <h3 className="text-sm font-bold mb-2 text-[#4702a2] font-montserrat inline-block border-b-2 border-[#4702a2] pb-1">
           {featureCard.category || "No category available"}
          </h3>
          <p className="text-black text-sm line-clamp-2 font-montserrat">
            {featureCard.description || "No description available"}
          </p>
        </div>
        <div className="flex justify-between items-center p-2 bg-[#042C54] text-white">
          <h4 className="text-sm font-semibold line-clamp-1 font-montserrat">
          {featureCard.title} 
          </h4>
          <Bookmark size={16} className="text-white cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
};

const Section2home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [featuredSolutionData, setFeaturedSolutionData] = useState([]);
  console.log("featuredSolutionData", featuredSolutionData)
  featuredSolutionData.forEach(item => {
    console.log(item.category);
});

  const cardsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://infiniteb2b.com:8443/api/user/solution-sets-homepage"
        );
       
        if (response.data.status) {
          setFeaturedSolutionData(response.data.data);
        } else {
          console.error("Error fetching data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const totalPages = Math.ceil(featuredSolutionData.length / cardsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return featuredSolutionData.slice(startIndex, startIndex + cardsPerPage);
  };
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };











  

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
      <motion.h1
            variants={itemVariants}
             className="text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat">
 
  POWERING YOUR BUSINESS WITH IN-DEPTH B2B RESOURCES

  </motion.h1>
  <motion.p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">

Leverage our extensive platform to access the best whitepapers for your needs 
</motion.p>

        <div className="relative px-28 lg:px-28 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCurrentPageCards().map((featureCard, index) => (
              <FeatureCard key={index} featureCard={featureCard} />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    currentPage === index ? "bg-purple-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Section2home;


// import React, { useState, useRef, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { ChevronLeft, ChevronRight, Bookmark } from "react-feather";
// import { featuredSolutionData } from "../views/apps/solutionSets/enum";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const FeatureCard = ({ featureCard }) => {
//   const [featuredSolutionData, setFeaturedSolutionData] = useState([]);


//   const generateSlugByName = (name = "testing name") => {
//     const sanitizedString = name
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9\s]/g, "")
//       .replace(/\s+/g, "-");

//     return "/category/" + sanitizedString;
//   };

//   const navigate = useNavigate();

//   return (
//     <motion.div whileHover={{ scale: 1.02 }} className="w-full px-2 flex-none">
//       <div // make it Link tag to make complete card navigate
//         onClick={() =>
//           navigate(`/category/${featureCard.title}`, { state: featureCard })
//         }
//         // to={generateSlugByName(featureCard.title)}
//         className="bg-white shadow-lg overflow-hidden h-full"
//       >
//         <div
//           className="w-full h-32 bg-cover bg-center"
//           style={{ backgroundImage: `url(${featureCard.imgSrc})` }}
//         />
//         <div className="px-2">
//           <h3 className="text-sm font-bold mb-2 text-[#4702a2] font-montserrat inline-block border-b-2 border-[#4702a2] pb-1">
//             Case Study
//           </h3>
//           <p className="text-black text-sm line-clamp-2 font-montserrat">
//             {featureCard.description}
//           </p>
//         </div>
//         <div className="flex justify-between items-center p-2 bg-[#042C54] text-white">
//           <h4 className="text-sm font-semibold line-clamp-1 font-montserrat">
//             {featureCard.title}
//           </h4>
//           <Bookmark size={16} className="text-white" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Section2home = () => {
//   const [featuredSolutionData, setFeaturedSolutionData] = useState([]);
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const autoScrollInterval = useRef(null);
//   const cardsPerPage = 8;
//   const totalPages = Math.ceil(featuredSolutionData.length / cardsPerPage);
 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://infiniteb2b.com:8443/api/user/solution-sets-homepage"
//         );
//         console.log("response", response)
//         if (response.data.status) {
//           setFeaturedSolutionData(response.data.data);
//         } else {
//           console.error("Error fetching data:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   useEffect(() => {
//     if (!isPaused) {
//       autoScrollInterval.current = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }
//     return () => {
//       if (autoScrollInterval.current) {
//         clearInterval(autoScrollInterval.current);
//       }
//     };
//   }, [isPaused, currentPage]);

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//   };

//   const handlePrevious = () => {
//     setCurrentPage((prev) => (prev > 0 ? prev - 8 : totalPages - 8));
//   };

//   const handleNext = () => {
//     setCurrentPage((prev) => (prev < totalPages - 8 ? prev + 8 : 0));
//   };

//   const getCurrentPageCards = () => {
//     const startIndex = currentPage * cardsPerPage;
//     return featuredSolutionData.slice(startIndex, startIndex + cardsPerPage);
//   };

//   return (
//     <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//         className="max-w-7xl mx-auto"
//       >
//         <div>
//         <motion.h1
//             variants={itemVariants}
//              className="text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat">
 
//   POWERING YOUR BUSINESS WITH IN-DEPTH B2B RESOURCES

//   </motion.h1>
//   <motion.p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">

// Leverage our extensive platform to access the best whitepapers for your needs 
// </motion.p>
// <div className='flex w-full'>



       
//         </div>
// </div>


// {/* provided animation by faruk */}
//         {/* <div className="text-center mb-12 px-4">
//           <motion.h1
//             variants={itemVariants}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-6 font-montserrat"
//           >
//             POWERING YOUR BUSINESS WITH IN-DEPTH B2B RESOURCES
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-montserrat"
//           >
//             Leverage our extensive platform to access the best whitepapers for
//             your needs
//           </motion.p>
//         </div> */}

//         <div
//           className="relative px-28"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <motion.div
//             initial={false}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//           >
//             {getCurrentPageCards().map((featureCard) => (
//               <FeatureCard key={featureCard.title} featureCard={featureCard} />
//             ))}
//           </motion.div>

//           <div className="flex justify-center items-center mt-8 gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handlePrevious}
//               className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
//             >
//               <ChevronLeft size={24} />
//             </motion.button>

//             <div className="flex items-center gap-2">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <div
//                   key={index}
//                   className={`h-2 w-2 rounded-full ${
//                     currentPage === index ? "bg-purple-800" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handleNext}
//               className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
//             >
//               <ChevronRight size={24} />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Section2home;


// // import React, { useState, useRef, useEffect } from "react";
// // import { motion, useAnimation } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import { ChevronLeft, ChevronRight, Bookmark } from "react-feather";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const FeatureCard = ({ featureCard }) => {
// //   const navigate = useNavigate();

// //   const generateSlugByName = (name = "testing name") => {
// //     const sanitizedString = name
// //       .trim()
// //       .toLowerCase()
// //       .replace(/[^a-z0-9\s]/g, "")
// //       .replace(/\s+/g, "-");
// //     return "/category/" + sanitizedString;
// //   };

// //   return (
// //     <motion.div whileHover={{ scale: 1.02 }} className="w-full px-2 flex-none">
// //       <div
// //         onClick={() =>
// //           navigate(`/category/${featureCard.title}`, { state: featureCard })
// //         }
// //         className="bg-white shadow-lg overflow-hidden h-full"
// //       >
// //         <div
// //           className="w-full h-32 bg-cover bg-center"
// //           style={{ backgroundImage: `url(${featureCard.imgSrc || 'placeholder.jpg'})` }}
// //         />
// //         <div className="px-2">
// //           <h3 className="text-sm font-bold mb-2 text-[#4702a2] font-montserrat inline-block border-b-2 border-[#4702a2] pb-1">
// //             {featureCard.title}
// //           </h3>
// //           <p className="text-black text-sm line-clamp-2 font-montserrat">
// //             {featureCard.description || "No description available"}
// //           </p>
// //         </div>
// //         <div className="flex justify-between items-center p-2 bg-[#042C54] text-white">
// //           <h4 className="text-sm font-semibold line-clamp-1 font-montserrat">
// //             {featureCard.category || "No category available"}
// //           </h4>
// //           <Bookmark size={16} className="text-white cursor-pointer" />
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };







// // const Section2home = () => {
// //   const controls = useAnimation();
// //   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [featuredSolutionData, setFeaturedSolutionData] = useState([]);
// //   console.log(featuredSolutionData);

// //   const autoScrollInterval = useRef(null);
// //   const cardsPerPage = 8;

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://infiniteb2b.com:8443/api/user/solution-sets-homepage"
// //         );
// //         if (response.data.status) {
// //           setFeaturedSolutionData(response.data.data);
// //         } else {
// //           console.error("Error fetching data:", response.data.message);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     if (inView) {
// //       controls.start("visible");
// //     }
// //   }, [controls, inView]);

// //   useEffect(() => {
// //     if (!isPaused && featuredSolutionData.length) {
// //       autoScrollInterval.current = setInterval(() => {
// //         handleNext();
// //       }, 5000);
// //     }
// //     return () => clearInterval(autoScrollInterval.current);
// //   }, [isPaused, currentPage, featuredSolutionData]);

// //   const containerVariants = {
// //     hidden: {},
// //     visible: {
// //       transition: { staggerChildren: 0.2 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 50, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
// //     },
// //   };

// //   const handlePrevious = () => {
// //     setCurrentPage((prev) => (prev > 0 ? prev : totalPages - 1));
// //   };
  
// //   const handleNext = () => {
// //     setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 0));
// //   };
  

// //   const getCurrentPageCards = () => {
// //     const startIndex = currentPage * cardsPerPage;
// //     return featuredSolutionData.slice(startIndex, startIndex + cardsPerPage);
// //   };

// //   const totalPages = Math.ceil(featuredSolutionData.length / cardsPerPage);
// //   console.log("Total Pages:", totalPages); // Debugging
// //   console.log("Current Page:", currentPage); // Debugging
// //   return (
// //     <div className="py-16 bg-gradient-to-b from-white to-gray-50">
// //       <motion.div
// //         ref={ref}
// //         initial="hidden"
// //         animate={controls}
// //         variants={containerVariants}
// //         className="max-w-7xl mx-auto"
// //       >
// //         <motion.h1
// //           variants={itemVariants}
// //           className="text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat"
// //         >
// //           POWERING YOUR BUSINESS WITH IN-DEPTH B2B RESOURCES
// //         </motion.h1>
// //         <motion.p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">
// //           Leverage our extensive platform to access the best whitepapers for your needs
// //         </motion.p>

// //         <div
// //           className="relative px-28"
// //           onMouseEnter={() => setIsPaused(true)}
// //           onMouseLeave={() => setIsPaused(false)}
// //         >
// //           <motion.div
// //             initial={false}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
// //           >
// //             {getCurrentPageCards().map((featureCard) => (
// //               <FeatureCard key={featureCard.title} featureCard={featureCard} />
// //             ))}
// //           </motion.div>

// //           <div className="flex justify-center items-center mt-8 gap-4">
// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={handlePrevious}
// //               className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
// //             >
// //               <ChevronLeft size={24} />
// //             </motion.button>

// //             <div className="flex items-center gap-2">
// //               {Array.from({ length: totalPages }).map((_, index) => (
// //                 <div
// //                   key={index}
// //                   className={`h-2 w-2 rounded-full ${
// //                     currentPage === index ? "bg-purple-800" : "bg-gray-300"
// //                   }`}
// //                 />
// //               ))}
// //             </div>

// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={handleNext}
// //               className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
// //             >
// //               <ChevronRight size={24} />
// //             </motion.button>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };



// // // const Section2home = () => {
// // //   const controls = useAnimation();
// // //   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
// // //   const [currentPage, setCurrentPage] = useState(0);
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const [featuredSolutionData, setFeaturedSolutionData] = useState([]);
// // //   const autoScrollInterval = useRef(null);
// // //   const cardsPerPage = 8;

// // //   // Fetch data
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           "https://infiniteb2b.com:8443/api/user/solution-sets-homepage"
// // //         );
// // //         if (response.data.status) {
// // //           setFeaturedSolutionData(response.data.data);
// // //         } else {
// // //           console.error("Error fetching data:", response.data.message);
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching data:", error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (inView) {
// // //       controls.start("visible");
// // //     }
// // //   }, [controls, inView]);

// // //   useEffect(() => {
// // //     if (!isPaused && featuredSolutionData.length) {
// // //       autoScrollInterval.current = setInterval(() => {
// // //         handleNext();
// // //       }, 5000);
// // //     }
// // //     return () => clearInterval(autoScrollInterval.current);
// // //   }, [isPaused, currentPage, featuredSolutionData]);

// // //   const containerVariants = {
// // //     hidden: {},
// // //     visible: {
// // //       transition: { staggerChildren: 0.2 },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { y: 50, opacity: 0 },
// // //     visible: {
// // //       y: 0,
// // //       opacity: 1,
// // //       transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
// // //     },
// // //   };

// // //   const handleNext = () => {
// // //     setCurrentPage((prev) => {
// // //       const nextPage = prev + 1;
// // //       return nextPage < totalPages ? nextPage : 0;
// // //     });
// // //   };
  
// // //   const handlePrevious = () => {
// // //     setCurrentPage((prev) => {
// // //       const prevPage = prev - 1;
// // //       return prevPage >= 0 ? prevPage : totalPages - 1;
// // //     });
// // //   };
// // //   const getCurrentPageCards = () => {
// // //     const startIndex = currentPage * cardsPerPage;
// // //     return featuredSolutionData.slice(startIndex, startIndex + cardsPerPage);
// // //   };

// // //   const totalPages = Math.ceil(featuredSolutionData.length / cardsPerPage);

// // //   return (
// // //     <div className="py-16 bg-gradient-to-b from-white to-gray-50">
// // //       <motion.div
// // //         ref={ref}
// // //         initial="hidden"
// // //         animate={controls}
// // //         variants={containerVariants}
// // //         className="max-w-7xl mx-auto"
// // //       >
// // //         <motion.h1
// // //           variants={itemVariants}
// // //           className="text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat"
// // //         >
// // //           POWERING YOUR BUSINESS WITH IN-DEPTH B2B RESOURCES
// // //         </motion.h1>
// // //         <motion.p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">
// // //           Leverage our extensive platform to access the best whitepapers for your needs
// // //         </motion.p>

// // //         <div
// // //           className="relative px-28"
// // //           onMouseEnter={() => setIsPaused(true)}
// // //           onMouseLeave={() => setIsPaused(false)}
// // //         >
// // //           <motion.div
// // //             initial={false}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
// // //           >
// // //             {getCurrentPageCards().map((featureCard) => (
// // //               <FeatureCard key={featureCard.title} featureCard={featureCard} />
// // //             ))}
// // //           </motion.div>

// // //           <div className="flex justify-center items-center mt-8 gap-4">
// // //             <motion.button
// // //               whileHover={{ scale: 1.1 }}
// // //               whileTap={{ scale: 0.9 }}
// // //               onClick={handlePrevious}
// // //               className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
// // //             >
// // //               <ChevronLeft size={24} />
// // //             </motion.button>

// // //             <div className="flex items-center gap-2">
// // //               {Array.from({ length: totalPages }).map((_, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className={`h-2 w-2 rounded-full ${
// // //                     currentPage === index ? "bg-purple-800" : "bg-gray-300"
// // //                   }`}
// // //                 />
// // //               ))}
// // //             </div>

// // //             <motion.button
// // //               whileHover={{ scale: 1.1 }}
// // //               whileTap={{ scale: 0.9 }}
// // //               onClick={handleNext}
// // //               className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl"
// // //             >
// // //               <ChevronRight size={24} />
// // //             </motion.button>
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // export default Section2home;

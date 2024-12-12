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
  const handleBookmarkClick = async () => {
    // const token = JSON.parse(session/Storage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJjb2RlYmFja3Vwc3VmaXlhbkBnbWFpbC5jb20iLCJpYXQiOjE3MzM3NjQ2MzQsImV4cCI6MTczNDEyNDYzNH0.nrfj87K2Pm5bMf2ncNzjM7KOBSc8KtRBnqnZZb44JiCW3BdxQZLujjrOpbMPnbEljbl-mwJnpAxNacp3Q5DpEg";
  console.log("token", token)
    // Create FormData and append the ID
    const formData = new FormData();
    formData.append("id", featureCard.id); 
  console.log("featureCard.id", featureCard.id)
    try {
      const response = await axios.get(
        "https://infiniteb2b.com:8443/api/user/save-pdf",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the headers
            "Content-Type": "multipart/form-data", // Required for FormData
          },
        }
      );
      console.log("formData", formData, "response", response)
  
      if (response.data.status) {
        alert("PDF saved successfully!");
      } else {
        alert("Failed to save PDF: " + response.data.message);
      }
    } catch (error) {
      console.error("Error saving PDF:", error);
      alert("An error occurred while saving the PDF.");
    }
  };
  
  // const handleBookmarkClick = async () => {
  //   const token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJjb2RlYmFja3Vwc3VmaXlhbkBnbWFpbC5jb20iLCJpYXQiOjE3MzM4MTE2NDksImV4cCI6MTczNDE3MTY0OX0.Hs5VIb8GA8BalM3x37udg8RrmfhuBb7IrRfM4UOXrvkPAZd5yEj1hbTx6IAmiuQUhb12_S2Bqc3DALG1Zpr1KQ";
  // console.log("tokenmm", token)
  //   // Create FormData and append the ID
  //   const formData = new FormData();
  //   formData.append("id", 11); // Replace `featureCard.id` with the actual ID
  //   console.log("FeatureCard ID in formdata:", featureCard.id);

  //   try {
  //     const response = await axios.get("https://infiniteb2b.com:8443/api/user/save-pdf", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "multipart/form-data", 
  //       },
  //       data: formData, 
  //     });
  // console.log("response", response)
  //     if (response.data.status) {
  //       alert("PDF saved successfully!");
  //     } else {
  //       console.log("Failed to save PDF: " + response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error saving PDF:", error);
  //     console.log("An error occurred while saving the PDF.");
  //   }
  // };
  
  
  

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
          <Bookmark
            size={16}
            className="text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); 
              handleBookmarkClick();
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Section2home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [featuredSolutionData, setFeaturedSolutionData] = useState([]);

  featuredSolutionData.forEach(item => {
 
});

  const cardsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://infiniteb2b.com:8443/api/user/solution-sets-homepage"
        );
      //  console.log("response id required", response)
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


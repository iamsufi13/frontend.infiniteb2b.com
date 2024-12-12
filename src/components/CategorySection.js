import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const topics = [
  {
    id: 1,
    name: "ARTIFICIAL INTELLIGENCE",
    className:
      "lg:top-[15%] lg:left-[12%] md:top-[15%] md:left-[10%] top-[10%] left-[5%]",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Big Data",
    className:
      "lg:top-[25%] lg:left-[8%] md:top-[25%] md:left-[6%] top-[20%] left-[3%]",
    delay: 0.3,
  },
  {
    id: 3,
    name: "CUSTOMER EXPERIENCE",
    className:
      "lg:top-[40%] lg:left-[5%] md:top-[40%] md:left-[4%] top-[35%] left-[2%]",
    delay: 0.4,
  },
  {
    id: 4,
    name: "ROBOTIC PROCESS AUTOMATION",
    className:
      "lg:bottom-[35%] lg:left-[8%] md:bottom-[35%] md:left-[6%] bottom-[30%] left-[4%]",
    delay: 0.5,
  },
  {
    id: 5,
    name: "AR & VR",
    className:
      "lg:bottom-[25%] lg:left-[15%] md:bottom-[25%] md:left-[12%] bottom-[20%] left-[8%]",
    delay: 0.6,
  },
  {
    id: 6,
    name: "SERVER VIRTUALIZATION",
    className:
      "lg:bottom-[15%] lg:left-[20%] md:bottom-[15%] md:left-[16%] bottom-[12%] left-[12%]",
    delay: 0.7,
  },
  {
    id: 7,
    name: "HEALTHCARE",
    className:
      "lg:top-[30%] lg:left-[45%] md:top-[30%] md:left-[43%] top-[28%] left-[40%] -translate-x-1/2",
    delay: 0.8,
  },
  {
    id: 8,
    name: "DEVOPS",
    className:
      "lg:top-[12%] lg:right-[30%] md:top-[12%] md:right-[28%] top-[8%] right-[25%]",
    delay: 0.9,
  },
  {
    id: 9,
    name: "CLOUD SECURITY",
    className:
      "lg:top-[20%] lg:right-[12%] md:top-[20%] md:right-[10%] top-[15%] right-[8%]",
    delay: 1.0,
  },
  {
    id: 10,
    name: "BLOCKCHAIN",
    className:
      "lg:top-[35%] lg:right-[8%] md:top-[35%] md:right-[6%] top-[30%] right-[4%]",
    delay: 1.1,
  },
  {
    id: 11,
    name: "ABM",
    className:
      "lg:top-[45%] lg:right-[20%] md:top-[45%] md:right-[18%] top-[40%] right-[15%]",
    delay: 1.2,
  },
  {
    id: 12,
    name: "IOT",
    className:
      "lg:bottom-[35%] lg:right-[30%] md:bottom-[35%] md:right-[28%] bottom-[30%] right-[25%]",
    delay: 1.3,
  },
  {
    id: 13,
    name: "CLOUD SAAS",
    className:
      "lg:bottom-[25%] lg:right-[12%] md:bottom-[25%] md:right-[10%] bottom-[20%] right-[8%]",
    delay: 1.4,
  },
  {
    id: 14,
    name: "CUSTOMER EXPERIENCE",
    className:
      "lg:bottom-[15%] lg:right-[15%] md:bottom-[15%] md:right-[13%] bottom-[12%] right-[10%]",
    delay: 1.5,
  },
];

const CategorySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full bg-white mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        {/* <motion.div
          variants={itemVariants}
          className="text-center py-8 md:py-10 lg:py-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-black font-montserrat">
            TOPICS THAT MATTER TO YOU
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-black max-w-3xl mx-auto font-montserrat">
            Save, share and organize solutions into your own custom collections
            for easy on-demand access
          </p>
        </motion.div> */}
                <div>
        <motion.h1
            variants={itemVariants}
             className="pt-4 text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat">
 
 TOPICS THAT MATTER TO YOU

  </motion.h1>
  <motion.p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">
  Save, share and organize solutions into your own custom collections
            for easy on-demand access
</motion.p>
<div className='flex w-full'>



       
        </div>
</div>

        {/* Main content section */}
        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px]">
          {/* Background image */}
          {/* <motion.div
            variants={itemVariants}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={require("../assets/assetsFromyash/infinity.png")}
              alt="Infinity Background"
              className="w-full h-full object-contain"
            />
          </motion.div> */}
<motion.div
  variants={itemVariants}
  className="absolute inset-0 w-full h-full flex justify-center items-center"
>
  <img
    src={require("../assets/assetsFromyash/infinity.png")}
    alt="Infinity Background"
    className="w-3/4 h-auto object-contain"
  />
</motion.div>



          {/* Topic boxes */}
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              className={`absolute ${topic.className}`}
              variants={itemVariants}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                mass: 1,
              }}
              // onClick={() =>
              //   navigate(`/category/${topic.name}`, { state: topic })
              // }
              onClick={() =>
                navigate(`/category/${topic.name.toLowerCase()}`, { state: topic })
              }
              
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r to-cyan-400 from-purple-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="p-2 relative bg-gradient-to-r to-cyan-400 from-purple-800 text-white px-20 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg">
                <span
                    className={`cursor-pointer px-8 text-[20px] md:text-base lg:text-base font-montserrat font-bold whitespace-nowrap ${
                      topic.name.length > 20
                        ? "text-[8px] md:text-[10px] lg:text-base"
                        : ""
                    }`}
                  >
                    {topic.name}
                  </span> 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategorySection;

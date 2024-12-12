import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceNowLogo from "../assets/img/service_now.png";
import VerizonLogo from "../assets/img/verizon.png";
import GoogleLogo from "../assets/img/google.png";

const TrustedVendors = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Duplicate logos for smooth infinite scroll
  const firstRowVendors = [
    { id: 1, name: "ServiceNow", imageUrl: ServiceNowLogo },
    { id: 2, name: "Verizon", imageUrl: VerizonLogo },
    { id: 3, name: "ServiceNow", imageUrl: ServiceNowLogo },
    { id: 4, name: "Verizon", imageUrl: VerizonLogo },
    { id: 5, name: "Google", imageUrl: GoogleLogo },
    { id: 6, name: "ServiceNow", imageUrl: ServiceNowLogo },
    { id: 7, name: "Verizon", imageUrl: VerizonLogo },
    { id: 8, name: "Google", imageUrl: GoogleLogo },
  ];

  const secondRowVendors = [
    { id: 5, name: "Google", imageUrl: GoogleLogo },
    { id: 6, name: "ServiceNow", imageUrl: ServiceNowLogo },
    { id: 7, name: "Verizon", imageUrl: VerizonLogo },
    { id: 8, name: "Google", imageUrl: GoogleLogo },
    { id: 9, name: "ServiceNow", imageUrl: ServiceNowLogo },
    { id: 10, name: "Verizon", imageUrl: VerizonLogo },
    { id: 11, name: "Google", imageUrl: GoogleLogo },
    { id: 12, name: "ServiceNow", imageUrl: ServiceNowLogo },
  ];

  return (
    <div className="bg-gradient-to-b from-teal-50 to-white py-16 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* <div className="text-center mb-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-4"
          >
            TRUSTED VENDORS WHO POWER YOUR BUSINESS
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Partner with industry-leading vendors that provide reliable,
            innovative solutions to help you grow
          </motion.p>
        </div> */}
                <div>
        <motion.h1
            variants={itemVariants}
             className="pt-2 text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat">
 
 TRUSTED VENDORS WHO POWER YOUR BUSINESS

  </motion.h1>
  <motion.p className="text-black flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">

  Partner with industry-leading vendors that provide reliable,
  innovative solutions to help you grow
</motion.p>
<div className='flex w-full'>



       
        </div>
</div>

        {/* First Row - Left to Right */}
        <div className="relative mb-8 overflow-hidden">
          <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {firstRowVendors.map((vendor) => (
              <motion.div
                key={vendor.id}
                variants={itemVariants}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg  transition-shadow duration-300 w-64"
              >
                <img
                  src={vendor.imageUrl}
                  alt={vendor.name}
                  className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {secondRowVendors.map((vendor) => (
              <motion.div
                key={vendor.id}
                variants={itemVariants}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg  transition-shadow duration-300 w-64"
              >
                <img
                  src={vendor.imageUrl}
                  alt={vendor.name}
                  className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrustedVendors;

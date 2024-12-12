import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, FileText, Factory, Building2 } from "lucide-react";

const stats = [
  {
    label: "USERS",
    value: 13819,
    icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
  },
  {
    label: "WHITEPAPERS",
    value: 18678,
    icon: <FileText className="w-12 h-12" strokeWidth={1.5} />,
  },
  {
    label: "INDUSTRIES",
    value: 450,
    icon: <Factory className="w-12 h-12" strokeWidth={1.5} />,
  },
  {
    label: "VENDOR",
    value: 300,
    icon: <Building2 className="w-12 h-12" strokeWidth={1.5} />,
  },
];

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentValue = Math.round(value * progress);

      if (currentStep === steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(currentValue);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="font-bold">{displayValue.toLocaleString()}+</span>;
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

const StatCard = ({ label, value, icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <div className="text-white mb-2">{icon}</div>
      <h3 className="text-4xl font-bold text-white">
        <AnimatedNumber value={value} />
      </h3>
      <p className="text-white text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <div className="relative w-full bg-[#1a1b4b] overflow-hidden">
      {/* Background Image */}
      <img
        src={require("../assets/assetsFromyash/StatasticBg.jpg")}
        alt="Statistics Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Curved top border */}
      {/* <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1440V0C1440 0 1320 24 720 24C120 24 0 0 0 0V48Z"
            fill="white"
          />
        </svg>
      </div> */}

      <div className="relative z-10 container mx-auto px-4 py-10 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            STATISTICS
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Learn from reputable B2B brands about the products and solutions
            that can help your business grow
          </p>
        </motion.div> */}
                <motion.h1
            variants={itemVariants}
             className="text-white text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center font-montserrat">
 
 STATISTICS

  </motion.h1>
  <motion.p className="text-white flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2 font-montserrat">

  Learn from reputable B2B brands about the products and solutions
            that can help your business grow
</motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>

      {/* Curved bottom border */}
      {/* <div className="absolute bottom-0 left-0 w-full transform rotate-180">
        <svg
          className="w-full"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1440V0C1440 0 1320 24 720 24C120 24 0 0 0 0V48Z"
            fill="white"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Statistics;

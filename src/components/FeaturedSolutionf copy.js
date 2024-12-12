

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { featuredSolutionData } from '../views/apps/solutionSets/enum';
import FeatureCard from './FeatureCard';

const FeaturedSolutionf = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredSolutionData.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredSolutionData.length - (isMobile ? 1 : 2) : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* <h3 className='p-3'>Featured Solutions</h3> */}
      <div
        className="flex transition-all duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / (isMobile ? 1 : 4)}%)`,
        }}
      >
        {featuredSolutionData.map((featureCard) => (
          <FeatureCard key={featureCard.name} featureCard={featureCard} />
        ))}
      </div>

      <ChevronLeft
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full text-[#4702a2]"
        onClick={prevSlide}
        size={40}
      />
      <ChevronRight
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full text-[#4702a2]"
        onClick={nextSlide}
        size={40}
      />
    </div>
  );
};

export default FeaturedSolutionf;



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


  return (
    <div className="relative overflow-hidden px-20">
     
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

  
    </div>
  );
};

export default FeaturedSolutionf;

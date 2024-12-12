import React, { useState } from 'react'
import { Bookmark, ChevronLeft, ChevronRight, Save } from 'react-feather'
import { featuredSolutionData } from '../views/apps/solutionSets/enum'
import FeatureCard from './FeatureCard'

const FeaturedSolution = () => {
const [currentIndex, setCurrentIndex] = useState(0)
const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredSolutionData.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredSolutionData.length - 4 : prevIndex - 1
    );
  };
  return (
    <div className="relative overflow-hidden ">
        <h3 className='p-3'>Featured Solutions</h3>
      <div
        className="flex transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / 4}%)` }}
      >
        {featuredSolutionData.map((featureCard) => (
          // <div key={featureCard.title} className="flex-none w-full sm:w-1/2 lg:w-1/4 px-2">
          //   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          //     <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${featureCard.imgSrc})` }}></div>
          //     <div className="p-4">
          //       <h3 className="text-xl font-semibold mb-2">Case Study</h3>
          //       <p className="text-gray-600 line-clamp-2">{featureCard.description}</p>
          //     </div>
          //     <div className="flex justify-between items-center p-4 bg-gray-100">
          //       <h4 className="text-lg font-semibold line-clamp-1">{featureCard.title}</h4>
          //       <Bookmark size={20} className="text-[#4702a2]"/>
          //     </div>
          //   </div>
          // </div>
          <FeatureCard key={featureCard.name} featureCard = {featureCard}/>
        ))}
      </div>

      <ChevronLeft
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full text-[#4702a2] "
        onClick={prevSlide}
        size={40}
      />
      <ChevronRight
        className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-white rounded-full  text-[#4702a2] "
        onClick={nextSlide}
        size={40}
     />
    </div>
  )
}

export default FeaturedSolution

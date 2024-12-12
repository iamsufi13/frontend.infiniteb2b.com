

import React from 'react'
import { Bell, Bookmark } from 'react-feather'

const FeatureCard = ({featureCard,display}) => {
  return (
    <div key={featureCard.title} className={`${display ? "flex" : "flex-none"} w-full sm:w-1/2 font-montserrat lg:w-1/4 px-2`}>
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${featureCard.imgSrc})` }}></div>
              <div className="p-4">
                {/* <h3 className="text-xl font-bold mb-2 underline text-[#4702a2] font-montserrat">Case Study</h3> */}
                <h3 className="text-xl font-bold mb-2 text-[#4702a2] font-montserrat inline-block border-b-2 border-[#4702a2] pb-1">
  Case Study
</h3>


                <p className="text-black line-clamp-2 font-montserrat">{featureCard.description}</p>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#042C54] text-white rounded-t-2xl">
                <h4 className="text-lg font-semibold line-clamp-1 font-montserrat">{featureCard.title}</h4>
                <Bookmark size={20} className="text-white"/>
              </div>
            </div>
          </div>
  )
}

export default FeatureCard
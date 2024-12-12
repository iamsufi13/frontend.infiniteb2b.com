import React from 'react'
import { Bell, Bookmark } from 'react-feather'

const Card = ({featureCard}) => {
  return (
    <div key={featureCard.title} className= "w-full sm:w-1/2 lg:w-1/4 px-2 my-3 ">
            <div className="bg-white shadow-lg rounded-lg ">
              <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${featureCard.imgSrc})` }}></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Case Study</h3>
                <p className="text-gray-600 line-clamp-2">{featureCard.description}</p>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100">
                <h4 className="text-lg font-semibold line-clamp-1">{featureCard.title}</h4>
                <Bell size={20} className="text-[#4702a2]"/>
              </div>
            </div>
          </div>
  )
}

export default Card
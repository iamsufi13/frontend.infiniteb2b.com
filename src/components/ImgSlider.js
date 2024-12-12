

import React, { useState } from 'react';

const images = [
  require('../assets/img/Img1.jpg'),
  require('../assets/img/Img2.jpg'),
//   require('../assets/img/Img3.jpg'),
  require('../assets/img/Img5.jpg'),
  require('../assets/img/Img6.jpg'),
  require('../assets/img/Img9.jpg'),
  require('../assets/img/Img10.jpg'),
];

const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Calculate the indices of the three images to display
  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length]
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex justify-center space-x-2 overflow-hidden"> {/* Reduced space-x */}
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`}
            className="w-1/3 h-60 object-cover rounded-lg" // Fixed width and height
          />
        ))}
      </div>
      {/* Navigation buttons */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-4 rounded-full text-2xl"
        style={{ width: '50px', height: '50px' }}
      >
        ‹
      </button> */}
      <button
  onClick={goToPrevious}
  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white font-bold p-4 rounded-full text-2xl flex items-center justify-center"
  style={{ width: '50px', height: '50px' }}
>
  ‹
 
</button>

<button
  onClick={goToNext}
  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white font-bold p-4 rounded-full text-2xl flex items-center justify-center"
  style={{ width: '50px', height: '50px' }}
>
  ›
</button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;

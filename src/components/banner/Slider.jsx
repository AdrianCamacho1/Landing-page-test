import React from 'react'

export const Slider = () => {
  return (
    <div>
        <h1>
          
        </h1>
    </div>
  );
};

// Ai component "most likely we reverse engineer"

// import React, { useState } from 'react';

// const ImageSlider = ({ images, transitionTime = 0.5 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const imageStyle = {
//     transform: `translateX(-${currentIndex * 100}%)`,
//     transition: `transform ${transitionTime}s ease-in-out`,
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider-images" style={imageStyle}>
//         {images.map((image, index) => (
//           <img key={index} src={image} alt={`Slide ${index + 1}`} />
//         ))}
//       </div>
//       <button className="prev-button" onClick={handlePrev}>Previous</button>
//       <button className="next-button" onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default ImageSlider;

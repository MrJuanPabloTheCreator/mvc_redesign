"use client"

import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContent = [
    {
      h: "Where expertise and empathy converge",
      p: "Experience compassionate expertise. Book now",
    },
    {
      h: "Leaders in healthcare, driven by our practitioners' excellence",
      p: "Join healthcare excellence. Get started today",
    },
    {
      h: "From every background, expertise shines",
      p: "Discover personalized care. Connect now",
    }

  ]

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 4500); // Adjust the interval duration as needed

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full relative">
            <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-[390px] sm:h-[180px] md:h-[220px] lg:h-[320px] xl:h-[500px] 3xl:h-[470px]"/>
            <div className="absolute bottom-0 pb-8 pt-36 p-2 text-white w-full bg-gradient-to-t from-black to-tansparent">
              <div className='flex flex-col items-start md:ml-44 ml-10'>
                <h3 className="text-4xl font-semibold">{imageContent[index].h}</h3>
                <p className="text-lg ">{imageContent[index].p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex justify-center w-full mt-[-1.5rem]">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentImageIndex ? 'bg-mvcO' : 'bg-white'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
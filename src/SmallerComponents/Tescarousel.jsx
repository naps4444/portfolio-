import React, { useState } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useSwipeable } from 'react-swipeable';
import Stars from './../assets/Stars.svg';
import av1 from './../assets/av1.svg';
import av2 from './../assets/av2.svg';
import av3 from './../assets/av3.svg';

const Tescarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: av1,
      icon: Stars,
      h1: 'Dianne Russell',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
      ptag: 'Starbucks',
    },
    {
      image: av2,
      icon: Stars,
      h1: 'Kristin Watson',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
      ptag: 'Louis Vuitton',
    },
    {
      image: av3,
      icon: Stars,
      h1: 'Kathryn Murphy',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
      ptag: 'McDonalds',
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div {...swipeHandlers} className="relative w-full max-w-lg mx-auto group">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="border border-[#006B6A] rounded p-8 min-w-full">
              <div>
                <img src={slide.icon} alt="Stars icon" />
                <p className="mt-5">{slide.paragraph}</p>
              </div>
              <div className="flex items-center mt-5 gap-4">
                <img src={slide.image} alt={`Avatar ${index + 1}`} />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">{slide.h1}</p>
                  <p className="font-medium">{slide.ptag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={prevSlide}
      >
        <IoArrowBackOutline size={24} />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={nextSlide}
      >
        <IoArrowForwardOutline size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tescarousel;

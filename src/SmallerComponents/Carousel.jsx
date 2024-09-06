import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useSwipeable } from 'react-swipeable';
import s1 from './../assets/s1.svg';
import s2 from './../assets/s2.svg';
import s3 from './../assets/s3.svg';
import s4 from './../assets/s4.svg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: s1,
      h1: 'Responsive Design',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      image: s2,
      h1: 'Front-End Frameworks',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      image: s3,
      h1: 'Testing and Debugging',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      image: s4,
      h1: 'Cloud Services',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
  ];

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

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
    trackMouse: true, // Allows swiping with mouse as well
  });

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      {...swipeHandlers}
      className="relative w-full max-w-lg mx-auto group"
    >
      {/* Carousel wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[100px] mx-auto object-cover"
              />
              <h1 className="p-4 text-3xl font-semibold text-center">{slide.h1}</h1>
              <p className="p-4 text-lg text-center">{slide.paragraph}</p>
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

export default Carousel;

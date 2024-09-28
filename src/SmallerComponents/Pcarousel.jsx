import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useSwipeable } from 'react-swipeable';
import p1 from './../assets/jobme.png';
import p2 from './../assets/tasky.png';
import p3 from './../assets/cofe.png';
import p4 from './../assets/beta.png';
import arrow from './../assets/arrow.svg';

const Pcarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: p1,
      h1: 'Job Me',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      butText: 'View Website',
      link: 'https://job-me-next-js.vercel.app/',
      arrImg: arrow,
    },
    {
      image: p2,
      h1: 'TaskDuty',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      butText: 'View Project',
      link: 'https://taskduty-vs1.vercel.app/',
      arrImg: arrow,
    },
    {
      image: p3,
      h1: 'CofeShop',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      butText: 'View Website',
      link: 'https://cofeshop-alpha.vercel.app/',
      arrImg: arrow,
    },
    {
      image: p4,
      h1: 'BetaHouse',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      butText: 'View Website',
      link: 'https://real-estate-b6sm.onrender.com/',
      arrImg: arrow,
    },
  ];

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
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
    trackMouse: true,
  });

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div {...swipeHandlers} className="relative w-full max-w-lg mx-auto group">
      {/* Carousel wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 shadow-md rounded">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full mx-auto object-cover"
              />

              <div className="p-5 flex flex-col gap-4">
                <h1 className="text-lg font-semibold">{slide.h1}</h1>
                <p>{slide.paragraph}</p>

                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-[125px] items-center gap-2 hover:border-b-2 hover:border-[#5E3BEE]"
                >
                  <p>{slide.butText}</p>
                  <img src={slide.arrImg} alt="Arrow Icon" className="w-4 h-4" />
                </a>
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

export default Pcarousel;

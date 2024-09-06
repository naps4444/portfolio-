import { useState, useEffect } from 'react';

const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const skills = [
    { title: 'React', description: "Craft interactive UIs with React’s component-based architecture and hooks for responsive, efficient applications." },
    { title: 'Next.js', description: 'Utilize Next.js for server-side rendering and static site generation, optimizing performance and SEO.' },
    { title: 'Tailwind CSS & Bootstrap', description: 'Style applications with Tailwind CSS for utility-first design and Bootstrap for rapid, consistent UI development.' },
    { title: 'SCSS', description: 'Write maintainable, modular styles with SCSS, enhancing CSS organization and styling capabilities.' },
    { title: 'HTML & CSS', description: 'Strong foundation in HTML and CSS for structuring and designing web pages with modern layout techniques.' },
    { title: 'JavaScript', description: 'Versatile in JavaScript, from ES6+ features to asynchronous programming for interactive web applications.' },
    { title: 'Git', description: 'Proficient in version control with Git, managing codebases with branching, merging, and pull requests.' },
    { title: 'Vercel', description: 'Experienced in deploying applications on Vercel for smooth, efficient deployment and scaling.' },
    { title: 'MongoDB', description: 'Knowledgeable in MongoDB for NoSQL database management, handling data storage and retrieval efficiently.' },
  ];

  // Update number of slides to show based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // 3 cards per view on large screens
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // 2 cards per view on medium screens
      } else {
        setSlidesPerView(1); // 1 card per view on small screens
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  // Handle swipe gesture
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? skills.length - slidesPerView : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= skills.length - slidesPerView;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <section className="pb-10 px-5 w-10/12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel wrapper */}
        <div className="flex transition-transform ease-out duration-500"
             style={{ transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)` }}>
          {/* Mapping skills */}
          {skills.map((skill, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 bg-white p-6 rounded-lg shadow-lg" key={index}>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {skills.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsCarousel;

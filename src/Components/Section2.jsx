import React from 'react'
import about from './../assets/naps2.jpg'


const Section2 = () => {
  return (
    <>
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto container py-20'>
        <div>
            <img src={about} alt="img" className='w-[500px]' />
        </div>

        <div className='flex flex-col justify-center'>
        <div className='flex flex-col gap-3 my-auto h-[300px] text-[#282938]'>
            <p className='font-bold text-sm'>About</p>
            <h1 className='text-[45px] font-bold'>About Me</h1>
            <p>Hello! I'm a passionate Full Stack Developer with extensive experience in building modern, scalable web applications. My expertise spans a variety of technologies, enabling me to create seamless and dynamic user experiences from the ground up.</p>
        </div>

      

        </div>
    </div>

    <section className="py-10 px-5 w-10/12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">React</h3>
          <p className="text-gray-700">Craft interactive UIs with React’s component-based architecture and hooks for responsive, efficient applications.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Next.js</h3>
          <p className="text-gray-700">Utilize Next.js for server-side rendering and static site generation, optimizing performance and SEO.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Tailwind CSS & Bootstrap</h3>
          <p className="text-gray-700">Style applications with Tailwind CSS for utility-first design and Bootstrap for rapid, consistent UI development.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">SCSS</h3>
          <p className="text-gray-700">Write maintainable, modular styles with SCSS, enhancing CSS organization and styling capabilities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">HTML & CSS</h3>
          <p className="text-gray-700">Strong foundation in HTML and CSS for structuring and designing web pages with modern layout techniques.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">JavaScript</h3>
          <p className="text-gray-700">Versatile in JavaScript, from ES6+ features to asynchronous programming for interactive web applications.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Git</h3>
          <p className="text-gray-700">Proficient in version control with Git, managing codebases with branching, merging, and pull requests.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Vercel</h3>
          <p className="text-gray-700">Experienced in deploying applications on Vercel for smooth, efficient deployment and scaling.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">MongoDB</h3>
          <p className="text-gray-700">Knowledgeable in MongoDB for NoSQL database management, handling data storage and retrieval efficiently.</p>
        </div>
      </div>
    </section>
    </div>
        
    </>
  )
}

export default Section2
import React from 'react';
import AboutImg from "../../assets/vecteezy_child-learning-computer-programming-at-home-on-laptop_71063776.jpg"
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md: flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md: h-80' src={AboutImg} alt="About img" />
          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                <p className='text-sm  md:text-md leading-tight'>A Frontend Developer is responsible for building the visual and interactive parts of websites and web applications. They work with technologies like HTML, CSS, JavaScript, and modern frameworks to create user-friendly interfaces. Their main goal is to ensure that users have a smooth, responsive, and visually appealing experience on any device.</p>
              </span>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Junior developer</h1>
                <p className='text-sm  md:text-md leading-tight'>A Junior Developer passionate about writing clean, efficient, and maintainable code. I enjoy learning new technologies and contributing to meaningful projects under the guidance of senior developers. My focus is on improving my skills while delivering reliable solutions that support team goals.</p>
              </span>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database developer</h1>
                <p className='text-sm  md:text-md leading-tight'>A Database Developer focused on designing, optimizing, and maintaining reliable data systems. I work with SQL, data modeling, and stored procedures to ensure databases run efficiently and securely. My goal is to create structured, scalable solutions that support smooth application performance.</p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
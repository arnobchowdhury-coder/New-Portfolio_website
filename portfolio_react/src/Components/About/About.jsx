import React from 'react';
import AboutImg from "../../assets/vecteezy.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className='text-white md:flex overflow-hidden items-center md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'
    >
      <div>
        <h2 className='text-2xl md:text-4xl font-bold mb-6'>About</h2>

        <div className='flex flex-col md:flex-row flex-wrap items-center gap-8'>
          <img
            className='md:h-80 rounded-lg'
            src={AboutImg}
            alt="About img"
          />

          <div>
            <ul>
              <li className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1" />
                <span className='w-96'>
                  <h1 className='text-xl md:text-2xl font-semibold'>Frontend Developer</h1>
                  <p className='text-sm md:text-base'>
                    I build responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks.
                  </p>
                </span>
              </li>

              <li className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1" />
                <span className='w-96'>
                  <h1 className='text-xl md:text-2xl font-semibold'>Junior Developer</h1>
                  <p className='text-sm md:text-base'>
                    Passionate about clean code, continuous learning, and contributing to real-world projects.
                  </p>
                </span>
              </li>

              <li className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1" />
                <span className='w-96'>
                  <h1 className='text-xl md:text-2xl font-semibold'>Database Developer</h1>
                  <p className='text-sm md:text-base'>
                    Focused on designing and optimizing scalable, secure databases using SQL and data modeling.
                  </p>
                </span>
              </li>
            </ul>

            {/* 🔗 LINK BUTTON */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-semibold"
            >
              View My Work →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

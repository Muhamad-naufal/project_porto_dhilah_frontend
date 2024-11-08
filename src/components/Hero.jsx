import React from "react";
import hero from "../assets/profile.png";
import reactLogo from "../assets/python.png";
import reduxLogo from "../assets/php.png";
import tailwind from "../assets/SQL.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Siti Nur{" "}
              <span className="text-indigo-600 hover:text-indigo-800">
                Fadhilah
              </span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Front End Developer</p>
            <p className="mb-4">
              Saya seorang pengembang web yang penuh semangat dengan keahlian
              dalam HTML, CSS, JavaScript, dan PHP. Saya suka menciptakan situs
              web yang indah dan fungsional yang menyelesaikan masalah di dunia
              nyata.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1iyQnF5rdxcGBx5wYFlvNdQSV2_pxLjiP/view?usp=sharing"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img
              src={hero}
              alt=""
              className="lg:h-[90vh] h-96 rounded-full border-4 border-indigo-600 shadow-lg object-cover transition-transform transform hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:border-indigo-800 duration-500 ease-in-out"
            />

            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

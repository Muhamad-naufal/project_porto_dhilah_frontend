import React from "react";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import Laravel from "../assets/Laravel.svg";
import Bootstrap from "../assets/Bootstrap.png";
import SQL from "../assets/SQL.png";
import Python from "../assets/python.png";
import PHP from "../assets/php.png";

const About = () => {
  return (
    <div className="relative bg-animated py-12" id="about">
      <div className="bg-gradient-to-r from-white to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Siti Nur Fadhilah
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Seorang Web Developer yang berfokus pada HTML, CSS, Javascript,
              dan PHP, serta memiliki pengalaman dalam membuat website dengan
              menggunakan framework Laravel.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Pengembang Front-End dengan keahlian dalam pengembangan web.
                  Saya mengkhususkan diri dalam HTML, CSS, JavaScript, dan PHP,
                  dan saya memiliki pengalaman luas bekerja dengan database SQL.
                  Keahlian saya memungkinkan saya untuk membangun aplikasi web
                  yang dinamis dan responsif yang menarik secara visual dan
                  sangat fungsional. Saya bersemangat untuk menciptakan
                  pengalaman pengguna yang mulus dan terus meningkatkan
                  keterampilan saya untuk tetap mengikuti tren pengembangan web
                  terbaru.
                </p>
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Keterampilan & Keahlian
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-4">
                  {[
                    { name: "HTML", img: Html, imgClass: "w-10" },
                    { name: "CSS", img: Css, imgClass: "w-8" },
                    { name: "JavaScript", img: Javascript, imgClass: "w-10" },
                    {
                      name: "Laravel",
                      img: Laravel,
                      imgClass: "w-8 rounded-full",
                    },
                    { name: "Bootstrap", img: Bootstrap, imgClass: "w-10" },
                    { name: "SQL", img: SQL, imgClass: "w-10" },
                    { name: "Python", img: Python, imgClass: "w-10" },
                    { name: "PHP", img: PHP, imgClass: "w-10" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-lg shadow-red-200 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 hover:border-red-400 animate-float"
                    >
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className={`${tech.imgClass} transition-all duration-300 transform hover:scale-110`}
                      />
                      <span className="font-semibold text-gray-700 transition-colors duration-300 hover:text-red-500">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Selain coding, saya memiliki semangat yang besar untuk mempelajari
              teknologi baru dan terus mengikuti tren terbaru dalam pengembangan
              web. Saat ini, saya juga sedang mendalami pemrograman dengan
              mempelajari React.js, Next.js, serta berbagai bahasa lain yang
              dapat menunjang keterampilan saya sebagai front-end developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

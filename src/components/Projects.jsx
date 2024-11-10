import React from "react";
import WEB1 from "../assets/WEB1.jpg";
import WEB2 from "../assets/WEB2.jpg";
import WEB3 from "../assets/WEB3.png";
import Predict from "../assets/WEB 5.png";
import Landing from "../assets/landing.png";
import Porto from "../assets/WEB 4.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Landing Page Company PT GSI",
      desc: "Pada Projek ini, saya memiliki peran dalam QC atau Quality Control, memastikan bahwa hasil akhir dari projek ini sesuai dengan kebutuhan dari client. ",
      image: WEB1,
      live: "#",
      github: "#",
    },
    {
      title: "Clinical: Diagnose Disease",
      desc: "Pada projek ini, saya berperan dalam mencari data yang dibutuhkan untuk projek ini, dan juga dalam proses analisis data.",
      image: WEB2,
      live: "#",
      github: "#",
    },
    {
      title: "DMG News",
      desc: "Pada projek ini, saya berperan dalam pembuatan database serta memastikan projek sudah sesuai dengan kebutuhan client.",
      image: WEB3,
      live: "https://digitalmetagenerasi.rf.gd/dmg_news/index.php",
      github: "#",
    },
    {
      title: "Loan Prediction with Machine Learning",
      desc: "Pada projek ini, saya membuat sebuah model machine learning yang berguna untuk memprediksi apakah seseorang akan mendapatkan pinjaman atau tidak.",
      image: "/predik.png",
      live: "#",
      github: "#",
    },
    {
      title: "TravelNest",
      desc: "Pada projek ini, saya membuat sebuah website yang berguna untuk pemesanan hotel di sekitaran Purwokerto, Indonesia.",
      image: Predict,
      live: "#",
      github: "#",
    },
    {
      title: "Website Review Film",
      desc: "Pada Projek ini, saya membuat website review film dengan menggunakan API dari TMDB. API ini digunakan untuk menampilkan data film yang ada di TMDB.",
      image: Porto,
      live: "https://transcendent-bublanina-564c74.netlify.app/",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

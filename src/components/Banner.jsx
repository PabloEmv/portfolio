import React from "react";
import pablom from "../assets/img/pablom.jpg";

const Banner = () => {
  return (
    <div className="w-full bg-base-100 md:inline-flex md:flex-row-reverse sm:px-10 lg:px-20 2xl:px-40 mt-20">
        <img
          src={pablom}
          alt="imagen de Pablo Martinez"
          className="md:w-72 xl:w-500px rounded-3xl sm:ml-5"
        />
      <div className="mt-8 sm:mt-0 px-3 sm:px-0 select-none">
        <h4 className="text-xl font-medium 2xl:text-4xl">🖐️ Hola, mi nombre es</h4>
        <h2 className="text-xl xl:text-5xl font-bold 2xl:text-6xl">Pablo.</h2>
        <h2 className="text-xl xl:text-5xl font-bold 2xl:text-6xl text-violet-700">desarrollador full stack</h2>
        <h1 className="text-xl xl:text-3xl 2xl:text-4xl font-bold">Me especializo en el Frontend, en mi portafolio encontrarás algunos de mis proyectos más recientes, donde pongo en práctica mi habilidad para crear diseños increíbles y experiencias de usuario intuitivas.</h1>
        <div className="mt-5 lg:mt-12">
        <button className="btn btn-primary lg:w-36 lg:h-14 font-bold">Contáctame</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Banner;

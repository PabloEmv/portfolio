import React from "react";
import weatherImg from "../assets/img/climappcard.jpg";
import taskImg from "../assets/img/tareasappcard.jpg";
import JobsCard from "./JobsCard";

const Jobs = () => {
  return (
    <div className="xl:px-28">
      <h2 className="text-center mt-40 mb-20 text-3xl font-bold">
        Mis trabajos
      </h2>
      <div className="sm:grid sm:grid-cols-3 gap-2">
        <JobsCard
          cardImg={weatherImg}
          tech1="React"
          tech2="Material UI"
          link="https://pabloemv.github.io/ClimaApp/"
          description="Aplicación del clima realizada gracias a la integración de la API de weatherapi"
        />
        <JobsCard
          cardImg={taskImg}
          tech1="React"
          tech2="Bootstrap 5"
          link="https://pabloemv.github.io/AppTareas/"
          description="Aplicación del tareas haciendo uso del localStorage"
        />
        <JobsCard
          cardImg={taskImg}
          tech1="HTML5"
          tech2="CSS3"
          tech3="Javascript"
          link="https://pabloemv.github.io/AppTareas/"
        />
      </div>
    </div>
  );
};

export default Jobs;

import React from "react";
import weatherImg from "../assets/img/climappcard.jpg";
import taskImg from "../assets/img/tareasappcard.jpg";
import wipImg from "../assets/img/wipcard.jpg";
import JobsCard from "./JobsCard";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="xl:px-28">
      <h2 className="text-center mt-40 mb-16 font-bold text-xl xl:text-4xl 2xl:text-5xl text-violet-700">
        Mis trabajos
      </h2>
      <div className="rounded-lg py-2 bg-gray-300 dark:bg-gray-700 xl:px-4">
        <h3 className="mb-5 text-2xl font-bold text-center mt-4">FrontEnd</h3>
        <div className="lg:grid lg:grid-cols-3 gap-2 md:px-36 lg:px-0">
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
            cardImg={wipImg}
            tech1="HTML5"
            tech2="CSS3"
            tech3="Javascript"
            link="#"
          />
        </div>
      </div>
      <div className="rounded-lg py-2 bg-gray-300 dark:bg-gray-700 mt-5 pb-4">
        <h3 className="mb-5 text-2xl font-bold text-center mt-2">BackEnd</h3>
        <div className="flex place-content-center flex-col sm:flex-row">
          <div className="card w-auto bg-white dark:bg-gray-800 mx-4 mb-4 dark:shadow-gray-800 hover:shadow-lg hover:shadow-white dark:hover:shadow-gray-800">
            <Link to="https://github.com/PabloEmv/Java-Springboot" target="_blank">
              <div className="card-body">
                <h2 className="card-title">Backend Java</h2>
                <div className="text-black font-bold">
                  <span className="bg-red-500 px-4 rounded-lg mr-2">Java</span>
                  <span className="bg-green-500 px-4 rounded-lg">
                    SpringBoot
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="card w-auto bg-white dark:bg-gray-800 mx-4 mb-4 dark:shadow-gray-800 hover:shadow-lg hover:shadow-white dark:hover:shadow-gray-800">
            <Link to="https://github.com/PabloEmv/node_sql" target="_blank">
              <div className="card-body">
                <h2 className="card-title">Backend Node.js</h2>
                <div className="text-black font-bold">
                  <span className="bg-green-500 px-4 rounded-lg mr-2">
                    Node.js
                  </span>
                  <span className="dark:bg-white px-4 rounded-lg border-2 border-gray-900 dark:border-white">Express.js</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

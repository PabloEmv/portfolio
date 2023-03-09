import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="px-5 md:px-16 xl:px-40 mt-28">
      <div className="lg:flex">
        <SkillsCard
        borderColor="border-blue-500"
          title="Qué puedo hacer por ti"
          text="crear diseños intuitivo y fácil de usar para todos. Es mi trabajo asegurarme de que su audiencia pueda interactuar con su marca de una manera que tenga sentido para ellos, ya sea en una computadora portátil o en un teléfono."
        />
        <SkillsCard
        borderColor="border-pink-300"
          title="que puedes esperar"
          text="Puede esperar que entregue un trabajo de alta calidad a tiempo y dentro del presupuesto. También puede esperar que sea honesto con usted acerca de las necesidades de su proyecto, para que podamos encontrar un enfoque que funcione mejor para ambos. Me comunicaré con usted regularmente durante el proceso y le daré retroalimentación constructiva si es necesario."
        />
      </div>
    </div>
  );
};

export default Skills;

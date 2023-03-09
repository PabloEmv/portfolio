import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="px-5 md:px-16 xl:px-40 mt-28">
      <h2 className="text-4xl font-bold mb-10">Mis Habilidades</h2>
      <div className="sm:flex">
        <SkillsCard
        borderColor="border-blue-500"
          title="titulo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        provident."
        />
        <SkillsCard
        borderColor="border-green-400"
          title="titulo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        provident."
        />
        <SkillsCard
        borderColor="border-pink-300"
          title="titulo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        provident."
        />
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="px-5 md:px-16 xl:px-40 mt-28">
        <h2 className="text-4xl font-bold mb-10">Mis Habilidades</h2>
        <div className="sm:flex">
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
        </div>
    </div>
  );
};

export default Skills;

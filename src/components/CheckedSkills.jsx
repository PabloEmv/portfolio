import React from "react";

const CheckedSkills = ({name, color}) => {
  return (
    <div className="flex flex-col">
      <span>{name}</span>
      <input type="checkbox" ckecked className={`toggle ${color}`} checked />
    </div>
  );
};

export default CheckedSkills;

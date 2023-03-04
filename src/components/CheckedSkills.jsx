import React, { useState } from "react";

const CheckedSkills = ({name, color}) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(isChecked);
  }

  return (
    <div className="flex flex-col">
      <span className="font-bold">{name}</span>
      <input 
        type="checkbox" 
        className={`toggle ${color}`} 
        checked={isChecked} 
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default CheckedSkills;
import React from "react";
import { Link } from "react-router-dom";

const JobsCard = ({ cardImg, tech1, tech2, tech3, link, description }) => {
  return (
    
      <div className="card mx-4 sm:mx-2 my-5 shadow-sm bg-white dark:bg-gray-800 dark:shadow-gray-800 w-auto hover:shadow-lg hover:shadow-white dark:hover:shadow-gray-800">
        <Link to={link} target="_blank">
        <figure>
          <img src={cardImg} alt="app del tiempo" className="rounded-t-xl" />
        </figure>
        <div className="p-2">
          <h2 className="card-title flex flex-wrap">
            <div className="badge-lg badge-info rounded-lg">{tech1}</div>
            <div className="badge-lg badge-primary rounded-lg">{tech2}</div>
            {tech3 ? (
              <div className="badge-lg badge-warning rounded-lg">{tech3}</div>
            ) : (
              <div></div>
            )}
          </h2>
          <h3 className="text-lg">{description}</h3>
        </div>
        </Link>
      </div>
    
  );
};

export default JobsCard;

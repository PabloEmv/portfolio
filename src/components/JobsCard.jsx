import React from "react";
import { Link } from "react-router-dom";

const JobsCard = ({ cardImg, tech1, tech2, tech3, link, description }) => {
  return (
    <Link to={link} target="_blank">
      <div className="card mx-4 sm:mx-2 my-5 shadow-xl border dark:border-gray-700 cursor-pointer w-auto hover:shadow-gray-400 dark:hover:shadow-gray-700">
        <figure>
          <img src={cardImg} alt="app del tiempo" />
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
      </div>
    </Link>
  );
};

export default JobsCard;

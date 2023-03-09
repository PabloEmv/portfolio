import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-40 mb-32">
      <h2 className="text-4xl text-center font-bold">
        Construyamos tu proyecto juntos
      </h2>
      <div className="flex justify-center mt-8">
        <Link to="mailto:pablo.ed.martinez@gmail.com">
          <button className="btn btn-primary lg:w-36 lg:h-14 font-bold">
            Contáctame
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

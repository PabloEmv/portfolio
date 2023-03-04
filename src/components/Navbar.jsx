import React from "react";
import { Link } from "react-router-dom";
import logoPm from '../assets/img/logoPm.png'
const Navbar = () => {

  return (
    <div className="flex justify-center sticky z-50 top-0">
      <div className="navbar bg-gray-700 h-20 sm:px-10 mx-1 sm:mx-3 rounded-b-lg">
        <div className="navbar-start">
          <img className="h-16" src={logoPm} alt="logo" />
        </div>
        
        <div className="navbar-end">
          <Link className="btn" to='https://drive.google.com/uc?export=download&id=1pLbB4N9YAC3zttENRs1_jm3HC1cUGsxE' target='_blank'>Dscargar CV</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

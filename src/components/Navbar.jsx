import React from "react";
import { Link } from "react-router-dom";
import logoPm from '../assets/img/logoPm.png'
const Navbar = () => {

  return (
    <>
      <div className="navbar bg-base-100 h-24 px-10">
        <div className="navbar-start">
          <img className="h-16" src={logoPm} alt="logo" />
        </div>
        
        <div className="navbar-end">
          <Link className="btn" to='https://drive.google.com/uc?export=download&id=1pLbB4N9YAC3zttENRs1_jm3HC1cUGsxE' target='_blank'>Dscargar CV</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

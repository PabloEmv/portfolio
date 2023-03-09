import React from "react";
import {
  Navbar,
  Banner,
  Skillsbar,
  About,
  Skills,
  Jobs,
  Contact,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
      <Navbar />
      <Banner />
      <Skillsbar />
      <About />
      <Skills />
      <Jobs />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

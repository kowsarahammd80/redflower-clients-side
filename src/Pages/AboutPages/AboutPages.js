import React from "react";
import "./AboutPages.css";
import About from "../../Components/About/About";

const AboutPages = () => {
  return (
    <div>

      <div className="flex justify-center">
        <h1 className=" bg-red-100 aboutUs font-semibold">About Us</h1>
      </div>

      <About></About>
    </div>
  );
};

export default AboutPages;

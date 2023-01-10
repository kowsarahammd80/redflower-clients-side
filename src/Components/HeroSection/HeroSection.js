import React from "react";
// import './HeroSection.css'
import hero from "../../assetes/bulding3.jfif";

const HeroSection = () => {
  return (
    <div className="mt-5 mb-5 background-hero">
      {/* <div className="grid gird-cols-1 lg:grid-cols-2 md:grid-cols-1">
        <div className="flex justify-center items-center mb-5">
          <div className="text-start lg:text-start">
            <h1 className="text-2xl font-serif font-semibold">
              The Engineering & Automation Service <br className="hidden lg:block"/> You Must Need For A
              Comfortable.
            </h1>
            <p className="text-xl">Safe & Secured Living...</p>
          </div>
        </div>

        <div>
          <img src='https://w7.pngwing.com/pngs/575/107/png-transparent-smart-city-building-automation-project-building-building-city-engineering.png' alt="" className="w-full" />
        </div>
      </div> */}

      {/* 2nd hero*/}

      <div
        className="hero min-h-screen w-full h-50"
        style={{
          backgroundImage: `url("https://i.ibb.co/9YgJZdM/bulding2.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl md:max-w-md lg:max-w-2xl font-serif">
            <h1 className="mb-5 text-xl lg:text-3xl font-serif font-semibold text-white shadow-2xl">
              The Engineering & Automation Service 
              <br className="hidden lg:block" /> You Must Need For A
              Comfortable Safe & Secured Living...
            </h1>
            {/* <p className="mb-5 font-semibold shadow-2xl">Guaranteed Solution As Per Building Compliance Code Of <br  className="hidden lg:block"/> Standard Within <span className="text-red-500 text-0 lg:text-xl">"OneStop Service Station"</span> At Your Door Step</p> */}
            <button className="navButton text-white">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

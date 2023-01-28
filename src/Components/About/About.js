import React from "react";
import "./About.css";
import lift from "../../assetes/redFlower-liflate-removebg-preview.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-5 mb-5">

      <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full font-serif">
        <div className="flex justify-center items-center mt-0 mb-5">

          <div >

            <h1 className="text-2xl ml-3">
              <span className="text-red-500 text-4xl">Red Flower </span>
              <span className="text-2xl text-yellow-400">
               
                Building Needs Power by Safety Automation Offering You
              </span>
            </h1>

            <ul className="text-red-500 ml-3 mt-3">
              <li>CONSULTANCY</li>

              <li>SYSTEM DESIGN</li>

              <li>SYSTEM SUPPLY</li>

              <li>PROPER INSTALLATION &</li>

              <li>MAINTENANCE CONTRACT SERVICES</li>
            </ul>

            <div className="flex justify-center lg:justify-start ml-0 lg:ml-3">
              <Link to='/about'>
                <button className="mt-3 aboutButton bg-red-500 text-white font-semibold">
                  See More
                </button>
              </Link>
            </div>

          </div>

        </div>

        <div>
          <img src={lift} alt="" className="w-full"/>
        </div>

      </div>
    </div>
  );
};

export default About;

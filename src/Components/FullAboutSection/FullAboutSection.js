import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lift from "../../assetes/redFlower-liflate-removebg-preview.png";
import FullAboutMap from "../FullAboutMap/FullAboutMap";

const FullAboutSection = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    fetch("AboutSection.json")
      .then((res) => res.json())
      .then((data) => setAbouts(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <div className="mt-5 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full font-serif">
          <div>
            <img src={lift} alt="" className="w-full" />
          </div>

          <div className="flex justify-center mt-0 mb-5 lg:mt-16 lg:mb-0">
            <div>
              <h1 className="text-2xl ml-3">
                <span className="text-red-500 text-4xl">Red Flower </span>

                <span className="text-2xl text-yellow-500">
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
                <Link to="/">
                  <button className="mt-3 aboutButton bg-red-500 text-white font-semibold">
                    Go Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mission */}
      <div className="flex justify-center">
        <h1 className="aboutUs font-semibold text-2xl">Our Main Focus</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-5 mb-5 gap-4">
        {abouts.map((about) => (
          <FullAboutMap key={about.id} aboutData={about}></FullAboutMap>
        ))}
      </div>
    </div>
  );
};

export default FullAboutSection;

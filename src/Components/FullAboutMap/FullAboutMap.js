import React from "react";

const FullAboutMap = ({ aboutData }) => {
  const { headline, subject } = aboutData;
  return (
    <div className="card w-full bg-red-300 shadow-xl font-serif">
      
      <div className="card-body">
        <div className="flex justify-center">
          <h1 className=" bg-red-100 aboutUs font-semibold">{headline}</h1>
        </div>
        <p className="text-black font-semibold">{subject}</p>
      </div>
    </div>
  );
};

export default FullAboutMap;

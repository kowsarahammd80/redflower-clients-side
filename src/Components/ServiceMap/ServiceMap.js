import React from "react";
import './ServiceMap.css'

const ServiceMap = ({serviceData}) => {
  
  const {serviceName, serviceImg} = serviceData

  return (
    
      <div className="card bg-red-600 shadow-xl">
        <figure><img src={serviceImg} alt={serviceName} className="service-img" /></figure>
        <div className="card-body">
          {/* <h2 className="text-red-400 text-center font-bold">{serviceName}</h2> */}
          <div className="flex justify-center">
          <h1 className=" bg-red-100 text-center aboutUs font-bold">{serviceName}</h1>
        </div>
         
          <div className="card-actions justify-end">
            
          </div>

        </div>
      </div>
   
  );
};

export default ServiceMap;

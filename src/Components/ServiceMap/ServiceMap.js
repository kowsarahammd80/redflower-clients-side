import React from "react";

const ServiceMap = ({serviceData}) => {
  
  const {serviceName} = serviceData

  return (
    
      <div className="card bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-red-400 text-center font-bold">{serviceName}</h2>
         
          <div className="card-actions justify-end">
            
          </div>

        </div>
      </div>
   
  );
};

export default ServiceMap;

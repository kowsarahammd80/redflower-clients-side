import React, { useEffect } from "react";
import { useState } from "react";
import ServiceMap from "../ServiceMap/ServiceMap";

const ServiceSection = ({len}) => {
  
  const [services, setServices] = useState([])

  useEffect(() => {

    fetch('Service.json')
     .then(res => res.json())
     .then(data => setServices(data))
     .catch(e => console.error(e))
      
  },[services])

  let length = 0;
  !len ? length = services.length : length = len;

  return (
    <div>
      
      <div className="flex justify-center mt-5">
        <h1 
        className=" 
        bg-red-100 
        aboutUs 
        font-semibold"> Our Services </h1>
      </div>

      <h1 
      className="text-center mt-3 mb-5 
      text-red-500 
      font-semibold 
      text-xl">
        YOU CAN RELY ON OUR BUILDING SOLUTION
      </h1>

      {/* service */}

      <div className="mx-2 lg:mx-0 mt-5 mb-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

          {
            services.slice(0, length).map(service => <ServiceMap
             key={service.id} serviceData = {service}
            ></ServiceMap>)
          }

      </div>

    </div>
  );
};

export default ServiceSection;

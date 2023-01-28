import React from "react";

const ClientsMap = ({clientData}) => {
   
  const {service, institute} = clientData

  return (
    <div className="card bg-red-100 shadow-xl ">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center text-red-600">
          {" "}
          {institute}
        </h2>
        <hr className="hr" />
        <p className="text-xl font-bold text-yellow-500 text-center">
          {" "}
          {service}
        </p>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ClientsMap;

import React, { useEffect, useState } from "react";
import ClientsWithCarucelMap from "../ClientsWithCarucelMap/ClientsWithCarucelMap";

const ClientsWithCarusel = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('CoustomerList.json')
     .then(res => res.json())
     .then(data => setClients(data))
     .catch(e => console.error(e))
  },[])

  return (
    <div className="mt-5 mb-5">

      <div className="flex justify-center my-7">
        <h1 className=" bg-red-100 text-center aboutUs font-bold">
          Our Valuable Clients
        </h1>
      </div>

      <div className="carousel carousel-start max-w-full bg-red-500 shadow-xl p-4 space-x-4 ">
        <div className="carousel-item gap-2">
           
           {
            clients.map(client => <ClientsWithCarucelMap
              key={client.id} clientData = {client}
             ></ClientsWithCarucelMap>)
           }

        </div>
       
         
      </div>
    </div>
  );
};

export default ClientsWithCarusel;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClientsMap from "../ClientsMap/ClientsMap";
import './Clients.css'

const Clients = ({len}) => {
  
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('CoustomerList.json')
     .then(res => res.json())
     .then(data => setClients(data))
     .catch(e => console.error(e))
  },[])

  let length = 0;
  !len ? length = clients.length : length = len;

  return (
    <div className="mb-5 mt-5">
      <div className="flex justify-center my-7">
        <h1 className=" bg-red-100 text-center aboutUs font-bold">
          Our Valuable Clients
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-3 lg:mx-0">
       
       {

        clients.slice(0, length).map(client => <ClientsMap
         key={client.id} clientData = {client}
        ></ClientsMap>)

       }  

      </div>
    </div>
  );
};

export default Clients;

import React from 'react';
import { Link } from 'react-router-dom';
import Clients from '../../Components/Clients/Clients';
import ClientsWithCarusel from '../../Components/ClientsWithCarusel/ClientsWithCarusel';

const ClientsPage = () => {
  return (
    <div>
      
       
       <ClientsWithCarusel></ClientsWithCarusel>

       <div className='flex justify-center mb-5'>
        <Link to='/client'>
           <button className='navButton'>See All Clients</button>
        </Link>
      </div>

    </div>
  );
};

export default ClientsPage;
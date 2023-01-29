import React from 'react';
import { Link } from 'react-router-dom';
import Clients from '../../Components/Clients/Clients';

const ClientsPage = () => {
  return (
    <div>
       <Clients len={6}/>

       <div className='flex justify-center mb-5'>
        <Link to='/client'>
           <button className='navButton'>See All Clients</button>
        </Link>
      </div>

    </div>
  );
};

export default ClientsPage;
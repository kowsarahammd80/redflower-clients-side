import React from 'react';
import AreYouSafe from '../../Components/AreYouSafe/AreYouSafe';
import Home from '../../Components/Home/Home';
import AboutPages from '../AboutPages/AboutPages';
import ClientsPage from '../ClientsPage/ClientsPage';
import ServicePages from '../ServicePages/ServicePages';

const HomePages = () => {

  return (

    <div>
       <Home></Home>
       <AboutPages></AboutPages>
       <ServicePages></ServicePages>
       <AreYouSafe></AreYouSafe>
       <ClientsPage></ClientsPage>
    </div>

  );

};

export default HomePages;
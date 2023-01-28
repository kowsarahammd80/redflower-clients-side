import React from 'react';
import Home from '../../Components/Home/Home';
import AboutPages from '../AboutPages/AboutPages';
import ServicePages from '../ServicePages/ServicePages';

const HomePages = () => {

  return (

    <div>
       <Home></Home>
       <AboutPages></AboutPages>
       <ServicePages></ServicePages>
    </div>

  );

};

export default HomePages;
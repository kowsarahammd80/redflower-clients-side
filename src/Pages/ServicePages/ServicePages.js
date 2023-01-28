import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';

const ServicePages = () => {
  return (
    <div>
      <ServiceSection len={6}></ServiceSection>

      <div className='flex justify-center mb-5'>
        <Link to='/service'>
           <button className='navButton'>See All Services</button>
        </Link>
      </div>

    </div>
  );
};

export default ServicePages;
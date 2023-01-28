import React from 'react';
import './AreYouSafe.css'

const AreYouSafe = () => {
  return (
    <div className='bg-red-600'>
       
       <div 
       className='grid 
       grid-cols-1 
       lg:grid-cols-2d 
       md:grid-cols-2 p-1'>
           
           {/* text */}
           <div className='flex justify-center items-center'>
            
             <h1 className='bg-yellow-200 
             px-10 py-5
             my-5 lg:my-0 
             rounded-full 
             text-3xl 
             text-red-700 
             font-extrabold'> 

             ARE YOU SAFE ?

              </h1>

           </div>
          
          {/* img */}

           <div>
             <img className='areYouSafe-img' src="https://st.depositphotos.com/1006899/1405/i/950/depositphotos_14057924-stock-photo-too-many-questions.jpg" alt="" />
           </div>

       </div>
    </div>
  );
};

export default AreYouSafe;
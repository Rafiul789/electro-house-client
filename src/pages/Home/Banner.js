import React from 'react';
import background from '../../assets/images/banner2.jpg'
const Banner = () => {
    return (
        <>  <section   style={{
            background:`url(${background})`
        }}  className="bg-cover bg-opacity-100 " > 
       <div className="flex justify-center items-center  space-x-2">
       <div className="w-10 h-10 bg-black animate-fade-in-down"></div>
    <div className="w-10 h-10 bg-black animate-fade-out-down"></div>
    <div className="w-10 h-10 bg-black animate-fade-in-up"></div>
    <div className="w-10 h-10 bg-black animate-fade-out-up"></div>
    </div>
    <div className=" flex flex-col space-x-6 space-y-3 p-20 justify-center items-center">
    <h3 className="text-3xl font-bold text-white animate-bounce">Welcome To  Electro House</h3>
    <div class="container flex justify-center mx-auto  ">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 animate-spin text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>

    </div>
   


            
             
             <h2 className="text-2xl text-white text-center mt-5 py-5"  >You can find your best tools here!</h2>
      

        </section>  </>
       
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/IMG_2769-01__01-removebg-preview.png';
const Myportfolio = () => {
    return (
        <> <div  className="grid grid-cols-2 items-center gap-4 mx-auto">
        <div><h1 className="text-6xl font-semibold "> <span className="text-red-400 py-5">Welcome to  </span> <br></br> my portfolio</h1>  <p className="text-2xl mt-5">I am a Front-End Web Developer</p> </div>
        <div> <img className="mx-5 mt-[-30px]" src={image} alt="profile"></img> </div>


    </div> <div> <h1 className="text-4xl font-semibold text-center mt-5"> About Me</h1>  
    <div className=" text-center mt-5"><h1 className="text-2xl"> Name : Md Rafiul Islam</h1>
    <h1 className="text-2xl"   >Email :islamrafiul368@gmail.com</h1>
    <h1 className="text-2xl"  >Education:BSc in Mathematics</h1>   </div>
    <div> <h1 className="text-4xl font-semibold text-center mt-5"> Skills</h1>  </div> <li className="text-2xl text-center mt-5"> HTML,CSS,Tailwind,Bootstrap,React,Firebase Authentication,Node Js,Express JS,MongoDB</li>
     </div> 
     <div> <h1 className="text-4xl font-semibold text-center mt-5"> My Projects</h1> 
     <div className="grid grid-rows-3"> <ul className=" mx-auto mt-5">
    <li >  < a className="text-center text-red-400 text-2xl" href="https://gadget-store-1aba1.web.app" target="_blank">Gadget Store</a>  </li>
    <li> < a className="text-center text-red-400  text-2xl" href="https://bike-zone567.netlify.app" target="_blank">Bike Zone</a>  </li>
    <li> < a className="text-center text-red-400  text-2xl" href="https://doctor-home-ac86b.web.app" target="_blank">Doctor Home</a>  </li>
     </ul>   </div>
     
     </div>
     
     
       </>
        
    );
};

export default Myportfolio;
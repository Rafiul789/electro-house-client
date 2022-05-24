import React from 'react';
import Products from '../../components/Products';
import Banner from './Banner';
import Businesssummay from './Businesssummay';
import Faqs from './Faqs';
import Feedback from './Feedback';
import Footer from './Footer';
import Team from './Team';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
          <div class="m-5" >  <h1  className="my-5  text-5xl text-blue-600 text-center">Product</h1>   <Products></Products>   </div>   
            <Faqs></Faqs>
            <Team></Team>
            <Feedback></Feedback>
            <Businesssummay></Businesssummay>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;
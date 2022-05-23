import React from 'react';
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
            <Faqs></Faqs>
            <Team></Team>
            <Feedback></Feedback>
            <Businesssummay></Businesssummay>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;
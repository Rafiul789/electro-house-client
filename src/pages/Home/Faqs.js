import React from 'react';
import './Faqs.css';
const Faqs = () => {
    return (
        <>
          <div className="container my-24 px-6 ">
  <h1 className="text-4xl font-semibold  text-center mb-5" >FAQS</h1>
  
  <section className="mb-32 text-gray-800">

    
    <div className="container mx-auto xl:px-32 text-center lg:text-left">
      <div className="grid lg:grid-cols-2 flex items-center">
        <div className="mb-12 lg:mb-0">
          <div
            className="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14  style "
            
          >
          <h3 className="text-2xl font-bold mb-3">We know how valuable your time is</h3>
          <h5 className="text-lg text-blue-600 font-bold mb-12 lg:mb-10 xl:mb-12">Let us answer your questions</h5>

          <p className="font-bold mb-4">What are the important parts for Computers?</p>
          <p className="text-gra-500 mb-6">
          Motherboard. A motherboard is the first component you'll want to choose. ...
Processor/Central Processing Unit (CPU) The CPU is the engine of your computer and sets the performance expectations for the entire build. ...
Memory (RAM) ...
Installing the memory. ...
Installing the HDD or SSD </p>

          <p className="font-bold mb-4">What is the pricing cost for each parts?</p>
          <p className="text-gra-500 mb-6">
           We offer best price for our customers.You can buy our parts at cheap price.
          </p>

          <p className="font-bold mb-4">
            What is company's after sell service?
          </p>
          <p className="text-gra-500">
           We have great after sell services.Our products are genuine and authentic.We ensure 1 year warranty service for each products.
          </p>
          </div>
        </div>

        <div>
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/075.jpg"
            className="w-full rounded-lg shadow-lg "
            alt=""
          />
        </div>
      </div>
    </div>
  

  </section>
  

</div>  
        </>
    );
};

export default Faqs;
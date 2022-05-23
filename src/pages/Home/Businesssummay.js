import React from 'react';

const Businesssummay = () => {
    return (
        <>
           
        <div className="mx-auto container py-8 mb-10">
            <h1 className="text-4xl font-semibold text-center mb-5" >Business Summary</h1>
            <div role="list" aria-label="Our stats." className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div role="listitem" className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg1.svg" alt="profile"/>
                   
                    <div className="text-gray-800 dark:text-white pl-12 w-1/2">
                        <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">450</h1>
                        <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Happy Clients.</h2>
                    </div> 
                </div>
                <div role="listitem" className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg2.svg" alt="ambulance"/>
                   
                    <div className="text-gray-800 dark:text-white w-1/2 pl-12">
                        <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">600+</h1>
                        <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Delivery Completed</h2>
                    </div>
                </div>
                <div role="listitem" className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg3.svg" alt="clock"/>
                    
                    <div className="text-gray-800 dark:text-white w-1/2 pl-12">
                        <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">35</h1>
                        <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Years of Experience</h2>
                    </div>
                </div>
                <div role="listitem" className="flex justify-center w-full py-6">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg4.svg" alt="cube"/>
                   
                    <div className="text-gray-800 dark:text-white w-1/2 pl-12">
                        <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">50+</h1>
                        <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Insurance Solutions</h2>
                    </div>
                </div>
            </div>
        </div>
     
        </>
    );
};

export default Businesssummay;
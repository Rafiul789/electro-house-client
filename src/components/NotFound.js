import React from 'react';
import notfound from '../assets/images/Error.png'
const NotFound = () => {
    return (
        <div>
            <img className="items-center mx-auto"  src={notfound} alt="not found"></img>
        </div>
    );
};

export default NotFound;
import React from 'react';
import './Service.css';


const Service = (props) => {
    const{img,name,price,description}=props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
           <h3> $ {price}</h3>
           <p><small>{description}</small></p>
           <button>Book : {name}</button>
        </div>
    );
};

export default Service;
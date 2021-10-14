import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h4>price: $ {price}</h4>
            <p>{description}</p>
            <Link to={`/food/${id}`}><button className="btn-warning">order now</button></Link>
        </div>
    );
};

export default Service;
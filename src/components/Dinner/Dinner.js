import React from 'react';
import { Link } from 'react-router-dom';

const Dinner = ({ dinner }) => {
    const { name, img, price, id, description } = dinner
    return (
        <div>
            <img className="img-fluid" src={img} alt="" />

            <h4>{name}</h4>
            <h4>price:$ {price}</h4>
            <p>description:{description}</p>
            <Link to={`/night/${id}`}><button className="btn-success">order now</button></Link>
        </div>
    );
};

export default Dinner;
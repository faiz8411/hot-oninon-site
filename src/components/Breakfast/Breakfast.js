import React from 'react';
import { Link } from 'react-router-dom';

const Breakfast = ({ food }) => {
    const { name, id, img, price, description } = food
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>price:$ {price}</h4>
            <p>description:{description}</p>
            <Link to={`/break/${id}`}> <button className="btn-success">order now</button></Link>

        </div>
    );
};

export default Breakfast;
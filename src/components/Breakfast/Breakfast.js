import React from 'react';

const Breakfast = ({ food }) => {
    const { name, id, img, price, description } = food
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>price:$ {price}</h4>
            <p>description:{description}</p>
            <button className="btn-success">order now</button>
        </div>
    );
};

export default Breakfast;
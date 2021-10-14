import React from 'react';

const Dinner = ({ dinner }) => {
    const { name, img, price, id, description } = dinner
    return (
        <div>
            <img className="img-fluid" src={img} alt="" />

            <h4>{name}</h4>
            <h4>price:$ {price}</h4>
            <p>description:{description}</p>
        </div>
    );
};

export default Dinner;
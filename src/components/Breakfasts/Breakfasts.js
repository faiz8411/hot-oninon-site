import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import './Breakfasts.css'

const Breakfasts = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <h2>our Breakfast menu Item</h2>

            <div className="breakfast-container">

                {
                    foods.map(food => <Breakfast
                        key={food.id}
                        food={food}

                    ></Breakfast>)
                }
            </div>
            <div className="m-5">
                <Link to="/"><button className="btn-success">home</button></Link>
            </div>
        </div>
    );
};

export default Breakfasts;
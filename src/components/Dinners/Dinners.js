import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dinner from '../Dinner/Dinner';
import './Dinners.css'

const Dinners = () => {

    const [dinners, setDinners] = useState([])
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])

    return (
        <div>
            <h3>our dinner menu</h3>
            <hr />
            <div className="dinner-container">
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }
            </div>
            <div className="m-5">
                <Link to="/"><button className="btn-success">home</button></Link>
            </div>
        </div>
    );
};

export default Dinners;
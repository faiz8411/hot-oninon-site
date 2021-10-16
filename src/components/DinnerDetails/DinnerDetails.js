import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DinnerDetails = () => {
    const [dinner, setDinner] = useState({})
    const { dinnerId } = useParams()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/dinner.json')
            .then(res => res.json())
            .then(data => {
                const dinners = data.find(pd => pd.id == dinnerId)
                setDinner(dinners)
            })
    }, [dinnerId])
    console.log(dinner)
    return (
        <div>
            <h2>id :{dinnerId}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={dinner.img} alt="" />
                    <h2>{dinner.name}</h2>
                    <h4>price:{dinner.price}</h4>

                </div>
                <div className="col-md-6">
                    <h4>{dinner.description}</h4>

                </div>
            </div>
            <Link to="/"> <button className="btn-success">home</button>
            </Link>
        </div>
    );
};

export default DinnerDetails;
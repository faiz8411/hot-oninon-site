import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BreakfastDetails = () => {
    const [morning, setMorning] = useState({})
    const { breakId } = useParams()

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/breakfast.json')
            .then(res => res.json())
            .then(data => {
                const breakFasts = data.find(pd => pd.id == breakId)
                setMorning(breakFasts)
            })
    }, [breakId])
    console.log(morning)
    return (
        <div>
            <h2>id:{breakId}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={morning.img} alt="" />
                    <h2>{morning.name}</h2>
                    <h4>price:{morning.price}</h4>
                </div>
                <div className="col-md-6">
                    {morning.description}

                </div>
            </div>
            <Link to="/"> <button className="btn-success">home</button>
            </Link>
        </div>
    );
};

export default BreakfastDetails;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className="menu">
                <Link to="/breakfast"><h4>breakfast</h4></Link> <Link to="/lunch"><h4>Launch</h4></Link> <Link to="/dinner"><h4 className="text-danger">Dinner</h4></Link>
            </div>

            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>

    );
};

export default Services;
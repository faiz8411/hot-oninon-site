import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import launch1 from '../../lunch/lunch3.png'
import Register from '../Register/Register';

const FoodDetails = () => {


    const [item, setItem] = useState({})
    const { serviceId } = useParams()


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api/main/manu.json')
            .then(res => res.json())
            .then(data => {
                const items = data.find(pd => pd.id == serviceId)
                setItem(items)
            })
    }, [serviceId])
    console.log(item)






    return (
        <div>
            <h2>id:{serviceId}</h2>

            <div className="row">
                <div className="col-md-6">
                    <img src={item.img} alt="" />
                    <h2>{item.name}</h2>
                    <h4>price:{item.price}</h4>
                </div>
                <div className="col-md-6">
                    {item.description}

                </div>
            </div>
            <Link to="/"> <button className="btn-success">home</button>
            </Link>




        </div>
    );
};

export default FoodDetails;
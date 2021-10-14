import { useParams } from 'react-router';
import launch1 from '../../lunch/lunch3.png'

const FoodDetails = () => {



    const { serviceId } = useParams()


    return (
        <div>
            <h2>details :{serviceId}</h2>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-6">
                        <img src={launch1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3>healthy meal plan</h3>
                        <p>descriptin:lorem emsum something about daet</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;
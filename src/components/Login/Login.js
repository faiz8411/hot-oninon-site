import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()

    const history = useHistory()
    const redirect_Uri = location.state?.from || '/home'
    // console.log(location.state?.from)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_Uri)
            })
    }
    return (
        <div>
            <div>
                <h2>please login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>new to this website??<Link to="/register">create account</Link></p>
                <div>---------------------or----------------------------</div>
                <button onClick={handleGoogleLogin}>sign with google</button>
            </div>
        </div>
    );
};

export default Login;
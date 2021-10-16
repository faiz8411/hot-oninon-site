import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>create account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" your password />
                    <br />
                    <input type="re enter-password" name="" id="" your password />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>already have an account??<Link to="/register">login</Link></p>
            </div>
        </div>
    );
};

export default Register;
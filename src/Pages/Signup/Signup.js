import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import './Signup.css'
import SociallogIn from '../Login/SociallogIn';



const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation()
    const nevigate = useNavigate();

    const from = location.state?.from?.pathname || '/login';


    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                nevigate(from, { replace: true })
            })
            .catch(err => console.error(err));
        form.reset()

    }

    return (
        <div>
            <form onSubmit={handleSignup} className='body'>
                <div className='boxx'>
                    <div className="form">
                        <h2>SignUp</h2>
                        <div className="inputBox">
                            <input type="name" name="name" id="" required />
                            <span> Enter your Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="email" id="" required />
                            <span> Enter Your Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" id="" required />
                            <span>Enter Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <Link>Already have an account ?</Link>
                            <Link to='/login'>login</Link>
                        </div>
                        <input type="submit" value="signup" />
                        <SociallogIn></SociallogIn>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
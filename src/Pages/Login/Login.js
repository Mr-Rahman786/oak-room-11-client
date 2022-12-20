import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import './Login.css'
import SociallogIn from './SociallogIn';
const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation()
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                nevigate(from,{replace:true})
            })
            
            .catch(error => console.error(error))
        form.reset()
        
    }
    
    return (
        <div className='body'>
            <div className='boxx'>
                <form onSubmit={handleLogIn} className="form">
                    <h2>Log In</h2>
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
                        <Link>have not account?</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                    <input type="submit" value="login" />
                    
                    <SociallogIn></SociallogIn>
                </form>
            </div>
        </div>
    );
};

export default Login;
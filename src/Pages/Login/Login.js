import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import './Login.css'
const Login = () => {
    const { login } = useContext(AuthContext);
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
        
    }
    
    return (
        <div className='body'>
            <div className='box'>
                <form onSubmit={handleLogIn} className="form">
                    <h2>Sign In</h2>
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
                        <Link>Forget Password</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                    <input type="submit" value="login" />
                </form>
            </div>
        </div>
    );
};

export default Login;
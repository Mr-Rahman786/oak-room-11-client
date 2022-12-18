import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {

    const handleSignup = event => {
        event.preventDefault();
    }

    return (
        <div>
            <div className='body'>
                <div className='box'>
                    <form onSubmit={handleSignup} className="form">
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
                        <input type="submit" value="login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
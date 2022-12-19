import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import './Cheackout.css'
const Checkout = () => {
    const { title, price ,img} = useLoaderData()
    const { user } = useContext(AuthContext);
    return (
        <div className=" min-h-screen checkout ">
            <div className="hero-content flex-col lg:flex-row-reverse form-content">
                <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Get it buy!</h1>
                    <form className='p-5'>
                        <h2 className="text-3xl text-center text-white">You're order this food : {title}</h2>
                        <h4 className="text-2xl text-center text-white">Price : ${price}</h4>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full gap-5 mt-3'>
                            <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                            <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                            <input type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                            <input type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                            <textarea className="textarea w-full h-44 textarea-info" placeholder="Your Massage"></textarea>
                        </div>
                    </form>
                    <button className="btn btn-primary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
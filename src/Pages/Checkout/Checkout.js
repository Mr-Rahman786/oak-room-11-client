import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import './Cheackout.css'
import swal from 'sweetalert';

const Checkout = () => {
    const {_id, title, price ,img} = useLoaderData()
    const { user } = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const massage = form.massege.value;


        const order = {
            service:_id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            massage
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    swal({
                        title: "Order Placed successfully",
                        text: "You clicked the button!",
                        icon: "success",
                    });
                    form.reset()
                }
            })
            .catch(err => console.error(err))
        

    }

    return (
        <div className=" min-h-screen checkout ">
            <div className="hero-content flex-col lg:flex-row-reverse form-content">
                <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Get it buy!</h1>
                    <form onSubmit={handlePlaceOrder} className='p-5'>
                        <h2 className="text-3xl text-center text-white">You're order this food : {title}</h2>
                        <h4 className="text-2xl text-center text-white">Price : ${price}</h4>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full gap-5 mt-3'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                            <input name="phone" type="number" placeholder="Your Phone" className="input input-bordered w-full" required/>
                            <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                            <textarea name="massege" type="text" className="textarea w-full h-44 textarea-info" placeholder="Your Massage"></textarea>
                        </div>
                        <button type='submit' className="btn btn-outline btn-info mt-5">Place Order Confirm</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Checkout;
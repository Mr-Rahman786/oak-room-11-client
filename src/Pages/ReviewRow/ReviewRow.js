import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const {_id, serviceName, price, customer, email, phone, massage, service } = review;
    const [ reviewsMore, setReviewsMore ] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewsMore(data));
    }, [service]);


    return (
        
        <tr>
            <th>
                <label className="btn w-10 h-10 btn-circle swap swap-rotate swap-on">
                    <input type="checkbox" />
                    <svg onClick={() => handleDelete(_id)} className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="20px" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
            </th>
            
            <td>
                <div className="chat chat-start w-50">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt=''/>
                        </div>
                    </div>
                    <div className="chat-bubble">{massage}</div>
                </div>
            </td>
            <td>



                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h24">
                            {
                                reviewsMore?.img &&
                                <img src={reviewsMore.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-xl opacity-50">${price}</div>
                    </div>
                </div>

                
                <br />
                
                
            </td>
            <td>{ phone}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{email}</button>
                <br />
                <span className="badge badge-ghost badge-sm">{customer}</span>
            </th>
        </tr>
    );
};

export default ReviewRow;
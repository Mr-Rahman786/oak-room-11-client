import React from 'react';
import './Cardservice.css'
const ServiceCard = ({ service }) => {
    const { title, img, price, description, rating } = service;
    return (
        <div className="card text-start ml-7 w-80 bg-base-100 card-main-box shadow-xl">

            <figure>
                <img src={img} alt="" />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h4>Price: $ { price}</h4>
                <div className="card-actions justify-between mt-3">
                    <button className="btn btn-outline">Order </button>
                    <button className="btn btn-active">See Details</button>
                </div>
                <div className="rating rating-xs grid grid-cols-1 md:grid-cols-2 mt-3 text-center">
                    <div>
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        {rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
import React from 'react';
import { FaClock, FaLocationArrow, FaSearchLocation, FaUserTimes } from 'react-icons/fa';
import './Map.css'
import img from '../../assest/assest/map.png'
const Map = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-20 ">
            <figure>
                <img src={img} alt="" />   
            </figure>
            <div className="card-body">
                <iframe className="gmap_iframe mapsTune" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=946&amp;height=400&amp;hl=en&amp;q=dhaka&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>  
    );
};

export default Map;
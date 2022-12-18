import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='text-center'>
            <h2 className="text-5xl ">Our Products</h2>
            <p className='text-center'>We there show our products those for you</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Details = () => {
    const { _id, title, price, img } = useLoaderData()
    const { user } = useContext(AuthContext);
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Details;
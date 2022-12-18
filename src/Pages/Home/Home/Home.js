import React from 'react';
import Banner from '../../Banner/Banner';
import Download from '../../Download/Download';
import Map from '../../Map/Map';
import Phone from '../../Phone/Phone';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Download></Download>
            <Phone></Phone>
            <Map></Map>
        </div>
    );
};

export default Home;
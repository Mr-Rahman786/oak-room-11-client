import React from 'react';
import Banner from '../../Banner/Banner';
import Download from '../../Download/Download';
import Map from '../../Map/Map';
import Phone from '../../Phone/Phone';
import Service from '../../Services/Service';
import Visitors from '../../Visitors/Visitors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Download></Download>
            <Phone></Phone>
            <Visitors></Visitors>
            <Map></Map>
        </div>
    );
};

export default Home;
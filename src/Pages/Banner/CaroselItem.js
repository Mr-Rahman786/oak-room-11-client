import React from 'react';
import './Banner.css'
const CaroselItem = ({ slide }) => {
    const { sliderImg, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full carouselHeight">
            <div className='carousel-image'>
                <img src={sliderImg} alt="" className="w-full" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-0 left-20 right-5 top-1/4">
                <h1 className='text-5xl font-bold text-white'>
                    Food Concerened <br />
                    Make Happy <br />
                    Get Offer

                </h1>
            </div>
            <div className="absolute flex justify-start w-2/4 transform -translate-y-0 left-20 right-5 top-1/2">
                <p className='text-white mt-8'>We make have shold food 1/2 offer and <br />
                    this mon best offer for your Imagination
                    so why you late it now get this offer
                </p>
            </div>
            <div className="absolute flex justify-start w-2/4 transform -translate-y-0 left-20 right-5 top-3/4">
                <button className="btn btn-warning mr-5">Buy Now</button>
                <button className="btn btn-outline btn-error">Get Offer</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-0 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mx-10">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CaroselItem;
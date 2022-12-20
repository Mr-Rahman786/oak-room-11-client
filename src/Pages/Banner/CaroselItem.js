import React from 'react';
import './Banner.css'
import Typewriter from 'typewriter-effect'
import './Carosel.css'


const CaroselItem = ({ slide }) => {
    const { sliderImg, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full carouselHeight">
            
            <div className='carousel-image'>
                <progress className="progress w-full justify-center text-center"></progress>
                <img src={sliderImg} alt="" className="w-full" />
            </div>
            
            <div className="absolute flex animation justify-start transform -translate-y-0 left-20 right-5 top-1/4">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Food Concerned Make A Whole")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("We Are Polite have <br/> yet more Fun")
                            .pauseFor(1000)
                            .deleteAll()
                            .start()
                            .typeString("This Is Mustafiz Food <br/>  Corcened You Deserve is better ")
                            .pauseFor(1000)
                            .deleteAll()
                            .start()
                    }}
                    className="phone" />
            </div>
            
            <div className="absolute flex justify-start w-2/4 details-banner transform -translate-y-0 left-20 right-5 top-1/2">
                <p className='text-white mt-10 details'>We make have shold food 1/2 offer and <br />
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
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-500 border-none">❯</a>
            </div>
        </div>
        
    );
};

export default CaroselItem;
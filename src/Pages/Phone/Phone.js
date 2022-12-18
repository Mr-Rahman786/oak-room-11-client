import colorNames from 'daisyui/src/colors/colorNames';
import React from 'react';
import Typewriter from 'typewriter-effect'
import './Phone.css'
const Phone = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 mt-24 container max-w-screen-lg mx-auto">
                <figure>
                    <div className="mockup-phone border-danger">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1 ">
                                <Typewriter 
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Hello Programming Hero")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Welcome sir How are you Today")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .start()
                                            .typeString("Food Fastibale have do fun")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .start()
                                }}
                               className="phone" />
                            </div>
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Phone;
import colorNames from 'daisyui/src/colors/colorNames';
import React from 'react';
import Typewriter from 'typewriter-effect'
import './Phone.css'
const Phone = () => {
    return (
        <div>
            <div className="card lg:card-side grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-base-100 bg-black mt-5 container phonemain  p-5">
                <div>
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
                </div>
                <div className="card-body text-format">
                    <h2 className="card-title text-5xl">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-accent">Button</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Phone;
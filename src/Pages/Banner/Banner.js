import React from 'react';
import img1 from '../../assest/assest/carosel-main/foodmenu-3.jpg'
import img2 from '../../assest/assest/carosel-main/foodmenu-6.jpg'
import img3 from '../../assest/assest/carosel-main/foodmenu-1.jpg'
import img4 from '../../assest/assest/carosel-main/foodmenu-4.jpg'
import img5 from '../../assest/assest/carosel-main/foodmenu-2.jpg'
import img6 from '../../assest/assest/carosel-main/foodmenu-5.jpg'

import CaroselItem from './CaroselItem';
const Banner = () => {
    const caroselData = [
        {
            sliderImg: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            sliderImg: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            sliderImg: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            sliderImg: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            sliderImg: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            sliderImg: img6,
            prev: 5,
            id: 6,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full mt-5">
            
            {
                caroselData.map(slide => <CaroselItem
                    key={slide.id}
                    slide={slide}
                ></CaroselItem>)
            }

            {/* <CaroselItem sliderImg={img1}></CaroselItem> */}

        </div>
    );
};

export default Banner;
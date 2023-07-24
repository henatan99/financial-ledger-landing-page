import React from "react";
import BizImg1 from '../assets/images/bizImg1.svg';
import BizImg2 from '../assets/images/bizImg2.svg';
import BizImg3 from '../assets/images/bizImg3.svg';
import BizImg4 from '../assets/images/bizImg4.svg';
import BizImg5 from '../assets/images/bizImg5.svg';
import BizImg6 from '../assets/images/bizImg6.svg';

const BusinessCases = () => {
    const bizImages = [
        {id: 1, src: BizImg1},
        {id: 2, src: BizImg2},
        {id: 3, src: BizImg3},
        {id: 4, src: BizImg4},
        {id: 5, src: BizImg5},
        {id: 6, src: BizImg6}
    ]

    const entryText = 'This is what we do';
    const title = 'Business Cases';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!';

    return (
        <div className="px-[20px] md:px-[32px] lg:px-8 pt-[60px] lg:pt-[80px] pb-[50px] lg:pb-[70px] flex flex-col items-center gap-8 md:gap-10 text-custom_black">
            <p className="text-18 w-[207px] md:w-full">{entryText}</p>
            <h2 className="text-40-32 w-[207px] md:w-full">{title}</h2>
            <p className="text-18 w-[207px] md:w-full">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full">
                {
                    bizImages && bizImages.length > 0 &&
                    bizImages.map((img) => (
                        <div key={img.id} className="">
                            <img src={img.src} className="w-full h-full object-cover"></img>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BusinessCases;
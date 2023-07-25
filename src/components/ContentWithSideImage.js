import React from "react";
import { ReadMoreBtnTransparent } from "./Button";

const ContentWithSideImage = (props) => {
    const { entryText, title, description, bgColor, image, reverse } = props;
   
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="w-full md:w-[50%]">
                <img src={image} className="w-full h-full object-cover"></img>
            </div>
            <div className={`bg-${bgColor} w-full md:w-[50%] text-custom_white py-[79px] md:py-[62px] px-[20px] md:px-[32px] lg:px-[24px] text-left flex flex-col justify-center gap-6`}>
                <span className="text-18">{entryText}</span>
                <h2 className="text-40-32 text-left">{title}</h2>
                <p className="text-18">{description}</p>
                <ReadMoreBtnTransparent />
            </div>
        </div>
    )
}

export default ContentWithSideImage;
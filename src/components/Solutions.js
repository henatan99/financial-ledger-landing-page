import React from "react";
import { ReadMoreBtnTransparent } from "./Button";
import SolutionImg from '../assets/images/solutionsImg.svg';

const Solutions = () => {
    const entryText = 'What you are looking for';
    const title = 'We provide bespoke solutions';
    const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?';
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[50%]">
                <img src={SolutionImg} className="w-full h-full object-cover"></img>
            </div>
            <div className="bg-custom_green w-full md:w-[50%] text-custom_white py-[79px] md:py-[62px] px-[20px] md:px-[32px] lg:px-[24px] text-left flex flex-col justify-center gap-6">
                <span className="text-18">{entryText}</span>
                <h2 className="text-40-32 text-left">{title}</h2>
                <p className="text-18">{description}</p>
                <ReadMoreBtnTransparent />
            </div>
        </div>
    )
}

export default Solutions
import './typography.css';
import React from "react";
import RightArrow from '../assets/icons/righArrow.svg';

export const ReadMoreBtn = () => {
    return (
        <button 
            className='flex items-center justify-center bg-custom_green w-[175px] h-[57px] text-custom_white rounded-[5px] gap-2'
        >
            <img src={RightArrow}></img>
            <span>
                Read More
            </span>
        </button>
    )
}

export const ReadMoreBtnTransparent = () => {
    return (
        <button 
            className='flex border-[1px] border-[rgba(255, 255, 255, 1)] rounded-[5px] w-[175px] h-[57px] text-custom_white gap-2'
        >
            <img src={RightArrow}></img>
            <span>
                Read More
            </span>
        </button>
    )
}


export const SendBtn = () => {
    return (
        <button 
            className='bg-custom_green w-[155px] h-[57px] text-custom_white rounded-[5px]'
        >
            Send
        </button>
    )
}
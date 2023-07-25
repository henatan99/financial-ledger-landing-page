import './Header.css';
import './typography.css';
import React from "react";
import NavBar from "./NavBar";
import {ReadMoreBtn} from './Button';

const Header = () => {
    const title = 'The Sky Is The Limit';
    const subtitle = 'We provide worldclass financial assistance';
    return (
        <div 
            className="overflow-hidden relative bg-contain bg-no-repeat bg-center bg_custom" 
        >
            <NavBar />
            <div className="lg:pt-[56.47%] md:pt-[133.3%] pt-[166.6%]">

            </div>
            <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center gap-6 px-[20px] md:px-[116px]'>
                <h1 className='text-55 text-custom_white'>
                    {title}
                </h1>
                <h2 className='text-40 text-custom_white'>
                    {subtitle}
                </h2>
                <ReadMoreBtn solid={true} />
            </div>
        </div>
    )
}

export default Header;
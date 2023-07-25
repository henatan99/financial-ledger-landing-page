import React from "react";
import Logo from '../assets/icons/bookIcon.svg'

const NavBar = () => {
    const navItems = [
        {id: 1, name: 'Home'}, 
        {id: 2, name: 'About'}, 
        {id: 3, name: 'Cases'}, 
        {id: 4, name: 'Blog'}, 
        {id: 5, name: 'Contact'}
    ];

    return (
        <>
            <div className="flex items-center absolute left-[24px] top-[16px] lg:top-[32px] gap-5 text-35">
                <div className="flex items-center gap-2">
                    <img src={Logo}></img>
                    <span className="text-custom_green">Finance</span>
                </div>
                <span className="text-custom_white">Ledger</span>
            </div>
            <nav className="hidden md:block absolute right-[24px] top-[28px] lg:top-[48px]">
                <ul className="flex text-custom_white items-center gap-6 lg:gap-10 text-18">
                    {
                        navItems && navItems.length > 0 && 
                        navItems.map((item) => (
                            <li key={item.id}>
                                <a href="#">{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
import React from 'react';
import botIcon from "./../../assets/images/bot-icon.png";

const Header = () => {
    return (
        <div className='p-5 shadow-md bg-dark-violate flex justify-between items-center'>
            <div className="flex items-center gap-3">
                <img src={botIcon} width="40px" height={40} className="rounded-full" alt="" />
                <h2 className='text-[20px] font-medium relative'>
                    Bot
                    <span className='inline-block w-2 h-2 bg-green rounded-full absolute right-[-16px] top-1'></span>
                </h2>
            </div>
            <div className="flex"></div>
        </div>
    );
};

export default Header;
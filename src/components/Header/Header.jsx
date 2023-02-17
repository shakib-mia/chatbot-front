import React from 'react';
import botIcon from "./../../assets/images/bot-icon.png";

const Header = () => {
    return (
        <div className='shadow-md bg-dark-violate flex justify-between items-center' style={{ padding: '0.75rem' }}>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img src={botIcon} width="40px" height={40} className="rounded-[17px]" alt="" />
                    <span className='inline-block w-2 h-2 bg-green rounded-full absolute right-[-2px] bottom-0'></span>
                </div>

                <h2 className='text-[20px] font-medium'>
                    Bot
                </h2>
            </div>
            <div className="flex"></div>
        </div>
    );
};

export default Header;
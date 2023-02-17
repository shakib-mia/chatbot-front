import React from 'react';
import styles from './Opener.module.css'
import loadIcon from './../../assets/images/load-icon-png-7969.png'

const Opener = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto h-screen w-screen flex justify-center items-center bg-dark-ash' id={styles.opener}>
            <img src={loadIcon} className='animate-spin' alt="" />
        </div>
    );
};

export default Opener;
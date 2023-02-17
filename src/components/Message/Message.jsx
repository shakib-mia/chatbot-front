import React from 'react';
import Query from '../Query/Query';
import Reply from '../Reply/Reply';

const Message = ({ item }) => {
    return <>
            <Query key={item._id} query={item.message} className='px-5 py-2 bg-ash w-fit ml-auto mt-2 text-justify rounded-[17px] text-dark-ash lg:max-w-[70%]' />
            <Reply key={item.reply} reply={item.reply} className='px-5 py-2 bg-dark-blue text-white rounded-[17px] mt-2 flex-wrap lg:max-w-[70%]' />
        </>;
};

export default Message;
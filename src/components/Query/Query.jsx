import React from 'react';

const Query = ({ query, className }) => {
    return (
        <div className={className}>
            {query}
        </div>
    );
};

export default Query;
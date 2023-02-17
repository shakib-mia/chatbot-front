import React from 'react';

const Query = ({ query, className, style }) => {
    return (
        <div className={className}>
            {query}
        </div>
    );
};

export default Query;
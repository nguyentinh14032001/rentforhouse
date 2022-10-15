import React from 'react';

const HouseDesc = ({children,className="text-sm mb-4"}) => {
    return (
        <p className={` ${className} font-normal text-text-3`}>
            {children}
        </p>
    );
};

export default HouseDesc;
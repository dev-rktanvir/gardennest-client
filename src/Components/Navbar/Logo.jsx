import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center mr-2">
            {/* Image */}
            <img
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                src="/logo.png"
                alt="logo"
            />

            {/* Brand Name */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                GreenNest
            </h2>
        </div>
    );
};

export default Logo;

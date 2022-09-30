import SearchHomePage from 'modules/dashboard/SearchHomePage';
import React from 'react';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
       <div className='flex items-center flex-1 gap-x-14'>
        <img srcSet='logo.png 2x' alt="logo"/>
        <div className="w-full max-w-[458px]">
        <SearchHomePage></SearchHomePage>
        </div>
       </div>
       <div className='flex items-center gap-x-10 flex-1'>
       <span className='text-text-2 font-semibold text-base '>House</span>

       </div>
        </div>
    );
};

export default Navbar;
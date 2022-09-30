import React from 'react';
import DashboardSearch from './DashboardSearch';

const DashboardTopbar = () => {
    return (
        <div className='flex items-center justify-between'>
       <div className='flex items-center flex-1 gap-x-14'>
        <img srcSet='logo.png 2x' alt="logo"/>
        <div className="w-full max-w-[458px]">
        <DashboardSearch></DashboardSearch>
        </div>
       </div>
       <div className='flex items-center gap-x-10 flex-1'>
       <span className='text-text-2 font-semibold text-base '>House</span>

       </div>
        </div>
    );
};

export default DashboardTopbar;
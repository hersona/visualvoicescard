import React from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
    return (
      <>
      <div className='mb-3 rounded-b-2xl'>
          <div onClick={() => handleSetIndex(index)} className='flex justify-between w-full px-5 py-3 bg-green3/20 text-gray-600 font-bold rounded-2xl border-b border-green3 cursor-pointer'>
              <div className='flex items-center'>
                  <div className=''>
                    {title}
                  </div>
              </div>
                 {
                    (activeIndex === index) 
                    ?<div className="bg-green3 rounded-full flex justify-center items-center w-7 h-7">
                     <HiOutlineChevronUp className='w-5 h-5 stroke-white' /></div>
                    :<div className="bg-slate-500 rounded-full flex justify-center items-center w-7 h-7">
                     <HiOutlineChevronDown className='w-5 h-5 stroke-white' /></div>
                  }
              
          </div>
  
          {(activeIndex === index) && (
              <div className="px-6 py-5 bg-white text-gray-600 space-y-4 rounded-lg shadow-sm">
                {children}
              </div>
          )}
        </div>
      </>
    );
  };

export default AccordionLayout;
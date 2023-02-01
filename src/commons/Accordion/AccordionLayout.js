import React from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
    return (
      <>
      <div className='border-b border-green3 mb-3 rounded-b-2xl'>
          <div onClick={() => handleSetIndex(index)} className='flex justify-between w-full px-5 py-3 bg-green3/20 text-gray-600 font-bold border-none border-green2 rounded-2xl'>
              <div className='flex'>
                  <div className=''>
                    {title}
                    </div>
              </div>
              <div className="bg-green2 rounded-full flex justify-center align-center w-6 h-6">
                    {
                    (activeIndex === index) 
                    ? <HiOutlineChevronUp className='w-8 h-6' />
                    : <HiOutlineChevronDown className='w-8 h-6' />
                    }
              </div>
          </div>
  
          {(activeIndex === index) && (
              <div className="px-6 py-5 bg-yellow-50/60 text-gray-600 space-y-4 rounded-b-2xl">
                {children}
              </div>
          )}
        </div>
      </>
    );
  };

export default AccordionLayout;
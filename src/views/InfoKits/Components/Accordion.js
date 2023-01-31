import React, { useState } from 'react';
import AccordionLayout from '../../../commons/Accordion/AccordionLayout';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1); 
  return (
    <div className='flex flex-col justify-center items-center'>
          <AccordionLayout 
            title="Accordion 1"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            This is Accordion 1 Content    
          </AccordionLayout>

          <AccordionLayout 
            title="Accordion 2"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            This is Accordion 2 Content    
          </AccordionLayout>
          <AccordionLayout 
            title="Accordion 3"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            This is Accordion 3 Content    
          </AccordionLayout>
    </div>
  );
};

export default Accordion;
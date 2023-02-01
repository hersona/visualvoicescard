import React, { useState } from 'react';
import AccordionLayout from '../../../commons/Accordion/AccordionLayout';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1); 
  return (
    <div className='p-5 md:px-20 lg:px-10'>
        
          <AccordionLayout 
            title="Introducción"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>  
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
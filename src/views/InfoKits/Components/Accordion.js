import React, { useState } from "react";
import AccordionLayout from "../../../commons/Accordion/AccordionLayout";

const Accordion = ({ listMethods }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemList = Object.keys(listMethods).map((e, i) => {
    return (
      <AccordionLayout
      key={listMethods[e].sys.id} 
      title={listMethods[e].fields.titulo}
      index={e}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <div dangerouslySetInnerHTML={{__html: listMethods[e].fields.descripcion}} />
    </AccordionLayout>
    );
  });
  return itemList;
  
};

export default Accordion;

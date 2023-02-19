import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";

import Accordion from "./Components/Accordion";
import CtaFloating from "./Components/CtaFloating";

import { HiLogin } from "react-icons/hi";

import coverKit1 from "../../assets/KitsCovers/Breakthrough.png";
import photoKit1 from "../../assets/photoIntro.png";

const InfoKits = () => {
  return (
    <div className="lg:bg-slate-600 lg:py-10">
    <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
    
    <Header/>

    <CtaFloating/>

    <div className="px-5 md:px-20 lg:px-10 flex flex-col justify-start items-start gap-3 my-5">
        <button className="bg-green1/50 rounded-full text-[#727221] py-0 pl-2 pr-3 flex items-center gap-1 max-w-max">
            <HiLogin/>
            Regresar 
        </button>
        <h1 className="text-gray-600 text-3xl leading-none font-bold">
            Cards for Culture Assessment
        </h1>

    </div>
    <div className="relative">
        <img className="border-t-4 border-green3 w-full lg:rounded-xl max-h-[300px] object-cover" src={photoKit1} alt="" />
        <img className="absolute max-h-[130px] bottom-0 left-0 -mb-6 ml-5 md:ml-20 lg:ml-10" src={coverKit1} alt="" />
    </div>
    <div className="mt-4 px-5 py-8 text-gray-500 space-y-5 md:px-20 lg:px-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum orci, elementum non vulputate sed, tempus eget erat. Suspendisse ullamcorper, leo posuere aliquam sagittis, sem lorem rhoncus ex, ut varius diam quam nec nisl. Proin mattis efficitur neque. Nullam non aliquam libero, eget eleifend dolor. Morbi risus est, rutrum vel nisi sit amet, maximus viverra leo. Mauris mattis elit id luctus molestie. Praesent laoreet elit a elit pulvinar ultricies. Nullam vitae erat eu ex ornare iaculis ut ac nunc. Fusce sed eleifend tortor. Integer neque ipsum, feugiat vel magna vel, vestibulum elementum ligula.</p>
        <p>Praesent interdum scelerisque risus, ac volutpat ligula ultricies vel. Etiam maximus, mi vitae dictum luctus, enim quam venenatis massa, sed sodales magna magna in magna. Etiam et enim at risus luctus dapibus vitae quis massa. Proin euismod ligula mauris, ac pellentesque ipsum condimentum eget. Sed rutrum suscipit elementum. Cras at tincidunt lorem, vitae euismod lorem. Quisque ut augue a magna feugiat congue eget at lacus. Proin a rhoncus velit. Aenean hendrerit, nisl nec facilisis tempor, nulla sapien auctor mauris, eget eleifend ex lectus non arcu. Nulla sem lacus, dignissim ut gravida a, interdum non massa. Pellentesque rhoncus sapien consectetur rutrum dictum.</p>
    </div>

    
    <Accordion />
  

    <Footer/>
</div>
  
      
</div>
  );
};

export default InfoKits;

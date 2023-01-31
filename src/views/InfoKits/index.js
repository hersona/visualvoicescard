import Header from "../../commons/Layout/Header";
import Footer from "../../commons/Layout/Footer";

import Accordion from "./Components/Accordion";

import coverKit1 from "../../assets/KitsCovers/Breakthrough.png";
import photoKit1 from "../../assets/photoIntro.png";

const InfoKits = () => {
  return (
    <div className="lg:bg-slate-600 lg:py-10">
    <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
    <Header/>
    <div className="fixed bottom-3 right-3">
        <a href="" className="group flex justify-center items-center">
            <span className="transition-all bg-white/80 py-2 pl-4 pr-6 rounded-l-2xl text-gray-500 font-bold leading-none text-right shadow-lg group-hover:bg-white group-hover:text-blue-600">
                Conoce más<br/>de este Kit</span>
            <span className="transition-all duration-500 bg-green3 rounded-full w-[64px] h-[64px] flex items-center justify-center -ml-4 group-hover:bg-blue-600">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3333 26.9167L26.9166 17L11.3333 7.08334V26.9167Z" fill="white"/>
                </svg>                    
            </span>
        </a>
    </div>
    <div className="px-5 md:px-20 lg:px-10 flex flex-col justify-start items-start gap-3 my-5">
        <a href="" className="bg-green1/50 rounded-full text-[#727221] py-0 pl-2 pr-3 flex items-center gap-1 max-w-max">
            <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C12.3674 15 12.2402 14.9473 12.1464 14.8536C12.0527 14.7598 12 14.6326 12 14.5V1.5C12 1.36739 12.0527 1.24021 12.1464 1.14645C12.2402 1.05268 12.3674 1 12.5 1C12.6326 1 12.7598 1.05268 12.8535 1.14645C12.9473 1.24021 13 1.36739 13 1.5V14.5C13 14.6326 12.9473 14.7598 12.8535 14.8536C12.7598 14.9473 12.6326 15 12.5 15ZM9.99998 8C9.99998 8.13261 9.9473 8.25979 9.85353 8.35355C9.75976 8.44732 9.63259 8.5 9.49998 8.5H3.70698L5.85398 10.646C5.90047 10.6925 5.93734 10.7477 5.9625 10.8084C5.98766 10.8692 6.00061 10.9343 6.00061 11C6.00061 11.0657 5.98766 11.1308 5.9625 11.1916C5.93734 11.2523 5.90047 11.3075 5.85398 11.354C5.80749 11.4005 5.7523 11.4374 5.69156 11.4625C5.63082 11.4877 5.56572 11.5006 5.49998 11.5006C5.43423 11.5006 5.36913 11.4877 5.30839 11.4625C5.24766 11.4374 5.19247 11.4005 5.14598 11.354L2.14598 8.354C2.09941 8.30755 2.06247 8.25238 2.03727 8.19163C2.01206 8.13089 1.99908 8.06577 1.99908 8C1.99908 7.93423 2.01206 7.86911 2.03727 7.80837C2.06247 7.74762 2.09941 7.69245 2.14598 7.646L5.14598 4.646C5.23986 4.55211 5.3672 4.49937 5.49998 4.49937C5.63275 4.49937 5.76009 4.55211 5.85398 4.646C5.94787 4.73989 6.00061 4.86722 6.00061 5C6.00061 5.13278 5.94787 5.26011 5.85398 5.354L3.70698 7.5H9.49998C9.63259 7.5 9.75976 7.55268 9.85353 7.64645C9.9473 7.74021 9.99998 7.86739 9.99998 8Z" fill="#727221"/>
                </svg>                    
            </span>
            Regresar
            
        </a>
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

    {/* <!-- Collapsibles --> */}
    <Accordion />
    <div className="p-5 md:px-20 lg:px-10">
        <div className="border-b-2 border-green3">
            <a className="flex justify-between w-full px-5 py-3 bg-gray-600 text-white border-b border-green2 rounded-t-2xl">
                Introducción
                <span className="rotate-180 bg-green2 rounded-full flex justify-center align-center w-6 h-6">
                    <svg className="stroke-white w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>      
                </span>
            </a>
            <div className="px-6 py-5 bg-yellow-50/60 text-gray-600 space-y-4">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <div className="border-b border-green3">
            <a className="flex justify-between w-full px-5 py-3 bg-green3/20 text-gray-600 font-bold rounded-none border-none border-green2">
                Dos
                <span className="bg-green3 rounded-full flex justify-center align-center w-6 h-6">
                    <svg className="stroke-white w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>      
                </span>
            </a>
        </div>
        <div className="border-b border-green3 rounded-b-2xl overflow-hidden">
            <a className="flex justify-between w-full px-5 py-3 bg-green3/20 text-gray-600 font-bold rounded-none border-none border-green2">
                Tres
                <span className="bg-green3 rounded-full flex justify-center align-center w-6 h-6">
                    <svg className="stroke-white w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>      
                </span>
            </a>
        </div>
    </div>


    <Footer/>
</div>
  
      
</div>
  );
};

export default InfoKits;

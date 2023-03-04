import { HiPlay } from "react-icons/hi2";

const CtaFloating = ({urlMarket,onhandleClickMarket}) => {
  
    return (
        <div className="fixed bottom-3 right-3 z-50">
            
            <button onClick={onhandleClickMarket} className="group flex justify-center items-center">
                <span className="transition-all bg-white/80 py-2 pl-4 pr-6 rounded-l-2xl text-gray-500 font-bold leading-none text-right shadow-lg group-hover:bg-white group-hover:text-blue-600">
                    Conoce más<br/>de este Kit</span>
                <span className="transition-all duration-500 bg-green3 rounded-full w-[64px] h-[64px] flex items-center justify-center -ml-4 group-hover:bg-blue-600">
                    <HiPlay className='group-hover:fill-white w-7 h-10 transition-all duration-500' />                   
                </span>
            </button>
        </div>
        );
    };
    
export default CtaFloating;
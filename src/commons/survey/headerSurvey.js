import imgLogo from "../../assets/logoYourVoice.png";
import LogoBizz from "../../assets/company.png"

const HeaderSurvey = ({ data }) => {
    const renderClientLogo = () => {
        if (data != null)
            return <div className="border border-r-0 border-slate-300 p-3 rounded-l-lg lg:-mr-9">
                {/* <img src= alt="Company name" className="w-2/4 lg:w-5/12" /> */}
                <img src={`https://platform.openmindintelligence.com/logoCliente/${data.logoCliente}`} className="w-full max-w-[200px] max-h-[70px] md:max-w-[180px] m-auto"/>
                </div>;
    }
    const renderHelpButton = () => {
        if (data != null)
            return 
            <div className="pr-10">
                <a href="#!">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-8 h-8 stroke-slate-400 hover:stroke-YVmagenta">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </a>
            </div>;
    }
    const renderTitle = () => {
        if (data != null)
            return 
            <div className='hidden md:block border-l border-slate-300 pl-12 ml-12 w-full max-w-[250px]'>
                <h3 className="font-bold text-base leading-5 text-slate-700">
                Encuesta Clima Organizacional Mi Compañía
                </h3>
            </div>;
    }


    return (
        <>
            <div className='w-full pt-5 pb-9 pl-5 flex items-center gap-12 md:gap-5 md:pl-10 lg:w-full lg:pb-8 lg:pt-12'>
                <div className="flex-grow flex items-center">
                    <img src={imgLogo} alt="Imagen Logo Your Voice" className="w-full max-w-[130px] md:max-w-[170px]" />
                    {renderTitle()}
                    <div className='hidden md:block border-l border-slate-300 pl-12 ml-12 w-full max-w-[250px]'>
                        <h3 className="font-bold text-base leading-5 text-slate-700">
                        Encuesta Clima Organizacional Mi Compañía
                        </h3>
                    </div>
                </div>
                
                {renderClientLogo()}
                {renderHelpButton()}
                <div className="pr-10">
                    <a href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-8 h-8 stroke-slate-400 hover:stroke-YVmagenta">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                    </a>
                </div>
                
                
                
            </div>
        </>
    );
}

export default HeaderSurvey;
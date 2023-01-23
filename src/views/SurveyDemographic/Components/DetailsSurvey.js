
const DetailsSurvey = ({survey}) => {
    if (survey != null) {
        return (
            <>
                <div className='flex flex-col gap-4 border border-slate-700 rounded-lg py-6 px-4 my-4 text-slate-700 lg:w-72 lg:bg-black lg:text-slate-200 lg:my-0'>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 flex justify-center items-center bg-slate-100 rounded-full rounded-bl-lg lg:bg-slate-900'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>

                        </div>
                        <div>
                            <p>Fecha de envío:</p>
                            <p className='font-bold'>{survey.fechaEnvio}</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 flex justify-center items-center bg-slate-100 rounded-full rounded-bl-lg lg:bg-slate-900'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <div>
                            <p>Preguntas:</p>
                            <p className='font-bold'>{survey.cantidadPreguntas}</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 flex justify-center items-center bg-slate-100 rounded-full rounded-bl-lg lg:bg-slate-900'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p>Tiempo respuesta:</p>
                            <p className='font-bold'>{Math.round(survey.cantidadPreguntas / 4)} min aprox.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default DetailsSurvey;
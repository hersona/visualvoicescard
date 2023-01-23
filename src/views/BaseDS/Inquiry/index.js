import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../UI-components/Button';

import LogoYV from  "../../assets/logoYourVoice.png"
import LogoBizz from  "../../assets/company.png"

const Inquiry = () => {
  const navigate = useNavigate();

  const handleQuestionsClick = () => {
    navigate(`/questions/`);
  };
  const handleHomeClick = () => {
    navigate(`/`);
  };

  return (
   <div className="w-10/12 max-w-screen-2xl mx-auto flex flex-col items-center lg:items-start lg:pb-32">
    <div className='flex justify-between items-center w-full pt-12 pb-9 lg:pb-1'>
   
        <div className='w-full px-11 pt-12 pb-9 flex items-center flex-row-reverse justify-center gap-12 md:w-1/2 lg:w-full lg:pb-1 lg:justify-end'>
            <div className='hidden md:block border-l border-slate-300 pl-12'>
                <h3 className='font-bold text-base text-slate-700 leading-5'>Encuesta Clima Organizacional</h3>
                <h1 className='font-bold text-xl  text-slate-700'>Mi Compañía</h1>
            </div>
            <img src={LogoYV} alt="Imagen Logo Your Voices" className="w-1/4 lg:w-1/12" />
            <div className='border-l h-10'></div>
            <img src={LogoBizz} alt="Company name" className="w-2/4 lg:w-3/12" />
            
        </div>
      
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-8 h-8 stroke-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
        </div>
      

    </div>
    <div className='pt-6 w-full text-slate-500'>
        <div className='md:hidden'>
            <h3 className='font-bold text-base leading-5 text-slate-700'>Encuesta Clima Organizacional</h3>
            <h1 className='font-bold text-xl leading-6 text-slate-700'>Mi Compañía</h1>
        </div>
        
         <div className='flex flex-col mt-4 w-full lg:flex-row-reverse lg:gap-5 lg:items-start'>
            <div className='flex flex-col gap-4 border border-slate-700 rounded-lg py-6 px-4 my-4 text-slate-700 lg:w-72 lg:bg-black lg:text-slate-200 lg:my-0'>
                <div className='flex gap-4'>
                    <div className='w-10 h-10 flex justify-center items-center bg-slate-100 rounded-full rounded-bl-lg lg:bg-slate-900'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>

                    </div>
                    <div>
                        <p>Fecha de envío:</p>
                        <p className='font-bold'>2022/12/09</p>
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
                        <p className='font-bold'>103</p>
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
                        <p className='font-bold'>25min aprox.</p>
                    </div>
                </div>
            </div>

            <div className='rounded-xl w-full lg:p-14 lg:pt-10 lg:shadow-2xl lg:shadow-cyan-500/30'>
                <p className='text-YVmagenta text-2xl leading-7 font-bold mt-10 mb-3 lg:mt-0'>
                Complete los datos a continuación para comenzar a responder la encuesta.
                </p>
                
                <div className='flex flex-col gap-8 mt-8'>
                    <label class="block">
                        <span class="text-slate-700 font-bold text-lg leading-none">Área</span>
                        <select class="
                            block
                            w-full
                            mt-0
                            px-0.5
                            border-0 border-b border-slate-500
                            focus:ring-0 focus:border-YVmagenta
                            hover:border-YVmagenta
                        ">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        </select>
                    </label>
                    <label class="block">
                        <span class="text-slate-700 font-bold text-lg leading-none">Escolaridad</span>
                        <select class="
                            block
                            w-full
                            mt-0
                            px-0.5
                            border-0 border-b border-slate-500
                            focus:ring-0 focus:border-YVmagenta
                            hover:border-YVmagenta
                        ">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        </select>
                    </label>
                    <label class="block">
                        <span class="text-slate-700 font-bold text-lg leading-none">Edad</span>
                        <select class="
                            block
                            w-full
                            mt-0
                            px-0.5
                            border-0 border-b border-slate-500
                            focus:ring-0 focus:border-YVmagenta
                            hover:border-YVmagenta
                        ">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        </select>
                    </label>
                    <label class="block">
                        <span class="text-slate-700 font-bold text-lg leading-none">Último nivel de estudios que alcanzó</span>
                        <select class="
                            block
                            w-full
                            mt-0
                            px-0.5
                            border-0 border-b border-slate-500
                            focus:ring-0 focus:border-YVmagenta
                            hover:border-YVmagenta
                        ">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        </select>
                    </label>
                </div>

            

            <div className="mt-16 flex flex-col justify-center items-center gap-3">
                <Button handleClick={handleQuestionsClick}>Guardar y Continuar</Button>
                <a href='#!' onClick={handleHomeClick} className='hover:text-YVmagenta hover:underline underline-offset-2'>Regresar</a>
            </div>
            </div>
        </div>


      
      

    </div>
    
   </div>
  );
};

export default Inquiry;
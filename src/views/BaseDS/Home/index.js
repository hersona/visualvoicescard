import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../commons/Button';

import LogoYV from  "../../../assets/logoYourVoice.png"
import LogoBizz from  "../../../assets/company.png"
import ImgPoll from  "../../../assets/team-working.jpg"

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate(`/`);
  };

  return (
   <div className="flex flex-col items-center lg:items-start lg:pl-16 lg:pr-9 lg:pb-32 lg:w-3/5">
    <div className='w-full px-11 pt-12 pb-9 flex items-center flex-row-reverse justify-center gap-5 md:w-1/2 lg:w-full lg:pb-1 lg:justify-between'>
      <img src={LogoYV} alt="Imagen Logo Your Voices" className="w-1/4 lg:w-2/12" />
      <div className='border-l h-10 lg:hidden'></div>
      <img src={LogoBizz} alt="Company name" className="w-2/4 lg:w-5/12" />
    </div>
    <div className='h-52 w-screen overflow-hidden flex items-center sm:w-3/4 sm:h-64 sm:rounded-2xl lg:rounded-none lg:fixed lg:top-0 lg:right-0 lg:h-screen lg:w-2/5'>
      <img src={ImgPoll} alt="Imagen de equipo de trabajo" className="object-cover w-full mt-1 lg:mt-0 lg:h-screen" />
    </div>
    <div className='px-11 py-12 text-slate-500'>
      
      <h3 className='font-bold text-base leading-5 text-slate-700'>Encuesta Clima Organizacional</h3>
      <h1 className='font-bold text-xl leading-6 text-slate-700'>Mi Compañía</h1>
      <p className='text-YVmagenta text-3xl font-bold mt-10 mb-3'>¡Bienvenid@!</p>
      
      <div className='space-y-4 mb-12'>
        <p>
          Como es de su conocimientos, la compañía actualmente está desarrollando la medición de clima organizacional 2021, esta tiene como objetivo conocer el grado de satisfacción de los colaboradores frente al ambientelaboral, tomando en cuenta diversos aspectos o temáticas de la compañía. En este sentido queremos solicitarle su participación en este proceso contestando la encuesta, tomando como referencia el último año de trabajo.
        </p>
        <p>
          La información que suministre será tratada de manera confidencial por nuestra firma consultora (<a className='text-sky-500 underline-offset-2 underline' href='#!'>Your Voice</a>), esta no será divulgada de manera escrita o electrónica. La información suministrada contribuirá al desarrollo y mejoramiento continuo de la organización.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center sm:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-YVcyan/50 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className='text-sm'>Continuar</p>
      </div>
      
      <p className='text-YVmagenta font-bold mt-8 mb-5 text-xl'>
        Antes de contestar tenga en cuenta las siguientes recomendaciones: 
      </p>
      
      
      <ul className='list-disc pl-5 space-y-4'>
        <li>Sea sincero y objetivo al contestar cada pregunta. </li>
        <li>Básese en su propia percepción, vivencia y experiencia de su trabajo, no califique pensando en la experiencia de otras personas.</li>
        <li>Recuerde que el link de acceso a la encuesta que encuentra en la parte inferior de este correo, es personal y construido para cada usuario. No lo comparta con otros.</li>
        <li>Al calificar cada una de las afirmaciones o ítems tenga en cuenta la escala de evaluación, esta es de 1 a 10 donde:
          <div className='flex flex-col mt-4 mb-6 gap-5 md:flex-row md:gap-10'>
            <div className='flex flex-row items-center gap-4 max-w-xs'>
              <div className='p-8 w-[65px] h-[65px] bg-gray-200 flex justify-center items-center rounded-lg text-2xl text-slate-700 font-extrabold'>1</div>
              <p>
                Es la <strong>MENOR</strong> calificación que se puede otorgar a un enunciado.
              </p>
            </div>
            <div className='flex flex-row items-center gap-4 max-w-xs'>
              <div className='p-8 w-[65px] h-[65px] bg-gray-200 flex justify-center items-center rounded-lg text-2xl text-slate-700 font-extrabold'>10</div>
              <p>
              Es la <strong>MAYOR</strong> calificación que se puede otorgar a un enunciado
              </p>
            </div>
          </div>
        </li>
    
        <li>La encuesta estará disponible hasta el <strong>31 de Diciembre de 2022</strong>, por favor responda lo antes posible.</li>
      </ul>

      <div className='border-t border-solid border-gray-300 pt-10 mt-11 lg:w-1/2 lg:mx-auto lg:pt-5'>
        <p className='italic'>
          Si tiene preguntas respecto a este proceso no dude en dirigirse al área de Gestión Humana.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <Button handleClick={handleStartClick}>Comenzar</Button>
      </div>
      

    </div>
    
   </div>
  );
};

export default Home;
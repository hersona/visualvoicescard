import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../UI-components/Button';

import LogoYV from  "../../assets/logoYourVoice.png"

const Questions = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate(`/inquiry/`);
  };
  const handleHomeClick = () => {
    navigate(`/`);
  };

  return (
   <div className="w-11/12 max-w-screen-2xl mx-auto flex flex-col items-center lg:items-start lg:pb-32">
    <div className='flex justify-between items-center w-full pt-8 px-2 lg:pb-1'>
        <div className='flex justify-start items-center gap-12'>
            <img src={LogoYV} alt="Imagen Logo Your Voices" className="max-w-[140px] lg:max-w-[180px]" />
            <div className='hidden md:block border-l border-slate-300 pl-12'>
                <h3 className='font-bold text-base text-slate-700 leading-5'>Encuesta Clima Organizacional</h3>
                <h1 className='font-bold text-xl  text-slate-700'>Mi Compañía</h1>
            </div>
        </div>
      

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-8 h-8 stroke-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>

    </div>
    <div className='pt-6 pb-12 w-full text-slate-500'>
        <div className='px-2 md:hidden'>
            <h3 className='font-bold text-base leading-5 text-slate-700'>Encuesta Clima Organizacional</h3>
            <h1 className='font-bold text-xl leading-6 text-slate-700'>Mi Compañía</h1>
        </div>
        
         
            <div className='flex flex-col justify-between rounded-xl w-full mt-4 shadow-2xl shadow-cyan-500/30 p-5 md:flex-col-reverse md:gap-10 lg:p-14 lg:pt-10'>
                <div className='mb-12'>
                    <div onClick={handleHomeClick} className='flex justify-center items-center w-[40px] h-[40px] bg-slate-100 rounded-full rounded-tl-xl hover:bg-slate-400 hover:text-slate-50 md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-4 mt-4 md:flex-row'>
                            <div className='flex flex-col items-center gap-3 md:flex-row md:w-7/12'>
                                <div className='h-[50px] w-[50px] flex items-center justify-center border-2 border-YVcyan rounded-full text-xl font-bold text-YVcyan md:border-slate-300 md:text-slate-500 md:border'>
                                    1
                                </div>
                                <p className='md:w-full'>
                                Los objetivos de la compañía son claros y conocidos...
                                </p>
                            </div>
                            <div className="w-full max-w-sm mx-auto grid grid-cols-5 justify-items-center md:grid-cols-10 gap-1 md:w-5/12 md:max-w-none">
                                {[ '1', '2', '3', '4', '5', '6', '7', '8', '9', ['10'],
                                    
                                ].map(([number]) => (
                                    <div className='border w-11 h-11 md:w-8 md:h-8 flex justify-center items-center hover:bg-YVcyan hover:text-white hover:scale-125 transition-all duration-500 cursor-pointer'>{number}</div>
                                ))}
                                
                            </div>                
                        </div>

                        <div className='hidden flex-col gap-4 mt-4 md:flex-row md:flex'>
                            <div className='flex flex-col items-center gap-3 md:flex-row md:w-7/12'>
                                <div className='h-[50px] w-[50px] flex items-center justify-center border-2 border-YVcyan rounded-full text-xl font-bold text-YVcyan md:border-slate-300 md:text-slate-500 md:border'>
                                    888
                                </div>
                                <p className='md:w-full'>
                                La compañía cuenta con los espacios de comunicación para estar informado del avance de los objetivos estratégicos.
                                </p>
                            </div>
                            
                            <label className="block w-full md:w-5/12">
                                <select className="
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
                    </div>
                    <div className="mt-16 flex-col justify-center items-center gap-3 hidden md:flex">
                        <Button handleClick={handleStartClick}>Guardar y Continuar</Button>
                        <a href='#!' onClick={handleHomeClick} className='hover:text-YVmagenta hover:underline underline-offset-2'>Regresar</a>
                    </div>

                </div>
             

                <div className='flex flex-col justify-center items-center gap-1 md:flex-row-reverse md:justify-between'>
                    <div className='text-sm md:bg-cyan-50 rounded-full px-4 pt-1 pb-1'>1 / 100</div>
                    <div className='relative w-full bg-cyan-50 rounded-md px-3 pt-1 pb-2 md:w-9/12 items-center gap-4 md:flex md:rounded-full md:px-5'>
                        <div className='flex justify-between items-center'>
                            <p className='w-max'>Tu progreso</p>
                            <p className='font-bold text-xl text-slate-700 md:hidden'>50%</p>
                        </div>
                        <div className='bg-white rounded-full mt-1 w-full'>
                        <div className='bg-gradient-to-r from-YVmagenta via-YVyellow to-YVcyan h-2 rounded-full w-1/2'></div>
                        </div>
                        <p className='font-bold text-xl text-slate-700 w-max hidden md:block'>50%</p>

                        <div className='bg-black/80 max-w-[220px] leading-5 text-white p-3 rounded-xl flex items-center gap-2 absolute top-0 -mt-16 left-1/2 -translate-x-1/2'>
                            <p>Vas muy bien, ¡llegaste a la mitad!</p>
                            <div className='w-[40px] h-[40px]'>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.7957 17.5215C35.619 10.1501 33.8793 4.50946 32.8818 2.8915C32.4869 2.25025 31.7269 2.07212 31.0263 2.29181C29.1798 2.87368 24.1952 6.94681 21.9924 12.6468M5.20414 17.5215C2.38085 10.1501 4.12054 4.50946 5.11804 2.8915C5.51289 2.25025 6.27289 2.07212 6.97351 2.29181C8.82007 2.87368 13.8046 6.94681 16.0074 12.6468" fill="#FFC022"/>
                                <path d="M33.8764 21.0069C33.342 13.2941 28.0369 7.80786 19 7.80786C9.96312 7.80786 4.65796 13.2941 4.12359 21.0069C3.81187 25.5016 5.62281 29.3224 9.19718 31.7568C9.19718 31.7568 12.822 34.6899 19 34.7671C25.178 34.6899 28.8028 31.7568 28.8028 31.7568C32.3742 29.3224 34.1881 25.5016 33.8764 21.0069Z" fill="#FFC022"/>
                                <path opacity="0.47" d="M16.0668 13.3653C16.4022 13.6503 17.0821 13.6087 17.4769 13.1515C17.9549 12.5963 18.4537 10.726 18.1419 7.83447C16.7555 7.88494 15.4433 8.08385 14.2202 8.41932C15.2088 10.0403 15.4463 12.8368 16.0668 13.3653ZM21.933 13.3653C21.5976 13.6503 20.9177 13.6087 20.5229 13.1515C20.0449 12.5963 19.5462 10.726 19.8579 7.83447C21.2443 7.88494 22.5565 8.08385 23.7796 8.41932C22.791 10.0403 22.5535 12.8368 21.933 13.3653Z" fill="#FF7043"/>
                                <path d="M16.6132 22.8504C16.5983 22.0013 17.8185 21.5917 18.9733 21.5738C20.1282 21.556 21.3691 21.9301 21.384 22.7792C21.3988 23.6282 19.9411 24.7504 19.0238 24.7504C18.1094 24.7504 16.628 23.6995 16.6132 22.8504ZM19.7333 26.217C20.4577 26.9206 21.568 27.1373 23.2543 26.5613C24.2636 26.217 25.0979 25.3442 25.6471 24.6138C25.8519 24.3437 26.2883 24.5278 26.2379 24.8632C26.1458 25.4629 26.0033 26.1279 25.7807 26.5613C25.1958 27.6984 23.9846 28.7523 21.2474 28.4732C20.4963 28.396 19.7393 28.399 18.9911 28.5059C16.3015 28.8948 14.9121 28.7849 14.1491 28.5267C13.8047 28.4079 13.876 27.9062 14.2382 27.8913C15.0011 27.8617 16.0847 27.7785 17.0021 27.5203C17.8452 27.2828 18.5933 26.9681 18.7982 26.5198C19.003 26.0715 19.5641 26.0507 19.7333 26.217Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0266 24.1348C19.3027 24.1299 19.5306 24.3496 19.5356 24.6257C19.5464 25.2251 19.6604 25.8254 19.8694 26.3872C19.9657 26.646 19.8339 26.9338 19.5751 27.0301C19.3163 27.1264 19.0284 26.9946 18.9322 26.7358C18.684 26.0685 18.5486 25.3566 18.5357 24.6438C18.5307 24.3677 18.7505 24.1398 19.0266 24.1348Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4852 29.7816C17.625 29.5435 17.9314 29.4638 18.1695 29.6036C19.1942 30.2052 20.3913 30.5053 21.5791 30.4613C21.855 30.4511 22.087 30.6665 22.0972 30.9425C22.1075 31.2184 21.892 31.4504 21.6161 31.4607C20.2389 31.5117 18.8531 31.1646 17.6632 30.4659C17.4251 30.3261 17.3454 30.0197 17.4852 29.7816Z" fill="#F0592B"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.2324 19.7938C37.2326 19.7938 37.2328 19.7938 37.1602 20.2861L37.2324 19.7938C37.5056 19.834 37.6948 20.0882 37.6545 20.3614C37.6143 20.6342 37.3608 20.8229 37.088 20.7833C37.0879 20.7833 37.0881 20.7833 37.088 20.7833L37.0869 20.7831M37.0869 20.7831L37.0851 20.7829L37.0676 20.7807C37.0508 20.7786 37.0239 20.7756 36.9875 20.7721C36.9147 20.7653 36.8039 20.7569 36.6598 20.752C36.3714 20.7421 35.9508 20.7461 35.4352 20.8032C34.4037 20.9175 32.9967 21.244 31.5057 22.0944C31.2658 22.2312 30.9605 22.1476 30.8237 21.9077C30.6868 21.6679 30.7704 21.3625 31.0103 21.2257C32.6424 20.2948 34.1863 19.9355 35.325 19.8093C35.8944 19.7462 36.3637 19.7413 36.694 19.7526C36.8592 19.7582 36.9899 19.768 37.0812 19.7765C37.1269 19.7808 37.1627 19.7849 37.1882 19.788L37.2185 19.7918L37.2277 19.7931L37.2307 19.7935L37.2324 19.7938M0.801807 21.3979L0.803667 21.3976L0.821084 21.3948C0.837786 21.3922 0.86456 21.3883 0.90084 21.3837C0.973416 21.3744 1.08391 21.3623 1.22781 21.3526C1.51575 21.3331 1.9364 21.3231 2.45387 21.3629C3.48896 21.4427 4.90664 21.7217 6.42611 22.5211C6.67049 22.6497 6.97283 22.5558 7.10141 22.3114C7.22998 22.0671 7.1361 21.7647 6.89172 21.6361C5.22868 20.7612 3.67315 20.4539 2.53067 20.3659C1.95935 20.3219 1.49011 20.3326 1.16037 20.3549C0.995427 20.366 0.865129 20.3801 0.774123 20.3917C0.728611 20.3975 0.692896 20.4027 0.667558 20.4067L0.637392 20.4115L0.628273 20.4131L0.625228 20.4136L0.624087 20.4139C0.623876 20.4139 0.623201 20.414 0.712504 20.906L0.624087 20.4139C0.352385 20.4632 0.171223 20.7236 0.220543 20.9953C0.269843 21.2669 0.53023 21.447 0.801807 21.3979ZM0.800789 21.3981C0.800633 21.3981 0.800616 21.3981 0.800789 21.3981V21.3981ZM37.5047 23.6024C37.5049 23.6025 37.5051 23.6026 37.3142 24.0647L37.5047 23.6024C37.76 23.7078 37.8818 24.0003 37.7764 24.2556C37.6711 24.5106 37.3791 24.6321 37.124 24.5271C37.124 24.5271 37.124 24.5271 37.124 24.5271L37.1214 24.5261L37.1053 24.5198C37.0901 24.5139 37.0657 24.5046 37.0326 24.4928C36.9664 24.469 36.8655 24.4346 36.7331 24.3948C36.4683 24.3152 36.0784 24.2144 35.5898 24.1339C34.6115 23.9728 33.2443 23.8941 31.6915 24.2243C31.4214 24.2817 31.1559 24.1093 31.0984 23.8392C31.041 23.5691 31.2134 23.3035 31.4835 23.2461C33.1844 22.8845 34.6806 22.9707 35.7523 23.1472C36.2886 23.2356 36.7204 23.3468 37.0209 23.4371C37.1712 23.4823 37.2889 23.5223 37.3707 23.5516C37.4115 23.5663 37.4435 23.5784 37.466 23.5871L37.4927 23.5976L37.5007 23.6008L37.5034 23.6019L37.5047 23.6024ZM0.892143 25.1406L0.894141 25.1397L0.909943 25.1329C0.925014 25.1265 0.94908 25.1165 0.981753 25.1035C1.04711 25.0774 1.14682 25.0397 1.27776 24.9954C1.5398 24.907 1.92598 24.793 2.41166 24.6961C3.38387 24.502 4.74748 24.3773 6.31018 24.655C6.58207 24.7033 6.84164 24.5221 6.88995 24.2502C6.93826 23.9783 6.75702 23.7187 6.48514 23.6704C4.77331 23.3662 3.28099 23.5028 2.21589 23.7154C1.68292 23.8218 1.2551 23.9476 0.95781 24.048C0.809088 24.0982 0.692789 24.1422 0.612067 24.1743C0.571698 24.1904 0.540202 24.2035 0.517971 24.2129L0.491612 24.2243L0.48373 24.2278L0.481129 24.229L0.480165 24.2294C0.47999 24.2295 0.479427 24.2298 0.685674 24.6849L0.480165 24.2294C0.228638 24.3434 0.116387 24.64 0.230355 24.8916C0.344281 25.143 0.640677 25.2544 0.892143 25.1406ZM30.6548 25.7838C30.6695 25.508 30.9049 25.2964 31.1807 25.3111C32.7293 25.3935 34.1162 25.8165 35.1104 26.2141C35.609 26.4135 36.0128 26.6081 36.2936 26.7539C36.434 26.8268 36.544 26.8876 36.6199 26.9308C36.6578 26.9525 36.6873 26.9697 36.7078 26.9819L36.7318 26.9963L36.7387 27.0005L36.7409 27.0018L36.7419 27.0024C36.7421 27.0025 36.7422 27.0026 36.5234 27.3579L36.7419 27.0024C36.9771 27.1472 37.0506 27.4553 36.9058 27.6905C36.7611 27.9255 36.4533 27.9988 36.2182 27.8543C36.2182 27.8543 36.2183 27.8543 36.2182 27.8543L36.2144 27.852L36.1975 27.8419C36.1818 27.8326 36.1575 27.8183 36.1248 27.7997C36.0594 27.7624 35.9609 27.7079 35.8329 27.6414C35.5765 27.5084 35.2027 27.328 34.7391 27.1426C33.8088 26.7706 32.5328 26.3845 31.1275 26.3096C30.8517 26.295 30.6401 26.0595 30.6548 25.7838ZM7.4004 26.1729C7.42477 26.448 7.22155 26.6907 6.94649 26.7151C5.54362 26.8394 4.28076 27.269 3.3633 27.6723C2.90604 27.8733 2.53841 28.0661 2.28665 28.2076C2.16086 28.2783 2.06427 28.3361 2.00016 28.3755C1.96812 28.3952 1.94422 28.4103 1.92887 28.4201L1.91232 28.4308L1.90896 28.433C1.9089 28.433 1.90902 28.4329 1.90896 28.433C1.90905 28.4329 1.90894 28.433 1.63282 28.0161L1.3567 27.5993C1.12648 27.7518 1.06348 28.062 1.21597 28.2922C1.36843 28.5224 1.67877 28.5853 1.90896 28.433M1.63282 28.0161C1.3567 27.5993 1.35658 27.5994 1.3567 27.5993L1.35795 27.5985L1.36006 27.5971L1.36681 27.5927L1.39035 27.5775C1.41045 27.5646 1.4393 27.5464 1.4765 27.5236C1.55087 27.4779 1.65868 27.4135 1.7966 27.3359C2.07226 27.1809 2.46926 26.9729 2.96089 26.7568C3.9412 26.3259 5.31311 25.8559 6.85821 25.719C7.13328 25.6946 7.37602 25.8979 7.4004 26.1729" fill="#9E9E9E"/>
                                <path d="M27.9478 19.2431C27.9478 20.1277 27.6657 21.4429 27.2293 21.5735C27.0957 21.6121 26.9354 21.5913 26.8256 21.5023C26.2733 16.0314 24.216 19.6616 24.0913 19.5666C23.0434 18.7799 24.5812 16.6098 25.7895 16.586C26.9562 16.5682 27.9478 17.7557 27.9478 19.2431ZM10.0492 19.2431C10.0492 20.2138 10.2035 21.2321 10.6399 21.3627C10.7735 21.4013 10.9338 21.3806 11.0437 21.2915C12.5756 20.0506 10.6399 17.4143 13.9056 19.5666C14.9535 18.7799 13.4157 16.6098 12.2074 16.586C11.0407 16.5682 10.0492 17.7557 10.0492 19.2431Z" fill="black"/>
                                <path d="M27.3601 10.7557C26.9029 10.3727 26.9147 9.7552 27.1819 9.22379C27.8232 7.94426 29.358 6.61723 29.9013 6.18676C30.7919 5.4802 31.4807 5.2427 31.7449 6.37973C32.2347 8.4816 32.1961 11.3346 31.6707 12.908C31.4866 13.4632 30.9166 13.7571 30.4772 13.3741L27.3601 10.7557ZM10.6401 10.7557C11.0972 10.3727 11.0854 9.7552 10.8182 9.22379C10.1769 7.94426 8.64208 6.61723 8.0988 6.18676C7.20818 5.4802 6.51943 5.2427 6.25521 6.37973C5.76536 8.4816 5.80396 11.3346 6.32943 12.908C6.51349 13.4632 7.08349 13.7571 7.52286 13.3741L10.6401 10.7557Z" fill="#FFD1D1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                </div>

            

                
            </div>
        


      
      

    </div>
    
   </div>
  );
};

export default Questions;
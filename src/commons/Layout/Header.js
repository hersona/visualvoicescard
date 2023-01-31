import opencardsLogo from "../../assets/opencards.png";
import Button from "../Button";

const Header = () => {
    
    return (
        <header className="p-5 md:px-20 lg:px-10">
                <div className="flex justify-between items-center">
                    <img src={opencardsLogo} alt="" />
                    <div className="rounded-full bg-gray-100 py-2 px-3 flex gap-3 items-center">
                        <a href="#!">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#5D863A" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                        </a>
                        <a href="#!">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8H24V9.6H8V8ZM8 15.2H24V16.8H8V15.2ZM8 22.4H24V24H8V22.4Z" fill="#59595A"/>
                            </svg>     
                        </a>
                    
                    </div>
                </div>
            {/* Menu */}

                <div className="absolute z-50 right-0 top-0 mr-24 mt-20 hidden">
                    <div className="bg-white shadow-2xl w-[300px] p-6 rounded-lg">
                        <div className="flex justify-between items-center">
                            <select className="text-green4 border border-green3 py-2 px-3 pr-8 max-w-max rounded-xl shadow-md gap-2 flex items-center justify-center hover:shadow-none">
                                <option>Español</option>
                                <option>English</option>
                            </select>

                          
                            <a href="#!" className="hover:bg-slate-200 rounded-full transition-all duration-150">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                    <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z" fill="black"/>
                                    </g>
                                </svg>                            
                            </a>
                        </div>
                        <ul className="text-right mt-8">
                            <li className="border-b border-green3"><a className="block py-4 pr-2 hover:pr-3 text-gray-500 transition-all duration-500 ease-out">Acerca de Open Cards</a></li>
                            <li className="border-b border-green3"><a className="block py-4 pr-2 hover:pr-3 text-gray-500 transition-all duration-500 ease-out">Acerca de Openmind</a></li>
                            <li className="border-b border-green3"><a className="block py-4 pr-2 hover:pr-3 text-gray-500 transition-all duration-500 ease-out">Ayuda</a></li>
                        </ul>
                        <Button>
                            Comprar 
                            <span>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_79_324)">
                                <path d="M0.625 1.75C0.45924 1.75 0.300269 1.81585 0.183058 1.93306C0.065848 2.05027 0 2.20924 0 2.375C0 2.54076 0.065848 2.69973 0.183058 2.81694C0.300269 2.93415 0.45924 3 0.625 3H2.0125L2.51375 5.00875L4.38625 14.99C4.41306 15.1332 4.48907 15.2626 4.60114 15.3557C4.71321 15.4488 4.85429 15.4999 5 15.5H6.25C5.58696 15.5 4.95107 15.7634 4.48223 16.2322C4.01339 16.7011 3.75 17.337 3.75 18C3.75 18.663 4.01339 19.2989 4.48223 19.7678C4.95107 20.2366 5.58696 20.5 6.25 20.5C6.91304 20.5 7.54893 20.2366 8.01777 19.7678C8.48661 19.2989 8.75 18.663 8.75 18C8.75 17.337 8.48661 16.7011 8.01777 16.2322C7.54893 15.7634 6.91304 15.5 6.25 15.5H15C14.337 15.5 13.7011 15.7634 13.2322 16.2322C12.7634 16.7011 12.5 17.337 12.5 18C12.5 18.663 12.7634 19.2989 13.2322 19.7678C13.7011 20.2366 14.337 20.5 15 20.5C15.663 20.5 16.2989 20.2366 16.7678 19.7678C17.2366 19.2989 17.5 18.663 17.5 18C17.5 17.337 17.2366 16.7011 16.7678 16.2322C16.2989 15.7634 15.663 15.5 15 15.5H16.25C16.3957 15.4999 16.5368 15.4488 16.6489 15.3557C16.7609 15.2626 16.8369 15.1332 16.8638 14.99L18.7388 4.99C18.7556 4.8998 18.7525 4.80698 18.7294 4.71815C18.7064 4.62931 18.6641 4.54664 18.6055 4.476C18.5469 4.40537 18.4735 4.3485 18.3904 4.30944C18.3074 4.27038 18.2168 4.25008 18.125 4.25H3.6125L3.10625 2.22375C3.07251 2.08848 2.99452 1.96837 2.88466 1.88253C2.77481 1.79669 2.63941 1.75004 2.5 1.75H0.625ZM7.5 18C7.5 18.3315 7.3683 18.6495 7.13388 18.8839C6.89946 19.1183 6.58152 19.25 6.25 19.25C5.91848 19.25 5.60054 19.1183 5.36612 18.8839C5.1317 18.6495 5 18.3315 5 18C5 17.6685 5.1317 17.3505 5.36612 17.1161C5.60054 16.8817 5.91848 16.75 6.25 16.75C6.58152 16.75 6.89946 16.8817 7.13388 17.1161C7.3683 17.3505 7.5 17.6685 7.5 18ZM16.25 18C16.25 18.3315 16.1183 18.6495 15.8839 18.8839C15.6495 19.1183 15.3315 19.25 15 19.25C14.6685 19.25 14.3505 19.1183 14.1161 18.8839C13.8817 18.6495 13.75 18.3315 13.75 18C13.75 17.6685 13.8817 17.3505 14.1161 17.1161C14.3505 16.8817 14.6685 16.75 15 16.75C15.3315 16.75 15.6495 16.8817 15.8839 17.1161C16.1183 17.3505 16.25 17.6685 16.25 18ZM11.25 7.375V9.25H13.125C13.2908 9.25 13.4497 9.31585 13.5669 9.43306C13.6842 9.55027 13.75 9.70924 13.75 9.875C13.75 10.0408 13.6842 10.1997 13.5669 10.3169C13.4497 10.4342 13.2908 10.5 13.125 10.5H11.25V12.375C11.25 12.5408 11.1842 12.6997 11.0669 12.8169C10.9497 12.9342 10.7908 13 10.625 13C10.4592 13 10.3003 12.9342 10.1831 12.8169C10.0658 12.6997 10 12.5408 10 12.375V10.5H8.125C7.95924 10.5 7.80027 10.4342 7.68306 10.3169C7.56585 10.1997 7.5 10.0408 7.5 9.875C7.5 9.70924 7.56585 9.55027 7.68306 9.43306C7.80027 9.31585 7.95924 9.25 8.125 9.25H10V7.375C10 7.20924 10.0658 7.05027 10.1831 6.93306C10.3003 6.81585 10.4592 6.75 10.625 6.75C10.7908 6.75 10.9497 6.81585 11.0669 6.93306C11.1842 7.05027 11.25 7.20924 11.25 7.375Z" fill="#F5F5F5"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_79_324">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>                      
                            </span>
                        </Button>
                    
                    </div>
                </div>
            
            {/* END Menu */}
            {/* Search */}
                <div className="flex w-full gap-0 shadow-md rounded-xl rounded-tr-md mt-5">
                    <span className="bg-green3/25 p-2 rounded-xl rounded-tr-md ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#5D863A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    </span>
                    <input placeholder="Buscar Kit" className="bg-white w-full rounded-xl rounded-tr-md px-3 border-white" type="text" />
                </div>
            </header>
    );
}

export default Header;
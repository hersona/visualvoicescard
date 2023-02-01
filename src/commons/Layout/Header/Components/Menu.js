
import Button from "../../../Button";
import {HiOutlineShoppingCart } from "react-icons/hi2";

const Menu = ({ children }) => {
    
    return (
        <div className={"absolute z-50 right-0 top-0 -mr-2 -mt-2 lg:mr-0 lg:-mt-18"}>
            <div className="bg-white shadow-2xl w-[300px] p-6 rounded-lg">
                <div className="flex justify-between items-center">
                    <select className="text-green4 border border-green3 py-2 px-3 pr-8 max-w-max rounded-xl shadow-md gap-2 flex items-center justify-center hover:shadow-none transition-all duration-500">
                        <option>Español</option>
                        <option>English</option>
                    </select>
                    {children}

                </div>
                <ul className="text-right mt-8">
                    <li className="border-b border-green3"><a className="block py-4 pr-2 hover:pr-3 text-gray-500 transition-all duration-500 ease-out">Acerca de Open Cards</a></li>
                    <li className="border-b border-green3"><a className="block py-4 pr-2 hover:pr-3 text-gray-500 transition-all duration-500 ease-out">Acerca de Openmind</a></li>
                    <li className="border-b border-green3"><a className="block py-4 pr-2 hover:pr-3 text-gray-500 transition-all duration-500 ease-out">Ayuda</a></li>
                </ul>
                
                <Button>
                    Comprar 
                    <HiOutlineShoppingCart className="stroke-white w-5 h-5"/>
                </Button>
            
            </div>
        </div>
    );
}

export default Menu;
import {useState} from 'react';
import opencardsLogo from "../../../assets/opencards.png";

import Menu from "../Header/Components/Menu";
import SearchBox from "../Header/Components/SearchBox";

import { HiOutlineBars3BottomRight, HiOutlineMagnifyingGlass, HiXMark } from "react-icons/hi2";

const Header = () => {
    function handleMenu() {
        setMenuState( menuState => !menuState);
    }
    const [menuState, setMenuState] = useState(false);
    
    let toogleMenu = menuState ? 'opacity-100' : 'hidden';

    function handleSearch() {
        setSearchState( searchState => !searchState);
    }
    const [searchState, setSearchState] = useState(false);
    let toogleSearch = searchState ? 'hidden' : '';
    return (
        <header className="p-5 md:px-20 lg:px-10">
            <div className="flex justify-between items-center">
                <img src={opencardsLogo} alt="" />
                <div className="rounded-full bg-gray-100 py-2 px-3 flex gap-3 items-center">
                    <button onClick={handleSearch}>
                        <HiOutlineMagnifyingGlass className="w-7 h-7 stroke-slate-500"/>
                    </button>
                    
                    <button onClick={handleMenu}>
                        <HiOutlineBars3BottomRight className="w-7 h-7 stroke-slate-500"/>                   
                    </button>
                
                </div>
            </div>
            <div className={`relative z-50 transition-all duration-500 h-0 opacity-0 ${toogleMenu}`}>
                <Menu/>  
            </div>

            <div className={`${toogleSearch}`}>
                <SearchBox/>    
            </div>   
                
        </header>
    );
}

export default Header;
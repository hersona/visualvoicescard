import {useState} from 'react';
import opencardsLogo from "../../../assets/opencards.png";

import Menu from "../Header/Components/Menu";
import SearchBox from "../Header/Components/SearchBox";

import { HiOutlineBars3BottomRight, HiOutlineMagnifyingGlass, HiXMark } from "react-icons/hi2";

const Header = ({onHandleChangeSearch}) => {
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
              
            </div>
            <div className={`relative z-50 transition-all duration-500 h-0 opacity-0 ${toogleMenu}`}>
                <Menu/>  
            </div>

            <div className={`${toogleSearch}`}>
                <SearchBox onHandleChangeSearch={onHandleChangeSearch}/>    
            </div>   
                
        </header>
    );
}

export default Header;
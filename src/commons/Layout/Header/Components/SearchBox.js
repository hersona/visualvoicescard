
import {HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBox = () => {
    return (
        <div className="flex w-full gap-0 shadow-md rounded-xl rounded-tr-md mt-5">
            <span className="bg-green3/25 p-2 rounded-xl rounded-tr-md ">
            <HiOutlineMagnifyingGlass className="w-7 h-7 stroke-green4"/>
            </span>
            <input placeholder="Buscar Kit" className="bg-white w-full rounded-xl rounded-tr-md px-3 border-white" type="text" />
        </div>
    );
}

export default SearchBox;
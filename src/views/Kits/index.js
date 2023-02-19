import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";
import CoverKit from "./Components/CoverKit";

import coverKit1 from "../../assets/KitsCovers/Breakthrough.png";
import coverKit2 from "../../assets/KitsCovers/Business-c.png";
import coverKit3 from "../../assets/KitsCovers/businessModels.png";
import coverKit4 from "../../assets/KitsCovers/communityCards.png";
import coverKit5 from "../../assets/KitsCovers/cultureAssessment.png";
import coverKit6 from "../../assets/KitsCovers/delegation.png";
import coverKit7 from "../../assets/KitsCovers/designInnovation.png";
import coverKit8 from "../../assets/KitsCovers/Diagnostic.png";
import coverKit9 from "../../assets/KitsCovers/emotions_motivations.png";
import coverKit10 from "../../assets/KitsCovers/entrepreneurship.png";

const Kits = () => {
  return (
    <div className="lg:bg-slate-600 lg:py-10">
        <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
            <Header/>
            
            <div className="flex items-center justify-center my-4 flex-col relative">
                <select className="text-green4 border border-green3 py-2 px-6 pr-12 rounded-xl shadow-2xl gap-2 flex items-center justify-center hover:shadow-none transition-all duration-500"> 
                    <option>Todas las categorías</option>
                    <option>Categoría 1</option>
                    <option>Categoría 2</option>
                    <option>Categoría 3</option>
                    <option>Categoría 4</option>
                    <option>Categoría 5</option>
                    <option>Categoría 6</option>
                </select>
            </div>
            <div className="w-full grid gap-4 p-3 md:px-20 lg:px-10 justify-center grid-cols-[repeat(auto-fill,_minmax(min(100%,_120px),_1fr))]">
                <CoverKit><img className="w-full" src={coverKit1} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit2} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit3} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit4} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit5} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit6} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit7} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit8} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit9} alt=""/></CoverKit>
                <CoverKit><img className="w-full" src={coverKit10} alt=""/></CoverKit>
            </div>
            <Footer/>
        </div>
    </div>
  );
};

export default Kits;

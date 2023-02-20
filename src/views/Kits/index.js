import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";
import CoverKit from "./Components/CoverKit";
import { useState, useEffect } from "react";
import { getCard, getCards } from "../../contentful/apiContentFul";
import { useNavigate } from "react-router";

const Kits = () => {
  const [listCards, setListCards] = useState({});
  const navigate = useNavigate();

  //Pasar el parametro [] para evitar el ciclo infinito
  useEffect(() => {
    getCards().then((res) => {
        localStorage.setItem('objItemsCards', JSON.stringify(res));
        setListCards({ ...res })
    });
  }, []);

  //getCard("5ta2HXMo1O2WsYwy6GcE06").then((res)=> console.log(res));

  const handleClickKit = (kitId) => {
    navigate(`/infokits/${kitId}`);
  };

  //Renderizar contenido a partir de respuesta de contentful
  const renderContent = () => {
    if (Object.keys(listCards).length > 0) {
        return(
        <CoverKit listImage={listCards} onBtnClickKit={handleClickKit}>
        </CoverKit>
        );
    }
  };

  return (
    <div className="lg:bg-slate-600 lg:py-10">
      <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
        <Header />

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
          {renderContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Kits;

import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";
import CoverKit from "./Components/CoverKit";
import { useState, useEffect } from "react";
import { getCards } from "../../contentful/apiContentFul";
import { useNavigate } from "react-router";

const Kits = () => {
  const [listCards, setListCards] = useState({});
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");

  //Pasar el parametro [] para evitar el ciclo infinito
  useEffect(() => {
    getCards().then((res) => {
      localStorage.setItem("objItemsCards", JSON.stringify(res));
      setListCards({ ...res });
    });
  }, []);

  const handleClickKit = (kitId) => {
    navigate(`/opencards/infokits/${kitId}`);
  };

  const handleChangeSearch = (e) => {
    const listCards = JSON.parse(localStorage.getItem("objItemsCards"));
    //console.log(listCards);
    if (e.target.value != "") {
      /*console.log(
        listCards.filter((element) =>
          element.fields.titulo
            .toString()
            .toLowerCase()
            .includes(e.target.value.toString().toLowerCase())
        )
      );*/

      setListCards(
        listCards.filter((element) =>
          element.fields.titulo
            .toString()
            .toLowerCase()
            .includes(e.target.value.toString().toLowerCase())
        )
      );
    } else setListCards(JSON.parse(localStorage.getItem("objItemsCards")));
  };

  //Renderizar contenido a partir de respuesta de contentful
  const renderContent = () => {
    if (Object.keys(listCards).length > 0) {
      return (
        <CoverKit
          listImage={listCards}
          onBtnClickKit={handleClickKit}
        ></CoverKit>
      );
    }
  };

  return (
    <div className="lg:bg-slate-600 lg:py-10">
      <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
        <Header onHandleChangeSearch={handleChangeSearch} />

        <div className="w-full grid gap-4 p-3 md:px-20 lg:px-10 justify-center grid-cols-[repeat(auto-fill,_minmax(min(100%,_120px),_1fr))]">
          {renderContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Kits;

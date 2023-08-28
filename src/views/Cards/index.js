import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";
import Card from "./Components/Card";
import { useState, useEffect } from "react";
import { getCultureCard } from "../../contentful/apiContentFul";
import { useNavigate,useParams } from "react-router";


const Cards = () => {
  const [listCards, setListCards] = useState({});
  const navigate = useNavigate();
  const { pathUrl } = useParams();

  //Pasar el parametro [] para evitar el ciclo infinito
  useEffect(() => {
    getCultureCard(pathUrl).then((res) => {
      localStorage.setItem("objCultureCard", JSON.stringify(res));
      setListCards({ ...res });
    });
  }, []);

  const handleClickKit = (kitId) => {
    navigate(`/opencards/infokits/${kitId}`);
  };

  const handleChangeSearch = (e) => {
    const listCards = JSON.parse(localStorage.getItem("objCultureCard"));
  
    if (e.target.value != "") {
      setListCards(
        listCards.filter((element) =>
          element.fields.titulo
            .toString()
            .toLowerCase()
            .includes(e.target.value.toString().toLowerCase())
        )
      );
    } else setListCards(JSON.parse(localStorage.getItem("objCultureCard")));
  };

  //Renderizar contenido a partir de respuesta de contentful
  const renderContent = () => {
    if (Object.keys(listCards).length > 0) {
      return (
        <Card
          listImage={listCards}
          onBtnClickKit={handleClickKit}
        ></Card>
      );
    }
  };

  return (
    <div className="lg:bg-slate-600 lg:py-10">
      <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
        <Header onHandleChangeSearch={handleChangeSearch} />

        <div>
          {renderContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cards;
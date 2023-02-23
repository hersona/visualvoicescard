import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";

import Accordion from "./Components/Accordion";
import CtaFloating from "./Components/CtaFloating";

import { HiLogin } from "react-icons/hi";



import { useState, useEffect } from "react";
import { getCard, getCards } from "../../contentful/apiContentFul";
import { useNavigate, useParams } from "react-router";


const InfoKits = () => {
  const [items, setItems] = useState([]);
  const { kitId } = useParams();
  const [objListMethods, setMethods] = useState({});
  const navigate = useNavigate();
  
  const handleBack = (kitId) => {
    navigate(`/opencards`);
  };


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("objItemsCards"));
    if (items) {
      setItems(items);
    }
  }, []);

  //Pasar el parametro [] para evitar el ciclo infinito
  useEffect(() => {
    getCard(kitId).then((res) => {
      setMethods({ ...res });
    });
  }, []);

  const objKit = items.find((element) => element.sys.id == kitId);
  const objMethodsOrder = null;

  //Renderizar contenido a partir de respuesta de contentful
  const renderContent = () => {
    if (Object.keys(objListMethods).length > 0) {
      return (
        <Accordion listMethods={objListMethods} />
      );
    }
  };

  if (objKit != null) {
    return (
      <div className="lg:bg-slate-600 lg:py-10">
        <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
          <Header />

          <CtaFloating />

          <div className="px-5 md:px-20 lg:px-10 flex flex-col justify-start items-start gap-3 my-5">
            <button onClick={handleBack} className="bg-green1/50 rounded-full text-[#727221] py-0 pl-2 pr-3 flex items-center gap-1 max-w-max">
              <HiLogin />
              Regresar
            </button>
            <h1 className="text-gray-600 text-3xl leading-none font-bold">
              {objKit.fields.tituloInterno}
            </h1>
          </div>
          <div className="relative">
            <img
              className="border-t-4 border-green3 w-full lg:rounded-xl max-h-[300px] object-cover"
              src={"https:" + objKit.fields.imagenSuperior.fields.file.url}
              alt=""
            />
            <img
              className="absolute max-h-[130px] bottom-0 left-0 -mb-6 ml-5 md:ml-20 lg:ml-10"
              src={"https:" + objKit.fields.imagenProducto.fields.file.url}
              alt=""
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: objKit.fields.descripcion }}
            className="mt-4 px-5 py-8 text-gray-500 space-y-5 md:px-20 lg:px-10"
          ></div>
          <div className="p-5 md:px-20 lg:px-10">
            { renderContent() }
          </div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default InfoKits;
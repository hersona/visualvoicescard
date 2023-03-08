import Header from "../../commons/Layout/Header/Header";
import Footer from "../../commons/Layout/Footer";

import Accordion from "./Components/Accordion";
import CtaFloating from "./Components/CtaFloating";

import { HiLogin } from "react-icons/hi";
import { HiPlay } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi2";

import { useState, useEffect } from "react";
import { getCard } from "../../contentful/apiContentFul";
import { useNavigate, useParams } from "react-router";

import {
  useFetchCardValidateMutation
} from "../../redux/api/survey";


const InfoKits = () => {
  const [items, setItems] = useState([]);
  const { kitId } = useParams();
  const [objListMethods, setMethods] = useState({});
  const navigate = useNavigate();
  const handleBack = (kitId) => {
    navigate(`/opencards`);
  };
  //const [addNewAnswer, response] = useFetchCardValidateMutation();

  /*function HandleCodeValidateApp  (strCode)  {
    const {
      data: survey,
      isLoading,
      isSuccess,
      isFetching,
      error,
    } = useFetchCardValidate(1);
  };*/

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
  //console.log(objKit);

  const handleClickMarket = () => {
    //console.log(objKit.fields.urlTiendaProducto);
    window.open(objKit.fields.urlTiendaProducto, "_blank");
  };

  //Renderizar contenido a partir de respuesta de contentful
  const renderContent = () => {
    if (Object.keys(objListMethods).length > 0) {
      const objListMethodsOrder = [...Object.values(objListMethods)].sort(
        (a, b) => a.fields.orden - b.fields.orden
      );
      return <Accordion listMethods={objListMethodsOrder} />;
    }
  };

  if (objKit != null) {
    return (
      <div className="lg:bg-slate-600 lg:py-10">
        <div className="lg:max-w-4xl lg:bg-white lg:p-7 lg:rounded-2xl lg:shadow-xl m-auto lg:relative">
          <Header />

          <CtaFloating
            urlMarket={objKit.fields.urlTiendaProducto}
            onhandleClickMarket={handleClickMarket}
          />

          <div className="px-5 md:px-20 lg:px-10 flex flex-col justify-start items-start gap-3 my-5">
            <button
              onClick={handleBack}
              className="bg-green1/50 rounded-full text-[#727221] py-0 pl-2 pr-3 flex items-center gap-1 max-w-max"
            >
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
          <div className="p-5 md:px-20 lg:px-10 bg-slate-200 flex items-center justify-center flex-col gap-3 rounded-lg max-w-xl text-center mx-auto">
            <p className="text-xl text-slate-600">Introduce el código de tu kit para explorar el contenido exclusivo: <HiOutlineInformationCircle className='stroke-slate-500 w-5 h-5 inline-block' /></p>
            <div className="flex justify-center">
              <input className="p-2 rounded-l-md text-center text-2xl tracking-wider"></input>
              <button className="rounded-r-2xl bg-green3 p-2 hover:bg-slate-600"><HiPlay className='fill-white w-7 h-10 transition-all duration-500' /></button>
            </div>
            
          </div>
          <div className="p-5 md:px-20 lg:px-10">{renderContent()}</div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default InfoKits;

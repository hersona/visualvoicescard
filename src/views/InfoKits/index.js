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
  useFecthTokenApiMutation,
  useFetchCardVerifyMutation,
} from "../../redux/api/survey";

const InfoKits = () => {
  const [items, setItems] = useState([]);
  const { kitId } = useParams();
  const [objListMethods, setMethods] = useState({});
  const [codeValidate, setCodeValidate] = useState("");
  const [methodsEnable, setMethodsEnable] = useState(false);

  //Llamar servicios de validar codigo
  const [validateToken, response] = useFecthTokenApiMutation();
  const [validateCode, responseCode] = useFetchCardVerifyMutation();
  const [stateCodeValidate, setStateCodeValidate] = useState("");
  const [userEmail, setUserEmail] = useState("");

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

  const handleChangeTextBox = (event) => {
    setCodeValidate(event.target.value);
  };

  const handleChangeTextBoxEmail = (event) => {
    setUserEmail(event.target.value);
  };


  //Pasar el parametro [] para evitar el ciclo infinito
  useEffect(() => {
    getCard(kitId).then((res) => {
      setMethods({ ...res });
    });
  }, []);

  const objKit = items.find((element) => element.sys.id == kitId);
  //console.log(objKit);

  useEffect(() => {
    if (
      objKit != null &&
      localStorage.getItem("objCodeSetMethod" + objKit.sys.id) !== null
    ) {
      console.log("entro");
      setMethodsEnable(true);
    }
  }, []);

  const HandleBtnCode = () => {
    let payload = {
      CodeApp: codeValidate,
      UserEmail: userEmail,
      UserName: "Generico",
      CodeKit: objKit.fields.tituloInterno,
    };

    //Primero se obtiene token
    validateToken()
      .unwrap()
      .then((responseToken) => {
        var accesTokenApi = JSON.parse(
          JSON.stringify(responseToken)
        ).access_token;

        //Segundo con el token generado se llama el servicio de validar codigo
        validateCode({ accesTokenApi, payload })
          .unwrap()
          .then((responseCode) => {
            processResponseCard(JSON.parse(JSON.stringify(responseCode)));
          })
          .then((errorCodeValidate) => {
            if (errorCodeValidate != null) console.log(errorCodeValidate);
          });
      })
      .then((errorToken) => {
        if (errorToken != null) console.log(errorToken);
      });
  };

  //Procesar la respuesta del API de validar tarjeta
  function processResponseCard(responseCard) {
    //console.log(responseCard);
    //console.log(objKit);

    switch (responseCard.Error) {
      //"0" Codigo disponible, "2" Codigo ya utilizado pero se va permitir continuar el flujo
      case "0":
      case "2": {
        //Codigo disponible
        setStateCodeValidate("Codigo disponible");
        setMethodsEnable(true);
        //Asignar con el codigo del metodo
        localStorage.setItem(
          "objCodeSetMethod" + objKit.sys.id,
          responseCard.CodeApp
        );
        break;
      }
      //Codigo no valido
      case "1": {
        setStateCodeValidate("Codigo no valido");
        break;
      }
    }
  }

  const handleClickMarket = () => {
    //console.log(objKit.fields.urlTiendaProducto);
    window.open(objKit.fields.urlTiendaProducto, "_blank");
  };

  //Renderizar contenido a partir de respuesta de contentful
  const renderContent = () => {
    //console.log(methodsEnable);
    if (
      methodsEnable ||
      localStorage.getItem("objCodeSetMethod" + objKit.sys.id) !== null
    ) {
      if (Object.keys(objListMethods).length > 0) {
        const objListMethodsOrder = [...Object.values(objListMethods)].sort(
          (a, b) => a.fields.orden - b.fields.orden
        );
        return <Accordion listMethods={objListMethodsOrder} />;
      }
    }
  };

  const renderContentValidateCode = () => {
    if (localStorage.getItem("objCodeSetMethod" + objKit.sys.id) == null) {
      return (
        <div className="p-5 md:px-20 lg:px-10 bg-slate-200 flex items-center justify-center flex-col gap-3 rounded-lg max-w-xl text-center mx-auto">
          <p className="text-xl text-slate-600">
            Introduce el código de tu kit para <br></br>explorar el contenido exclusivo:{" "}
            <HiOutlineInformationCircle className="stroke-slate-500 w-5 h-5 inline-block" />
          </p>
          <div className="flex justify-center flex-col gap-2">
            <input
            placeholder="____________"
              id="codeValidate"
              name="codeValidate"
              value={codeValidate}
              onChange={handleChangeTextBox}
              className="p-2 rounded-l-md text-center text-2xl tracking-wider"
            ></input>
            <input
                type="email"
                placeholder="Correo Electrónico"
                id="userEmail"
                name="userEmail"
                value={userEmail}
                onChange={handleChangeTextBoxEmail}
                className="p-2 rounded-md border-white"
              ></input>
            

            <button
              onClick={HandleBtnCode}
              className="rounded-2xl bg-green3 p-2 hover:bg-slate-600 text-white text-2xl font-bold flex justify-center items-center gap-2"
            >
              ENVIAR
              <HiPlay className="fill-white w-6 h-8 transition-all duration-500" />

            </button>
          </div>
          <div>
            <h2>{stateCodeValidate}</h2>
          </div>
        </div>
      );
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
          {renderContentValidateCode()}
          <div className="p-5 md:px-20 lg:px-10">{renderContent()}</div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default InfoKits;

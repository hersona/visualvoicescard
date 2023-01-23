import HeaderSurvey from "../../commons/survey/headerSurvey";
import ThanksImg from "../../assets/thanksGif.gif";

const Thanks = () => {
  let objSurvey = JSON.parse(sessionStorage.getItem("survey"));

  return (
    <div className="w-10/12 max-w-screen-2xl mx-auto flex flex-col items-center lg:items-start lg:pb-32">
      <HeaderSurvey data={objSurvey} />
      <div className="pt-6 w-full text-slate-500">
        <div className="md:hidden">
          <h3 className="font-bold text-base leading-5 text-slate-700">
            Encuesta Clima Organizacional
          </h3>
          <h1 className="font-bold text-xl leading-6 text-slate-700">
            Mi Compañía
          </h1>
        </div>
        <div className="flex flex-col items-center text-center h-2/3 rounded-xl p-10 pt-10 mb-10 shadow-2xl shadow-cyan-500/30">
          <img
            src={ThanksImg}
            alt="Company name"
            className="w-full mb-5 md:w-2/5 max-w-[240px] lg:w-3/12"
          />
          <p className="text-YVmagenta text-3xl leading-7 font-bold mt-3 mb-3 lg:mt-0">
            ¡Gracias por responder!
          </p>

          <p>
            Es una locura lo rápido que pasa el tiempo y cómo avanzan las cosas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;

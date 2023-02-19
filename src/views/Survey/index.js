import { useNavigate, useParams } from "react-router";
import { useState } from "react";

import { getCard, getCards } from "../../contentful/apiContentFul"

import {
  useFetchSurveyQuery,
  useFetchTokenQuery
} from "../../redux/api/survey";
import MainSurvey from "./Components/MainSurvey";
import HeaderSurvey from "../../commons/survey/headerSurvey";
import Loading from "../../commons/survey/loading";
import ImgSurvey from "../../assets/team-working.jpg";

const Survey = () => {
  const navigate = useNavigate();
  const { surveyId } = useParams();
  const [text, setText] = useState("");



  const handleStartClick = (idProyecto) => {
    navigate(`/survey/${surveyId}/demographic`);
  };


  
  getCards().then((res)=> console.log(res));
  getCard("2oJu8awWy97UFBX0y8fjUE").then((res)=> console.log(res));


  const {
    data: survey,
    isLoading,
    isSuccess,
    isFetching,
    error,
  } = useFetchSurveyQuery(surveyId);
  
  if(survey != null)
    console.log(survey);

  const renderContent = () => {
    if (error)
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl">{error.error}</p>
        </div>
      );
    else if (isLoading || isFetching) return <Loading />;
    else if (isSuccess) {
      if (survey !== null) {
        sessionStorage.setItem("survey", JSON.stringify(survey));
        return <MainSurvey data={survey} onBtnStartClick={handleStartClick} />;
      } else {
        return <div>Usuario no existe</div>;
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center lg:items-start lg:pl-16 lg:pr-9 lg:pb-32 lg:w-3/5">
        <HeaderSurvey data={survey} />

        <div className="h-52 w-screen overflow-hidden flex items-center sm:w-3/4 sm:h-64 sm:rounded-2xl lg:rounded-none lg:fixed lg:top-0 lg:right-0 lg:h-screen lg:w-2/5">
          <img
            src={ImgSurvey}
            alt="Imagen de equipo de trabajo"
            className="object-cover w-full mt-1 lg:mt-0 lg:h-screen"
          />
        </div>
        <div className="px-11 py-12 text-slate-500">{renderContent()}</div>
      </div>
    </>
  );
};

export default Survey;

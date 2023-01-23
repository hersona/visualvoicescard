import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import {
  useFetchSurveyQuestionsQuery,
  useAddNewAnswerMutation,
} from "../../redux/api/survey";
import ListQuestions from "./Components/listQuestions";
import HeaderSurvey from "../../commons/survey/headerSurvey";
import Loading from "../../commons/survey/loading";
import { isMobile } from "react-device-detect";

const SurveyQuestions = () => {
  const navigate = useNavigate();

  let objSurvey = JSON.parse(sessionStorage.getItem("survey"));
  var idProyecto = objSurvey.id_Proyecto;
  var codUser = objSurvey.codSuscriptor;

  const { surveyId } = useParams();

  var size = 0;
  if (isMobile) size = process.env.REACT_APP_QUESTIONS_MOBILE;
  else size = process.env.REACT_APP_QUESTIONS_DESKTOP;
  const [page, setPage] = useState(1);

  const {
    data: survey,
    isLoading,
    isSuccess,
    isFetching,
    error,
  } = useFetchSurveyQuestionsQuery({ idProyecto, codUser, page, size });

  const [addNewAnswer, response] = useAddNewAnswerMutation();

  const handleSaveClick = (data) => {
    let formData = {
      codUser: objSurvey.codSuscriptor,
      codTermometro: objSurvey.codTermometroProyecto,
      listQuestions: data,
    };


    addNewAnswer(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });

    if (objInfo.totalPage != page) setPage(page + 1);
    else navigate(`/survey/${surveyId}/thanks`);
  };

  const handleBtnBack = () => {
    if (page > 1) setPage(page - 1);
    else navigate(`/survey/${surveyId}/demographic`);
  };

  var totalPage = Math.ceil(objSurvey.cantidadPreguntas / size);
  var objInfo = {
    advance: Math.round((page / totalPage) * 100),
    actualPage: page,
    totalPage: totalPage,
  };

  const renderContent = () => {
    if (error) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl">{error.error}</p>
        </div>
      );
    } else if (isLoading || isFetching) return <Loading />;
    else if (isSuccess) {
      return (
        <ListQuestions
          data={survey}
          objInfo={objInfo}
          onBtnSaveClick={handleSaveClick}
          onBtnBack={handleBtnBack}
        />
      );
    }
  };

  return (
    <>
      <HeaderSurvey />

      <div className="w-11/12 max-w-screen-2xl mx-auto flex flex-col lg:items-start">
        {renderContent()}
      </div>
    </>
  );
};

export default SurveyQuestions;

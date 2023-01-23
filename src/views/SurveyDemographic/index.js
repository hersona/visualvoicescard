import { useNavigate, useParams } from "react-router";
import {
  useFetchSurveyDemographicQuery,
  useAddNewPostMutation,
} from "../../redux/api/survey";
import ListDemographic from "./Components/listDemographic";
import HeaderSurvey from "../../commons/survey/headerSurvey";
import Loading from "../../commons/survey/loading";

const SurveyDemographic = () => {
  const navigate = useNavigate();
  const { surveyId } = useParams();
  let objSurvey = JSON.parse(sessionStorage.getItem("survey"));
  const [addNewPost, response] = useAddNewPostMutation();

  const handleSaveClick = (data) => {
    let formData = {
      codUser: objSurvey.codSuscriptor,
      codProyecto: objSurvey.id_Proyecto,
      listDemographics: data,
    };

    addNewPost(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });

    navigate(`/survey/${surveyId}/questions`);
  };

  const handleBtnBack = () => {
    navigate(`/survey/${surveyId}`);
  };

  var codProyecto = objSurvey.id_Proyecto;
  var codUser = objSurvey.codSuscriptor;
  const {
    data: surveyDemographic,
    isLoading,
    isSuccess,
    isFetching,
    error,
  } = useFetchSurveyDemographicQuery({ codProyecto, codUser });

  const renderContent = () => {
    if (error)
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl">{error.error}</p>
        </div>
      );
    else if (isLoading || isFetching) return <Loading />;
    else if (isSuccess) {
      return (
        <ListDemographic
          data={surveyDemographic}
          survey={objSurvey}
          onBtnSaveClick={handleSaveClick}
          onBtnBack={handleBtnBack}
        />
      );
    }
  };

  return (
    <>
      <HeaderSurvey />

      <div className="w-10/12 max-w-screen-2xl mx-auto flex flex-col items-center lg:items-start lg:pb-32">
        {renderContent()}
      </div>
    </>
  );
};

export default SurveyDemographic;

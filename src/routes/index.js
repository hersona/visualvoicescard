import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/BaseDS/Home';
import Results from '../views/Results';
import Detail from '../views/Detail';
import Survey from "../views/Survey";
import SurveyDemographic from "../views/SurveyDemographic";
import SurveyQuestions from "../views/SurveyQuestions";
import Thanks from '../views/Thanks';



const RoutesComponent = () => (
 <BrowserRouter>
  <Routes>
   <Route path="/survey" element={<Home />} />
   <Route path="/results/:title" element={<Results />} />
   <Route path="/detail/:movieId" element={<Detail />} />
   <Route path="/survey/:surveyId" element={<Survey />} />
   <Route path="/survey/:surveyId/demographic" element={<SurveyDemographic />} />
   <Route path="/survey/:surveyId/questions" element={<SurveyQuestions />} />
   <Route path="/survey/:surveyId/thanks" element={<Thanks />} />


  </Routes>
 </BrowserRouter>
);

export default RoutesComponent;
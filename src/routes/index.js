import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/BaseDS/Home';
import Results from '../views/Results';
import Detail from '../views/Detail';


import Welcome from '../views/Welcome';
import Kits from '../views/Kits';
import InfoKits from '../views/InfoKits';



const RoutesComponent = () => (
 <BrowserRouter>
  <Routes>

   <Route path="/results/:title" element={<Results />} />
   <Route path="/detail/:movieId" element={<Detail />} />
   
   <Route path="/welcome" element={<Welcome />} />
   <Route path="/kits" element={<Kits />} />
   <Route path="/opencards" element={<Kits />} />
   <Route path="/opencards/infoKits/:kitId" element={<InfoKits />} />


  </Routes>
 </BrowserRouter>
);

export default RoutesComponent;
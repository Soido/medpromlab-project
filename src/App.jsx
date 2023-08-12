import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useRef } from "react";
import { useScroll } from "react-use";
import "./App.css";

import Home from "./components/Home";
import Implants from "./components/Implants";
import FillingMaterial from "./components/FillingMaterial";
import DentalCare from "./components/DentalCare";
import Surgicalinstruments from "./components/Surgicalinstruments";
import Rehabilitation from "./components/Rehabilitation";
import Diagnosticequipment from "./components/Diagnosticequipment";
import Socialsignificance from "./components/Socialsignificance";
import Forpartners from "./components/Forpartners";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import MainLayout from "./Layouts/MainLayout";
import Courses from "./components/Courses";
import Singlecourse from "./components/Singlecourse";

function App() {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);

  return (
    <>
      <BrowserRouter>
        <div className="App" ref={scrollRef}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} /*можно без true */ element={<Home />} />
              <Route path="implants" element={<Implants />} />
              <Route path="fillingmaterial" element={<FillingMaterial />} />
              <Route path="dentalcare" element={<DentalCare />} />
              <Route
                path="surgicalinstruments"
                element={<Surgicalinstruments />}
              />
              <Route path="rehabilitation" element={<Rehabilitation />} />
              <Route
                path="diagnosticequipment"
                element={<Diagnosticequipment />}
              />
              <Route path="socialsignicance" element={<Socialsignificance />} />
              <Route path="forpartners" element={<Forpartners />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:coursesSlug" element={<Singlecourse />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

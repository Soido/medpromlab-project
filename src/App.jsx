import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { useScroll } from "react-use";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Productsfordentistry from "./components/Productsfordentistry";
import Opticalmaterial from "./components/Opticalmaterial";
import DentalCare from "./components/DentalCare";
import Terumogoreexcluder from "./components/Terumogoreexcluder";
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
        <div ref={scrollRef} className="App h-screen overflow-auto">
          <Routes>
            <Route path="/" element={<MainLayout yScroll={y} />}>
              <Route
                index={true}
                /*можно без true */ element={<Home yScroll={y} />}
              />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="products" element={<Products />} />
              <Route
                path="products/productsfordentistry"
                element={<Productsfordentistry yScroll={y} />}
              />
              <Route
                path="products/opticalmaterial"
                element={<Opticalmaterial />}
              />
              <Route path="products/dentalcare" element={<DentalCare />} />
              <Route
                path="products/terumoandgoreexcluder"
                element={<Terumogoreexcluder />}
              />
              <Route
                path="products/rehabilitation"
                element={<Rehabilitation />}
              />
              <Route
                path="products/diagnosticequipment"
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

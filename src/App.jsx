import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Layout/Home/Home";
import Footer from "./Layout/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const OurModel = lazy(() => import("./Layout/OurModel/OurModel"));
const OurWork = lazy(() => import("./Layout/OurWork/OurWork"));
const OurPeople = lazy(() => import("./Layout/OurPeople/OurPeople"));
const Contact = lazy(() => import("./Layout/Contact/Contact"));
// import OurModel from "./OurModel/OurModel";
// import OurWork from "./OurWork/OurWork";
// import OurPeople from "./OurPeople/OurPeople";
// import Contact from "./Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import LocomotiveScroll from "locomotive-scroll";
import Loading from "./Components/Loading";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ourmodel" element={<OurModel />} />
            <Route path="ourwork" element={<OurWork />} />
            <Route path="ourpeople" element={<OurPeople />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;

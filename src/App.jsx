import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Components/Header";
import OurTeam from "./pages/OurTeam";

import "./App.css";
import Navbar from "./Components/Navbar";

import Stats from "./Components/Stats";
import Event_Types from "./Components/Event_Types";
import UniqueEventSlider from "./Components/UniqueEventSlider";


import Footer from "./Components/Footer";
import PopularEvent from "./Components/PopularEvent";
// import PopularEvent1 from "./Components/PopularEvent1";
// import PopularEvent2 from "./Components/PopularEvent2";
import WeehoDetails from "./Components/WeehoDetails";
import PopularCustomers from "./Components/reviews/PopularCustomers";
import OrganizeEvent from "./Components/reviews/OrganizeEvent";
import PopularBlogPosts from "./Components/reviews/PopularBlogPosts";
import Performers from "./Components/Performers";
import PerformerPage from "./Components/PerformerPage"; // ✅ Add this
import BlogDetails from "./Components/reviews/BlogDetails";
import EventPage from "./Components/EventPage";
import BlogsPage from "./pages/BlogsPage";




function App() {
  const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

  return (
    <Router>
        <ScrollToTop /> 
      <Routes>
        {/* ✅ Main homepage route */}
        <Route
          path="/"
          element={
            <>
            <Navbar/>
            <Header />
            
             
              <PopularEvent />
             
              <Event_Types />
              <Performers />
            <UniqueEventSlider />

             
              <PopularCustomers />
              
              <Footer />
            </>
          }
        />

        
        <Route path="/performer/:name" element={<PerformerPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/weeho-details" element={<WeehoDetails />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/blogs" element={<BlogsPage />} />




      </Routes>
    </Router>
  );
}

export default App;

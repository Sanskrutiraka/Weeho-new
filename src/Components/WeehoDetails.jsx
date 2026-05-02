import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "../pages/About";
import PopularEvent1 from "./PopularEvent1";
import PopularEvent2 from "./PopularEvent2";
import ObjectivesSection from "./ObjectivesSection";
import Footer from "./Footer";
import "./WeehoDetails.css";
import Navbar from "./Navbar"

export default function WeehoDetails() {
  const navigate = useNavigate();

  return (
    <div className="weeho-page">
      <Navbar/>
      <AboutPage/>
      

      <PopularEvent1 />
      <PopularEvent2 />
      <Footer />
    </div>
  );
}

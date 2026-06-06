import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PerformerPage.css";
import performer1 from "../assets/performer1.jpg";
import performer2 from "../assets/performer2.jpg";

const performerData = [
  {
    name: "Tanisha Bansal",
    role: " Storyteller",
    img: performer1,
    desc: "Tanisha Bansal From Delhi, pursuing a Bachelor’s in Management Studies from the University of Delhi. Founder of KAHAANI and a passionate storyteller.",
  },
  {
    name: "Anurag Suter",
    role: "singer ",
    img: performer2,
    desc: "Anurag Suter from Chhattisgarh — an aspiring music composer and singer, serving as the General Secretary of Swarang, the Music Society of SGTB Khalsa College.",
  },
];

export default function PerformerPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const performer = performerData.find(
  (p) => p.name.trim().replace(/\s+/g, "-") === name
);

  if (!performer)
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Performer not found</h2>;

  return (
    <div className="performer-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="performer-content">
        <img src={performer.img} alt={performer.name} />
        <div className="performer-text">
          <h2>{performer.name}</h2>
          <h4>{performer.role}</h4>
          <p>{performer.desc}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventPage.css";

import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const eventList = [
  {
    id: "music-night",
    title: "Music Night Event",
    img: event1,
    desc: "Enjoy an amazing musical night filled with electrifying performances, lights and unforgettable vibes.",
  },
  {
    id: "dance-fiesta",
    title: "Dance Fiesta 2025",
    img: event2,
    desc: "A stunning dance show featuring top dancers, powerful choreography and energetic beats.",
  },
  {
    id: "art-gallery",
    title: "Art Gallery Expo",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "A beautiful collection of modern and contemporary artworks from emerging artists.",
  },
];

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventList.find((e) => e.id === id);

  if (!event)
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Event Not Found
      </h2>
    );

  return (
    <>
    <Navbar/>
    <div className="event-page-container">
      

      <div className="event-details-box">
        <img src={event.img} alt={event.title} className="event-img" />

        <h2 className="event-title">{event.title}</h2>
        <p className="event-desc">{event.desc}</p>

        <button className="event-see-btn">See Event</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

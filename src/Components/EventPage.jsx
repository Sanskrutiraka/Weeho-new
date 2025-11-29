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
    date: "12th December 2025",
    location: "Auditorium Hall, City Center",
    highlights: [
      "Live music bands",
      "DJ Night",
      "Food & Beverages available"
    ]
  },
  {
    id: "dance-fiesta",
    title: "Dance Fiesta 2025",
    img: event2,
    desc: "A stunning dance show featuring top dancers, powerful choreography and energetic beats.",
    date: "20th January 2026",
    location: "Open Arena, Central Park",
    highlights: [
      "Hip-hop, Contemporary, Bollywood",
      "Performance battles",
      "Photography zone"
    ]
  },
  {
    id: "art-gallery",
    title: "Art Gallery Expo",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "A beautiful collection of modern and contemporary artworks from emerging artists.",
    date: "5th March 2026",
    location: "Art & Culture Museum",
    highlights: [
      "Live art display",
      "Artist meet & greet",
      "Art purchase section"
    ]
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
      <Navbar />
     <div className="event-wrapper">
  <div className="event-hero">
    <img src={event.img} alt={event.title} className="event-hero-img" />
    <div className="event-hero-content">
      <h1 className="event-heading">{event.title}</h1>
      <p className="event-description">{event.desc}</p>

      <div className="event-info">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Zoom Link:</strong> <a href="#">Join Event</a></p>
      </div>

      <button className="event-button" onClick={() => navigate("/")}>
        Join Event
      </button>
    </div>
  </div>

  <hr className="event-line" />

  <div className="event-details">
    <div className="event-section">
      <h3>About This Online Event</h3>
      <p>
        Join us via Zoom for a live interactive session. Experience 
        performances, Q&A with experts, and networking with a global audience.
      </p>
    </div>

    <div className="event-section">
      <h3>What You Will Experience</h3>
      <ul className="event-highlights-large">
        <li>Live interactive sessions</li>
        <li>Q&A with performers</li>
        <li>Downloadable resources & recordings</li>
        <li>Networking opportunities</li>
      </ul>
    </div>

    <div className="event-section">
      <h3>Event Schedule</h3>
      <table className="event-table">
        <tbody>
          <tr><td>0:00 - 0:15</td><td>Welcome & Intro</td></tr>
          <tr><td>0:15 - 1:00</td><td>Main Performance</td></tr>
          <tr><td>1:00 - 1:30</td><td>Interactive Q&A</td></tr>
          <tr><td>1:30 - 2:00</td><td>Networking & Closing</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
}

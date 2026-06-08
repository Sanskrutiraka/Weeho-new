import React, { useState, useRef, useEffect } from "react";
import "./OnlineEvents.css";
import event1 from "../assets/Virtual Events.webp";
import event2 from "../assets/Live Steaming.webp";
import performer1 from "../assets/Online Conferences.avif";
import performer2 from "../assets/Digital Launches.jpg";
import aboutImg from "../assets/Virtual Networking.png";
import missionImg from "../assets/Engagement Solutions.png";

function OnlineEvents() {
  const slideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!slideRef.current) return;

      const top = slideRef.current.getBoundingClientRect().top;
      const trigger = window.innerHeight - 50;

      if (top < trigger) {
        slideRef.current.classList.add("slider-animate");
        slideRef.current.classList.remove("slider-hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Virtual Events",
      description: "Immersive experiences that bring your audience together—anywhere.",
      img: event1,
    },
    {
      title: "Live Streaming",
      description: "Professional live production that engages, excites and connects.",
      img: event2,
    },
    {
      title: "Online Conferences",
      description: "Seamless webinars & conferences with meaningful engagement.",
      img: performer1,
    },
    {
      title: "Digital Launches",
      description: "Launch your ideas online with impact, creativity and maximum reach.",
      img: performer2,
    },
    {
      title: "Virtual Networking",
      description: "Smart networking experiences that build real connections.",
      img: aboutImg,
    },
    {
      title: "Engagement Solutions",
      description: "Interactive tools and creative formats that keep your audience hooked.",
      img: missionImg,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < services.length - 4) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="online-events-section">
      <h2 className="section-title">Online Events</h2>

      <div className="slider-wrapper slider-hidden" ref={slideRef}>
        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="online-events-slider">
          {services.slice(index, index + 4).map((service, i) => (
            <div className="online-event-card" key={i}>
              {service.img && (
                <div className="online-event-img">
                  <img src={service.img} alt={service.title} />
                </div>
              )}
              <div className="online-event-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default OnlineEvents;

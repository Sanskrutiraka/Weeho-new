import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./UniqueEventSlider.css";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";


function UniqueEventSlider() {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wrapperRef.current.classList.add("scroll-show");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (wrapperRef.current) observer.observe(wrapperRef.current);
}, []);


  const eventList = [
    { id: "music-night", img: event1, title: "Music Night Event" },
    { id: "dance-fiesta", img: event2, title: "Dance Fiesta 2025" },
  ];

  const [curr, setCurr] = useState(0);

  const goNext = () => {
    if (curr < eventList.length - 4) setCurr(curr + 1);
  };

  const goPrev = () => {
    if (curr > 0) setCurr(curr - 1);
  };

  return (
    <>
    
    <div className="ue-section scroll-hidden" ref={wrapperRef}>

      <h2 className="ue-title">Our Events</h2>

    <div className="ue-wrapper" ref={wrapperRef}>


        <button className="ue-btn ue-prev" onClick={goPrev}>❮</button>

        <div className="ue-slider">
          {eventList.slice(curr, curr + 4).map((item, index) => (
            <div
  className="ue-card"
  key={index}
  onClick={() => {
    navigate(`/event/${item.id}`);
    window.scrollTo(0, 0); // Scroll to top after navigation
  }}
  style={{ cursor: "pointer" }}
>
  <img src={item.img} alt={item.title} />
  <h3>{item.title}</h3>
</div>

          ))}
        </div>

        <button className="ue-btn ue-next" onClick={goNext}>❯</button>
      </div>
    </div>
    </>
  );
}

export default UniqueEventSlider;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UniqueEventSlider.css";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";


function UniqueEventSlider() {
  const navigate = useNavigate();

  const eventList = [
    { id: "music-night", img: event1, title: "Music Night Event" },
    { id: "dance-fiesta", img: event2, title: "Dance Fiesta 2025" },
    {
      id: "corporate-meetup",
      img: "https://media.istockphoto.com/id/936750120/photo/corporate-business-meeting.jpg?s=170667a&w=0&k=20&c=SXr_ObJ-DjHhNu2mWLjB-SXVst1pclk92pPlrsF8asg=",
      title: "Corporate Meetup",
    },
    {
      id: "art-gallery",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80",
      title: "Art Gallery Expo",
    },
    {
      id: "fashion-show",
      img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
      title: "Fashion Show",
    },
    {
      id: "food-festival",
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      title: "Food Festival",
    },
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
    
    <div className="ue-section">
      <h2 className="ue-title">Our Events</h2>

      <div className="ue-wrapper">
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

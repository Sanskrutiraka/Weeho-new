import React, { useState, useRef, useEffect } from "react";
import "./Performers.css";
import "./PerformerPage.css"; // ✅ reuse same performer page styling
import performer1 from "../assets/performer1.jpg";
import performer2 from "../assets/performer2.jpg";



function Performers() {
  const slideRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    if (!slideRef.current) return;

    const top = slideRef.current.getBoundingClientRect().top;
    const trigger = window.innerHeight - 50;

    if (top < trigger) {
      slideRef.current.classList.add("slider-animate-performer");
      slideRef.current.classList.remove("slider-hidden-performer");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const performers = [
    {
      name: "Tanisha Bansal",
      role: "Storyteller",
      img: performer1,
      desc: "Tanisha Bansal From Delhi, pursuing a Bachelor’s in Management Studies from the University of Delhi. Founder of KAHAANI and a passionate storyteller.",
    },
    {
      name: "Anurag Suter",
      role: "Singer",
      img: performer2,
      desc: "Anurag Suter from Chhattisgarh — an aspiring music composer and singer, serving as the General Secretary of Swarang, the Music Society of SGTB Khalsa College.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [selectedPerformer, setSelectedPerformer] = useState(null);

  const nextSlide = () => {
    if (index < performers.length - 4) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="performers-section">
      <h2 className="performers-title">Our Performers</h2>

      <div className="performer-slider-wrapper slider-hidden-performer" ref={slideRef}>

        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="performers-slider">
          {performers.slice(index, index + 4).map((performer, i) => (
            <div
              className="performer-card"
              key={i}
              onClick={() => setSelectedPerformer(performer)}
            >
              <div className="performer-img">
                <img src={performer.img} alt={performer.name} />
              </div>
              <div className="performer-info">
                <h3>{performer.name}</h3>
                <p>{performer.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* ✅ Popup that shows same layout as PerformerPage */}
      {selectedPerformer && (
        <div className="popup-overlay" onClick={() => setSelectedPerformer(null)}>
          <div
            className="popup-performer-detail"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="back-btn" onClick={() => setSelectedPerformer(null)}>
              ×
            </button>
            <div className="performer-content">
              <img src={selectedPerformer.img} alt={selectedPerformer.name} />
              <div className="performer-text">
                <h2>{selectedPerformer.name}</h2>
                <h4>{selectedPerformer.role}</h4>
                <p>{selectedPerformer.desc}</p>
                <button className="ytb-performance"><a
  href="https://youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="see-performance-btn"
>
  See Performance
</a></button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Performers;

import React, { useState, useEffect, useRef } from "react";

import "./PopularCustomers.css";
import performer1 from "../../assets/performer1.jpg";
import performer2 from "../../assets/performer2.jpg";

const TESTIMONIALS = [

  {
    name: "Tanisha Bansal",
    role: "Storyteller",
    quote:
      "It was a delightful experience sharing my story at the platform of WeeHo. The audience’s warmth and WeeHo’s amazing platform made storytelling feel truly magical. Grateful to be part of such an inspiring space that celebrates voices and visions alike!",
    image: performer1,
  },
  {
    name: "Anurag Suter",
    role: "Singer",
    quote:
      "As a musician, I always believed that you truly connect with music only when it’s felt live. But performing for WeeHo on Zoom changed that for me — it showed how music can transcend boundaries. The energy and warmth from everyone made the session so lively and fun.",
    image: performer2,
  },
];

export default function PopularCustomers() {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState("slide-in");
  const total = TESTIMONIALS.length;

  const next = () => {
    setSlide("slide-out-left");
    setTimeout(() => {
      setIndex((i) => (i + 1) % total);
      setSlide("slide-in-right");
    }, 300);
  };

  const prev = () => {
    setSlide("slide-out-right");
    setTimeout(() => {
      setIndex((i) => (i - 1 + total) % total);
      setSlide("slide-in-left");
    }, 300);
  };
  const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("pc-show");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);
}, []);


  // ✅ Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [index]);

  const item = TESTIMONIALS[index];

  return (
   <section className="pc-section pc-hidden" ref={sectionRef}>

      <h1 className="pc-title">Reviews From Performers</h1>

      <div className="pc-slider">
        <button className="pc-nav pc-nav-left" onClick={prev}>
          <span className="pc-arrow">←</span>
        </button>

        <div className={`pc-card ${slide}`}>
          <div className="pc-card-left">
            <div className="pc-photo-wrap">
              <img className="pc-photo" src={item.image} alt={item.name} />
            </div>
          </div>

          <div className="pc-card-right">
            <div className="pc-quote-mark pc-quote-left">“</div>
            <div className="pc-quote">{item.quote}</div>
            <div className="pc-quote-mark pc-quote-right">”</div>
            <div className="pc-author">
              <div className="pc-name">{item.name}</div>
              <div className="pc-role">{item.role}</div>
            </div>
          </div>
        </div>

        <button className="pc-nav pc-nav-right" onClick={next}>
          <span className="pc-arrow">→</span>
        </button>
      </div>

      <div className="pc-dots" aria-hidden>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`pc-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

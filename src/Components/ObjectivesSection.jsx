import React, { useEffect, useRef } from "react";
import "./ObjectivesSection.css";

export default function ObjectivesSection() {
  const sectionRef = useRef(null);

  const objectives = [
    {
      title: "Innovation",
      text: "Encourage creative ideas that bring value to our platform and users.",
    },
    {
      title: "Collaboration",
      text: "Build strong connections between performers and event organizers.",
    },
    {
      title: "Quality",
      text: "Ensure top-quality experiences and services for every event.",
    },
    {
      title: "Growth",
      text: "Empower artists to achieve professional and personal growth.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="objectives-section hidden-section" ref={sectionRef}>
      <h2 className="objectives-title">Key Objectives</h2>
      <p className="objectives-intro">
        Our mission is to connect creativity and opportunity — helping performers
        shine and audiences enjoy unforgettable events.
      </p>

      <div className="objectives-container">
  {objectives.map((obj, index) => (
    <div
      className={`objective-box`}       // ← yaha replace kar do
      style={{ animationDelay: `${0.2 + index * 0.2}s` }}  // ← add ye
      key={index}
    >
      <div className="icon">⭐</div>
      <h3>{obj.title}</h3>
      <p>{obj.text}</p>
      <span className="step-number">{`0${index + 1}`}</span>
    </div>
  ))}
</div>

    </section>
  );
}

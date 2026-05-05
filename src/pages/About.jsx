import React from "react";

import "./About.css";

export default function AboutPage() {
  return (
   <div className="about-page fade-in">
  <div className="about-container zoom-in">
    <h1 className="about-heading">About Weeho</h1>

    <img
      src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80"
      alt="Weeho Team"
      className="about-image zoom-in"
    />

    <p className="about-text fade-in">
        WeeHo – Euphoric Moments is an inclusive and dynamic online platform dedicated
        to showcasing, promoting, and celebrating artistic talent across diverse creative
        disciplines. Built on the belief that every artist deserves to be seen and heard,
        WeeHo serves as a digital stage for emerging and passionate creators—especially
        those who may not have access to traditional platforms. It acts as a stepping
        stone for artists, helping them take their first step toward recognition,
        growth, and larger opportunities.
        <br /><br />
        At its core, WeeHo is more than just a performance platform—it is a space
        where creativity thrives, confidence grows, and authentic expression
        is encouraged without judgment. From first-time performers to experienced
        artists, WeeHo welcomes individuals from all backgrounds to share their art,
        connect with audiences, and become part of a supportive creative community,
        while building a strong foundation for their artistic journey.
        <br /><br />
      Weeho is a creative and modern event management platform designed to
      make every event memorable, smooth, and well-organized.
      <br /><br />
      Our goal is to connect talented performers, experienced organizers, and
      enthusiastic audiences through one simple and powerful platform.
      <br /><br />
      We believe in creativity, collaboration, and celebrating every special
      moment. With a user-friendly interface and smart management features,
      Weeho helps you plan, manage, and enjoy events without stress.
      <br /><br />
      Whether it’s music shows, cultural programs, corporate events, or
      community gatherings — Weeho brings everything together in one place.
    </p>
  </div>
</div>

  );
}

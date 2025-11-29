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

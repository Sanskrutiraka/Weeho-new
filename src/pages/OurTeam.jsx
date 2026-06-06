import React from "react";
import "./OurTeam.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function OurTeam2() {
  const navigate = useNavigate();

  const teamList = [
      {
          name: "Akansha Samad",
          role: "Marketing Intern",
          image: "Akanksha_samad.jpeg",
          about:
          "Handle outreach, collaboration, and communication with artists and institutions. Assists in promotional activities and campaign execution to grow the platform."
      },
      {
          name: "Tanisha Bansal",
          role: " ",
          image: "/Tanisha_bansal.jpeg",
          about:
            "Completed her Bachelors in Management Studies. Passionate about Indian Culture and stories. Soulful storyteller and full time student of life or life long learner."
      },
    {
      name: "Anita Goyal",
      role: "Creative Leader",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Amrita Kaur",
      role: "Sales Manager",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Akhil Sharma",
      role: "Web Developer",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Devansh Verma",
      role: "Web Designer",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Tanisha Bansal",
      role: "Content Strategist",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Aman Gupta",
      role: "Marketing Head",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Kriti Singh",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },
    {
      name: "Rohan Mehta",
      role: "App Developer",
      image: "https://via.placeholder.com/200x200",
      about:
        "",
    },

  ];

  return (
    <>
    
      <Navbar/>
    <div className="ourteam2-section">
      

      <h1 className="ourteam2-title">Meet Our Team</h1>
      <div className="ourteam2-container">
        {teamList.map((member, i) => (
          <div className="ourteam2-card" key={i}>
            <div className="ourteam2-img-wrap">
              <img
                src={member.image}
                alt={member.name}
                className="ourteam2-img"
              />
            </div>
            <h3 className="ourteam2-name">{member.name}</h3>
            <p className="ourteam2-about">{member.about}</p>
            <h4 className="ourteam2-role">{member.role}</h4>
            <div className="ourteam2-social">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
      </>
  );
}

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PopularBlogPosts.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function BlogDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state;

  if (!blog) {
    return (
      <div className="blog-section">
        <p>Blog not found!</p>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
    <div className="blog-details-page">
    

      <img src={blog.image} alt={blog.title} className="blog-details-img" />
      <h2 className="blog-details-title">{blog.title}</h2>
      <p className="blog-details-category">{blog.category}</p>
      <p className="blog-details-content">{blog.content}</p>
    </div>
    <Footer />
    </>
  );
}

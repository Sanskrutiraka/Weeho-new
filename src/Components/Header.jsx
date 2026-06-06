import React, { useEffect, useRef } from "react";
import "./Header.css";

function Header() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play();
        }
    }, []);

    return (
        <div className="hero-section">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src="/header.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay"></div>

            {/* NEW: Wrapper to stack heading and button vertically */}
            <div className="hero-content">
                <h1 className="main-heading">
                    Where Every Moment
                    <br />
                    <span>Connects. Engages. Inspires</span>
                </h1>
                <h3>We create powerful online events that brings people together,</h3>
                <h3>spark emotions and deliver expriences that stay forever.</h3>

                <button className="explore-btn">Search Events Near Me</button>
            </div>
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
    };

    return (
        <div className="page-wrapper">
            {/* Background animated shapes */}
            <div className="bg-shape shape1"></div>
            <div className="bg-shape shape2"></div>

            <div className="glass-card fade-in-up">
                <div className="contact-info slide-in-left">
                    <h2 className="title-reveal">Get in Touch</h2>
                    <p className="description">Have an event in mind? Let’s make it happen together.</p>

                    <div className="info-item hover-bounce">
                        <span className="icon">📞</span>
                        <div>
                            <label>Call Us</label>
                            <p>+91 92306 21729</p>
                        </div>
                    </div>

                    <div className="info-item hover-bounce" style={{ animationDelay: '0.2s' }}>
                        <span className="icon">📧</span>
                        <div>
                            <label>Email Us</label>
                            <p>events.weeho@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="How can we help?" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="glow-button ripple">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

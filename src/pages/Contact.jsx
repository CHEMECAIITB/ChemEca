import React, { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="contact-us mt-28">
        <div className="header">
          <h1>We’d Love to Hear From You</h1>
          <h2>CONTACT US</h2>
          <p>
            Have questions, feedback, or ideas? Reach out to us anytime—we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-info">
          <div className="info">
            <div className="icon phone-icon" />
            <p>Phone</p>
            <ul>
              <li>Yogesh Dangi: <a href="tel:7067503163" style={{ color: '#ff4081' }}>7067503163</a></li>
              <li>Saransh Vottery: <a href="tel:7509040303" style={{ color: '#ff4081' }}>75090 40303</a></li>
            </ul>
          </div>

          <div className="info">
            <div className="icon email-icon" />
            <p>Email</p>
            <ul>
              <li><a href="mailto:chemeca.iitb@gmail.com" style={{ color: '#ff4081' }}>chemeca.iitb@gmail.com</a></li>
            </ul>
          </div>

          <div className="info">
            <div className="icon address-icon" />
            <p>Address</p>
            <ul>
              <li>
                ChemEca Lab, F3 Shed, Chemical Engineering, IIT Bombay, Powai,
                Mumbai, Maharashtra, India - 400076
              </li>
            </ul>
          </div>

          <div className="info">
            <div className="icon clock-icon" />
            <p>Peak Hours</p>
            <ul>
              <li>Mon - Sun: 10:00 AM - 12:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

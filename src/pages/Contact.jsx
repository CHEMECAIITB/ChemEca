import React, { useEffect } from 'react';
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
        {/* Title Section */}
        <div className="header">
          <h1>Get in Touch with Us</h1>
          <h2>CONTACT US</h2>
          <p>
            We are available to help you with inquiries related to competitions, projects, or collaborations.
            Feel free to reach out!
          </p>
        </div>

        {/* Info Grid */}
        <div className="contact-info">
          <div className="info">
            <div className="icon phone-icon" />
            <p>Phone No.</p>
            <ul>
              <li>Harsh: 9409475801</li>
              <li>Gaurav: 8669723750</li>
              <li>Khush: 9328441633</li>
            </ul>
          </div>

          <div className="info">
            <div className="icon email-icon" />
            <p>E-mail</p>
            <ul>
              <li>chemeca.iitb@gmail.com</li>
            </ul>
          </div>

          <div className="info">
            <div className="icon address-icon" />
            <p>Address</p>
            <ul>
              <li>
                ChemEca Lab, F3 Shed, Chemical Engineering Department,
                IIT Bombay, Powai, Mumbai, Maharashtra, India. PIN - 400076
              </li>
            </ul>
          </div>

          <div className="info">
            <div className="icon clock-icon" />
            <p>Peak Hours</p>
            <ul>
              <li>Monday - Sunday</li>
              <li>10:00 AM to 12:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

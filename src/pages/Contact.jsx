import React, { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor'
import Header from '../components/Header'
import './Contact.css'
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header/>
    <div className="contact-us mt-28">
      <div className="header">
        <h1>Get in Touch with Us</h1>
        <h2>CONTACT US</h2>
        <p>
          
        </p>
      </div>
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
            <li>chemeca.iitb@gmail.com
            </li>
          </ul>
        </div>
        <div className="info">
          <div className="icon address-icon" />
          <p>Address</p>
          <ul>
            <li>ChemEca Lab, F3 shed, Chemcial Engineering, IIT Bombay, Powai, Mumbai, Maharashtra, India. PIN - 400076</li>
          </ul>
        </div>
        <div className="info">
          <div className="icon clock-icon" />
          <p>Peak Hours</p>
          <ul>
            <li>Monday - Sunday (10:00 PM to 12:00 PM)</li>
          </ul>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Contact
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import bgrn from '../assets/bgrnd.jpg';
import img1 from '../assets/profiles/img1.jpg';
import img2 from '../assets/profiles/img2.jpg';
import img3 from '../assets/profiles/img3.jpeg';
import img4 from '../assets/profiles/img4.jpg';
import img5 from '../assets/profiles/img5.jpeg';
import img6 from '../assets/profiles/img6.jpeg';
// import img7 from '../assets/profiles/img7.jpeg';
import img8 from '../assets/profiles/img8.jpg';
import img9 from '../assets/profiles/img9.jpg';
import img10 from '../assets/profiles/img10.jpeg';
import img11 from '../assets/profiles/img11.jpg';
// import img12 from '../assets/profiles/img12.jpeg';
// import img13 from '../assets/profiles/img13.jpeg';
// import img14 from '../assets/profiles/img14.jpeg';
// import img15 from '../assets/profiles/img15.jpeg';
// import img16 from '../assets/profiles/img16.jpeg';
import img17 from '../assets/profiles/img17.jpeg';
import img18 from '../assets/profiles/img18.jpg';
import img19 from '../assets/profiles/img19.png';
// import img20 from '../assets/profiles/img20.jpeg';
// import img21 from '../assets/profiles/img21.jpeg';
// import img22 from '../assets/profiles/img22.jpeg';
// import img23 from '../assets/profiles/img23.jpeg';
// import img24 from '../assets/profiles/img24.jpeg';
// import img25 from '../assets/profiles/img25.jpeg';
// import img26 from '../assets/profiles/img26.jpeg';
// import img27 from '../assets/profiles/img27.jpeg';
// import img28 from '../assets/profiles/img28.jpeg';
// import img29 from '../assets/profiles/img29.jpeg';
// import img30 from '../assets/profiles/img30.jpeg';
// import img31 from '../assets/profiles/img31.jpeg';
// import img32 from '../assets/profiles/img32.jpeg';
// import img33 from '../assets/profiles/img33.jpeg';
// import img34 from '../assets/profiles/img34.jpeg';
// import img35 from '../assets/profiles/img35.jpeg';
// import img36 from '../assets/profiles/img36.jpeg';
import Footer from '../components/Footer';
import { useEffect } from "react";
const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    // Faculty Advisor
  
    { "name": "Sudarshan Vijay", "email": "sudarshan.vijay@iitb.ac.in", "position": "Faculty Advisor", "division": "Faculty Advisor", "image": img1 },
    
    { "name": "Sandip Roy", "email": "sr@iitb.ac.in", "position": "Faculty Advisor", "division": "Faculty Advisor", "image": img2},

    // PhD Advisor
    { "name": "Vipul Amrutkar", "email": "23d0139@iitb.ac.in", "position": "PhD Advisor", "division": "PhD Advisor" },
  
    // Team Lead
    { "name": "Bhavana", "email": "210020078@iitb.ac.in", "position": "Team Lead", "division": "Team Lead", "image": img8 },
    { "name": "Yogesh Dangi", "email": "yogesh.dangi@iitb.ac.in", "position": "Team Lead", "division": "Team Lead", "image": img9 },
  
    // Research Subsystem
    { "name": "Saransh Vottery", "email": "22B0348@iitb.ac.in", "position": "Research Lead", "division": "Research Subsystem", "image": img10 },
    { "name": "Arush Gaur", "email": "210020022@iitb.ac.in", "position": "Senior Advisor", "division": "Research Subsystem", "image": img11 },
    { "name": "Pranav P. Kawade", "email": "23B0372@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Sai Tambaku", "email": "23B0351@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Shivam Gupta", "email": "23b0309@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Darppan MV", "email": "22b0436@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Eshika Mishra", "email": "23B0371@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    
    // Process and Manufacturing Subsystem
    { "name": "Gayatri Moghe", "email": "22b2451@iitb.ac.in", "position": "Process and Manufacturing Lead", "division": "Process and Manufacturing Subsystem", "image": img17 },
    { "name": "Shruti", "email": "210020132@iitb.ac.in", "position": "Senior Advisor", "division": "Process and Manufacturing Subsystem", "image": img18 },
    { "name": "Manas Agarwal", "email": "210020074@iitb.ac.in", "position": "Senior Advisor", "division": "Process and Manufacturing Subsystem", "image": img19 },
    { "name": "Mahesh Naik", "email": "23b0350@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "OJAS PATHAK", "email": "23b0428@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "A Naveen", "email": "naveeen1125@gmail.com", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "Sivakrishna Sasi", "email": "23B2237@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "Arth Trivedy", "email": "23b0380@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    
    // Control and Automation Subsystem
    { "name": "Shivani", "email": "22b0349@iitb.ac.in", "position": "Control and Automation Lead", "division": "Control and Automation Subsystem" },
    { "name": "Maithri Suresh", "email": "210020072@iitb.ac.in", "position": "Senior Advisor", "division": "Control and Automation Subsystem" },
    { "name": "Mridul Choudhary", "email": "23b3933@iitb.ac.in", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Renudhruva S", "email": "renudhruvas@gmail.com", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Mohith H", "email": "iammohith2004@gmail.com", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Mohammad Hasaan Naurez", "email": "hasaannaurez777@gmail.com", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Param Aghera", "email": "23b0447@iitb.ac.in", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    
    // Business Subsystem
    { "name": "Yogesh Dangi", "email": "yogesh.dangi@iitb.ac.in", "position": "Business Lead", "division": "Business Subsystem" },
    { "name": "Riddhi Agarwal", "email": "riddhi2009@live.com", "position": "Senior Advisor", "division": "Business Subsystem" },
    { "name": "Vassu Sharma", "email": "23b0409@iitb.ac.in", "position": "Business Associate", "division": "Business Subsystem" },
    { "name": "Paresh Kumar Sabar", "email": "23b0328@iitb.ac.in", "position": "Business Associate", "division": "Business Subsystem" },
    { "name": "Ishaan Srivastava", "email": "ishaan0719@gmail.com", "position": "Business Associate", "division": "Business Subsystem" }
  ];
  
  
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.division]) {
      acc[member.division] = [];
    }
    acc[member.division].push(member);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      <div className="p-6 mt-32">
        {Object.keys(groupedMembers).map((division) => (
          <div key={division} className="mb-12">
            <h1 className="text-2xl font-bold text-center text-white">{division}</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-6">
              {groupedMembers[division].map((member, index) => (
                <Card
                  key={index}
                  name={member.name}
                  image={member.image}  // Ensure you have an image or use a placeholder
                  position={member.position}
                  email={member.email}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Team;
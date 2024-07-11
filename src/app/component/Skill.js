'use client'
import { useState } from 'react';
import Image from 'next/image';
import html from '../image/html.webp';
import css from '../image/css.webp';
import bt3 from '../image/bt3.webp';
import js from '../image/js.png';
import php from '../image/php.webp';
import mySql from '../image/mySql.webp';
import mongo from '../image/mongo.png';
import express from '../image/express.png';
import react from '../image/react.webp';
import reactnative from '../image/reactnative.webp';
import next from '../image/next.png';
import firebase from '../image/firebase.webp';
import node from '../image/node.png';
import wordpress from '../image/wordpress.webp';

// Define initial skills data for each row
const initialSkillsRow1 = [
  {
    id: 1,
    image: html,
    description: "HTML structures web content with tags like headings, paragraphs, and links.",
    title: "HTML"
  },
  {
    id: 2,
    image: css,
    description: "CSS (Cascading Style Sheets) styles HTML elements with colors, layouts, fonts.",
    title: "CSS"
  },
  {
    id: 3,
    image: bt3,
    description: "Bootstrap simplifies web design with responsive, pre-styled components and layouts.",
    title: "BOOTSTRAP"
  },
  {
    id: 4,
    image: js,
    description: "JavaScript adds interactivity to websites, handling events, animations, and dynamic content.",
    title: "JAVASCRIPT"
  },
  {
    id: 5,
    image: react,
    description: "React.js is a JavaScript library for component-based UI building.",
    title: "REACT"
  },
  {
    id: 6,
    image: next,
    description: "Next.js is a framework built on top of React.js for server-rendered React applications.",
    title: "NEXT"
  },
  {
    id: 7,
    image: reactnative,
    description: "React Native builds mobile apps using JavaScript and React.js for cross-platform development.",
    title: "NATIVE"
  },
  {
    id: 8,
    image: php,
    description: "PHP scripts server-side logic, handling form data, databases, and dynamic content.",
    title: "PHP"
  },
  {
    id: 9,
    image: express,
    description: "Express.js is a minimalist web framework for Node.js, simplifying server-side JavaScript.",
    title: "EXPRESS"
  },
  {
    id: 10,
    image: node,
    description: "Node.js is a runtime environment for executing JavaScript code server-side.",
    title: "NODE"
  },
  
  {
    id: 11,
    image: mongo,
    description: "MongoDB stores data in flexible, JSON-like documents, supporting dynamic schemas",
    title: "MONGO DB"
  },
  {
    id: 12,
    image: firebase,
    description: "Firebase offers real-time databases, authentication, hosting, and analytics for web apps.",
    title: "FIREBASE"
  },
  {
    id: 13,
    image: mySql,
    description: "MySQL manages relational databases, storing and retrieving data efficiently and securely",
    title: "MY SQL"
  },
  {
    id: 14,
    image: wordpress,
    description: "WordPress is a content management system (CMS) for creating websites and blogs",
    title: "WORDPRESS"
  },
];


// const initialSkillsRow2 = [
//   {
//     id: 1,
//     image: php,
//     description: "PHP scripts server-side logic, handling form data, databases, and dynamic content.",
//     title: "PHP"
//   },
//   {
//     id: 2,
//     image: express,
//     description: "Express.js is a minimalist web framework for Node.js, simplifying server-side JavaScript.",
//     title: "EXPRESS"
//   },
//   {
//     id: 3,
//     image: node,
//     description: "Node.js is a runtime environment for executing JavaScript code server-side.",
//     title: "NODE"
//   },
// ];

// const initialSkillsRow3 = [
//   // Add your third row skills data here

//   {
//     id: 1,
//     image: mongo,
//     description: "MongoDB stores data in flexible, JSON-like documents, supporting dynamic schemas",
//     title: "MONGO DB"
//   },
//   {
//     id: 2,
//     image: firebase,
//     description: "Firebase offers real-time databases, authentication, hosting, and analytics for web apps.",
//     title: "FIREBASE"
//   },
//   {
//     id: 3,
//     image: mySql,
//     description: "MySQL manages relational databases, storing and retrieving data efficiently and securely",
//     title: "MY SQL"
//   },

// ];

export default function Skill() {
  // const [hoveredSkillRow1, setHoveredSkillRow1] = useState(null);
  // const [hoveredSkillRow2, setHoveredSkillRow2] = useState(null);
  // const [hoveredSkillRow3, setHoveredSkillRow3] = useState(null);

  // const handleMouseEnterRow1 = (index) => {
  //   setHoveredSkillRow1(index);
  // };

  // const handleMouseLeaveRow1 = () => {
  //   setHoveredSkillRow1(null);
  // };

  // const handleMouseEnterRow2 = (index) => {
  //   setHoveredSkillRow2(index);
  // };

  // const handleMouseLeaveRow2 = () => {
  //   setHoveredSkillRow2(null);
  // };

  // const handleMouseEnterRow3 = (index) => {
  //   setHoveredSkillRow3(index);
  // };

  // const handleMouseLeaveRow3 = () => {
  //   setHoveredSkillRow3(null);
  // };

  return (
    <div className="skillMain">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-6">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="educationHeadingMain">Skil</h1>
            </div>
            <div className="skilltimeline">
              {/* Row 1 */}
              <div className="skilltimeline-item">
                <div className="skilltimeline-dot"></div>
                <h3 className="skillmainheading">LANGUAGE</h3>
                <div className="row">
                  {initialSkillsRow1.map(skill => (
                    <div key={skill.id} className="col-lg-2 col-md-4 col-sm-6 col-12 project">
                      <Image src={skill.image} alt={skill.title} className="img-fluid" />
                      <h1 className="skillHeading">{skill.title}</h1>
                      <p className="skillPara">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="skilltimeline-item">
                <div className="skilltimeline-dot"></div>
                <h3 className="skillmainheading">BACKEND</h3>
                <div className="row">
                  {initialSkillsRow2.map(skill => (
                    <div key={skill.id} className="col-lg-2 col-md-4 col-sm-6 col-12 project">
                      <Image src={skill.image} alt={skill.title} className="img-fluid" />
                      <h1 className="skillHeading">{skill.title}</h1>
                      <p className="skillPara">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skilltimeline-item">
                <div className="skilltimeline-dot"></div>
                <h3 className="skillmainheading">DATABASE</h3>
                <div className="row">
                  {initialSkillsRow3.map(skill => (
                    <div key={skill.id} className="col-lg-2 col-md-4 col-sm-6 col-12 project">
                      <Image src={skill.image} alt={skill.title} className="img-fluid" />
                      <h1 className="skillHeading">{skill.title}</h1>
                      <p className="skillPara">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

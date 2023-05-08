//import

import me from "../images/me.PNG";
import project1 from "../images/project1.PNG";
import project2 from "../images/project2.png";
import project3 from "../images/project3.PNG";
import project4 from "../images/project4.PNG";
import project5 from "../images/project5.PNG";
import project6 from "../images/project6.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Jacob",
  lastName: "Adamson",
  initials: "jla",
  position: "a Full Stack Developer",
  selfPortrait: me,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🍵",
      text: "fueled by tea",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "💼",
      text: "Freelance Web Developer/Senior Grader at 2U Coding Bootcamp",
    },
    {
      emoji: "📧",
      text: "jakeladamson0@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/JKLA13",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/jacob-adamson-535769103/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://www.instagram.com/shoeboxpicture/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://astrangehappening.bandcamp.com/",
      icon: "fa fa-bandcamp",
      label: "bandcamp",
    },
  ],
  bio: "I am a Full Stack Web Developer, who loves to learn and grow in the exciting field of Web Development.  I graduated from Denver University with a certificate in Full Stack Development.",
  skills: {
    proficientWith: [
      "javascript",
      "jquery",
      "react",
      "node.js",
      "express.js",
      "sequelize",
      "mysql",
      "mongodb",
      "graphql",
      "github",
      "bootstrap",
      "html5",
      "css3",
    ],
    exposedTo: ["adobe suite", "figma", "material ui", "bulma"],
  },
  hobbies: [
    {
      label: "music",
      emoji: "🎸",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
  ],

  portfolio: [
    {
      title: "ASH Band Website",
      live: "https://jkla13.github.io/ash-band-page/#/",
      source: "https://github.com/JKLA13/ash-band-page",
      image: project1,
    },
    {
      title: "Concert Carpool Social App",
      live: "https://boiling-reef-48460.herokuapp.com/",
      source: "https://github.com/dereklewis/Concert-Carpool",
      image: project2,
    },
    {
      title: "Warehouse Manager",
      live: "https://warehouse-manager-nw.herokuapp.com/",
      source: "https://github.com/nickwojt/warehouse-manager",
      image: project3,
    },
    {
      title: "Budget Tracker",
      live: "https://budget-tracker-jkla.herokuapp.com/",
      source: "https://github.com/JKLA13/budget-tracker",
      image: project4,
    },
    {
      title: "Employee Tracker CLI App",
      live: "https://drive.google.com/file/d/1IYGVQCiYjS8uJ_ARTaEHwx4_cHr4SQiv/view?usp=sharing",
      source: "https://github.com/JKLA13/employee-management",
      image: project5,
    },
    {
      title: "E-Commerce Backend",
      live: "https://drive.google.com/file/d/https://drive.google.com/file/d/https://drive.google.com/file/d/1cN-AfSqXNxEE_u80RZUJ5_5QyTEZga5A/viewcN-AfSqXNxEE_u80RZUJ5_5QyTEZga5A/view1IYGVQCiYjS8uJ_ARTaEHwx4_cHr4SQiv/view?usphttps://drive.google.com/file/d/1cN-AfSqXNxEE_u80RZUJ5_5QyTEZga5A/view=sharing",
      source: "https://github.com/JKLA13/ecommerce-backend",
      image: project6,
    },
  ],
};

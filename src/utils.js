import { IoPerson } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import css from "./assets/css.png";
import express from "./assets/express.png";
import firebase from "./assets/firebase.png";
import framer from "./assets/framer.png";
import git from "./assets/git.png";
import html from "./assets/html.png";
import javascript from "./assets/javascript.png";
import jwt from "./assets/jwt.png";
import mongodb from "./assets/mongodb.png";
import mongoose from "./assets/mongoose.png";
import mysql from "./assets/mysql.png";
import node from "./assets/node.png";
import php from "./assets/php.png";
import react from "./assets/react.png";
import redux from "./assets/redux.png";
import restapi from "./assets/restapi.png";
import tailwind from "./assets/tailwind.png";
import tanstack from "./assets/tanstack.svg";

import linkedin from "./assets/linkedin.jpg";
import worknest from "./assets/worknest.jpg";

export const Menu = [
  {
    Icon: MdHome,
    name: "Home",
    id: "home",
  },
  {
    Icon: IoPerson,
    name: "About",
    id: "about",
  },
  {
    Icon: FaBrain,
    name: "Skills",
    id: "skills",
  },
  {
    Icon: FaProjectDiagram,
    name: "Projects",
    id: "projects",
  },
  {
    Icon: IoMdMail,
    name: "Contact",
    id: "contact",
  },
];

export const Me = [
  {
    Icon: MdCastForEducation,
    title: "Education",
    data: "Computer-Science",
    description: "Hawassa University",
  },
  {
    Icon: FaCogs,
    title: "Experience",
    data: "4+ Years",
    description: "countless projects",
  },
  {
    Icon: IoPerson,
    title: "Personality",
    data: "Disciplined",
    description: "Hard-working",
  },
];

export const langs = [
  {
    name: "Html",
    logo: html,
  },
  {
    name: "Css",
    logo: css,
  },
  {
    name: "javascript",
    logo: javascript,
  },
  {
    name: "Tailwind",
    logo: tailwind,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "Redux",
    logo: redux,
  },
  {
    name: "Php",
    logo: php,
  },
  {
    name: "Node",
    logo: node,
  },
  {
    name: "Express",
    logo: express,
  },
  {
    name: "Mongodb",
    logo: mongodb,
  },
  {
    name: "Mysql",
    logo: mysql,
  },
  {
    name: "Rest api",
    logo: restapi,
  },
  {
    name: "jwt",
    logo: jwt,
  },
  {
    name: "Tanstack",
    logo: tanstack,
  },
  {
    name: "git",
    logo: git,
  },
  {
    name: "Firebase",
    logo: firebase,
  },
  {
    name: "Framer",
    logo: framer,
  },
  {
    name: "Mongoose",
    logo: mongoose,
  },
];

export const apps = [
  {
    name: "Linked-in",
    web: "https://linkedin-clone-c7761.web.app",
    git: "https://github.com/amir5pro/linkedin",
    pro: "react",
    photo: linkedin,
  },

  {
    name: "worknest",
    web: "https://worknest.onrender.com",
    git: "https://github.com/amir5pro/WorkNest",
    pro: "mern",
    photo: worknest,
  },
];

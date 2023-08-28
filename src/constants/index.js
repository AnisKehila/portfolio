import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  wareed,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  litidea,
  litideaWeb,
  lito,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front end Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Litidea",
    icon: litidea,
    iconBg: "#1A1A1A",
    date: "Jan 2023 - Sep 2023",
    points: [
      "Collaborating closely with fellow university team members as part of 'Litidea,' our self-initiated university team dedicated to creating innovative projects.",
      "Showcasing our technical skills and creativity through a range of projects developed within the 'Litidea' team environment.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Wareed",
    description: `an innovative web and mobile platform crafted by the dynamic team at Litidea, aimed at revolutionizing your healthcare experience. Seamlessly merging technology with medical care.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: wareed,
    preview_link: "https://wareed-dz.com/",
  },
  {
    name: "Lito - shopping cart",
    description:
      "This is an online car selling website created to learn more about React routing and useCases. The website allows users to browse, search, and purchase cars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: lito,
    source_code_link: "https://github.com/AnisKehila/LiTo",
    preview_link: "https://aniskehila.github.io/LiTo/",
  },
  {
    name: "Litidea",
    description:
      "Litidea is an agency created by a group of students with the goal of delivering a world-class web services.",
    tags: [
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: litideaWeb,
    source_code_link: "https://github.com/AnisKehila/Litedia",
    preview_link: "https://aniskehila.github.io/Litedia/",
  },
];

export { services, technologies, experiences, projects };

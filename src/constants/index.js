import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  reactjs,
  tailwind,
  git,
  blockchain,
  ai,
  cplus,
  c,
  asm,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
  name: "react",
  icon: reactjs,
 },
 {
  name: "css",
  icon: css,
 },
 {
  name: "cplus",
  icon: cplus,
 },
 {
  name: "c",
  icon: c,
 },
 {
  name: "asm",
  icon: asm,
 },
 
];



const testimonials = [
  {
  testimonial:
  "Stealing ideas from someone is plagiarism. Stealing them from many is research",
  name: "Murphy's law",
  },

  {
    testimonial:
    "Anything can be done, even if you don't know how to do it, all you have to do is start, the rest will be history",
    name: "Spiridon Roberto",
    
  },
  {
    testimonial:
    "Many people who fail do so because they didn't realize how close they were to success before they gave up",
    name: " Thomas Edison",
  },
];

const projects = [
  {
    name: "BLOCKCHAIN",
    description:
      "A decentralized blockchain that is faster, more efficient and more pleasant to society, reducing society's problems",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "SOON",
        color: "orange-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "",
  },
  {
    name: "AI",
    description:
      "An artificial intelligence that you can talk to, providing you with the necessary information, and, why not, to contribute to the blockchain",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "SOON",
        color: "orange-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "",
  },
];

export { services, technologies, testimonials, projects };
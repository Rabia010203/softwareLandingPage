import { LuClock3 } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { MdLock } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


export const cards = [
  {
    icon: <LuClock3 />,
    title: "Time Tracking",
    text: "Lorem Ipsum is simply dummy text of the printing .",
  },
  {
    icon: <FiShoppingBag />,
    title: "Sales Report",
    text: "Lorem Ipsum is simply dummy text of the printing .",
  },
  {
    icon: <MdLock />,
    title: "Data Safety",
    text: "Lorem Ipsum is simply dummy text of the printing .",
  },
  {
    icon: <RiContactsFill />,
    title: "Contracts",
    text: "Lorem Ipsum is simply dummy text of the printing .",
  },
];
export const services = [
  {
    img: "/service1.svg",
    title: "Custom Software Development",
    desc: "At Dash, we specialize in developing bespoke software solutions that align perfectly with your business goals. ",
  },
  {
    img: "/service2.svg",
    title: "Cloud Solutions and Integration",
    desc: "We offer comprehensive cloud solutions that empower your business to migrate to cloud platforms seamlessly.",
  },
  {
    img: "/service3.svg",
    title: "API Development and Integration",
    desc: "Our API development services ensure your business systems communicate effectively.",
  },
  {
    img: "/service4.svg",
    title: "Software Maintenance and Support",
    desc: "We don’t just build software, we keep it running at peak performance.",
  },
  {
    img: "/service5.svg",
    title: "UI/UX Design Services",
    desc: "First impressions matter, and at Dash, we deliver intuitive, visually appealing user interfaces that make your software easy to use and a delight for your customers. ",
  },
];
export const works = [
  {
    id:1,
    img: "/work 1.svg",
    title: "Work one",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
  },
  {
    id:2,
    img: "/work 2.svg",
    title: "Work two",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
  },
  {
    id:3,
    img: "/work 3.svg",
    title: "Work three",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
  },
  {
    id:4,
    img: "/work 3.svg",
    title: "Work four",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
  },
];
export const team = [
  {
    img: "/Person1.jpg",
    name:'Jhon Doe',
    jobTitle: "UI/UX Designer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/person2.jpg",
    name:'Jassica Pearl',
    jobTitle: 'QA Tester',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/person3.jpg",
    name:'Kara Smith',
    jobTitle: 'Backend Developer',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/person4.jpg",
    name:'steven smith',
    jobTitle: 'Backend Developer',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export const testimonals = [
  {
    rev:"We’ve been using Dash’s software for over two years, and what sets them apart is their exceptional customer service. ",
    img:'/Test 1.jpg',
    name:'Sarah T',
    role:"Marketing Manager"
  },
  {
    rev:"The software is incredibly user-friendly, which made it easy for our team to adapt quickly.",
    img:'Test 2.jpg',
    name:'John L',
    role:"Operations Director"
  },
  {
    rev:"We did a lot of research before choosing Dash’s product, and it’s by far the best value for the features offered.",
    img:'Test 3.jpg',
    name:'Emily R',
    role:"Small Business Owner"
  },
  {
    rev:"The software runs smoothly with no downtime or performance issues. It’s reliable, and we’ve never experienced any major problems.",
    img:'Test 4.jpg',
    name:'Lisa H.',
    role:"Project Manager"
  },
]
export const pricing = [
  {
    purpose:'Personal',
    price: '$5',
    projects:'3 Projects',
    color:'btn-primary',
   initialConceptStrike: true,  // No strikethrough for Initial Concept
    logoTransparencyStrike: true,
    specialPriceCol:'text-slate-950'
  },
  {
    purpose:'Team',
    price: '$50',
    projects:'3 Projects',
    color:"btn-accent",
    initialConceptStrike: false,   // Strikethrough for Initial Concept
    logoTransparencyStrike: true,
    specialPriceCol:'text-teal-300',
    
  },
  {
    purpose:'Business',
    price: '$80',
    projects:'3 Projects',
    color:'btn-primary',
    specialPriceCol:'text-slate-950'
  }
]
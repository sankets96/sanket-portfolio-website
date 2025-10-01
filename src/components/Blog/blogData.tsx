import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Invoice Generator Web App using React",
    paragraph:
      " Designed and developed a professional business web App for Invoice generation purposes, showcasing their Products, Quantity ,etc .",
    image: "/images/Project/project1.png",
    author: {
      name: "Sanket",
      image: "images/Project/project-1.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Real Time Ticket Booking App",
    paragraph:
      " Designed and implemented a real-time ticket booking application for a swimming facility using React, Express and MongoDB Template ensuring high performance and user satisfaction.Leveraged HTML, CSS, JavaScript, and Bootstrap , react to create a user-friendly, responsive interface that enhanced user experience across multiple devices.",
    image: "/images/Project/project2.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Doctor Appointment Booking Web Application",
    paragraph:
      "Developed a full-stack web application enabling patients to book Doctor appointments online and manage schedules efficiently.Built RESTful APIs using Express.js and Node.js for user authentication, appointment booking, and doctor patient management. Utilized MongoDB for secure and scalable data storage, ensuring smooth data retrieval and updates. Implemented a responsive React.js frontend for an intuitive and seamless user experience.",
    image: "/images/blog/project3.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },

  
];
export default blogData;

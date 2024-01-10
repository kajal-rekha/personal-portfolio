import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Cordemy - An Online Learning Platform",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687459898/Screenshot_53_lcf8zk.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687459922/Screenshot_55_a4ph8q.png",
    description:
      "Cordemy is an innovative online learning platform that provides a unique and immersive educational experience. It leverages a powerful tech stack, including Next.js, React, Prisma, Stripe, NextAuth, Tailwind CSS, clsx, and Axios, to deliver a feature-rich platform for learners and instructors.",
    tools: [
      "Next.js",
      "Prisma",
      "Stripe",
      "NextAuth",
      "Axios",
      "Mongodb",
      "Tailwind CSS",
      "Context-api",
    ],
    liveLink: "https://cordemy-theta.vercel.app",
    frontEndLink: "https://github.com/kajal-rekha/cordemy.git",
    backendLink: "https://github.com/kajal-rekha/cordemy.git",
  },
  {
    id: 2,
    title: "Luminex - An Online Jewlery Shop",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1704908056/Screenshot_69_gczjrg.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1704908207/Screenshot_71_ctmelv.png",
    description:
      "Luminex is an online jewelry shop. Seamlessly navigate through stunning product details, secure user authentication, and a smooth shopping cart. Powered by Next.js, TypeScript, Redux, Redux Persist, SwiperJS, SWR, CLSX, Lenix, and more.",
    tools: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Pedux Persist",
      "Axios",
      "Mongodb",
      "Tailwind CSS",
      "Swiper.js",
      "SWR",
      "Clsx",
      "Lenis",
      "Framer Motion",
      "Aos",
    ],
    liveLink: "https://luminex-lux.vercel.app",
    frontEndLink: "https://github.com/kajal-rekha/luminex-client.git",
    backendLink: "https://github.com/kajal-rekha/luminex-server.git",
  },
  {
    id: 3,
    title: "Proxima - A Powerful Project Management App",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934511/Screenshot_33_b3fq76.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934525/Screenshot_35_f60au2.png",
    description:
      "Proxima is a secure and powerful project management system built with React, Express, Tailwind CSS, Node.js, and MongoDB. It features JWT authentication, easy project creation, task assignment, and progress tracking. Proxima is highly customizable, responsive, and scalable.",
    tools: [
      "React",
      "Nodejs",
      "Express",
      "Jwt",
      "Mongodb",
      "Tailwind CSS",
      "Context-api",
    ],
    liveLink: "https://proxima-app-project.netlify.app",
    frontEndLink: "https://github.com/kajal-rekha/proxima-client.git",
    backendLink: "https://github.com/kajal-rekha/proxima-server.git",
  },
  {
    id: 4,
    title: "Tech Alph _ An Ecommerce Website",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934825/Screenshot_36_efvmrv.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278769/Screenshot_2_xgqpc2.png",
    description:
      "This is an e-commerce project built using React, Redux, and Tailwind CSS. It is a modern, fast and responsive web application designed for an optimal shopping experience. The project makes use of Redux for state management and Tailwind CSS for styling to deliver an efficient and visually appealing user interface. ",
    tools: [
      "React",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://tech-alpha-ecommerce.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/tech-alpha.git",
    backendLink: "https://github.com/kajal-rekha/tech-alpha-server.git",
  },
  {
    id: 5,
    title: "Foodvarse _ A Recipe Finder Web Application",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278752/Screenshot_4_rfupr3.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278735/Screenshot_5_tkwlqi.png",
    description:
      "Foodverse is a recipe web application, where an user can search different kinds of recipe and find the necessary ingredients for the specific recipe item. Also a recipe item can be saved into the local storage of the browser. ",
    tools: ["React.js", " React Router", "Tailwind CSS"],
    liveLink: "https://foodvarse.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/foodvarse.git",
  },
  {
    id: 6,
    title: "React Todo App _ A simple Todo application",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692877869/Screenshot_8_gxekew.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1699009093/kajal-todo-app.netlify.app__eamdve.png",
    description:
      "This is a React Todo application built using React and Tailwind CSS. Features include the ability to create, update, and delete todo items, making task management a breeze. With its clean and intuitive design, it's easy to stay organized and on top of your tasks.  ",
    tools: ["React.js", "Tailwind CSS"],
    liveLink: "https://kajal-todo-app.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/react-todo-app.git",
    backendLink: "https://github.com/kajal-rekha/todo-app-server.git",
  },
  {
    id: 7,
    title: "Immemorial: 90's Memory",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692878024/Screenshot_9_fpzwdb.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1699009698/Screenshot_11_swjnwj.png",
    description:
      "This repository contains a React application that allows users to reminisce about their memories from the 90s. The application utilizes React Router for navigation between pages, and GSAP (GreenSock Animation Platform) for animations to enhance the user experience. Users can create, edit, and view their own 90s memories in a fun and interactive way. ",
    tools: ["React.js", "React Router", "GSAP (GreenSock Animation Platform)"],
    liveLink: "https://immemorial-project.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/immemorial.git",
  },
];

const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-40'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

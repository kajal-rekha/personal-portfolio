import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Tech Alph _ An Ecommerce Website",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278762/Screenshot_3_cooeim.png",
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
  },
  {
    id: 2,
    title: "Foodvarse _ A Recipe Finder Web Application",
    img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278752/Screenshot_4_rfupr3.png",
    img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278735/Screenshot_5_tkwlqi.png",
    description:
      "Foodverse is a recipe web application, where an user can search different kinds of recipe and find the necessary ingredients for the specific recipe item. Also a recipe item can be saved into the local storage of the browser. ",
    tools: ["React.js", " React Router", "Tailwind CSS"],
    liveLink: "https://foodvarse.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/foodvarse.git",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "JavaScript",
  },
  {
    id: 4,
    title: "React.js",
  },
  {
    id: 5,
    title: "Next.js",
  },
  {
    id: 6,
    title: "Express.js",
  },
  {
    id: 7,
    title: "Node.js",
  },
  {
    id: 8,
    title: "MongoDB",
  },
  {
    id: 9,
    title: "MongoDB",
  },
  {
    id: 10,
    title: "TypeScript",
  },
  {
    id: 11,
    title: "NextAuth",
  },
  {
    id: 12,
    title: "Redux Toolkit",
  },
  {
    id: 13,
    title: "React Router",
  },
  {
    id: 14,
    title: "JWT",
  },
  {
    id: 15,
    title: "Axios",
  },
  {
    id: 16,
    title: "React Hooks",
  },

  {
    id: 17,
    title: "Tailwind CSS",
  },
  {
    id: 18,
    title: "Bootstrap",
  },
  {
    id: 19,
    title: "GSAP",
  },
  {
    id: 20,
    title: "Firebase",
  },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillTextRef = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />

      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name"> {skill.title}</span>
                </div>
              </li>
            ))}
        </ul>

        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item reveal overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name"> {skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

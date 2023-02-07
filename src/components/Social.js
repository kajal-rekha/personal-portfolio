import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/anowar.kajal/",
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/kajal-rekha",
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/kajal-rekha-81262b264/",
  },
  {
    id: 4,
    title: "Leetcode",
    url: "https://leetcode.com/kajalrekha/",
  },
  {
    id: 5,
    title: "Twitter",
    url: "https://twitter.com/KajalRekha14",
  },
];

const Social = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Social;

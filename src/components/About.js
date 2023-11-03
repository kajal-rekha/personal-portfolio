import { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import useHoverEffect from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1678392460/about_emjy0r.jpg",
  img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1676659353/git_ezxxkm.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(abouts);

  return (
    <div className="about container mx-auto mt-40 " id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p className="mb-10">
            I am a mern stack developer with a passion for creating
            user-friendly and visually appealing websites. I have expertise in
            HTML, CSS, JavaScript, React, Next.js, TypeScript and have a strong
            understanding of responsive design and cross-browser compatibility.
            I stay up-to-date with the latest development trends and techniques
            to ensure that my projects are up to industry standards. My goal is
            to deliver a seamless user experience that meets and exceeds the
            needs of my clients and their users.
          </p>
          <p>
            I stay up-to-date with the latest development trends and techniques
            to ensure that my projects are up to industry standards. My goal is
            to deliver a seamless user experience that meets and exceeds the
            needs of my clients and their users.
          </p>
          <a
            href="https://drive.google.com/file/d/1so6EO8vkXgey9o_dtbgip-HqkucoImbt/view?usp=sharing"
            target="_blank"
            rel="noreferrrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:border-cyan-400/20 hover:bg-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

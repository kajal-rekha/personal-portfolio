import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);
  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        I am a front-end developer with a passion for creating user-friendly and
        visually appealing websites. I have expertise in HTML, CSS, JavaScript,
        and React, and have a strong understanding of responsive design and
        cross-browser compatibility. I stay up-to-date with the latest
        development trends and techniques to ensure that my projects are up to
        industry standards. My goal is to deliver a seamless user experience
        that meets and exceeds the needs of my clients and their users.
      </p>
    </div>
  );
};

export default Bio;

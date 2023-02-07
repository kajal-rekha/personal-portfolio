import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675338948/hero1_zvbxmv.jpg",
  img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675335147/img6_b0fiir.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadlineRef, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadlineRef}>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;

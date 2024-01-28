import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005288/her_o2_msb5gs.jpg",
  img2: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1706471035/416977782_793191679510929_6161331559282704381_n_xpb17c.jpg",
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
    <div className='hero container mx-auto mt-20 flex justify-center items-center overflow-hidden'>
      <div className='hero-img' ref={heroImageRef}></div>
      <div className='shutter shutter-left overflow-hidden'>
        <h1 ref={heroHeadlineRef}>Mern Stack</h1>
      </div>
      <div className='shutter shutter-right overflow-hidden'>
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className='circle-left'></div>
      <div className='circle-right'></div>
    </div>
  );
};

export default Hero;

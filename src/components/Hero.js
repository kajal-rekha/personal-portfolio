import { useRef } from "react";
import useHoverEffect from "../hooks/useHoverEffect";

const data = {
  // img1: "https://ibb.co/YNHc8hZ",
  // img2: "https://ibb.co/51DjYX7",
  img1: "https://images.unsplash.com/photo-1622281631389-59e63d92760d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfHw%3D&w=1000&q=80",
  img2: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;

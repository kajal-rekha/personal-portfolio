import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef5 = useRef(null);
  const linkRef6 = useRef(null);
  const linkRef7 = useRef(null);

  const links = [
    linkRef1,
    linkRef2,
    linkRef3,
    linkRef4,
    linkRef5,
    linkRef6,
    linkRef7,
  ];

  useLinkReveal(links, 2);
  return (
    <nav
      className={`flex justify-between container mx-auto ${
        footerNav ? "mt-40" : "mt-20"
      }  uppercase`}
    >
      <div>
        <HashLink smooth to="#home" ref={linkRef1} className="link-item">
          {footerNav ? "Go to top" : "Kajal Rekha"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item" ref={linkRef2}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item" ref={linkRef3}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item" ref={linkRef4}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item" ref={linkRef5}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item" ref={linkRef6}>
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1EMSJU63KL6L1NDfXlTS9F_nWjINVLwZhYC0BuyFrA9w/edit?usp=sharing"
            target="_blank"
            rel="noreferrrer"
            className="link-item"
            ref={linkRef7}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

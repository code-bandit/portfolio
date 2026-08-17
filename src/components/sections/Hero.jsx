import React, { useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const INIT_TEXT = "INIT // SESSION_START";
const NAME_TEXT = "OBINNA-EZE\nCHIEMERIE";
const ROLE_TEXT = "FULL STACK SOFTWARE DEVELOPER // LAGOS, NG";

const Hero = () => {
  const container = useRef(null);
  const initRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        initRef.current.textContent = INIT_TEXT;
        nameRef.current.textContent = NAME_TEXT;
        roleRef.current.textContent = ROLE_TEXT;
        return;
      }

      const typeInto = (el, text, duration) => {
        const counter = { n: 0 };
        return gsap.to(counter, {
          n: text.length,
          duration,
          ease: "none",
          snap: "n",
          onUpdate: () => {
            el.textContent = text.slice(0, counter.n);
          },
        });
      };

      initRef.current.textContent = "";
      nameRef.current.textContent = "";
      gsap.set(roleRef.current, { autoAlpha: 0, y: 8 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.add(typeInto(initRef.current, INIT_TEXT, 0.6))
        .add(typeInto(nameRef.current, NAME_TEXT, 0.9), "+=0.1")
        .to(roleRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.1");
    },
    { scope: container }
  );

  return (
    <HeroSection id="top" ref={container}>
      <div className="init-label">
        <span ref={initRef} />
        <span className="cursor" ref={cursorRef} />
      </div>
      <h1>
        <span ref={nameRef} />
      </h1>
      <p className="role-line" ref={roleRef}>
        {ROLE_TEXT}
      </p>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: var(--bg-main);

  .init-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: var(--text-main-color);
    margin-bottom: 1.5rem;

    .cursor {
      display: inline-block;
      width: 6px;
      height: 12px;
      margin-left: 2px;
      background-color: var(--text-main-color);
      animation: blink 1s step-end infinite;
      vertical-align: middle;
    }
  }

  h1 {
    font-family: var(--text-heading);
    font-weight: 700;
    font-size: 5rem;
    line-height: 1.05;
    letter-spacing: -1px;
    color: var(--text-secondary-color);
    text-transform: uppercase;
    white-space: pre-line;
    min-height: 2.1em;
  }

  .role-line {
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    color: var(--text-paragraph);
    border-bottom: 1px solid var(--border);
    padding-bottom: 1.5rem;
    width: fit-content;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    50.01%,
    100% {
      opacity: 0;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }
    .role-line {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 3rem 1.25rem;
    h1 {
      font-size: 2.2rem;
    }
  }
`;

export default Hero;

import React, { createContext, useContext, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

const TransitionCtx = createContext(() => {});
export const useTransitionNav = () => useContext(TransitionCtx);

const HIDDEN_LEFT = "inset(0 100% 0 0)";
const FULL_COVER = "inset(0 0% 0 0)";
const HIDDEN_RIGHT = "inset(0 0 0 100%)";

const playCover = (overlay, label) => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tl = gsap.timeline();
  if (reduced) {
    tl.set(overlay, { clipPath: FULL_COVER });
    tl.set(label, { autoAlpha: 1 });
    return tl;
  }
  tl.set(overlay, { clipPath: HIDDEN_LEFT })
    .set(label, { autoAlpha: 0 })
    .to(overlay, { clipPath: "inset(0 45% 0 0)", duration: 0.05, ease: "steps(1)" })
    .to(overlay, { clipPath: "inset(0 60% 0 0)", duration: 0.03, ease: "steps(1)" })
    .to(overlay, { clipPath: "inset(0 15% 0 0)", duration: 0.05, ease: "steps(1)" })
    .to(overlay, { clipPath: "inset(0 30% 0 0)", duration: 0.03, ease: "steps(1)" })
    .to(overlay, { clipPath: FULL_COVER, duration: 0.06, ease: "steps(1)" })
    .to(label, { autoAlpha: 1, duration: 0.01 });
  return tl;
};

const playReveal = (overlay, label) => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tl = gsap.timeline();
  if (reduced) {
    tl.set(overlay, { clipPath: HIDDEN_RIGHT });
    tl.set(label, { autoAlpha: 0 });
    return tl;
  }
  tl.to(label, { autoAlpha: 0, duration: 0.01 })
    .to(overlay, { clipPath: "inset(0 0 0 55%)", duration: 0.05, ease: "steps(1)" })
    .to(overlay, { clipPath: "inset(0 0 0 40%)", duration: 0.03, ease: "steps(1)" })
    .to(overlay, { clipPath: "inset(0 0 0 85%)", duration: 0.05, ease: "steps(1)" })
    .to(overlay, { clipPath: "inset(0 0 0 65%)", duration: 0.03, ease: "steps(1)" })
    .to(overlay, { clipPath: HIDDEN_RIGHT, duration: 0.07, ease: "steps(1)" });
  return tl;
};

const TransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const overlayRef = useRef(null);
  const labelRef = useRef(null);
  const animating = useRef(false);

  const goTo = (to) => {
    const [toPath] = to.split("#");
    const samePage = (toPath || "/") === location.pathname;

    if (samePage) {
      navigate(to);
      return;
    }
    if (animating.current) return;
    animating.current = true;

    playCover(overlayRef.current, labelRef.current).eventCallback("onComplete", () => {
      navigate(to);
      requestAnimationFrame(() => {
        playReveal(overlayRef.current, labelRef.current).eventCallback("onComplete", () => {
          animating.current = false;
        });
      });
    });
  };

  return (
    <TransitionCtx.Provider value={goTo}>
      {children}
      <Overlay ref={overlayRef} aria-hidden="true">
        <div className="bars">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="label" ref={labelRef}>
          {"//_ROUTE_CHANGE"}
        </div>
      </Overlay>
    </TransitionCtx.Provider>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: var(--bg-secondary);
  clip-path: inset(0 100% 0 0);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .bars {
    position: absolute;
    inset: 0;
    span {
      position: absolute;
      left: 0;
      width: 100%;
      background-color: var(--text-secondary-color);
      opacity: 0.05;
    }
    span:nth-child(1) {
      top: 12%;
      height: 6%;
    }
    span:nth-child(2) {
      top: 38%;
      height: 3%;
      opacity: 0.08;
    }
    span:nth-child(3) {
      top: 61%;
      height: 8%;
    }
    span:nth-child(4) {
      top: 82%;
      height: 4%;
      opacity: 0.07;
    }
  }

  .label {
    position: relative;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    letter-spacing: 2px;
    color: var(--text-secondary-color);
    opacity: 0;
  }
`;

export default TransitionProvider;

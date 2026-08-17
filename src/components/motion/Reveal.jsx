import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HIDDEN_CLIP = "inset(0 0 100% 0)";
const VISIBLE_CLIP = "inset(0 0 0% 0)";

// Stepped, jittery clip-path reveal — reads as a digital glitch rather than a smooth fade.
const glitchIn = (el, delay = 0) => {
  const tl = gsap.timeline({ delay });
  tl.set(el, { autoAlpha: 1, clipPath: HIDDEN_CLIP, x: 0, skewX: 0 })
    .to(el, { clipPath: "inset(0 0 55% 0)", x: -6, duration: 0.05, ease: "steps(1)" })
    .to(el, { clipPath: "inset(0 0 70% 0)", x: 5, skewX: 2, duration: 0.03, ease: "steps(1)" })
    .to(el, { clipPath: "inset(0 0 25% 0)", x: -3, skewX: -1, duration: 0.05, ease: "steps(1)" })
    .to(el, { clipPath: "inset(0 0 40% 0)", x: 2, duration: 0.03, ease: "steps(1)" })
    .to(el, { clipPath: VISIBLE_CLIP, x: 0, skewX: 0, duration: 0.07, ease: "steps(1)" });
  return tl;
};

const Reveal = ({ children, as: Tag = "div", stagger = 0.08, ...rest }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const targets = gsap.utils.toArray(ref.current.children);
      if (!targets.length) return;

      if (reduced) {
        gsap.set(targets, { autoAlpha: 1, clipPath: VISIBLE_CLIP });
        return;
      }

      gsap.set(targets, { autoAlpha: 0, clipPath: HIDDEN_CLIP });
      ScrollTrigger.batch(targets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((el, i) => glitchIn(el, i * stagger));
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;

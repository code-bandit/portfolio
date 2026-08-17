import React from "react";
import { useTransitionNav } from "./TransitionProvider";

const TransitionLink = ({ to, children, className, onClick }) => {
  const goTo = useTransitionNav();

  const handleClick = (e) => {
    const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (isModified) return; // let the browser handle new-tab / modified clicks natively
    e.preventDefault();
    onClick?.(e);
    goTo(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TransitionLink;

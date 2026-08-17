import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LuSun, LuMoon } from "react-icons/lu";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <Toggle
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <LuSun /> : <LuMoon />}
    </Toggle>
  );
};

const Toggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-secondary-color);
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.85rem;

  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`;

export default ThemeToggle;

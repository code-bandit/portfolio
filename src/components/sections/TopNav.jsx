import React from "react";
import styled from "styled-components";
import TransitionLink from "../transitions/TransitionLink";
import ThemeToggle from "../ThemeToggle";

const links = [
  { to: "/#manifest", label: "ABOUT" },
  { to: "/#experience", label: "EXPERIENCE" },
  { to: "/#projects", label: "PROJECTS" },
  { to: "/#specs", label: "STACK" },
  { to: "/contact", label: "CONTACT" },
];

const TopNav = () => {
  return (
    <Nav>
      <TransitionLink className="system-id" to="/">
        CODE_BANDIT_V.01
      </TransitionLink>
      <div className="links">
        {links.map((link) => (
          <TransitionLink key={link.to} to={link.to}>
            {link.label}
          </TransitionLink>
        ))}
      </div>
      <div className="right">
        <div className="status">
          <span className="status-dot" />
          SYSTEM_STATUS:ONLINE
        </div>
        <ThemeToggle />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0 2rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.5px;

  .system-id {
    color: var(--text-secondary-color);
    text-decoration: none;
    font-weight: 600;
    flex-shrink: 0;
  }

  .links {
    display: flex;
    gap: 1.75rem;
    overflow-x: auto;
    a {
      color: var(--text-main-color);
      text-decoration: none;
      white-space: nowrap;
      transition: var(--transition);
      &:hover {
        color: var(--text-secondary-color);
      }
    }
  }

  .right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--status-online);
  }

  @media screen and (max-width: 640px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
    padding: 0.85rem 1rem;
    .system-id {
      font-size: 0.65rem;
    }
    .links {
      width: 100%;
      gap: 0.9rem;
      font-size: 0.65rem;
    }
    .right {
      position: absolute;
      top: 0.85rem;
      right: 1rem;
    }
    .status {
      display: none;
    }
  }
`;

export default TopNav;

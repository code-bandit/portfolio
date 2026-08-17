import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterBar>
      <span>&copy;{year}_CODE_BANDIT_PORTFOLIO_V.2.0</span>
      <div className="links">
        <a href="https://github.com/code-bandit" target="_blank" rel="noreferrer noopener">
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/chiemerie-obinna-eze-687685241"
          target="_blank"
          rel="noreferrer noopener"
        >
          LINKEDIN
        </a>
        <a href="mailto:ezehdavid960@gmail.com">EMAIL</a>
      </div>
    </FooterBar>
  );
};

const FooterBar = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 2rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  color: var(--text-main-color);

  .links {
    display: flex;
    gap: 1.5rem;
    a {
      color: var(--text-main-color);
      text-decoration: none;
      transition: var(--transition);
      &:hover {
        color: var(--text-secondary-color);
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem;
  }
`;

export default Footer;

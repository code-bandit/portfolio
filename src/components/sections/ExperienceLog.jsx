import React from "react";
import styled from "styled-components";
import Reveal from "../motion/Reveal";

const nodes = [
  {
    dates: "FEB 2026 – AUG 2026",
    org: "InfoWARE Limited",
    title: "Full Stack Developer Intern",
    bullets: [
      "Built and maintained internal and client-facing applications across the InfoWARE E-Business Suite — full-stack development, API tooling, UI implementation, and QA.",
      "Developed TradeLab, a C# and Blazor demo trading platform for exploring InfoWARE APIs through an authenticated app, subsequently released for public/customer use.",
      "Built a Blazor WebAssembly API Endpoint Tester that parses Postman collections, resolves nested {{variable}} placeholders via a custom regex resolver, and runs concurrent endpoint checks with live pass/fail reporting.",
      "Contributed to the Customer Migration Service using C# and the EMSX API to migrate records from EOMS to PFM.",
      "Standardized documentation for ~20 EMSX API endpoints and designed/executed QA covering 51 test cases across the EOMS platform.",
    ],
  },
  {
    dates: "ONGOING",
    org: "AegisCare",
    title: "Co-Founder & Lead Developer",
    bullets: [
      "Designed and developed a multi-role healthcare coordination platform (Patient, Nurse, Hospital, Hospital Admin) across 29+ pages, built on React, TypeScript, Node.js, Prisma, and PostgreSQL.",
      "Implemented access/refresh token auth, protected routes, and role-based authorization across distinct user roles.",
      "Architected Redux Toolkit + redux-persist state management and a scaffold-first, mock-data-driven development workflow.",
    ],
  },
  {
    dates: "ONGOING",
    org: "Ecstasy",
    title: "Co-Founder & Lead Developer",
    bullets: [
      "Lead development of a React Native mobile app backed by TypeScript, Node.js, Prisma, and PostgreSQL.",
      "Own architecture, authentication, API integration, and core mobile functionality.",
    ],
  },
  {
    dates: "2023 – 2027 (EXPECTED)",
    org: "Redeemer's University, Nigeria",
    title: "BSc. Computer Science",
    bullets: [
      "Pursuing a Bachelor's degree in Computer Science alongside professional, startup, and product-development work — applying coursework directly to production systems.",
    ],
  },
];

const ExperienceLog = () => {
  return (
    <ExperienceSection id="experience">
      <div className="header-bar">EXPERIENCE_LOG // ACTIVE_NODES</div>
      <Reveal as="div" className="node-list" stagger={0.12}>
        {nodes.map((node) => (
          <div className="node" key={node.org + node.title}>
            <div className="node-meta">
              <div className="dates">{node.dates}</div>
              <div className="org-tag">{node.org}</div>
            </div>
            <div className="node-body">
              <h3>{node.title}</h3>
              <ul>
                {node.bullets.map((bullet, i) => (
                  <li key={i}>
                    <span className="marker">&gt;&gt;</span> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Reveal>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  width: 100%;
  background-color: var(--bg-main);
  scroll-margin-top: 56px;

  .header-bar {
    width: 100%;
    padding: 0.75rem 2rem;
    background-color: var(--bg-elevated);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: var(--text-main-color);
    text-transform: uppercase;
  }

  .node-list {
    display: flex;
    flex-direction: column;
  }

  .node {
    display: flex;
    gap: 3rem;
    padding: 2rem;
    border-bottom: 1px solid var(--border);

    .node-meta {
      flex-basis: 220px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .dates {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-main-color);
      }
      .org-tag {
        margin-top: 1rem;
        width: fit-content;
        padding: 0.35rem 0.6rem;
        border: 1px solid var(--border);
        font-family: var(--font-mono);
        font-size: 0.7rem;
        color: var(--text-secondary-color);
      }
    }

    .node-body {
      flex: 1;
      min-width: 0;
      h3 {
        font-family: var(--text-heading);
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--text-secondary-color);
        margin-bottom: 1rem;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        list-style: none;
      }
      li {
        font-family: var(--text-regular);
        font-size: 0.85rem;
        line-height: 1.7;
        color: var(--text-paragraph);
        .marker {
          color: var(--accent-color);
          font-weight: 600;
          margin-right: 0.4rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header-bar {
      padding: 0.75rem 1.25rem;
    }
    .node {
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem 1.25rem;
      .node-meta {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

export default ExperienceLog;

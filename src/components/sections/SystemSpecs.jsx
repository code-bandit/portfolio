import React from "react";
import styled from "styled-components";
import Reveal from "../motion/Reveal";

const groups = [
  { label: "LANGUAGES", items: ["JavaScript", "TypeScript", "C#", "SQL", "HTML", "CSS"] },
  {
    label: "FRONTEND & MOBILE",
    items: [
      "React",
      "React Native",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "styled-components",
      "Blazor WebAssembly",
    ],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST API Design", "API Integration"],
  },
  {
    label: "AUTH & AUTHORIZATION",
    items: [
      "Access & Refresh Tokens",
      "JWT",
      "Cookie-Based Auth",
      "Protected Routes",
      "Role-Based Authorization",
    ],
  },
  {
    label: "ENGINEERING & TOOLS",
    items: ["Git", "Docker", "GitHub Actions", "Postman", "API Testing", "QA Test Design", "Figma"],
  },
];

const SystemSpecs = () => {
  return (
    <SpecsSection id="specs">
      <div className="rail">
        <span>SYSTEM_SPECS</span>
      </div>
      <Reveal as="div" className="grid">
        {groups.map((group, i) => (
          <div className="box" key={group.label}>
            <div className="box-top">
              <h3>{group.label}</h3>
              <span className="index">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </SpecsSection>
  );
};

const SpecsSection = styled.section`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 3rem 2rem 4rem;
  border-top: 1px solid var(--border);
  background-color: var(--bg-main);
  scroll-margin-top: 56px;

  .rail {
    flex-shrink: 0;
    width: 32px;
    display: flex;
    align-items: flex-start;
    span {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 1px;
      color: var(--text-main-color);
    }
  }

  .grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  .box {
    padding: 1.25rem;
    background-color: var(--bg-elevated);
    border: 1px solid var(--border);

    .box-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      h3 {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: var(--text-secondary-color);
      }
      .index {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        color: var(--text-main-color);
      }
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      span {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--border);
        font-family: var(--text-regular);
        font-size: 0.75rem;
        color: var(--text-paragraph);
        transition: var(--transition);
        &:hover {
          border-color: var(--accent-color);
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2.5rem 1.25rem 3rem;
    gap: 1.25rem;
  }
`;

export default SystemSpecs;

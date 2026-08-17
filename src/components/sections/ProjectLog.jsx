import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { LuFolderGit2 } from "react-icons/lu";
import Reveal from "../motion/Reveal";
import ProjectBlueprint from "../graphics/ProjectBlueprint";

const projects = [
  {
    name: "DevPulse",
    status: "LIVE",
    description:
      "Full-stack platform for managing, testing, and monitoring REST APIs from a centralized dashboard — endpoint management, request execution and history, uptime monitoring, latency tracking, and automated health checks.",
    tags: ["[STACK: REACT/TS]", "[BACKEND: NODE/EXPRESS]", "[DB: POSTGRESQL]", "[INFRA: DOCKER]"],
    github: "https://github.com/code-bandit/DevPulse",
  },
  {
    name: "GatePass-OS",
    status: "LIVE",
    description:
      "Estate security and visitor-management system — security staff register residents, residents generate one-time visitor passes, entities enroll members with QR badges, and admins broadcast real-time emergency alerts across role-based dashboards.",
    tags: ["[STACK: REACT/TS]", "[BACKEND: EXPRESS/PRISMA]", "[DB: POSTGRES/REDIS]", "[RT: SOCKET.IO]"],
    github: "https://github.com/Obilomania/GatePass-OS",
  },
  {
    name: "Caf App",
    status: "LIVE",
    description:
      "Campus food-court companion app — customers browse restaurants, track live queue status, view menus, and log complaints, while restaurant admins manage availability and menus in real time, backed by OTP-verified, JWT access/refresh authentication.",
    tags: ["[STACK: REACT]", "[BACKEND: EXPRESS/PRISMA]", "[DB: POSTGRESQL]", "[INFRA: DOCKER]"],
    github: "https://github.com/code-bandit/caf-app",
  },
  {
    name: "High Castle Estate",
    status: "LIVE",
    description:
      "Smart estate management and secure-access web application with a custom design system, including platform-aware authentication — a numeric keypad flow for mobile, typed auth for desktop.",
    tags: ["[STACK: REACT]", "[UI: STYLED-COMPONENTS]"],
    github: null,
  },
  {
    name: "Miere",
    status: "IN_DEV",
    description:
      "Fashion marketplace platform with a long-term vision for a broader commerce ecosystem, architected with future support for virtual try-on and personalized garment visualization.",
    tags: ["[STACK: REACT/TS]", "[BACKEND: NODE]"],
    github: null,
  },
];

const ProjectLog = () => {
  return (
    <ProjectSection id="projects">
      <div className="header-bar">
        <span>PROJECT_LOG // DEPLOYED_ASSETS</span>
        <LuFolderGit2 />
      </div>
      <Reveal as="div" className="grid">
        {projects.map((project, i) => (
          <div className="card" key={project.name}>
            <div className="thumb">
              <ProjectBlueprint seed={i + 1} label={project.name} />
              <span className="asset-label">
                ASSET_{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="card-body">
              <div className="card-top">
                <h3>{project.name}</h3>
                <span className={`status ${project.status === "LIVE" ? "live" : "dev"}`}>
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer noopener">
                  <FaGithub />
                  view_repository
                </a>
              )}
            </div>
          </div>
        ))}
      </Reveal>
    </ProjectSection>
  );
};

const ProjectSection = styled.section`
  width: 100%;
  background-color: var(--bg-main);
  scroll-margin-top: 56px;

  .header-bar {
    width: 100%;
    padding: 0.75rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-elevated);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: var(--text-main-color);
    text-transform: uppercase;
    svg {
      color: var(--text-main-color);
      font-size: 1rem;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .card {
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    .thumb {
      position: relative;
      width: 100%;
      height: 160px;
      overflow: hidden;
      .asset-label {
        position: absolute;
        bottom: 0.75rem;
        left: 0.75rem;
        padding: 0.2rem 0.5rem;
        background-color: var(--bg-main);
        border: 1px solid var(--border);
        font-family: var(--font-mono);
        font-size: 0.65rem;
        letter-spacing: 1px;
        color: var(--text-secondary-color);
      }
    }

    .card-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;

      .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-family: var(--text-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-secondary-color);
        }
        .status {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.5px;
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--border);
          color: var(--text-main-color);
        }
        .status.live {
          color: var(--status-online);
          border-color: var(--status-online);
        }
      }

      p {
        font-family: var(--text-regular);
        font-size: 0.82rem;
        line-height: 1.7;
        color: var(--text-paragraph);
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 0.75rem;
        span {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-main-color);
        }
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: fit-content;
        margin-top: 0.25rem;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-secondary-color);
        text-decoration: none;
        border-bottom: 1px solid var(--accent-color);
        padding-bottom: 2px;
        transition: var(--transition);
        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .header-bar {
      padding: 0.75rem 1.25rem;
    }
    .card .card-body {
      padding: 1.25rem;
    }
  }
`;

export default ProjectLog;

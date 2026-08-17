import React from "react";
import styled from "styled-components";
import Reveal from "../motion/Reveal";

const Manifest = () => {
  return (
    <ManifestSection id="manifest">
      <div className="rail">
        <span>MANIFEST_V.01</span>
      </div>
      <Reveal as="div" className="body">
        <p>
          Full Stack Software Developer with professional, startup, and
          product-development experience building enterprise applications,
          developer tooling, web platforms, and mobile applications.
          Hands-on across React, React Native, TypeScript, Node.js,
          PostgreSQL, Prisma, C#, and Blazor &mdash; designing access and
          refresh token authentication and authorization, building REST
          APIs, integrating third-party APIs, and working through
          professional code review and QA processes. Currently pursuing a
          BSc in Computer Science at Redeemer&rsquo;s University, Nigeria,
          while co-founding and leading development on two startups and
          completing a full-stack internship at InfoWARE Limited.
        </p>
      </Reveal>
    </ManifestSection>
  );
};

const ManifestSection = styled.section`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 3rem 2rem;
  border-top: 1px solid var(--border);
  background-color: var(--bg-main);

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

  .body {
    flex: 1;
    p {
      max-width: 900px;
      font-family: var(--text-regular);
      font-size: 0.95rem;
      line-height: 1.9;
      color: var(--text-paragraph);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2.5rem 1.25rem;
    gap: 1.25rem;
    .body p {
      font-size: 0.85rem;
      line-height: 1.8;
    }
  }
`;

export default Manifest;

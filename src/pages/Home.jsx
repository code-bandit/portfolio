import React from "react";
import styled from "styled-components";
import Hero from "../components/sections/Hero";
import Manifest from "../components/sections/Manifest";
import ExperienceLog from "../components/sections/ExperienceLog";
import ProjectLog from "../components/sections/ProjectLog";
import SystemSpecs from "../components/sections/SystemSpecs";

const Home = () => {
  return (
    <Page>
      <Hero />
      <Manifest />
      <ExperienceLog />
      <ProjectLog />
      <SystemSpecs />
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  background-color: var(--bg-main);
`;

export default Home;

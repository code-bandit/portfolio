import React from "react";
import styled from "styled-components";
import ContactIntro from "../components/sections/ContactIntro";
import ContactLog from "../components/sections/ContactLog";

const Contact = () => {
  return (
    <Page>
      <ContactIntro />
      <ContactLog />
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  background-color: var(--bg-main);
`;

export default Contact;

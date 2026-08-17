import React from "react";
import styled from "styled-components";

const ContactIntro = () => {
  return (
    <IntroSection>
      <div className="protocol-label">[ INQUIRY_PROTOCOL_V1.0 ]</div>
      <div className="row">
        <h1>Contact Me</h1>
        <p>
          For roles, freelance work, or collaboration, send a message via
          the form below or reach out directly through any of the channels
          listed. I read every message and reply within a day or two.
        </p>
      </div>
    </IntroSection>
  );
};

const IntroSection = styled.section`
  width: 100%;
  padding: 4rem 2rem 3rem;
  background-color: var(--bg-main);

  .protocol-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: var(--text-main-color);
    margin-bottom: 1.5rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 3rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 2.5rem;

    h1 {
      font-family: var(--text-heading);
      font-weight: 700;
      font-size: 3.5rem;
      line-height: 1;
      letter-spacing: -1px;
      color: var(--text-secondary-color);
      text-transform: uppercase;
      flex-shrink: 0;
    }

    p {
      max-width: 480px;
      font-family: var(--text-regular);
      font-size: 0.9rem;
      line-height: 1.8;
      color: var(--text-paragraph);
    }
  }

  @media screen and (max-width: 800px) {
    padding: 3rem 1.25rem 2rem;
    .row {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      h1 {
        font-size: 2.4rem;
      }
    }
  }
`;

export default ContactIntro;

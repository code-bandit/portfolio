import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Fab
      href="https://wa.me/2348082696280"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
    >
      <span className="status-dot" />
      <FaWhatsapp />
    </Fab>
  );
};

const Fab = styled.a`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text-secondary-color);
  text-decoration: none;
  transition: var(--transition);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);

  svg {
    font-size: 1.5rem;
  }

  .status-dot {
    position: absolute;
    top: 4px;
    right: 4px;
  }

  &:hover {
    border-color: var(--whatsapp-color);
    color: var(--whatsapp-color);
  }

  @media screen and (max-width: 640px) {
    right: 1rem;
    bottom: 1rem;
    width: 48px;
    height: 48px;
  }
`;

export default WhatsAppButton;

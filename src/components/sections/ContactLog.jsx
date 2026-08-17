import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { LuMail, LuPhone, LuMapPin, LuGithub, LuLinkedin } from "react-icons/lu";
import Reveal from "../motion/Reveal";

const channels = [
  {
    icon: <LuMail />,
    label: "EMAIL",
    value: "ezehdavid960@gmail.com",
    href: "mailto:ezehdavid960@gmail.com",
  },
  {
    icon: <LuPhone />,
    label: "PHONE",
    value: "+234 906 097 3466",
    href: "tel:+2349060973466",
  },
  {
    icon: <LuMapPin />,
    label: "LOCATION",
    value: "Lagos, Nigeria",
    href: null,
  },
  {
    icon: <LuGithub />,
    label: "GITHUB",
    value: "github.com/code-bandit",
    href: "https://github.com/code-bandit",
  },
  {
    icon: <LuLinkedin />,
    label: "LINKEDIN",
    value: "chiemerie-obinna-eze",
    href: "https://www.linkedin.com/in/chiemerie-obinna-eze-687685241",
  },
];

const classifications = [
  "JOB_OPPORTUNITY",
  "FREELANCE_PROJECT",
  "COLLABORATION",
  "GENERAL_INQUIRY",
];

const initialForm = {
  name: "",
  organization: "",
  email: "",
  classification: classifications[0],
  message: "",
};

const ContactLog = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          organization: form.organization || "N/A",
          reply_to: form.email,
          classification: form.classification,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <ContactSection id="contact">
      <div className="header-bar">CNT_LOG // OPEN_CHANNELS</div>
      <div className="content">
        <Reveal as="div" className="rows">
          {channels.map((channel) => {
            const Tag = channel.href ? "a" : "div";
            return (
              <Tag
                key={channel.label}
                className="row"
                href={channel.href || undefined}
                target={channel.href?.startsWith("http") ? "_blank" : undefined}
                rel={channel.href?.startsWith("http") ? "noreferrer noopener" : undefined}
              >
                <span className="icon">{channel.icon}</span>
                <span className="label">{channel.label}</span>
                <span className="value">{channel.value}</span>
              </Tag>
            );
          })}
        </Reveal>

        <Reveal as="form" className="form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              FULL_IDENTITY *
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="JOHN DOE"
                required
              />
            </label>
            <label>
              ORGANIZATION (OPTIONAL)
              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="COMPANY LLC"
              />
            </label>
          </div>
          <div className="field-row">
            <label>
              ELECTRONIC_MAIL *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="YOU@COMPANY.COM"
                required
              />
            </label>
            <label>
              INQUIRY_CLASS
              <select
                name="classification"
                value={form.classification}
                onChange={handleChange}
              >
                {classifications.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="full">
            MESSAGE *
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="ENTER YOUR MESSAGE HERE"
              required
            />
          </label>

          <div className="submit-row">
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "TRANSMITTING..." : "SEND_MESSAGE"}
            </button>
            {status === "success" && (
              <span className="status-msg ok">[ TRANSMISSION_SUCCESSFUL ]</span>
            )}
            {status === "error" && (
              <span className="status-msg fail">[ ERROR: TRANSMISSION_FAILED — TRY EMAIL DIRECTLY ]</span>
            )}
          </div>
        </Reveal>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

  .content {
    display: flex;
    align-items: stretch;
  }

  .rows {
    flex: 0 0 380px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--border);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.1rem 2rem;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: var(--transition);

    .icon {
      display: flex;
      color: var(--accent-color);
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .label {
      flex-basis: 90px;
      flex-shrink: 0;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 1px;
      color: var(--text-main-color);
    }
    .value {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--text-secondary-color);
      word-break: break-word;
    }

    &:hover {
      background-color: var(--bg-elevated);
    }
  }

  .form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;

    .field-row {
      display: flex;
      gap: 2rem;
      label {
        flex: 1;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 1px;
      color: var(--text-main-color);
    }

    input,
    select,
    textarea {
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--border);
      padding: 0.5rem 0.1rem;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      color: var(--text-secondary-color);
      outline: none;
      transition: var(--transition);

      &::placeholder {
        color: var(--text-main-color);
        opacity: 0.6;
      }

      &:focus {
        border-color: var(--accent-color);
      }
    }

    select {
      cursor: pointer;
      option {
        background-color: var(--bg-elevated);
        color: var(--text-secondary-color);
      }
    }

    textarea {
      resize: vertical;
    }

    .submit-row {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 0.5rem;

      button {
        padding: 0.85rem 1.75rem;
        background-color: var(--accent-color);
        border: 1px solid var(--accent-color);
        color: var(--bg-main);
        font-family: var(--font-mono);
        font-size: 0.75rem;
        letter-spacing: 1px;
        cursor: pointer;
        transition: var(--transition);

        &:hover:not(:disabled) {
          background-color: transparent;
          color: var(--accent-color);
        }
        &:disabled {
          opacity: 0.6;
          cursor: wait;
        }
      }

      .status-msg {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        letter-spacing: 0.5px;
      }
      .status-msg.ok {
        color: var(--status-online);
      }
      .status-msg.fail {
        color: #e5555f;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .content {
      flex-direction: column;
    }
    .rows {
      flex-basis: auto;
      border-right: none;
      border-bottom: 1px solid var(--border);
    }
  }

  @media screen and (max-width: 600px) {
    .header-bar {
      padding: 0.75rem 1.25rem;
    }
    .row {
      padding: 1rem 1.25rem;
      gap: 1rem;
      flex-wrap: wrap;
      .label {
        flex-basis: auto;
      }
    }
    .form {
      padding: 1.5rem 1.25rem;
      .field-row {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  }
`;

export default ContactLog;

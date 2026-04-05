import { useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import "./Contact.css";
import useTheme from "../../../context/ThemeContext";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = "service_99x5ph3";
const YOUR_TEMPLATE_ID = "template_j7rvimo";
const YOUR_PUBLIC_KEY = "uPSK694cbknPAhhM4";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { theme, iconColor } = useTheme();

  const templateParams = {
    from_name: userDetails.name,
    from_email: userDetails.email,
    to_name: "Aditya",
    message: userDetails.message,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);
    setDone(false);

    try {
      const response = await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        templateParams,
        {
          publicKey: YOUR_PUBLIC_KEY,
        },
      );
      console.log("SUCCESS!", response);
      setUserDetails({ name: "", email: "", message: "" });
      setDone(true);
    } catch (error) {
      console.log("FAILED...", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section">
      <div className="section-header">
        <h3 className="title">Contact Me</h3>
      </div>
      <div className="contact-box">
        <div className="contact-info">
          <h3>Connect with me</h3>
          <div className="info-wrap">
            <a
              href="mailto:adityadoshi25@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="info"
            >
              <div className="contact-icon">
                <i
                  className="fa-solid fa-envelope"
                  style={{ color: iconColor }}
                ></i>
              </div>
              <p className="info-text">adityadoshi25@gmail.com</p>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/adidoshi"
              className="info"
            >
              <div className="contact-icon diff">
                <i
                  className="devicon-github-original"
                  style={{ color: iconColor }}
                ></i>
              </div>
              <p
                className="info-text"
                style={{
                  color: theme.foreground,
                }}
              >
                adidoshi
              </p>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aditya-doshi08"
              className="info"
            >
              <div className="contact-icon diff">
                <i className="devicon-linkedin-plain"></i>
              </div>
              <p
                className="info-text"
                style={{
                  color: theme.foreground,
                }}
              >
                aditya-doshi08
              </p>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h3 className="title">Send Message</h3>
          <div className="row">
            <input
              type="text"
              required
              className="contact-input"
              placeholder="Name"
              name="name"
              value={userDetails.name ?? ""}
              onChange={handleInputChange}
            />
            <input
              type="email"
              required
              className="contact-input"
              placeholder="Email"
              name="email"
              value={userDetails.email ?? ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <textarea
              name="message"
              required
              className="contact-input textarea"
              placeholder="Message"
              value={userDetails.message ?? ""}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="email-done">
            {done ? (
              <div className="email-sent">
                <div>Email sent successfully!</div>
                <CheckCircle />
              </div>
            ) : (
              <button type="submit" className="btn" disabled={isSending}>
                <span style={{ color: isSending ? "#c5c5c5" : "inherit" }}>
                  {isSending ? "Sending..." : "Send"}
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

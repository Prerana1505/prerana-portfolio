import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setStatus(
        "Your message was sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus(
        "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span className="section-label">
            Contact
          </span>

          <h2>
            Let's work
            <span> together.</span>
          </h2>

          <p>
            Have a project, opportunity or question?
            Feel free to get in touch.
          </p>
        </motion.div>


        <div className="contact-grid">

          {/* Contact information */}

          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <h3>
              Get in touch
            </h3>

            <p>
              I'm open to discussing software
              development opportunities,
              projects and collaborations.
            </p>

           {/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=preranathogataveer@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-detail"
  aria-label="Send me an email"
>
  <FiMail />

  <span>
    preranathogataveer@gmail.com
  </span>
</a>


{/* GitHub */}
<a
  href="https://github.com/Prerana1505"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-detail"
  aria-label="Visit my GitHub profile"
>
  <FiGithub />

  <span>
    GitHub
  </span>
</a>


{/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/prerana-thogataveer-129452361/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-detail"
  aria-label="Visit my LinkedIn profile"
>
  <FiLinkedin />

  <span>
    LinkedIn
  </span>
</a> 

          </motion.div>


          {/* Contact form */}

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can I help?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >

              {loading
                ? "Sending..."
                : "Send Message"}

              {!loading && <FiSend />}

            </button>


            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
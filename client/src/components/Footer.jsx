import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              P<span>.</span>
            </a>

            <p>
              Java Full Stack Developer building
              modern, scalable and user-friendly
              web applications.
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-title">
              Navigation
            </span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <span className="footer-title">
              Connect
            </span>

            <div className="footer-social-links">

              <a
                href="https://github.com/Prerana1505"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
              >
                <FiMail />
              </a>

            </div>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Prerana
            Thogataveer. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
          >
            Back to top
            <FiArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
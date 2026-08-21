import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCode,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            About Me
          </span>

          <h2>
            Building technology with
            <span> purpose.</span>
          </h2>

          <p>
            A little more about my background,
            interests and the way I approach
            software development.
          </p>
        </motion.div>

        {/* About content */}
        <div className="about-grid">

          {/* Introduction */}
          <motion.div
            className="about-intro-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-card-number">
              01
            </div>

            <h3>
              Hello, I'm Prerana.
            </h3>

            <p>
              I'm a passionate developer interested
              in building modern web applications
              that are practical, intuitive and
              reliable.
            </p>

            <p>
              My development journey has given me
              experience across frontend development,
              backend technologies, databases and
              full-stack application development.
            </p>

            <p>
              I enjoy learning new technologies,
              solving programming problems and
              turning ideas into working applications.
            </p>

            <div className="about-highlight">
              <span className="highlight-line" />

              <p>
                Always learning. Always building.
              </p>
            </div>

          </motion.div>

          {/* Details */}
          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            {/* Education */}
            <div className="about-detail-card">

              <div className="detail-icon">
                <FiBookOpen />
              </div>

              <div>
                <span className="detail-label">
                  Education
                </span>

                <h3>
                  Bachelor of Engineering
                </h3>

                <p>
                  Electronics and Communication
                  Engineering
                </p>
              </div>

            </div>

            {/* Career */}
            <div className="about-detail-card">

              <div className="detail-icon">
                <FiTrendingUp />
              </div>

              <div>
                <span className="detail-label">
                  Career Interest
                </span>

                <h3>
                  Full Stack Development
                </h3>

                <p>
                  Interested in developing
                  scalable and user-friendly
                  software applications.
                </p>
              </div>

            </div>

            {/* Technical Interests */}
            <div className="about-detail-card">

              <div className="detail-icon">
                <FiCode />
              </div>

              <div>
                <span className="detail-label">
                  Technical Interests
                </span>

                <h3>
                  Web & Software Development
                </h3>

                <p>
                  Java, React, JavaScript,
                  backend development and
                  database technologies.
                </p>
              </div>

            </div>

            {/* Strength */}
            <div className="about-detail-card">

              <div className="detail-icon">
                <FiLayers />
              </div>

              <div>
                <span className="detail-label">
                  Strength
                </span>

                <h3>
                  Continuous Learning
                </h3>

                <p>
                  Curious, adaptable and
                  focused on improving
                  technical skills through
                  practical projects.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;
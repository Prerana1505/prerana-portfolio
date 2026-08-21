import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiExternalLink,
} from "react-icons/fi";

const certifications = [
  {
    id: "01",
    name: "Programming with Python Certification",
    organization: "Internshala",
    date: "Certification",
    description:
      "Certified in Programming with Python, demonstrating proficiency in Python programming and problem-solving concepts.",
    certificate: "",
  },

  {
    id: "02",
    name: "Internship Completion Certificate",
    organization:
      "Tap Academy / Tap EdTech Pvt. Ltd.",
    date: "Feb 2026 — May 2026",
    description:
      "Successfully completed the Full Stack Web Development Internship at Tap Academy, gaining practical experience in full-stack web development.",
    certificate: "",
  },
];

function Certifications() {
  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      <div className="section-container">

        {/* Section Heading */}

        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.6,
          }}
        >
          <span className="section-label">
            Certifications
          </span>

          <h2>
            Learning that
            <span> matters.</span>
          </h2>

          <p>
            Certifications and practical learning
            experiences that support my technical
            development.
          </p>
        </motion.div>

        {/* Certification Cards */}

        <div className="certifications-grid">

          {certifications.map(
            (certification, index) => (
              <motion.article
                className="certification-card"
                key={certification.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -6,
                }}
              >

                {/* Card Header */}

                <div className="certification-top">

                  <div className="certification-number">
                    {certification.id}
                  </div>

                  <div className="certification-icon">
                    <FiAward />
                  </div>

                </div>

                {/* Content */}

                <div className="certification-content">

                  <h3>
                    {certification.name}
                  </h3>

                  <p className="certification-organization">
                    {certification.organization}
                  </p>

                  <p className="certification-description">
                    {certification.description}
                  </p>

                </div>

                {/* Footer */}

                <div className="certification-footer">

                  <span className="certification-date">
                    <FiCalendar />

                    {certification.date}
                  </span>

                  {certification.certificate && (
                    <a
                      href={
                        certification.certificate
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-link"
                    >
                      View Certificate
                      <FiExternalLink />
                    </a>
                  )}

                </div>

              </motion.article>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Certifications;
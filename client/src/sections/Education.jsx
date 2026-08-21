import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const education = [
  {
    id: "01",
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication Engineering",
    institution: "GOVERNMENT ENGINEERING COLLEGE TALAKAL KOPPAL",
    university: "VTU",
    year: "2026",
    location: "KARNATAKA",
  },
];

function Education() {
  return (
    <section
      className="education-section"
      id="education"
    >
      <div className="section-container">

        {/* Heading */}

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
            Education
          </span>

          <h2>
            My academic
            <span> foundation.</span>
          </h2>

          <p>
            The academic background that shaped my
            technical foundation and problem-solving
            skills.
          </p>
        </motion.div>

        {/* Education card */}

        <div className="education-list">

          {education.map(
            (item, index) => (
              <motion.article
                className="education-card"
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.1,
                }}
              >

                {/* Number */}

                <div className="education-number">
                  {item.id}
                </div>

                {/* Icon */}

                <div className="education-icon">
                  <FiBookOpen />
                </div>

                {/* Main content */}

                <div className="education-content">

                  <span className="education-label">
                    Bachelor's Degree
                  </span>

                  <h3>
                    {item.degree}
                  </h3>

                  <h4>
                    {item.field}
                  </h4>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <p className="education-university">
                    {item.university}
                  </p>

                  {/* Details */}

                  <div className="education-meta">

                    <span>
                      <FiCalendar />
                      {item.year}
                    </span>

                    <span>
                      <FiMapPin />
                      {item.location}
                    </span>

                  </div>

                </div>

                {/* Side decoration */}

                <div className="education-decoration">
                  <span />
                  <span />
                  <span />
                </div>

              </motion.article>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Education;
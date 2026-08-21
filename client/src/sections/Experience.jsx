import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const experiences = [
  {
    id: "01",
    role: "Full Stack Web Development Intern",
    company: "Tap Academy / Tap EdTech Pvt. Ltd.",
    duration: "Feb 2026 — May 2026",
    location: "India",
    description:
      "Completed a Full Stack Web Development internship focused on building web applications and strengthening practical development skills across frontend, backend and database technologies.",
    responsibilities: [
      "Worked with Java and full-stack web development concepts.",
      "Developed and worked with frontend and backend components.",
      "Worked with relational databases and SQL.",
      "Practiced application development using real-world development workflows.",
    ],
    technologies: [
      "Java",
      "JDBC",
      "JSP",
      "Servlets",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];

function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
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
            Experience
          </span>

          <h2>
            Where I've
            <span> grown.</span>
          </h2>

          <p>
            My practical experience and learning
            journey in software development.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="experience-timeline">

          {experiences.map(
            (experience, index) => (
              <motion.div
                className="experience-item"
                key={experience.id}
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >

                {/* Timeline line */}

                <div className="timeline-column">

                  <div className="timeline-number">
                    {experience.id}
                  </div>

                  <div className="timeline-line" />

                </div>

                {/* Experience card */}

                <div className="experience-card">

                  <div className="experience-header">

                    <div>

                      <span className="experience-type">
                        Internship
                      </span>

                      <h3>
                        {experience.role}
                      </h3>

                      <h4>
                        {experience.company}
                      </h4>

                    </div>

                    <div className="experience-icon">
                      <FiBriefcase />
                    </div>

                  </div>

                  {/* Meta */}

                  <div className="experience-meta">

                    <span>
                      <FiCalendar />
                      {experience.duration}
                    </span>

                    <span>
                      <FiMapPin />
                      {experience.location}
                    </span>

                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}

                  <div className="responsibilities">

                    <h5>
                      Key Responsibilities
                    </h5>

                    <ul>
                      {experience.responsibilities.map(
                        (item) => (
                          <li key={item}>
                            <span />
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                  {/* Technologies */}

                  <div className="experience-technologies">

                    {experience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Experience;
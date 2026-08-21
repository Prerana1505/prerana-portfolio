import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Fashion Hub",
    category: "Web Development",
    description:
      "A full-stack e-commerce application that allows users to browse products, manage carts and interact with an online shopping interface.",
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
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    github: "",
    demo: "",
  },

  {
    id: 2,
    title: "YumRoute",
    category: "Web Development",
    description:
      "A food delivery web application where users can explore restaurants, view menus, add items to cart and place orders.",
    technologies: [
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    github: "",
    demo: "",
  },

  {
    id: 3,
    title:
      "Detection of Infant Brain Tumor Using CNN and Ultrasound",
    category: "AI/ML",
    description:
      "A CNN-based approach for detecting infant brain tumors using ultrasound images.",
    technologies: [
      "Python",
      "TensorFlow",
      "ResNet50",
      "CNN",
    ],
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=80",
    github: "",
    demo: "",
  },

  {
    id: 4,
    title: "AI Interview Agent",
    category: "AI/ML",
    description:
      "An AI-powered interview agent that generates interview questions, interacts with candidates and evaluates their responses.",
    technologies: [
      "Python",
      "Groq API",
      "LLM",
      "AI Agents",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    github: "",
    demo: "",
  },
];

const filters = [
  "All",
  "Web Development",
  "AI/ML",
  ];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="section-heading projects-heading"
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
            Selected Work
          </span>

          <h2>
            Projects I've
            <span> built.</span>
          </h2>

          <p>
            A selection of projects that showcase
            my experience across web development,
            artificial intelligence and software
            engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="project-filters"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">

            {filteredProjects.map(
              (project, index) => (
                <motion.article
                  className="project-card"
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                >

                  {/* Image */}
                  <div className="project-image-wrapper">

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="project-image"
                      loading="lazy"
                    />

                    <div className="project-image-overlay">
                      <span>
                        View Project
                        <FiArrowUpRight />
                      </span>
                    </div>

                    <div className="project-number">
                      {String(project.id).padStart(
                        2,
                        "0"
                      )}
                    </div>

                  </div>

                  {/* Content */}
                  <div className="project-content">

                    <div className="project-top">

                      <span className="project-category">
                        {project.category}
                      </span>

                      <div className="project-links">

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                          >
                            <FiGithub />
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live demo`}
                          >
                            <FiExternalLink />
                          </a>
                        )}

                      </div>

                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="technology-list">

                      {project.technologies.map(
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

                </motion.article>
              )
            )}

          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
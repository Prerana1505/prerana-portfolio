import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background decoration */}
      <div className="hero-grid" />

      <div className="hero-container">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Availability */}

          <motion.div
            className="hero-intro"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <span className="hero-dot" />

            Available for opportunities
          </motion.div>


          {/* Greeting */}

          <motion.p
            className="hero-greeting"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            Hello, I'm
          </motion.p>


          {/* Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            Prerana
            <span> Thogataveer</span>
          </motion.h1>


          {/* Professional title */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            Java Full Stack Developer
          </motion.h2>


          {/* Description */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
          >
            I build modern, scalable and user-friendly web
            applications using Java, React, JavaScript,
            SQL and modern web technologies.
          </motion.p>


          {/* =========================================
              BUTTONS
          ========================================= */}

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
          >

            <a
              href="#projects"
              className="primary-button"
            >
              View Projects
              <FiArrowDownRight size={18} />
            </a>


            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
              <FiMail size={17} />
            </a>

          </motion.div>


          {/* =========================================
              SOCIAL LINKS
          ========================================= */}

          <motion.div
            className="hero-socials"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
          >

            <span>
              Find me on
            </span>


            {/* GitHub */}

            <a
              href="https://github.com/Prerana1505"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prerana's GitHub profile"
            >
              <FiGithub size={19} />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/prerana-thogataveer-129452361/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prerana's LinkedIn profile"
            >
              <FiLinkedin size={19} />
            </a>

          </motion.div>

        </motion.div>


        {/* =========================================
            RIGHT SIDE - PROFILE
        ========================================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="hero-image-wrapper">

            {/* Decorative circles */}

            <div className="hero-circle circle-one" />

            <div className="hero-circle circle-two" />


            {/* =====================================
                ACTUAL PROFILE PHOTO
            ===================================== */}

            <motion.div
              className="profile-image-container"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
            >

              <img
                src={profileImage}
                alt="Prerana Thogataveer"
                className="profile-image"
              />

            </motion.div>


            {/* =====================================
                FLOATING CARD - FULL STACK
            ===================================== */}

            <motion.div
              className="floating-card floating-card-one"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <span className="floating-icon">
                {"</>"}
              </span>

              <div>
                <strong>
                  Full Stack
                </strong>

                <small>
                  Development
                </small>
              </div>

            </motion.div>


            {/* =====================================
                FLOATING CARD - JAVA
            ===================================== */}

            <motion.div
              className="floating-card floating-card-two"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <span className="floating-icon">
                ☕
              </span>

              <div>
                <strong>
                  Java
                </strong>

                <small>
                  Developer
                </small>
              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>


      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 0.5,
        }}
        aria-label="Scroll to About section"
      >

        <span>
          Scroll to explore
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowDownRight />
        </motion.span>

      </motion.a>

    </section>
  );
}

export default Hero;
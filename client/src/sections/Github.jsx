import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiStar,
  FiGitBranch,
} from "react-icons/fi";

function Github() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Prerana1505/repos?sort=updated&per_page=6"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }

        const data = await response.json();

        setRepositories(data);
      } catch (error) {
        console.error("GitHub fetch error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section className="github-section" id="github">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="github-header"
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
          <div>
            <span className="section-label">
              GitHub
            </span>

            <h2>
              Code.
              <span> Build. Learn.</span>
            </h2>

            <p>
              Explore my projects and development
              work on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Prerana1505"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-button"
          >
            <FiGithub />

            @Prerana1505

            <FiExternalLink />
          </a>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="github-status">
            Loading repositories...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="github-status">
            Unable to load GitHub repositories.
            <br />

            <a
              href="https://github.com/Prerana1505"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub profile
            </a>
          </div>
        )}

        {/* Repositories */}
        {!loading &&
          !error &&
          repositories.length > 0 && (
            <div className="github-repositories">

              {repositories.map((repository, index) => (
                <motion.a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-repository"
                  key={repository.id}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >

                  <div className="repository-top">
                    <FiGithub />
                    <FiArrowUpRight />
                  </div>

                  <h3>
                    {repository.name}
                  </h3>

                  <p>
                    {repository.description ||
                      "No description available."}
                  </p>

                  <div className="repository-technologies">

                    {repository.language && (
                      <span>
                        {repository.language}
                      </span>
                    )}

                    <span>
                      <FiStar />
                      {repository.stargazers_count}
                    </span>

                    <span>
                      <FiGitBranch />
                      {repository.forks_count}
                    </span>

                  </div>

                </motion.a>
              ))}

            </div>
          )}

        {/* No repositories */}
        {!loading &&
          !error &&
          repositories.length === 0 && (
            <div className="github-status">
              No public repositories found.
            </div>
          )}

      </div>
    </section>
  );
}

export default Github;
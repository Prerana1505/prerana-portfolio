function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "SQL",
      ],
    },

    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
      ],
    },

    {
      title: "Backend",
      skills: [
        "JDBC",
        "JEE",
        "Servlets",
        "JSP",
        "Node.js",
      ],
    },

    {
      title: "Database",
      skills: [
        "MySQL",
      ],
    },

    {
      title: "Core Concepts",
      skills: [
        "OOP",
        "Data Structures",
        "Algorithms",
      ],
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Maven",
        "Eclipse",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="skills-section"
    >

      <div className="section-container">

        <div className="section-heading">

          <span className="section-label">
            Skills
          </span>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

          <p>
            Technologies and tools I have worked
            with through projects, internship
            experience and continuous learning.
          </p>

        </div>


        <div className="skills-grid">

          {categories.map((category) => (

            <div
              className="skill-category"
              key={category.title}
            >

              <div className="skill-category-header">

                <span className="skill-category-number">
                  /
                </span>

                <h3>
                  {category.title}
                </h3>

              </div>


              <div className="skill-items">

                {category.skills.map((skill) => (

                  <span
                    className="skill-item"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
import http from "http";


const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
};

const server = http.createServer(async(req, res) => {
    console.log("REQUEST:", req.method, req.url);

  // CORS
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  // Preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
   // --------------------------------
  // ROOT TEST ROUTE
  // --------------------------------

  if (req.method === "GET" && req.url === "/") {
    sendJSON(res, 200, {
      success: true,
      message: "PRERANA PORTFOLIO BACKEND IS LIVE",
      version: "2.0",
    });

    return;
  }

  // --------------------------------
  // Test API
  // --------------------------------

  if (
    req.method === "GET" &&
    req.url === "/api"
  ) {
    sendJSON(res, 200, {
      success: true,
      message: "Portfolio backend is running!",
    });

    return;
  }

  // --------------------------------
  // Contact API
  // --------------------------------

  if (
    req.method === "POST" &&
    req.url === "/api/contact"
  ) {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {

      try {

        const data = JSON.parse(body);

        const {
          name,
          email,
          subject,
          message,
        } = data;

        // Basic validation

        if (
          !name ||
          !email ||
          !subject ||
          !message
        ) {
          sendJSON(res, 400, {
            success: false,
            message:
              "All fields are required.",
          });

          return;
        }

        console.log(
          "\n========== NEW CONTACT MESSAGE =========="
        );

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

        console.log(
          "=========================================\n"
        );

        sendJSON(res, 200, {
          success: true,
          message:
            "Your message was received successfully!",
        });

      } catch (error) {

        console.error(error);

        sendJSON(res, 400, {
          success: false,
          message:
            "Invalid request data.",
        });

      }

    });

    return;
  }
// --------------------------------
// GitHub repositories
// --------------------------------

if (
  req.method === "GET" &&
  req.url === "/api/github/repos"
) {
  try {
    const githubResponse = await fetch(
      "https://api.github.com/users/Prerana1505/repos?sort=updated&per_page=6",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Prerana-Portfolio",
        },
      }
    );

    if (!githubResponse.ok) {
      sendJSON(res, githubResponse.status, {
        success: false,
        message: "Unable to retrieve GitHub repositories.",
      });

      return;
    }

    const repositories = await githubResponse.json();

    const formattedRepositories =
      repositories.map((repo) => ({
        name: repo.name,
        description:
          repo.description ||
          "No description available.",
        html_url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      }));

    sendJSON(res, 200, {
      success: true,
      repositories: formattedRepositories,
    });

  } catch (error) {
    console.error(
      "GitHub API error:",
      error
    );

    sendJSON(res, 500, {
      success: false,
      message:
        "Unable to connect to GitHub.",
    });
  }

  return;
}

  // --------------------------------
  // Root route
  // --------------------------------

  if (req.method === "GET" && req.url === "/") {
    sendJSON(res, 200, {
      success: true,
      message: "PRERANA PORTFOLIO BACKEND IS LIVE",
      version: "2.0",
    });

    return;
  }
  // --------------------------------
  // 404
  // --------------------------------

  sendJSON(res, 404, {
    success: false,
    message: "Route not found",
  });

});
const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Backend running on port ${PORT}`
  );
});
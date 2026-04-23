import React from "react";

const GithubIcon = () => (
  <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const StackIcon = () => (
  <svg className="media__stack-icon" viewBox="0 0 24 24" role="img">
    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
  </svg>
);

const Project = ({ title, href, githubHref, description, stack, children }) => (
  <div className="exp-entry">
    <div className="flex items-center justify-between">
      <a className="jobTitle hover-underline-animation" href={href}>{title}</a>
      {githubHref && (
        <a href={githubHref} aria-label="Source Code"><GithubIcon /></a>
      )}
    </div>
    <p className="jobBlurb mt-2">{description}</p>
    <div className="flex items-center mt-2">
      <StackIcon />
      <span className="media__stack-details laguageText">{stack}</span>
    </div>
  </div>
);

const Projects = (props) => {
  return (
    <div id="project_block" className="container mx-auto max-w-screen-2xl px-6 py-10 lg:px-12 lg:py-12">
      <div className="section-Projects">
        <div className="sectionTitles pb-6">
          <h1>PROJECTS</h1>
        </div>
        <div className="exp-list">

          <Project
            title="Blue Brother Burger."
            href="https://github.com/DwightX/blue-brother-burger"
            githubHref="https://github.com/DwightX/blue-brother-burger"
            description="A full stack ecommerce application built for a real pop-up burger operation. Customers can configure and order items with live inventory that stays in sync across browser tabs via WebSocket. Includes Stripe checkout with automatic receipts and a password protected admin dashboard for managing inventory and orders."
            stack="Next.js · TypeScript · Tailwind · Supabase · PostgreSQL · Stripe"
          />

          <Project
            title="Vulnerable Task Manager: DevSecOps Demo"
            href="https://github.com/DwightX/secure-task-manager"
            githubHref="https://github.com/DwightX/secure-task-manager"
            description="A purposely insecure Node.js task management app built to demonstrate security testing, secure coding practices, and CI/CD security automation. Integrates SAST with Semgrep, dependency scanning with Trivy, and DAST with OWASP ZAP, all automated via GitHub Actions workflows."
            stack="Node.js · Express · SQLite · Semgrep · Trivy · OWASP ZAP · Jest · GitHub Actions"
          />

          <Project
            title="Leadership In Training Website"
            href="https://leadershipintraining.com/"
            description="Built the public facing website for the LIT Program, a leadership development course for first-time managers and new business owners."
            stack="React · Vite · Tailwind · Netlify"
          />

          <Project
            title="Vinyl Collection"
            href="https://dc-vinyl-collection.netlify.app/"
            githubHref="https://github.com/DwightX/vinyl-collection"
            description="A personal catalog app that connects to the Discogs API to pull and display my vinyl record collection. Features dynamic data fetching, responsive card layouts, and live filtering so users can browse by artist, genre, and release year."
            stack="React · Next.js · Netlify"
          />

          <Project
            title="Github Profile Finder"
            href="https://github.com/DwightX/github-tracker"
            githubHref="https://github.com/DwightX/github-tracker"
            description="A search tool that queries the GitHub API to pull public profile data, repositories, follower counts, and activity for any user. Built to practice working with third party REST APIs, async data handling, and dynamic UI rendering in React."
            stack="React · Heroku"
          />

          <Project
            title="Netflix Clone"
            href="https://objective-carson-eba100.netlify.app/"
            githubHref="https://github.com/DwightX/movie-tracker"
            description="A responsive front end recreation of the Netflix browsing experience. Pulls live movie and TV data from the TMDB API, organized into genre based rows with hover previews and a styled detail view, focusing on component architecture and API integration."
            stack="React · Netlify"
          />

          <Project
            title="Mock JSON API"
            href="https://github.com/DwightX/json-server"
            githubHref="https://github.com/DwightX/json-server"
            description="A lightweight local REST API built with json-server to simulate a backend during frontend development. Supports full CRUD operations and was used to decouple frontend work from backend availability, speeding up iteration on client projects."
            stack="JavaScript"
          />

          <Project
            title="Random Facts"
            href="https://github.com/DwightX/node-server"
            githubHref="https://github.com/DwightX/node-server"
            description="A simple Node.js and Express server that serves randomly selected facts on each request. Built to explore server-side rendering, route handling, and serving dynamic content without a frontend framework."
            stack="JavaScript · Node.js · Express"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;

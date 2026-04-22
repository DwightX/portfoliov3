const About = (props) => {
  return (
    <div id="about_block" className="container mx-auto max-w-screen-2xl">
      <div className="section-Main">
        <div className="flex flex-col px-6 py-10 lg:px-12 lg:py-12">
          <div className="sectionTitles">
            <h1 className="pb-2">About</h1>
          </div>
          <div className="about-body">
            <p>
              I&apos;m a Software Engineer with 6+ years of experience building production web
              applications across the full stack. JavaScript is my core language, and I&apos;ve used it
              to deliver tools that real teams depend on daily, from ecommerce platforms and internal
              business applications to geospatial data dashboards and systems used by government
              agencies. I work across the stack with Node.js, MongoDB, PHP, React, and Vue.js, and
              I&apos;m most effective when I can take ownership of a feature or product from scoping
              through deployment.
            </p>
            <p>
              My background spans agencies, product companies, and freelance work, which means I&apos;ve
              had to be adaptable, communicate across disciplines, and get things shipped without a
              lot of hand-holding. I&apos;ve led platform migrations, built internal tooling from scratch,
              integrated third party APIs, and maintained production systems with real uptime
              expectations. More recently I&apos;ve been focused on application security, building
              automated pipelines for vulnerability scanning, dependency auditing, and dynamic
              testing as part of the development workflow rather than a step after the fact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

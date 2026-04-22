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
              I&apos;m a Software Engineer with over 6 years of experience building scalable,
              user-focused web applications using React, Vue.js, and modern JavaScript.
              I work across the full stack with Node.js, MongoDB, and PHP, integrating
              RESTful APIs and geospatial tools to turn complex requirements into
              real-world solutions. From improving performance to streamlining workflows,
              I enjoy building reliable, intuitive tools that teams genuinely enjoy using.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

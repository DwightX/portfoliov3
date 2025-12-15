import Image from 'next/image'
import logo from '../images/memoji.png'



const About = (props) => {
  return (
    <div id="about_block" className="container mx-auto max-w-screen-2xl">
      <div className="section-Main">
      <div className=" flex flex-col md:p-24 lg:p-20">
        <div className='flex flex-wrap items-center pb-8 w-full'>
            <div className="sectionTitles w-2/4">
                <h1 className="pb-2">
                    About
                </h1>
                <div className="specialBlurb">
                    <p>I’m a Software Engineer with over 6 years of experience building scalable, user-focused web applications using React, Vue.js, and modern JavaScript. I work across the full stack with Node.js, MongoDB, and PHP, integrating RESTful APIs and geospatial tools to turn complex requirements into real-world solutions. From improving performance to streamlining workflows, I enjoy building reliable, intuitive tools that teams genuinely enjoy using.</p>
                </div>
            </div>
            <div className="w-2/4">
            <Image className="mx-auto"src={logo} alt='This is me' />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};


export default About
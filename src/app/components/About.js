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
                    <p>Hey! I'm Dwight Carter, a self-taught developer whose coding journey began with customizing MySpace layouts. That early curiosity about HTML and CSS sparked a passion that led me from tinkering with social media profiles to building full-scale web applications. Since then, I've worked on everything from e-commerce platforms at Zaniboni Lighting to developing sophisticated mapping applications at GPI. Currently, I focus on building intuitive web solutions that help people better understand and interact with data in meaningful ways.</p>
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
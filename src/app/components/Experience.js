import React from 'react'
import logo from '../images/memoji.png'
import Image from 'next/image'


const Experience = props => {

    return (
        <div id="exp__block" className="blockColor md:p-24 lg:p-20"> 
        <div className="container mx-auto max-w-screen-2xl">
            <div className="section-Experience items-center">
                <div className='flex flex-wrap'>
                    <div className='flex flex-wrap items-center pb-8 w-full'>
                        <div className="sectionTitles w-2/4">
                            <h1 className="pb-2">
                               EXPERIENCE
                            </h1>
                            <div className="specialBlurb">
                                <p>From working overnight in a call center to being a self taught developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                    <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                            <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>SOFTWARE ENGINEER</h2>
                                <p className="jobYear">February 2022 - October 2024</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://www.gpinet.com/">GPI/GREENMAN-PEDERSON, INC.</a></h3>
                            <div className="jobBlurb px-2">
                            <ul>
                                <li>Architected and developed JavaScript-based map applications using ESRI ArcGIS frameworks.</li>
                                <li>Assisted with BIM projects using Revit for improved visualization and modeling.</li>
                                <li>Established standardized documentation processes, creating comprehensive technical proposals and user manuals</li>
                                <li>Created new site features, tools, apps, email templates, landing pages, and web forms to meet evolving user needs.</li>
                                <li>Developed RESTful APIs to integrate mapping services with client applications.</li>
                            </ul>
                            </div>
                             </div>
                        </div>
                        <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                            <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>FRONT-END SOFTWARE ENGINEER</h2>
                                <p className="jobYear">June 2019 - February 2022</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://zanibonilighting.com/">ZANIBONI LIGHTING</a></h3>
                            <div className="jobBlurb px-2">
                            <ul>
                                <li>Assist with full migration of Magento 1.9 portal to Magento 2.3 CE, resulting in 35% improved platform performance.</li>
                                <li>Managed landing pages, marketing emails, and visual campaigns to support marketing initiatives.</li>
                                <li>Collaborated in the complete Scrum development lifecycle, contributing to product development and delivery.</li>
                            </ul>
                            </div>
                             </div>
                        </div>
                        <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                        <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>JR FRONT-END SOFTWARE ENGINEER</h2>
                                <p className="jobYear">October 2018 - June 2019</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://thewaveclearwater.com/">THE WAVE</a></h3>
                            <div className="jobBlurb px-2">
                                <ul>
                                    <li>Built responsive frontend for a SaaS platform using Vue.js and Vue Router, collaborating with UX/UI designers.</li>
                                    <li>Developed and maintained RESTful APIs with Loopback, connecting frontend to a Node.js and MongoDB backend.</li>
                                    <li>Designed scalable backend systems and optimized database performance for high-traffic applications.</li>
                                </ul>
                            </div>
                             </div>
                        </div>                     
                        <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                        <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>CONTENT DEVELOPER</h2>
                                <p className="jobYear">July - October 2018</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3> <a className="hover-underline-animation jobCompany" href="https://www.h2itsolutions.com/">H2 IT SOLUTIONS</a></h3> 
                            <div className="jobBlurb px-2">
                                <ul>
                                    <li>Successfully migrated 50+ online courses from Blackboard to Canvas LMS</li>
                                    <li>Develop, update, and maintain the monthly safety training eLearning modules.</li>
                                    <li>Create web user experiences using HTML, CSS, and JavaScript.</li>
                                    <li>Convert existing documentation and training materials into engaging and effective online courses.</li>
                                </ul>
                            </div>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}



export default Experience

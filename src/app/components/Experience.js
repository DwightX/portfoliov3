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
                                <p className="jobYear">February 2022 - Janurary 2025</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://www.gpinet.com/">GPI/GREENMAN-PEDERSON, INC.</a></h3>
                            <div className="jobBlurb px-2">
                            <ul>
                                <li>Developed cross-platform mapping applications using JavaScript, React, and ESRI ArcGIS, delivering geospatial visualization tools used by 100+ internal and client users.</li>
                                <li>Integrated RESTful APIs to connect mapping services with client applications, reducing database query time by 20% and improving data processing efficiency.</li>
                                <li>EContributed to Building Information Modeling (BIM) workflows using Revit, enhancing design accuracy and visualization quality.</li>
                                <li>Created and maintained technical documentation that reduced onboarding time and improved long-term maintainability.</li>
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
                                <li>Collaborated on the migration from Magento 1.9 to Magento 2.3 CE, resulting in a 35% improvement in platform performance.</li>
                                <li>Integrated Mailchimp APIs to automate marketing email campaigns, improving user engagement and campaign efficiency.</li>
                                <li>Designed and developed high-conversion landing pages and visual campaigns in collaboration with marketing teams.</li>
                                <li>Built product catalog integrations between the e-commerce frontend and PHP/Laravel backend.</li>
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
                                    <li>Developed responsive SaaS frontends using Vue.js & Vue Router in collaboration with UX/UI designers.</li>
                                    <li>Built RESTful APIs using the LoopBack framework, connecting Node.js and MongoDB backend services.</li>
                                    <li>Implemented responsive landing pages from design mockups and maintained multiple WordPress sites.</li>
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
                                    <li>Successfully migrated 50+ online courses from Blackboard to Canvas LMS, ensuring data integrity and user experience continuity.</li>
                                    <li>Developed responsive course content using HTML5 and CSS3, improving mobile accessibility.</li>
                                    <li>Streamlined migration processes and contributed to platform optimization initiatives.</li>
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

import React from 'react'

const Experience = props => {
    return (
        <div id="exp__block" className="blockColor px-6 py-10 lg:px-12 lg:py-12">
        <div className="container mx-auto max-w-screen-2xl">
            <div className="section-Experience">
                <div className="sectionTitles pb-6">
                    <h1>EXPERIENCE</h1>
                </div>
                <div className="exp-list">

                    <div className="exp-entry">
                        <p className="jobYear">January 2025 — Present</p>
                        <h2 className="jobTitle">Freelance Developer</h2>
                        <h3><span className="jobCompany">Independent</span></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Designed and developed websites for small businesses and entrepreneurs, handling full project lifecycle from discovery through deployment.</li>
                                <li>Built personal branding websites including custom color palettes, typography systems, and visual identity, translating client vision into cohesive digital presence.</li>
                                <li>Developed an internal client lead-tracking application using MongoDB and Vanilla JS, enabling clients to manage prospects, notes, and follow-ups in a centralized tool.</li>
                                <li>Maintained and extended client Shopify storefronts, implementing theme customizations, product integrations, and performance improvements.</li>
                                <li>Managed ongoing WordPress site maintenance including plugin updates, content changes, performance tuning, and security hardening.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">February 2022 — January 2025</p>
                        <h2 className="jobTitle">Software Engineer</h2>
                        <h3><a className="jobCompany hover-underline-animation" href="https://www.gpinet.com/">GPI / Greenman-Pedersen, Inc.</a></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Developed and maintained cross-platform web applications using JavaScript, React, and modern web technologies, delivering tools used by 100+ internal and client users including government agencies.</li>
                                <li>Provided ongoing troubleshooting, maintenance, and support for production web applications, ensuring reliability and security.</li>
                                <li>Integrated RESTful APIs to connect frontend applications with backend services, reducing database query time by 20% and improving system performance.</li>
                                <li>Created and maintained technical documentation that reduced onboarding time and improved long-term maintainability.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">June 2019 — February 2022</p>
                        <h2 className="jobTitle">Front-End Software Engineer</h2>
                        <h3><a className="jobCompany hover-underline-animation" href="https://zanibonilighting.com/">Zaniboni Lighting</a></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Collaborated on the migration from Magento 1.9 to Magento 2.3 CE, resulting in a 35% improvement in platform performance.</li>
                                <li>Integrated third-party APIs (Mailchimp) to enhance website functionality and automate user engagement workflows.</li>
                                <li>Designed and developed landing pages and visual campaigns, implementing consistent branding elements including logos, color palettes, and typography across all web properties.</li>
                                <li>Built product catalog integrations between the e-commerce frontend and PHP/Laravel backend.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">October 2018 — June 2019</p>
                        <h2 className="jobTitle">Jr. Front-End Software Engineer</h2>
                        <h3><a className="jobCompany hover-underline-animation" href="https://thewaveclearwater.com/">The Wave of Clearwater</a></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Developed responsive SaaS frontends using Vue.js &amp; Vue Router in collaboration with UX/UI designers.</li>
                                <li>Built RESTful APIs using the LoopBack framework, connecting Node.js and MongoDB backend services.</li>
                                <li>Implemented responsive landing pages from design mockups and maintained multiple WordPress sites.</li>
                                <li>Designed and implemented responsive landing pages from design mockups, translating visual concepts into functional, branded web pages.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">July 2018 — October 2018</p>
                        <h2 className="jobTitle">Content Developer</h2>
                        <h3><a className="hover-underline-animation jobCompany" href="https://www.h2itsolutions.com/">H2 IT Solutions</a></h3>
                        <div className="jobBlurb mt-3">
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
    )
}

export default Experience

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
                                <li>Designed and developed websites for small businesses and entrepreneurs, handling the full project lifecycle from discovery through deployment.</li>
                                <li>Maintained and extended client Shopify storefronts with theme customizations, product integrations, and performance improvements.</li>
                                <li>Built personal branding websites with custom color palettes, typography systems, and visual identity, translating client vision into cohesive digital presence.</li>
                                <li>Managed ongoing WordPress maintenance including plugin updates, content changes, performance tuning, and security hardening.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">February 2022 — January 2025</p>
                        <h2 className="jobTitle">Application Developer</h2>
                        <h3><a className="jobCompany hover-underline-animation" href="https://www.gpinet.com/">GPI / Greenman-Pedersen, Inc.</a></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Built interactive geospatial dashboards using JavaScript, Leaflet, and Mapbox, enabling clients to explore ArcGIS data layers and live streamed feeds in real time.</li>
                                <li>Developed internal reporting tools that let analysts query large geospatial datasets and generate custom reports; introduced Redis caching to reduce report generation time.</li>
                                <li>Partnered with GIS developers to maintain and validate spatial databases, improving data accuracy and reducing client reported discrepancies.</li>
                                <li>Integrated live traffic camera feeds into mapping applications, allowing clients to monitor real time road conditions alongside spatial data layers.</li>
                                <li>Created onboarding documentation and walked clients through new deployments alongside IT teams.</li>
                                <li>Designed responsive client websites that pulled in client provided spatial data to display live road closures, branded for each client and optimized for mobile.</li>
                                <li>Helped deploy and maintain client-facing web applications on AWS, working with EC2 for the app tier and S3 with CloudFront for static assets and CDN delivery.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">June 2019 — February 2022</p>
                        <h2 className="jobTitle">Front End Developer</h2>
                        <h3><a className="jobCompany hover-underline-animation" href="https://zanibonilighting.com/">Zaniboni Lighting</a></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Contributed to the frontend migration from Magento 1.9 to Magento 2.3 CE, improving page load times by 35%.</li>
                                <li>Built a custom spec sheet generator that pulled product data from a PHP/Laravel backend into branded PDF reports, streamlining how clients specified products into commercial projects.</li>
                                <li>Developed interactive customer facing tools, including a reverb calculator that helped clients evaluate product fit for their space.</li>
                                <li>Designed and shipped landing pages for new product launches, coordinating with marketing on visuals and campaign timing.</li>
                                <li>Partnered with marketing on A/B testing, lead capture, and segmented Mailchimp campaigns targeting customers by region and product interest.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-entry">
                        <p className="jobYear">October 2018 — June 2019</p>
                        <h2 className="jobTitle">Junior Front End Developer</h2>
                        <h3><a className="jobCompany hover-underline-animation" href="https://thewaveclearwater.com/">The Wave of Clearwater</a></h3>
                        <div className="jobBlurb mt-3">
                            <ul>
                                <li>Contributed to a medical intake and patient onboarding SaaS built in Vue.js, implementing UI components and smaller features from designs as part of a product team.</li>
                                <li>Built and maintained RESTful APIs with the LoopBack framework, connecting the Vue.js frontend to Node.js and MongoDB services.</li>
                                <li>Extended the company&apos;s WordPress site by building new pages and sub-sites, and customizing themes to support marketing and product needs.</li>
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

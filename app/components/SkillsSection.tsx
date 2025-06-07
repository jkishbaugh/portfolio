"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
    return (<section className="py-16 bg-secondary dark:bg-dark-secondary">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-background dark:bg-dark-background rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-accent dark:text-dark-accent">T</span>
                    </span>
                    Technical Skills
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: "Languages", items: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "Go", "SQL", "Groovy"] },
                      { name: "Frameworks & Libraries", items: ["Spring Boot", "React", "FastAPI", "Node.js", "Tailwind"] },
                      { name: "DevOps & CI/CD", items: ["Jenkins", "OpenShift", "Docker", "ArgoCD", "Helm", "Firebase Hosting"] },
                      { name: "Testing & Automation", items: ["JUnit", "Cucumber", "Testcontainers", "Performance Testing Automation"] },
                      { name: "Cloud & Infrastructure", items: [" Azure DevOps", "Firebase", "Kubernetes (via Helm/ArgoCD)"] },
                      { name: "Observability & SRE", items: ["Splunk", "New Relic", "LaunchDarkly", "CircuitBreaker", "MDC"] },
                      { name: "Data", items: ["NoSQL", "SQL", "MongoDB", "Redis"] }
                    ].map((category) => (
                      <div key={category.name} className="mb-6">
                        <h4 className="font-medium text-primary dark:text-primary-dark mb-2">{category.name}</h4>
                        <ul className="space-y-1">
                          {category.items.map(item => (
                            <li key={item} className="text-secondary dark:text-secondary-dark text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Soft Skills & Approach */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-background dark:bg-dark-background  rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-accent dark:text-dark-accent">S</span>
                    </span>
                    Professional Approach
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Problem Solving",
                        description: "Modernized and reengineered legacy systems, enabling market expansion and reducing operational costs."
                      },
                      {
                        title: "Adaptability",
                        description: "Transitioned successfully from a career in education to software engineering, quickly mastering new technologies and environments."
                      },
                      {
                        title: "Initiative",
                        description: "Identified organizational gaps and built effective tools to streamline onboarding and training processes."
                      },
                      {
                        title: "Leadership",
                        description: "Spearheaded internal tool initiatives, including the development of an onboarding platform to improve employee ramp-up."
                      },
                      {
                        title: "Mentorship",
                        description: "Supported junior developers and bootcamp interns within Agile teams, fostering growth and integration into engineering workflows."
                      },{
                        title: "Education & Communication",
                        description: "Designed and delivered a computational thinking curriculum for elementary students, bridging complex concepts through accessible instruction."
                      },{
                        title: "Client Relations",
                        description: "Retained high-value clients by delivering rapid, tailored customizations that addressed critical business needs."
                      },
                      {
                        title: "Continuous Learning",
                        description: "The tech landscape evolves rapidly. I maintain a growth mindset, actively seeking opportunities to expand my knowledge."
                      }
                    ].map((skill) => (
                      <div key={skill.title} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-1 bg-accent dark:bg-dark-accent h-full rounded"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">{skill.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

    )
}
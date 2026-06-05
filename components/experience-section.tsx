"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, CheckCircle } from "lucide-react"

const experiences = [
  {
    company: "Robotica FA Solutions",
    role: "Mechatronics & Automation Intern",
    duration: "210 Hours",
    color: "primary",
    responsibilities: [
      "Learned industrial automation fundamentals",
      "Studied mechatronic systems",
      "Explored Generative AI applications in manufacturing",
      "Understood AI-driven engineering workflows",
      "Gained exposure to smart industrial systems",
    ],
  },
  {
    company: "BlueKode Academy",
    role: "AI & Emerging Technologies Intern",
    duration: "210 Hours",
    color: "secondary",
    responsibilities: [
      "Developed understanding of Artificial Intelligence",
      "Explored Generative AI concepts",
      "Studied AI integration in Mechatronics",
      "Learned Industry 4.0 applications",
      "Improved analytical and problem-solving skills",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="min-h-screen py-20 relative section-experience overflow-hidden" ref={ref}>
      {/* Industrial pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4"
            >
              Professional Journey
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                  style={{
                    backgroundColor:
                      exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                    boxShadow: `0 0 20px ${
                      exp.color === "primary"
                        ? "rgba(0, 229, 255, 0.5)"
                        : "rgba(108, 99, 255, 0.5)"
                    }`,
                  }}
                />

                {/* Date - Hidden on mobile */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
                    style={{
                      borderColor:
                        exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                    }}
                  >
                    <Calendar
                      size={16}
                      style={{
                        color: exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                      }}
                    />
                    <span
                      className="font-medium"
                      style={{
                        color: exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl border transition-all duration-300"
                    style={{
                      borderColor:
                        exp.color === "primary"
                          ? "rgba(0, 229, 255, 0.3)"
                          : "rgba(108, 99, 255, 0.3)",
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="p-3 rounded-lg shrink-0"
                        style={{
                          backgroundColor:
                            exp.color === "primary"
                              ? "rgba(0, 229, 255, 0.1)"
                              : "rgba(108, 99, 255, 0.1)",
                        }}
                      >
                        <Briefcase
                          size={24}
                          style={{
                            color:
                              exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p
                          className="font-medium"
                          style={{
                            color:
                              exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                          }}
                        >
                          {exp.role}
                        </p>
                        {/* Mobile Duration */}
                        <div className="md:hidden flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-1 shrink-0"
                            style={{
                              color:
                                exp.color === "primary" ? "#00E5FF" : "#6C63FF",
                            }}
                          />
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

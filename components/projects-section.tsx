"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Cpu, Brain, Factory, Monitor } from "lucide-react"

const projects = [
  {
    title: "AI-Based Detection of Process Parameters in CNC Machines",
    description:
      "Designed an AI-driven concept to optimize machining parameters, improve surface finish, enhance material removal rates, and support predictive process optimization.",
    technologies: ["AI", "Python", "Data Analysis", "Manufacturing Concepts"],
    icon: Brain,
    color: "primary",
    category: "AI/ML",
  },
  {
    title: "Predictive Maintenance System for Industrial Equipment",
    description:
      "Developed a conceptual machine-health monitoring framework using predictive analytics and sensor-based data interpretation to reduce downtime and improve reliability.",
    technologies: ["AI", "Predictive Analytics", "Sensors", "Python"],
    icon: Factory,
    color: "secondary",
    category: "Automation",
  },
  {
    title: "Smart Automated Material Handling System",
    description:
      "Designed an intelligent automation concept integrating sensors and actuators to optimize industrial material movement and improve operational efficiency.",
    technologies: ["Automation", "Sensors", "Actuators", "Industry 4.0"],
    icon: Cpu,
    color: "accent",
    category: "Automation",
  },
  {
    title: "Future Robotics Control Dashboard",
    description:
      "A futuristic dashboard concept for monitoring robotic systems, machine status, and industrial automation metrics in real time.",
    technologies: ["Python", "Automation", "UI Design"],
    icon: Monitor,
    color: "primary",
    category: "Robotics",
  },
]

const categories = ["All", "AI/ML", "Automation", "Robotics"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="min-h-screen py-20 relative section-projects overflow-hidden" ref={ref}>
      {/* Innovation lab pattern */}
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
              Featured Work
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Projects
            </h2>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              const colorValue =
                project.color === "primary"
                  ? "#00E5FF"
                  : project.color === "secondary"
                  ? "#6C63FF"
                  : "#00FF9D"

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl border transition-all duration-300 group"
                  style={{
                    borderColor: `${colorValue}30`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${colorValue}15`,
                      }}
                    >
                      <Icon size={28} style={{ color: colorValue }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${colorValue}15`,
                          color: colorValue,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer"
                    />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

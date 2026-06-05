"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Settings, Cpu, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Python Programming", level: 85 },
      { name: "C Programming", level: 80 },
      { name: "C++", level: 75 },
      { name: "Artificial Intelligence", level: 70 },
      { name: "Generative AI", level: 65 },
      { name: "Industrial Automation", level: 75 },
      { name: "Robotics Fundamentals", level: 70 },
      { name: "PLC Fundamentals", level: 65 },
      { name: "Control Systems", level: 70 },
      { name: "Mechanical Design", level: 75 },
      { name: "CAD Modeling", level: 80 },
      { name: "Data Analysis", level: 70 },
      { name: "Industry 4.0 Concepts", level: 75 },
    ],
  },
  {
    title: "Software & Tools",
    icon: Settings,
    color: "secondary",
    skills: [
      { name: "AutoCAD", level: 85 },
      { name: "SolidWorks", level: 80 },
      { name: "MATLAB (Basics)", level: 60 },
      { name: "Microsoft Excel", level: 85 },
      { name: "Power BI", level: 70 },
      { name: "Git", level: 75 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    title: "Engineering Domains",
    icon: Cpu,
    color: "accent",
    skills: [
      { name: "Automation Engineering", level: 80 },
      { name: "Robotics Engineering", level: 75 },
      { name: "Smart Manufacturing", level: 70 },
      { name: "CNC Systems", level: 65 },
      { name: "Predictive Maintenance", level: 70 },
      { name: "AI for Manufacturing", level: 70 },
      { name: "Industrial IoT", level: 65 },
      { name: "Mechatronic Product Development", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "primary",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 85 },
      { name: "Team Collaboration", level: 85 },
      { name: "Technical Communication", level: 80 },
      { name: "Adaptability", level: 90 },
      { name: "Leadership", level: 75 },
      { name: "Continuous Learning", level: 95 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 relative section-skills overflow-hidden" ref={ref}>
      {/* Background decorations */}
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
              Technical Expertise
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Skills & Technologies
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-${category.color}/20 text-${category.color} border border-${category.color}`
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                  style={
                    activeCategory === index
                      ? {
                          backgroundColor:
                            category.color === "primary"
                              ? "rgba(0, 229, 255, 0.2)"
                              : category.color === "secondary"
                              ? "rgba(108, 99, 255, 0.2)"
                              : "rgba(0, 255, 157, 0.2)",
                          borderColor:
                            category.color === "primary"
                              ? "#00E5FF"
                              : category.color === "secondary"
                              ? "#6C63FF"
                              : "#00FF9D",
                          color:
                            category.color === "primary"
                              ? "#00E5FF"
                              : category.color === "secondary"
                              ? "#6C63FF"
                              : "#00FF9D",
                        }
                      : {}
                  }
                >
                  <Icon size={18} />
                  <span className="font-medium">{category.title}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                color={skillCategories[activeCategory].color}
                delay={index * 0.05}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({
  skill,
  color,
  delay,
  isInView,
}: {
  skill: { name: string; level: number }
  color: string
  delay: number
  isInView: boolean
}) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setWidth(skill.level)
      }, delay * 1000 + 300)
      return () => clearTimeout(timeout)
    }
  }, [isInView, skill.level, delay])

  const bgColor =
    color === "primary"
      ? "#00E5FF"
      : color === "secondary"
      ? "#6C63FF"
      : "#00FF9D"

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: delay + 0.3, duration: 0.4 }}
      className="glass p-4 rounded-xl border border-muted hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-bold" style={{ color: bgColor }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            backgroundColor: bgColor,
            boxShadow: `0 0 10px ${bgColor}`,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

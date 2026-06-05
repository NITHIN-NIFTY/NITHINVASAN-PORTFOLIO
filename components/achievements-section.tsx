"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Clock, Award, BookOpen, Lightbulb } from "lucide-react"

const achievements = [
  {
    icon: Clock,
    title: "420+ Hours",
    description: "Industry-Oriented Internship Training",
    color: "primary",
  },
  {
    icon: Award,
    title: "8.23 CGPA",
    description: "Maintained Strong Academic Performance",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "Active Learner",
    description: "AI, Robotics, and Automation Domains",
    color: "accent",
  },
  {
    icon: Trophy,
    title: "Program Participant",
    description: "Engineering and Technology Development Programs",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Continuous Growth",
    description: "Building Expertise in Emerging Industrial Technologies",
    color: "secondary",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="min-h-screen py-20 relative section-achievements overflow-hidden" ref={ref}>
      {/* Achievement glow pattern */}
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
              Milestones
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Achievements
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              const colorValue =
                achievement.color === "primary"
                  ? "#00E5FF"
                  : achievement.color === "secondary"
                  ? "#6C63FF"
                  : "#00FF9D"

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-2xl border text-center transition-all duration-300 group"
                  style={{
                    borderColor: `${colorValue}30`,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${colorValue}15`,
                      boxShadow: `0 0 30px ${colorValue}20`,
                    }}
                  >
                    <Icon size={28} style={{ color: colorValue }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colorValue }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

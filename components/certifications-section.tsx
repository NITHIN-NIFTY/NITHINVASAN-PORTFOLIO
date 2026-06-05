"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Generative AI for Engineering Applications",
    issuer: "Industry Certification",
    color: "primary",
  },
  {
    title: "Industrial Automation Fundamentals",
    issuer: "Technical Training",
    color: "secondary",
  },
  {
    title: "Artificial Intelligence Foundations",
    issuer: "Online Course",
    color: "accent",
  },
  {
    title: "Industry 4.0 & Smart Manufacturing",
    issuer: "Professional Development",
    color: "primary",
  },
  {
    title: "CAD Design & Mechanical Modeling",
    issuer: "Technical Certification",
    color: "secondary",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
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
              Professional Development
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Certifications
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              const colorValue =
                cert.color === "primary"
                  ? "#00E5FF"
                  : cert.color === "secondary"
                  ? "#6C63FF"
                  : "#00FF9D"

              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-2xl border transition-all duration-300 group"
                  style={{
                    borderColor: `${colorValue}30`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${colorValue}15`,
                    }}
                  >
                    <Award size={24} style={{ color: colorValue }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CheckCircle size={14} style={{ color: colorValue }} />
                    <span>{cert.issuer}</span>
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

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Cog,
  Boxes,
  Brain,
  Settings,
  Bot,
  Factory,
  FileSearch,
} from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Mechanical Design Assistance",
    description:
      "Support with mechanical design concepts, calculations, and engineering fundamentals for various applications.",
    color: "primary",
  },
  {
    icon: Boxes,
    title: "CAD Modeling",
    description:
      "Creating 2D and 3D models using AutoCAD and SolidWorks for visualization and prototyping needs.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "AI-Based Engineering Solutions",
    description:
      "Conceptualizing AI-driven solutions for manufacturing optimization and process improvement.",
    color: "accent",
  },
  {
    icon: Settings,
    title: "Automation Concepts Development",
    description:
      "Designing automation workflows and system architectures for industrial applications.",
    color: "primary",
  },
  {
    icon: Bot,
    title: "Robotics Project Support",
    description:
      "Assistance with robotics fundamentals, control systems, and project planning.",
    color: "secondary",
  },
  {
    icon: Factory,
    title: "Smart Manufacturing Consultation",
    description:
      "Advisory on Industry 4.0 concepts, IoT integration, and smart factory implementation strategies.",
    color: "accent",
  },
  {
    icon: FileSearch,
    title: "Engineering Research Assistance",
    description:
      "Support with technical research, documentation, and analysis for engineering projects.",
    color: "primary",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 relative" ref={ref}>
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
              What I Offer
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              const colorValue =
                service.color === "primary"
                  ? "#00E5FF"
                  : service.color === "secondary"
                  ? "#6C63FF"
                  : "#00FF9D"

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-2xl border transition-all duration-300 group"
                  style={{
                    borderColor: `${colorValue}30`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${colorValue}15`,
                      boxShadow: `0 0 30px ${colorValue}20`,
                    }}
                  >
                    <Icon size={28} style={{ color: colorValue }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
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

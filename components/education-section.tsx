"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4"
            >
              Academic Journey
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Education
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start gap-8 mb-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-cyan z-10" />

              {/* Content */}
              <div className="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0">
                <div className="flex items-center gap-2 md:justify-end mb-2">
                  <Calendar className="text-primary" size={16} />
                  <span className="text-primary font-medium">2024 - 2028</span>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 pl-20">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <GraduationCap className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        Mechatronics Engineering
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Kumaraguru College of Technology
                      </p>

                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full">
                          <Award className="text-accent" size={16} />
                          <span className="text-accent font-semibold">
                            CGPA: 8.23
                          </span>
                        </div>
                        <div className="px-3 py-1.5 glass rounded-full text-sm text-muted-foreground">
                          Expected: 2028
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-6 pt-6 border-t border-muted">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Automation Systems",
                        "Robotics",
                        "AI & ML",
                        "Control Systems",
                        "Mechanical Design",
                        "Industry 4.0",
                      ].map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

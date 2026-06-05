"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User, Target } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative" ref={ref}>
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
              Get to Know Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              About Me
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Me Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am <span className="text-primary font-medium">Nithin Vasan</span>,
                a passionate Mechatronics Engineering student at Kumaraguru College
                of Technology. My interests span Automation Engineering, Artificial
                Intelligence, Robotics, Mechanical Design, Smart Manufacturing, and
                Industry 4.0 technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I enjoy solving engineering challenges using innovative approaches
                that combine mechanical systems, intelligent software, and
                automation technologies. My goal is to contribute to the next
                generation of intelligent industrial solutions by integrating
                AI-driven decision-making with advanced mechatronic systems.
              </p>
            </motion.div>

            {/* Career Objective Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass p-8 rounded-2xl border border-secondary/20 hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Target className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Career Objective
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring Mechatronics Engineer with a strong passion for{" "}
                <span className="text-secondary font-medium">
                  Automation, Artificial Intelligence, Robotics, and Smart
                  Manufacturing
                </span>
                . Seeking opportunities to apply technical knowledge,
                problem-solving abilities, and innovative thinking in real-world
                engineering environments.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Eager to contribute to intelligent automation projects, AI-driven
                industrial systems, and advanced mechanical technologies while
                continuously expanding expertise in emerging engineering domains.
              </p>
            </motion.div>
          </div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              "Automation Engineering",
              "Artificial Intelligence",
              "Robotics",
              "Smart Manufacturing",
              "Industry 4.0",
              "Mechanical Design",
            ].map((area, index) => (
              <span
                key={area}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-foreground border border-muted hover:border-primary transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {area}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

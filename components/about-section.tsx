"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User, Target, Cog } from "lucide-react"
import Image from "next/image"

function GearIcon({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="min-h-screen py-20 relative section-about overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
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

          {/* Main Content Grid - 2 columns on desktop */}
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Profile Image Column - smaller proportion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Rotating gear behind image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary/10 animate-rotate-gear">
                    <GearIcon size={320} className="hidden md:block" />
                    <GearIcon size={220} className="md:hidden" />
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-primary animate-particle" style={{ animationDelay: "0s" }} />
                <div className="absolute top-1/4 -left-4 w-1.5 h-1.5 rounded-full bg-secondary animate-particle" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-1/4 -right-4 w-2 h-2 rounded-full bg-accent animate-particle" style={{ animationDelay: "2s" }} />
                <div className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 rounded-full bg-primary animate-particle" style={{ animationDelay: "0.5s" }} />

                {/* Profile Image Container - responsive sizes: 180px mobile, 250px tablet, 300px desktop */}
                <div className="relative w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/40 shadow-[0_0_40px_rgba(0,229,255,0.3)] animate-pulse-glow" />
                  
                  {/* Glassmorphism border */}
                  <div className="absolute inset-1 rounded-full glass border border-primary/30" />
                  
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Nithin Vasan - Mechatronics Engineer"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 180px, (max-width: 1024px) 250px, 300px"
                    />
                  </div>

                  {/* Inner decorative ring */}
                  <div className="absolute inset-3 rounded-full border border-primary/10 pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* About Content Column - larger proportion */}
            <div className="lg:col-span-3 space-y-6">
              {/* About Me Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="glass p-6 md:p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
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
                  generation of intelligent industrial solutions.
                </p>
              </motion.div>

              {/* Career Objective Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="glass p-6 md:p-8 rounded-2xl border border-secondary/20 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
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
              </motion.div>

              {/* Focus Areas */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  "Automation Engineering",
                  "Artificial Intelligence",
                  "Robotics",
                  "Smart Manufacturing",
                  "Industry 4.0",
                  "Mechanical Design",
                ].map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="px-4 py-2 glass rounded-full text-sm font-medium text-foreground border border-muted hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {area}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

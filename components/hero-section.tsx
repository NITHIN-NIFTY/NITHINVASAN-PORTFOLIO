"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Download,
  MessageCircle,
  FolderOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = [
  "Mechatronics Engineer",
  "Automation Enthusiast",
  "AI & Robotics Explorer",
  "Smart Manufacturing Pioneer",
]

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const title = titles[currentTitle]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < title.length) {
            setDisplayText(title.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTitle((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitle])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass text-primary text-sm font-medium">
                Welcome to My Portfolio
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">{"I'm "}</span>
              <span className="gradient-text">Nithin Vasan</span>
            </h1>

            <div className="h-12 flex items-center">
              <span className="text-xl md:text-2xl text-muted-foreground">
                Upcoming{" "}
              </span>
              <span className="text-xl md:text-2xl text-primary ml-2 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Dedicated Mechatronics Engineering student passionate about
              Automation, Artificial Intelligence, Robotics, Mechanical Design,
              Smart Manufacturing, and Industrial Innovation.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
              &quot;Building Intelligent Machines for the Future&quot;
            </blockquote>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <a
                href="mailto:NITHINVASAN2007@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span>NITHINVASAN2007@gmail.com</span>
              </a>
              <a
                href="tel:+919940819979"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>+91 9940819979</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
                asChild
              >
                <a href="#contact">
                  <MessageCircle className="mr-2" size={18} />
                  Contact Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                asChild
              >
                <a href="#projects">
                  <FolderOpen className="mr-2" size={18} />
                  View Projects
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/nithin-vasan-23918532a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
              <a
                href="mailto:NITHINVASAN2007@gmail.com"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors group"
                aria-label="Email"
              >
                <Mail
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Animated Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                value="420+"
                label="Internship Hours"
                delay={0.4}
                color="primary"
              />
              <StatCard value="8.23" label="CGPA" delay={0.5} color="secondary" />
              <StatCard
                value="3+"
                label="Major Projects"
                delay={0.6}
                color="accent"
              />
              <StatCard
                value="10+"
                label="Technical Skills"
                delay={0.7}
                color="primary"
              />
              <StatCard
                value="2"
                label="Industry Internships"
                delay={0.8}
                color="secondary"
                className="col-span-2"
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 border border-secondary/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  value,
  label,
  delay,
  color,
  className = "",
}: {
  value: string
  label: string
  delay: number
  color: "primary" | "secondary" | "accent"
  className?: string
}) {
  const colorClasses = {
    primary: "border-primary/30 hover:border-primary",
    secondary: "border-secondary/30 hover:border-secondary",
    accent: "border-accent/30 hover:border-accent",
  }

  const textColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className={`glass p-6 rounded-xl border ${colorClasses[color]} transition-all duration-300 ${className}`}
    >
      <div className={`text-3xl md:text-4xl font-bold ${textColors[color]}`}>
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  )
}

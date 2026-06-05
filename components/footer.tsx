"use client"

import { motion } from "framer-motion"
import { Mail, Download, Heart, ArrowUp } from "lucide-react"

function LinkedinIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 relative border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Nithin Vasan
            </h3>
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-start">
              Designed & Engineered with{" "}
              <Heart size={14} className="text-red-500 fill-red-500" /> by Nithin
              Vasan
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/nithin-vasan-23918532a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary/20 transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon
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
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Download className="mr-2" size={16} />
              Resume
            </Button>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="p-3 glass rounded-full hover:bg-primary/20 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp
              size={20}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 pt-8 border-t border-muted"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nithin Vasan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Mechatronics Engineer | Building Intelligent Machines for the Future
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

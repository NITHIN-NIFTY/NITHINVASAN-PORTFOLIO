"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Mail, Phone, Send, CheckCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    await fetch("https://hook.eu1.make.com/fu4yuqteiwgfiihr2odi8v7u1ym7c535", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: formState.name,
    email: formState.email,
    subject: formState.subject,
    message: formState.message,
  }),
})
    await emailjs.send(
      "service_3morp4n",
      "template_9xldg4h",
      {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
      "yXgqyxEiOcZvTDgf9"
    )

    setIsSubmitted(true)

    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)

  } catch (error) {
    console.error("Email sending failed:", error)
    alert("Failed to send message. Please try again.")
  }
}

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="min-h-screen py-20 relative section-contact overflow-hidden" ref={ref}>
      {/* Professional network pattern */}
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
              Get in Touch
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Contact Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {"Let's Connect"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I'm always interested in discussing new opportunities, innovative projects, and collaborations in the field of Mechatronics, Automation, and AI. Feel free to reach out!"}
              </p>

              <div className="space-y-4 pt-4">
                <motion.a
  href="https://www.linkedin.com/in/nithin-vasan-23918532a/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ x: 5 }}
  className="flex items-center gap-4 p-4 glass rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
>
  <div className="p-3 rounded-lg bg-primary/10">
    <Globe className="text-primary" size={24} />
  </div>
  <div>
    <p className="text-sm text-muted-foreground">Portfolio</p>
    <p className="text-foreground font-medium">
      nithinvasan.dev
    </p>
  </div>
</motion.a>

                <motion.a
                  href="mailto:NITHINVASAN2007@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">
                      NITHINVASAN2007@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919940819979"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 9940819979</p>
                  </div>
                </motion.a>

              
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass p-8 rounded-2xl border border-primary/20"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={18} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

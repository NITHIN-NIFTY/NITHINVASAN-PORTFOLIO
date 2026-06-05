"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, ArrowRight, Brain, Bot, Factory, Cpu, Wrench } from "lucide-react"

const blogs = [
  {
    title: "How Artificial Intelligence is Transforming Manufacturing",
    excerpt:
      "Exploring the revolutionary impact of AI on modern manufacturing processes, from predictive maintenance to quality control optimization.",
    date: "Coming Soon",
    readTime: "5 min read",
    icon: Brain,
    color: "primary",
  },
  {
    title: "The Future of Robotics in Smart Industries",
    excerpt:
      "Discover how collaborative robots and autonomous systems are reshaping industrial operations and human-machine interaction.",
    date: "Coming Soon",
    readTime: "6 min read",
    icon: Bot,
    color: "secondary",
  },
  {
    title: "Industry 4.0: Revolutionizing Engineering",
    excerpt:
      "Understanding the fourth industrial revolution and its impact on mechatronics, automation, and smart manufacturing systems.",
    date: "Coming Soon",
    readTime: "7 min read",
    icon: Factory,
    color: "accent",
  },
  {
    title: "Predictive Maintenance Using AI",
    excerpt:
      "How machine learning algorithms can predict equipment failures before they occur, reducing downtime and maintenance costs.",
    date: "Coming Soon",
    readTime: "5 min read",
    icon: Cpu,
    color: "primary",
  },
  {
    title: "How Mechatronics Engineers Will Shape Future Technologies",
    excerpt:
      "The evolving role of mechatronics engineering in developing intelligent systems that integrate mechanical, electronic, and software components.",
    date: "Coming Soon",
    readTime: "8 min read",
    icon: Wrench,
    color: "secondary",
  },
]

export function BlogsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blogs" className="py-20 relative" ref={ref}>
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
              Insights & Ideas
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Engineering Blogs
            </h2>
          </div>

          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogs.map((blog, index) => {
              const Icon = blog.icon
              const colorValue =
                blog.color === "primary"
                  ? "#00E5FF"
                  : blog.color === "secondary"
                  ? "#6C63FF"
                  : "#00FF9D"

              return (
                <motion.article
                  key={blog.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl border transition-all duration-300 group cursor-pointer flex flex-col"
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
                    <Icon size={24} style={{ color: colorValue }} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {blog.date}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

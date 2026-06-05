"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface BackgroundIllustrationProps {
  section: 
    | "hero"
    | "about"
    | "education"
    | "skills"
    | "experience"
    | "projects"
    | "certifications"
    | "achievements"
    | "blogs"
    | "contact"
    | "services"
  className?: string
}

const sectionConfig = {
  hero: { opacity: 0.08, illustrations: ["neural-network", "circuit-board"] },
  about: { opacity: 0.10, illustrations: ["robotic-arm", "gear-system"] },
  education: { opacity: 0.07, illustrations: ["blueprint", "cad-drawing"] },
  skills: { opacity: 0.10, illustrations: ["plc-logic", "sensor-architecture"] },
  experience: { opacity: 0.08, illustrations: ["smart-factory", "industry-line"] },
  projects: { opacity: 0.12, illustrations: ["cnc-blueprint", "industrial-robot"] },
  certifications: { opacity: 0.06, illustrations: ["holographic-cert"] },
  achievements: { opacity: 0.07, illustrations: ["innovation-award", "trophy"] },
  blogs: { opacity: 0.08, illustrations: ["ai-research", "robotics-concept"] },
  contact: { opacity: 0.05, illustrations: ["communication-network", "satellite-grid"] },
  services: { opacity: 0.08, illustrations: ["network-nodes", "data-flow"] },
}

// Neural Network SVG
function NeuralNetworkSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>
      {/* Neural nodes */}
      {[...Array(20)].map((_, i) => (
        <g key={i}>
          <circle
            cx={100 + (i % 5) * 150}
            cy={100 + Math.floor(i / 5) * 120}
            r={8 + Math.random() * 4}
            fill="url(#neuralGrad)"
            opacity={0.6}
          />
          {/* Connections */}
          {i < 15 && (
            <line
              x1={100 + (i % 5) * 150}
              y1={100 + Math.floor(i / 5) * 120}
              x2={100 + ((i + 1) % 5) * 150}
              y2={100 + (Math.floor(i / 5) + 1) * 120}
              stroke="url(#neuralGrad)"
              strokeWidth="1"
              opacity={0.3}
            />
          )}
        </g>
      ))}
      {/* Data flow particles */}
      {[...Array(30)].map((_, i) => (
        <circle
          key={`particle-${i}`}
          cx={Math.random() * 800}
          cy={Math.random() * 600}
          r={2}
          fill="#00E5FF"
          opacity={0.4}
        />
      ))}
    </svg>
  )
}

// Circuit Board SVG
function CircuitBoardSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#00FF9D" />
        </linearGradient>
      </defs>
      {/* Circuit traces */}
      {[...Array(15)].map((_, i) => (
        <path
          key={i}
          d={`M ${50 + i * 50} 0 L ${50 + i * 50} ${200 + Math.random() * 200} L ${100 + i * 50} ${200 + Math.random() * 200} L ${100 + i * 50} 600`}
          stroke="url(#circuitGrad)"
          strokeWidth="2"
          fill="none"
          opacity={0.3}
        />
      ))}
      {/* IC chips */}
      {[...Array(6)].map((_, i) => (
        <rect
          key={`chip-${i}`}
          x={100 + (i % 3) * 250}
          y={150 + Math.floor(i / 3) * 250}
          width={60}
          height={40}
          rx={4}
          fill="none"
          stroke="url(#circuitGrad)"
          strokeWidth="2"
          opacity={0.4}
        />
      ))}
      {/* Connection points */}
      {[...Array(40)].map((_, i) => (
        <circle
          key={`point-${i}`}
          cx={Math.random() * 800}
          cy={Math.random() * 600}
          r={3}
          fill="#00E5FF"
          opacity={0.5}
        />
      ))}
    </svg>
  )
}

// Robotic Arm Blueprint SVG
function RoboticArmSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>
      {/* Base */}
      <ellipse cx="400" cy="500" rx="80" ry="20" stroke="url(#armGrad)" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Arm segments */}
      <line x1="400" y1="480" x2="400" y2="380" stroke="url(#armGrad)" strokeWidth="4" opacity="0.4" />
      <circle cx="400" cy="380" r="15" stroke="url(#armGrad)" strokeWidth="2" fill="none" opacity="0.5" />
      <line x1="400" y1="365" x2="320" y2="280" stroke="url(#armGrad)" strokeWidth="4" opacity="0.4" />
      <circle cx="320" cy="280" r="12" stroke="url(#armGrad)" strokeWidth="2" fill="none" opacity="0.5" />
      <line x1="320" y1="268" x2="280" y2="180" stroke="url(#armGrad)" strokeWidth="3" opacity="0.4" />
      <circle cx="280" cy="180" r="10" stroke="url(#armGrad)" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Gripper */}
      <line x1="270" y1="170" x2="250" y2="140" stroke="url(#armGrad)" strokeWidth="2" opacity="0.4" />
      <line x1="290" y1="170" x2="310" y2="140" stroke="url(#armGrad)" strokeWidth="2" opacity="0.4" />
      {/* Blueprint grid */}
      {[...Array(20)].map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 30} x2="800" y2={i * 30} stroke="#6C63FF" strokeWidth="0.5" opacity="0.1" />
      ))}
      {[...Array(27)].map((_, i) => (
        <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="600" stroke="#6C63FF" strokeWidth="0.5" opacity="0.1" />
      ))}
    </svg>
  )
}

// Gear System SVG
function GearSystemSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#00FF9D" />
        </linearGradient>
      </defs>
      {/* Large gear */}
      <g transform="translate(200, 300)">
        <circle r="80" fill="none" stroke="url(#gearGrad)" strokeWidth="2" opacity="0.4" />
        <circle r="60" fill="none" stroke="url(#gearGrad)" strokeWidth="1" opacity="0.3" />
        <circle r="15" fill="none" stroke="url(#gearGrad)" strokeWidth="2" opacity="0.5" />
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x="-8"
            y="-95"
            width="16"
            height="20"
            rx="2"
            fill="none"
            stroke="url(#gearGrad)"
            strokeWidth="1.5"
            opacity="0.4"
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>
      {/* Medium gear */}
      <g transform="translate(350, 200)">
        <circle r="50" fill="none" stroke="url(#gearGrad)" strokeWidth="2" opacity="0.4" />
        <circle r="35" fill="none" stroke="url(#gearGrad)" strokeWidth="1" opacity="0.3" />
        <circle r="10" fill="none" stroke="url(#gearGrad)" strokeWidth="2" opacity="0.5" />
        {[...Array(10)].map((_, i) => (
          <rect
            key={i}
            x="-6"
            y="-62"
            width="12"
            height="15"
            rx="2"
            fill="none"
            stroke="url(#gearGrad)"
            strokeWidth="1.5"
            opacity="0.4"
            transform={`rotate(${i * 36})`}
          />
        ))}
      </g>
      {/* Small gear */}
      <g transform="translate(550, 350)">
        <circle r="35" fill="none" stroke="url(#gearGrad)" strokeWidth="2" opacity="0.4" />
        <circle r="25" fill="none" stroke="url(#gearGrad)" strokeWidth="1" opacity="0.3" />
        <circle r="8" fill="none" stroke="url(#gearGrad)" strokeWidth="2" opacity="0.5" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="-5"
            y="-45"
            width="10"
            height="12"
            rx="2"
            fill="none"
            stroke="url(#gearGrad)"
            strokeWidth="1.5"
            opacity="0.4"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>
    </svg>
  )
}

// Blueprint/CAD SVG
function BlueprintSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[...Array(25)].map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 25} x2="800" y2={i * 25} stroke="#6C63FF" strokeWidth="0.5" opacity="0.15" />
      ))}
      {[...Array(33)].map((_, i) => (
        <line key={`v-${i}`} x1={i * 25} y1="0" x2={i * 25} y2="600" stroke="#6C63FF" strokeWidth="0.5" opacity="0.15" />
      ))}
      {/* Technical drawing elements */}
      <rect x="150" y="150" width="200" height="150" fill="none" stroke="url(#blueprintGrad)" strokeWidth="2" opacity="0.4" />
      <line x1="150" y1="150" x2="250" y2="100" stroke="url(#blueprintGrad)" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
      <line x1="350" y1="150" x2="450" y2="100" stroke="url(#blueprintGrad)" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
      <rect x="250" y="100" width="200" height="150" fill="none" stroke="url(#blueprintGrad)" strokeWidth="1" opacity="0.3" />
      {/* Dimensions */}
      <line x1="150" y1="320" x2="350" y2="320" stroke="url(#blueprintGrad)" strokeWidth="1" opacity="0.4" />
      <line x1="150" y1="315" x2="150" y2="325" stroke="url(#blueprintGrad)" strokeWidth="1" opacity="0.4" />
      <line x1="350" y1="315" x2="350" y2="325" stroke="url(#blueprintGrad)" strokeWidth="1" opacity="0.4" />
      {/* Circles for technical detail */}
      <circle cx="550" cy="300" r="60" fill="none" stroke="url(#blueprintGrad)" strokeWidth="2" opacity="0.4" />
      <circle cx="550" cy="300" r="40" fill="none" stroke="url(#blueprintGrad)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
      <line x1="550" y1="230" x2="550" y2="370" stroke="url(#blueprintGrad)" strokeWidth="1" opacity="0.3" />
      <line x1="480" y1="300" x2="620" y2="300" stroke="url(#blueprintGrad)" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

// PLC Ladder Logic SVG
function PLCLogicSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="plcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF9D" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      {/* Power rails */}
      <line x1="50" y1="50" x2="50" y2="550" stroke="url(#plcGrad)" strokeWidth="3" opacity="0.5" />
      <line x1="750" y1="50" x2="750" y2="550" stroke="url(#plcGrad)" strokeWidth="3" opacity="0.5" />
      {/* Rungs */}
      {[...Array(5)].map((_, i) => (
        <g key={i}>
          <line x1="50" y1={100 + i * 100} x2="750" y2={100 + i * 100} stroke="url(#plcGrad)" strokeWidth="1" opacity="0.3" />
          {/* Contacts */}
          <g transform={`translate(${150 + Math.random() * 50}, ${100 + i * 100})`}>
            <line x1="-15" y1="-10" x2="-15" y2="10" stroke="url(#plcGrad)" strokeWidth="2" opacity="0.5" />
            <line x1="15" y1="-10" x2="15" y2="10" stroke="url(#plcGrad)" strokeWidth="2" opacity="0.5" />
          </g>
          {/* Coils */}
          <g transform={`translate(${600 + Math.random() * 50}, ${100 + i * 100})`}>
            <circle r="15" fill="none" stroke="url(#plcGrad)" strokeWidth="2" opacity="0.5" />
          </g>
        </g>
      ))}
      {/* Function blocks */}
      <rect x="300" y="180" width="80" height="40" rx="4" fill="none" stroke="url(#plcGrad)" strokeWidth="2" opacity="0.4" />
      <rect x="400" y="380" width="80" height="40" rx="4" fill="none" stroke="url(#plcGrad)" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}

// Smart Factory SVG
function SmartFactorySVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="factoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>
      {/* Factory building */}
      <rect x="100" y="250" width="250" height="200" fill="none" stroke="url(#factoryGrad)" strokeWidth="2" opacity="0.4" />
      <polygon points="100,250 225,150 350,250" fill="none" stroke="url(#factoryGrad)" strokeWidth="2" opacity="0.4" />
      {/* Chimney */}
      <rect x="280" y="100" width="40" height="150" fill="none" stroke="url(#factoryGrad)" strokeWidth="2" opacity="0.3" />
      {/* Windows */}
      {[...Array(6)].map((_, i) => (
        <rect
          key={i}
          x={120 + (i % 3) * 70}
          y={280 + Math.floor(i / 3) * 70}
          width="50"
          height="50"
          fill="none"
          stroke="url(#factoryGrad)"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}
      {/* Conveyor belt */}
      <line x1="400" y1="400" x2="700" y2="400" stroke="url(#factoryGrad)" strokeWidth="3" opacity="0.4" />
      <line x1="400" y1="420" x2="700" y2="420" stroke="url(#factoryGrad)" strokeWidth="3" opacity="0.4" />
      {/* Products on belt */}
      {[...Array(4)].map((_, i) => (
        <rect
          key={i}
          x={420 + i * 70}
          y={385}
          width="30"
          height="30"
          rx="4"
          fill="none"
          stroke="url(#factoryGrad)"
          strokeWidth="2"
          opacity="0.5"
        />
      ))}
      {/* Data connections */}
      {[...Array(8)].map((_, i) => (
        <circle
          key={i}
          cx={500 + Math.random() * 200}
          cy={150 + Math.random() * 150}
          r={3}
          fill="#00E5FF"
          opacity="0.5"
        />
      ))}
      {/* Wireless signals */}
      <path d="M 550 200 Q 570 180 590 200" fill="none" stroke="url(#factoryGrad)" strokeWidth="1" opacity="0.4" />
      <path d="M 540 210 Q 570 175 600 210" fill="none" stroke="url(#factoryGrad)" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

// CNC Blueprint SVG
function CNCBlueprintSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cncGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#00FF9D" />
        </linearGradient>
      </defs>
      {/* CNC Machine outline */}
      <rect x="150" y="150" width="300" height="250" rx="10" fill="none" stroke="url(#cncGrad)" strokeWidth="2" opacity="0.4" />
      {/* Spindle */}
      <rect x="280" y="100" width="40" height="80" fill="none" stroke="url(#cncGrad)" strokeWidth="2" opacity="0.5" />
      <line x1="300" y1="180" x2="300" y2="280" stroke="url(#cncGrad)" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
      {/* Work table */}
      <rect x="180" y="320" width="240" height="60" fill="none" stroke="url(#cncGrad)" strokeWidth="2" opacity="0.4" />
      {/* Axis labels */}
      <line x1="500" y1="300" x2="600" y2="300" stroke="url(#cncGrad)" strokeWidth="2" opacity="0.5" />
      <polygon points="600,295 610,300 600,305" fill="url(#cncGrad)" opacity="0.5" />
      <line x1="550" y1="350" x2="550" y2="250" stroke="url(#cncGrad)" strokeWidth="2" opacity="0.5" />
      <polygon points="545,250 550,240 555,250" fill="url(#cncGrad)" opacity="0.5" />
      {/* Tool path preview */}
      <path d="M 200 280 L 250 250 L 350 250 L 400 280 L 350 310 L 250 310 Z" fill="none" stroke="url(#cncGrad)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
      {/* Control panel */}
      <rect x="550" y="150" width="150" height="100" rx="5" fill="none" stroke="url(#cncGrad)" strokeWidth="2" opacity="0.4" />
      {[...Array(6)].map((_, i) => (
        <circle key={i} cx={580 + (i % 3) * 40} cy={180 + Math.floor(i / 3) * 40} r={8} fill="none" stroke="url(#cncGrad)" strokeWidth="1" opacity="0.4" />
      ))}
    </svg>
  )
}

// Holographic Certificate SVG
function HolographicCertSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="50%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#00FF9D" />
        </linearGradient>
      </defs>
      {/* Certificate frames */}
      {[...Array(3)].map((_, i) => (
        <g key={i} transform={`translate(${150 + i * 200}, ${200 + (i % 2) * 100})`}>
          <rect x="-60" y="-80" width="120" height="160" rx="5" fill="none" stroke="url(#holoGrad)" strokeWidth="2" opacity="0.4" />
          <rect x="-50" y="-70" width="100" height="140" fill="none" stroke="url(#holoGrad)" strokeWidth="1" opacity="0.2" />
          {/* Holographic seal */}
          <circle cy="40" r="20" fill="none" stroke="url(#holoGrad)" strokeWidth="2" opacity="0.5" />
          <polygon points="0,25 5,35 15,35 7,42 10,52 0,46 -10,52 -7,42 -15,35 -5,35" fill="url(#holoGrad)" opacity="0.3" />
          {/* Text lines */}
          <line x1="-35" y1="-50" x2="35" y2="-50" stroke="url(#holoGrad)" strokeWidth="1" opacity="0.3" />
          <line x1="-30" y1="-35" x2="30" y2="-35" stroke="url(#holoGrad)" strokeWidth="1" opacity="0.2" />
          <line x1="-25" y1="-20" x2="25" y2="-20" stroke="url(#holoGrad)" strokeWidth="1" opacity="0.2" />
        </g>
      ))}
      {/* Holographic particles */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 800}
          cy={Math.random() * 600}
          r={2}
          fill="url(#holoGrad)"
          opacity={0.3 + Math.random() * 0.3}
        />
      ))}
    </svg>
  )
}

// Innovation Award SVG
function InnovationAwardSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="awardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      {/* Trophy */}
      <g transform="translate(400, 300)">
        {/* Cup */}
        <path d="M -50 -80 Q -60 -40 -40 0 L 40 0 Q 60 -40 50 -80 Z" fill="none" stroke="url(#awardGrad)" strokeWidth="2" opacity="0.5" />
        {/* Handles */}
        <path d="M -50 -60 Q -80 -60 -80 -30 Q -80 0 -50 0" fill="none" stroke="url(#awardGrad)" strokeWidth="2" opacity="0.4" />
        <path d="M 50 -60 Q 80 -60 80 -30 Q 80 0 50 0" fill="none" stroke="url(#awardGrad)" strokeWidth="2" opacity="0.4" />
        {/* Base */}
        <rect x="-30" y="0" width="60" height="20" fill="none" stroke="url(#awardGrad)" strokeWidth="2" opacity="0.4" />
        <rect x="-40" y="20" width="80" height="15" fill="none" stroke="url(#awardGrad)" strokeWidth="2" opacity="0.4" />
        <rect x="-50" y="35" width="100" height="20" fill="none" stroke="url(#awardGrad)" strokeWidth="2" opacity="0.4" />
        {/* Star */}
        <polygon points="0,-60 8,-40 30,-40 12,-25 20,-5 0,-18 -20,-5 -12,-25 -30,-40 -8,-40" fill="url(#awardGrad)" opacity="0.3" />
      </g>
      {/* Decorative stars */}
      {[...Array(10)].map((_, i) => (
        <polygon
          key={i}
          points="0,-8 2,-3 8,-3 3,1 5,8 0,4 -5,8 -3,1 -8,-3 -2,-3"
          fill="url(#awardGrad)"
          opacity={0.2 + Math.random() * 0.2}
          transform={`translate(${100 + Math.random() * 600}, ${100 + Math.random() * 400})`}
        />
      ))}
    </svg>
  )
}

// AI Research Network SVG
function AIResearchSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>
      {/* Brain outline */}
      <ellipse cx="400" cy="250" rx="120" ry="100" fill="none" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.4" />
      <path d="M 320 250 Q 350 200 400 200 Q 450 200 480 250" fill="none" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.3" />
      <path d="M 320 250 Q 350 300 400 300 Q 450 300 480 250" fill="none" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.3" />
      {/* Neural connections */}
      {[...Array(15)].map((_, i) => (
        <g key={i}>
          <circle
            cx={320 + Math.random() * 160}
            cy={180 + Math.random() * 140}
            r={4}
            fill="url(#aiGrad)"
            opacity="0.5"
          />
        </g>
      ))}
      {/* Data streams */}
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1={100 + i * 50}
          y1="450"
          x2={350 + Math.random() * 100}
          y2={300 + Math.random() * 50}
          stroke="url(#aiGrad)"
          strokeWidth="1"
          opacity="0.2"
        />
      ))}
      {/* Research documents */}
      <rect x="550" y="150" width="80" height="100" rx="5" fill="none" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.3" />
      <line x1="560" y1="170" x2="620" y2="170" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.3" />
      <line x1="560" y1="190" x2="610" y2="190" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.2" />
      <line x1="560" y1="210" x2="615" y2="210" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.2" />
    </svg>
  )
}

// Communication Network SVG
function CommunicationNetworkSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#00FF9D" />
        </linearGradient>
      </defs>
      {/* Central hub */}
      <circle cx="400" cy="300" r="40" fill="none" stroke="url(#commGrad)" strokeWidth="2" opacity="0.5" />
      <circle cx="400" cy="300" r="20" fill="url(#commGrad)" opacity="0.3" />
      {/* Satellite nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x = 400 + Math.cos(angle) * 180
        const y = 300 + Math.sin(angle) * 150
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="20" fill="none" stroke="url(#commGrad)" strokeWidth="2" opacity="0.4" />
            <line x1="400" y1="300" x2={x} y2={y} stroke="url(#commGrad)" strokeWidth="1" opacity="0.2" />
            {/* Signal waves */}
            <circle cx={x} cy={y} r="30" fill="none" stroke="url(#commGrad)" strokeWidth="1" opacity="0.2" />
            <circle cx={x} cy={y} r="40" fill="none" stroke="url(#commGrad)" strokeWidth="1" opacity="0.1" />
          </g>
        )
      })}
      {/* Data particles */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 800}
          cy={Math.random() * 600}
          r={2}
          fill="#00E5FF"
          opacity="0.4"
        />
      ))}
    </svg>
  )
}

// Network Nodes SVG (for services)
function NetworkNodesSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      {/* Network grid */}
      {[...Array(5)].map((_, row) =>
        [...Array(6)].map((_, col) => (
          <g key={`${row}-${col}`}>
            <circle
              cx={100 + col * 120}
              cy={100 + row * 100}
              r={8}
              fill="url(#nodeGrad)"
              opacity="0.4"
            />
            {col < 5 && (
              <line
                x1={108 + col * 120}
                y1={100 + row * 100}
                x2={192 + col * 120}
                y2={100 + row * 100}
                stroke="url(#nodeGrad)"
                strokeWidth="1"
                opacity="0.2"
              />
            )}
            {row < 4 && (
              <line
                x1={100 + col * 120}
                y1={108 + row * 100}
                x2={100 + col * 120}
                y2={192 + row * 100}
                stroke="url(#nodeGrad)"
                strokeWidth="1"
                opacity="0.2"
              />
            )}
          </g>
        ))
      )}
    </svg>
  )
}

const illustrationComponents: Record<string, React.ComponentType> = {
  "neural-network": NeuralNetworkSVG,
  "circuit-board": CircuitBoardSVG,
  "robotic-arm": RoboticArmSVG,
  "gear-system": GearSystemSVG,
  "blueprint": BlueprintSVG,
  "cad-drawing": BlueprintSVG,
  "plc-logic": PLCLogicSVG,
  "sensor-architecture": PLCLogicSVG,
  "smart-factory": SmartFactorySVG,
  "industry-line": SmartFactorySVG,
  "cnc-blueprint": CNCBlueprintSVG,
  "industrial-robot": RoboticArmSVG,
  "holographic-cert": HolographicCertSVG,
  "innovation-award": InnovationAwardSVG,
  "trophy": InnovationAwardSVG,
  "ai-research": AIResearchSVG,
  "robotics-concept": RoboticArmSVG,
  "communication-network": CommunicationNetworkSVG,
  "satellite-grid": CommunicationNetworkSVG,
  "network-nodes": NetworkNodesSVG,
  "data-flow": NetworkNodesSVG,
}

export function BackgroundIllustration({ section, className = "" }: BackgroundIllustrationProps) {
  const [mounted, setMounted] = useState(false)
  const config = sectionConfig[section]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {config.illustrations.map((illustration, index) => {
        const IllustrationComponent = illustrationComponents[illustration]
        if (!IllustrationComponent) return null

        return (
          <motion.div
            key={illustration}
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: config.opacity,
              mixBlendMode: "overlay",
            }}
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2,
            }}
          >
            <IllustrationComponent />
          </motion.div>
        )
      })}
    </div>
  )
}

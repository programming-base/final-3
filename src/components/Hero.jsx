import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const starsRef = useRef(null)

  // Generate stars on mount
  useEffect(() => {
    if (!starsRef.current) return

    const generateStars = () => {
      const stars = []
      // Small stars
      for (let i = 0; i < 100; i++) {
        stars.push({
          size: 'small',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
        })
      }
      // Medium stars
      for (let i = 0; i < 50; i++) {
        stars.push({
          size: 'medium',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
        })
      }
      // Large stars
      for (let i = 0; i < 20; i++) {
        stars.push({
          size: 'large',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
        })
      }
      return stars
    }

    const stars = generateStars()
    stars.forEach((star) => {
      const starDiv = document.createElement('div')
      starDiv.className = `star star-${star.size}`
      starDiv.style.top = star.top
      starDiv.style.left = star.left
      starDiv.style.animationDelay = star.delay
      starsRef.current.appendChild(starDiv)
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-navy via-midnight-blue to-deep-navy"
    >
      {/* Starfield Background */}
      <div ref={starsRef} className="stars"></div>

      {/* Cosmic Fog Layers */}
      <div className="cosmic-fog"></div>
      <div
        className="cosmic-fog"
        style={{ animationDelay: '-10s', opacity: 0.5 }}
      ></div>

      {/* Background Planets */}
      <div
        className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-30 blur-md"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.4), rgba(0, 31, 84, 0.2))',
          animation: 'float-drift 15s ease-in-out infinite',
        }}
      ></div>

      {/* Main Hero Planet */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Planet Core */}
          <div className="planet-sphere w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"></div>

          {/* Orbit Rings */}
          <div className="orbit-ring w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div
            className="orbit-ring w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ animationDuration: '120s' }}
          ></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-soft-white text-glow-blue"
        >
          Explore the Infinite Universe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 text-soft-white/90 max-w-3xl mx-auto"
        >
          Join us on an interstellar journey beyond the known cosmos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-lg inline-block"
          >
            Begin Your Mission
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-soft-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

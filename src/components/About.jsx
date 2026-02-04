import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="relative section-padding bg-gradient-to-b from-deep-navy to-midnight-blue"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8 text-soft-white text-glow-blue"
        >
          About the Mission
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-soft-white/90 text-lg leading-relaxed"
        >
          <p>
            Embark on a journey beyond the boundaries of imagination. Our
            interstellar event brings together visionaries, explorers, and
            dreamers from across the cosmos.
          </p>

          <p>
            This is not just an event—it's a launchpad for innovation, a
            meeting ground for cosmic collaboration, and a celebration of human
            potential reaching for the stars.
          </p>

          <p>
            Join us as we chart new territories, push the limits of what's
            possible, and create connections that span galaxies.
          </p>
        </motion.div>
      </div>

      {/* Decorative cosmic element */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(65, 105, 225, 0.4), transparent)',
        }}
      ></div>
    </section>
  )
}

export default About

import React from 'react'
import { motion } from 'framer-motion'

const Register = () => {
  return (
    <section
      id="register"
      className="relative section-padding bg-gradient-to-b from-midnight-blue via-deep-navy to-midnight-blue overflow-hidden"
    >
      {/* Dramatic background effects */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(65, 105, 225, 0.3), transparent 70%)',
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-soft-white text-glow-blue">
            Join the Cosmic Journey
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-soft-white/90 max-w-2xl mx-auto">
            Your mission awaits. Take the first step into the infinite
            possibilities of the universe.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="#"
              className="btn-primary text-xl px-12 py-4 glow-blue"
              onClick={(e) => {
                e.preventDefault()
                alert('Registration form would open here!')
              }}
            >
              Register Now
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 border-2 border-royal-blue text-royal-blue rounded-full font-semibold hover:bg-royal-blue/10 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-glass p-6 rounded-lg border border-gold-accent/30 inline-block"
          >
            <p className="text-gold-accent font-semibold text-lg mb-2">
              ⏰ Limited Spots Available
            </p>
            <p className="text-soft-white/80">
              Registration closes February 28, 2026
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative planets */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(65, 105, 225, 0.6), rgba(0, 31, 84, 0.2))',
          filter: 'blur(8px)',
        }}
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.5), rgba(0, 31, 84, 0.1))',
          filter: 'blur(10px)',
        }}
      ></motion.div>
    </section>
  )
}

export default Register

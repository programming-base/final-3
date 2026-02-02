import React from 'react'
import { motion } from 'framer-motion'

const Eligibility = () => {
  const eligibilityCriteria = [
    {
      title: 'Open to All',
      description: 'Students, professionals, and enthusiasts welcome',
      icon: '🌍',
    },
    {
      title: 'Team Size',
      description: '1-4 members per team',
      icon: '👥',
    },
    {
      title: 'Age Requirement',
      description: '18 years or older',
      icon: '🎂',
    },
    {
      title: 'Prerequisites',
      description: 'Passion for innovation and space exploration',
      icon: '🚀',
    },
  ]

  return (
    <section
      id="eligibility"
      className="relative section-padding bg-gradient-to-b from-midnight-blue to-deep-navy"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-soft-white text-glow-blue"
        >
          Who Can Join the Mission?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-glass p-6 rounded-lg border border-royal-blue/20 text-center hover:border-royal-blue/40 transition-all duration-300 hover:glow-blue"
            >
              <div className="text-5xl mb-4">{criteria.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-royal-blue">
                {criteria.title}
              </h3>
              <p className="text-soft-white/80">{criteria.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="backdrop-glass p-8 rounded-lg border border-royal-blue/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-gold-accent text-center">
            What You'll Need
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-soft-white/90">
            <div className="text-center">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Your Device</h4>
              <p className="text-sm">
                Laptop or computer with internet connection
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">Enthusiasm</h4>
              <p className="text-sm">
                Willingness to learn and collaborate
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-semibold mb-2">Creativity</h4>
              <p className="text-sm">
                Fresh ideas and innovative thinking
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Eligibility

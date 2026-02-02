import React from 'react'
import { motion } from 'framer-motion'

const EventInfo = () => {
  const eventDetails = [
    {
      icon: '📅',
      title: 'Date',
      info: 'March 15-17, 2026',
    },
    {
      icon: '⏰',
      title: 'Time',
      info: '9:00 AM - 6:00 PM EST',
    },
    {
      icon: '🌐',
      title: 'Location',
      info: 'Virtual & Hybrid',
    },
    {
      icon: '🎯',
      title: 'Format',
      info: 'Workshops, Challenges & Networking',
    },
  ]

  return (
    <section
      id="event"
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
          Event Information
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-glass p-6 rounded-lg border border-royal-blue/20 hover:border-royal-blue/40 transition-all duration-300 hover:glow-blue"
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-royal-blue">
                {detail.title}
              </h3>
              <p className="text-soft-white/80">{detail.info}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 backdrop-glass p-8 rounded-lg border border-royal-blue/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-royal-blue">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-soft-white/90">
            <div>
              <h4 className="font-semibold mb-2">🚀 Innovation Challenges</h4>
              <p className="text-sm">
                Tackle real-world problems with cutting-edge solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎓 Expert Workshops</h4>
              <p className="text-sm">
                Learn from industry leaders and space pioneers
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🤝 Networking</h4>
              <p className="text-sm">
                Connect with visionaries from around the globe
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏆 Competitions</h4>
              <p className="text-sm">
                Showcase your skills and win amazing prizes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventInfo

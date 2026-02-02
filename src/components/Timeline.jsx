import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timelineEvents = [
    {
      phase: 'Registration Opens',
      date: 'February 1, 2026',
      description: 'Secure your spot in the cosmic journey',
    },
    {
      phase: 'Team Formation',
      date: 'February 15, 2026',
      description: 'Assemble your crew for the mission',
    },
    {
      phase: 'Main Event',
      date: 'March 15-17, 2026',
      description: 'Three days of innovation and exploration',
    },
    {
      phase: 'Judging & Results',
      date: 'March 20, 2026',
      description: 'Winners announced across the cosmos',
    },
  ]

  return (
    <section
      id="timeline"
      className="relative section-padding bg-gradient-to-b from-deep-navy to-midnight-blue"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-soft-white text-glow-blue"
        >
          Mission Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-blue via-gold-accent to-royal-blue hidden md:block"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 backdrop-glass p-6 rounded-lg border border-royal-blue/20 hover:border-royal-blue/40 transition-all duration-300 hover:glow-blue">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gold-accent">
                    {event.phase}
                  </h3>
                  <p className="text-royal-blue font-semibold mb-2">
                    {event.date}
                  </p>
                  <p className="text-soft-white/80">{event.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-royal-blue to-gold-accent glow-blue flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-soft-white"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

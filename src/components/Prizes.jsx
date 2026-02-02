import React from 'react'
import { motion } from 'framer-motion'

const Prizes = () => {
  const prizes = [
    {
      place: '1st Place',
      amount: '$5,000',
      perks: [
        'Cash Prize',
        'Mentorship Program',
        'Featured Recognition',
        'Exclusive Swag Pack',
      ],
      highlight: true,
    },
    {
      place: '2nd Place',
      amount: '$3,000',
      perks: [
        'Cash Prize',
        'Online Course Access',
        'Certificate of Achievement',
        'Swag Pack',
      ],
      highlight: false,
    },
    {
      place: '3rd Place',
      amount: '$1,500',
      perks: [
        'Cash Prize',
        'Workshop Access',
        'Certificate of Achievement',
        'Digital Goodies',
      ],
      highlight: false,
    },
  ]

  return (
    <section
      id="prizes"
      className="relative section-padding bg-gradient-to-b from-deep-navy to-midnight-blue"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-soft-white text-glow-blue"
        >
          Stellar Rewards
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`backdrop-glass p-8 rounded-lg border transition-all duration-300 ${
                prize.highlight
                  ? 'border-gold-accent glow-gold md:scale-110 md:-mt-4'
                  : 'border-royal-blue/20 hover:border-royal-blue/40 hover:glow-blue'
              }`}
            >
              {prize.highlight && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-gold-accent to-yellow-500 text-deep-navy px-4 py-1 rounded-full text-sm font-bold">
                    TOP PRIZE
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    prize.highlight ? 'text-gold-accent' : 'text-royal-blue'
                  }`}
                >
                  {prize.place}
                </h3>
                <p
                  className={`text-4xl md:text-5xl font-bold ${
                    prize.highlight ? 'text-glow-gold' : ''
                  }`}
                >
                  {prize.amount}
                </p>
              </div>

              <div className="space-y-3">
                {prize.perks.map((perk, perkIndex) => (
                  <div
                    key={perkIndex}
                    className="flex items-center text-soft-white/80"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-royal-blue flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center backdrop-glass p-6 rounded-lg border border-royal-blue/20"
        >
          <p className="text-soft-white/80 text-lg">
            <span className="text-gold-accent font-semibold">
              Special Recognition:
            </span>{' '}
            All participants receive a certificate of participation and access
            to exclusive community resources.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 215, 0, 0.4), transparent)',
        }}
      ></div>
    </section>
  )
}

export default Prizes

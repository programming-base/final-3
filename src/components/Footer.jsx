import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: 'GH' },
    { name: 'Discord', href: '#', icon: 'DC' },
  ]

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQ', href: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-midnight-blue to-deep-navy border-t border-royal-blue/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-soft-white text-glow-blue mb-3">
              INTERSTELLAR
            </h3>
            <p className="text-soft-white/70 text-sm">
              Exploring the infinite possibilities of the cosmos, one mission at
              a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-royal-blue mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-white/70 hover:text-royal-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-royal-blue mb-3">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full backdrop-glass border border-royal-blue/20 flex items-center justify-center text-soft-white hover:border-royal-blue hover:text-royal-blue transition-all duration-300 hover:glow-blue"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-royal-blue/10 text-center">
          <p className="text-soft-white/60 text-sm">
            © {currentYear} Interstellar. All rights reserved across the cosmos.
          </p>
          <p className="text-soft-white/40 text-xs mt-2">
            Built with passion for space exploration 🚀✨
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

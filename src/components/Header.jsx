import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20)
  })

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Venues', href: '#venues' },
    { name: 'Experiences', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#C9A84C]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col cursor-pointer"
            >
              <span className="font-display text-2xl md:text-3xl text-[#F7F4EF] tracking-widest leading-none">
                ELITE
              </span>
              <span className="font-body text-[10px] md:text-[11px] text-[#C9A84C] tracking-[0.5em] mt-0.5">
                EVENT CENTER
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative font-body text-sm text-[#F7F4EF]/80 hover:text-[#F7F4EF] transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:block"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center overflow-hidden px-8 py-3 border border-[#C9A84C] text-[#F7F4EF] font-body text-sm tracking-wide"
              >
                <span className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative group-hover:text-[#0A0A0B] transition-colors duration-500">
                  Book a Tour
                </span>
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#F7F4EF]"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-px bg-[#F7F4EF] transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-3 left-0 w-6 h-px bg-[#F7F4EF] transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-px bg-[#F7F4EF] transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-40 bg-[#0A0A0B] lg:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              initial={false}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: isMenuOpen ? index * 0.1 : 0 }}
              className="font-display text-4xl text-[#F7F4EF] hover:text-[#C9A84C] transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            initial={false}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: isMenuOpen ? 0.5 : 0 }}
            className="mt-8 px-12 py-4 border border-[#C9A84C] text-[#F7F4EF] font-body text-sm tracking-wide hover:bg-[#C9A84C] hover:text-[#0A0A0B] transition-all duration-300"
          >
            Book a Tour
          </motion.a>
        </div>
      </motion.div>
    </>
  )
}

export default Header
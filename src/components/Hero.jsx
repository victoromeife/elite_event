import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2498&q=80"
          alt="Luxury wedding reception hall at golden hour"
          className="h-full w-full object-cover object-center"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/40 via-[#0A0A0B]/60 to-[#0A0A0B]"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="mx-auto max-w-7xl">
          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-[#F7F4EF] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Where Lagos Celebrates
            <br />
            <span className="relative">
              in Style
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -bottom-2 left-0 h-0.5 bg-[#C9A84C]/80 sm:-bottom-4"
              ></motion.span>
            </span>
          </motion.h1>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto font-body text-lg text-[#F7F4EF]/90 sm:text-xl md:text-2xl leading-relaxed"
          >
            The stage for your most important moments. Crafted for the extraordinary, set in the heart of Ikorodu.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-[#C9A84C]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="font-body text-sm tracking-wide">
              58B Lagos Express Road, Ikorodu, Lagos, Nigeria
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center overflow-hidden px-10 py-4 bg-[#C9A84C] text-[#0A0A0B] font-body text-sm tracking-widest uppercase"
            >
              <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-500">
                Book Your Date
              </span>
              <span className="absolute inset-0 bg-[#A68A5B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            </a>
            <a
              href="#venues"
              className="group relative inline-flex items-center overflow-hidden px-10 py-4 border border-[#F7F4EF]/40 text-[#F7F4EF] font-body text-sm tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="absolute inset-0 bg-[#F7F4EF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative group-hover:text-[#0A0A0B] transition-colors duration-500">
                Explore the Spaces
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[#F7F4EF]/60">
            Scroll
          </span>
          <div className="relative h-12 w-px bg-[#F7F4EF]/20">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 h-4 w-px bg-[#C9A84C]"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
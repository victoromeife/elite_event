import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  return (
    <section id="experience" className="relative py-32 lg:py-48 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent)]"></div>

      <div className="mx-auto max-w-7xl">
        <motion.div ref={ref} className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <span className="font-body text-sm uppercase tracking-[0.5em] text-[#C9A84C]">The Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]"
            >
              Where Every Detail
              <br />
              Speaks of Luxury
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '4rem' } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 h-px bg-[#C9A84C]"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 font-body text-lg text-[#8A857C] leading-relaxed max-w-lg"
            >
              Elite Event Center is a multi-purpose venue designed for those who refuse to compromise. From lavish weddings and landmark birthdays, to corporate galas and naming ceremonies, we transform your vision into an unforgettable celebration.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 font-body text-lg text-[#8A857C] leading-relaxed max-w-lg"
            >
              Our commitment to impeccable service and attention to detail sets a new standard for event excellence on Lagos mainland.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10"
            >
              <a href="#venues" className="group relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 border border-[#C9A84C] text-[#C9A84C] font-body text-sm tracking-[0.3em] uppercase">
                <span className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative group-hover:text-[#0A0A0B] transition-colors duration-500">Discover Our Spaces</span>
                <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </motion.svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden">
              <div className="absolute -inset-2 border border-[#C9A84C]/30 pointer-events-none"></div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.1.0&auto=format&fit=crop&w=2669&q=80"
                alt="Elegant banquet hall setup"
                className="h-[500px] w-full object-cover lg:h-[650px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

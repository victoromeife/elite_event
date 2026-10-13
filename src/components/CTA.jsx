import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-36 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80" 
          alt="Luxury event" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0B]/95 via-[#0A0A0B]/85 to-[#0A0A0B]/95"></div>
        {/* Gold radial accent */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.08), transparent 40%), radial-gradient(ellipse at 70% 80%, rgba(201,168,76,0.06), transparent 35%)'
          }}
        />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="mx-auto max-w-5xl text-center relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-[#C9A84C]">Begin Your Story</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            Ready to Create
            <br />
            Something Extraordinary?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 font-body text-lg lg:text-xl text-[#8A857C] max-w-2xl mx-auto">
            Schedule a private tour of Elite Event Center and let us bring your vision to life in the heart of Ikorodu, Lagos.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10">
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center overflow-hidden px-10 py-4 bg-[#C9A84C] text-[#0A0A0B] font-body text-sm tracking-widest uppercase shadow-[0_15px_40px_rgba(201,168,76,0.3)]">
              <span className="relative z-10 group-hover:tracking-[0.25em] transition-all duration-400">Schedule a Private Tour</span>
              <span className="absolute inset-0 bg-[#A68A5B] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"></span>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 font-body text-sm text-[#8A857C]">
            <a href="tel:+2348000000000" className="hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-.442a1.125 1.125 0 01-1.445-1.445L9.517 4.84a3.292 3.292 0 01-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
              </svg>
              +234 (0) 800 000 0000
            </a>
            <span className="hidden sm:block text-[#C9A84C]">•</span>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
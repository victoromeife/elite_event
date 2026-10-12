import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-48 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80" alt="Luxury event" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/90 to-[#0A0A0B]"></div>
      </div>

      <div className="mx-auto max-w-5xl text-center relative">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-150px' }} transition={{ duration: 1.2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <span className="font-body text-sm uppercase tracking-[0.5em] text-[#C9A84C]">Begin Your Story</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            Ready to Create
            <br />
            Something Extraordinary?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4 }} className="mt-8 font-body text-lg lg:text-xl text-[#8A857C] max-w-2xl mx-auto">
            Schedule a private tour of Elite Event Center and let us bring your vision to life in the heart of Ikorodu, Lagos.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-12">
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center overflow-hidden px-12 py-5 bg-[#C9A84C] text-[#0A0A0B] font-body text-sm tracking-widest uppercase">
              <span className="relative z-10 group-hover:tracking-[0.25em] transition-all duration-500">Schedule a Private Tour</span>
              <span className="absolute inset-0 bg-[#A68A5B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 font-body text-sm text-[#8A857C]">
            <a href="tel:+2348000000000" className="hover:text-[#C9A84C] transition-colors duration-300">+234 (0) 800 000 0000</a>
            <span className="hidden sm:block text-[#C9A84C]">•</span>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors duration-300">Chat on WhatsApp</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

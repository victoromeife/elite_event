import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Differentiators = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const items = [
    { number: '01', title: 'Tailored Experiences', description: 'Every event is uniquely curated to reflect your vision, style, and aspirations.' },
    { number: '02', title: 'Prime Location', description: 'Strategically located at 58B Lagos Express Road, Ikorodu, with easy access across Lagos mainland.' },
    { number: '03', title: 'Unrivaled Ambience', description: 'Sophisticated lighting, elegant interiors, and a canvas designed for world-class celebrations.' },
    { number: '04', title: 'Flawless Execution', description: 'Our experienced team ensures seamless coordination from enquiry to the final moment.' }
  ]

  return (
    <section className="relative py-24 lg:py-36 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0B]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.05),transparent)] opacity-20"></div>

      <div className="mx-auto max-w-7xl relative">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-[#C9A84C]">Why Elite</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            The Elite Difference
          </motion.h2>
          <motion.div initial={{ width: 0, left: '50%' }} animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 h-px bg-[#C9A84C] relative"></motion.div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/60 via-[#C9A84C]/20 to-transparent"></div>
          <div className="space-y-16 lg:space-y-20">
            {items.map((item, index) => (
              <motion.div key={item.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: index * 0.08 }} className={`relative grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-[#C9A84C]"></div>
                    <div className="absolute inset-0 h-4 w-4 rounded-full bg-[#C9A84C] animate-ping opacity-40"></div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <div className="relative">
                    <span className="font-display text-6xl lg:text-8xl text-[#C9A84C]/10 absolute -top-8 -left-2 lg:-left-6">{item.number}</span>
                    <div className="relative pt-10">
                      <h3 className="font-display text-3xl lg:text-4xl text-[#F7F4EF] mb-3">{item.title}</h3>
                      <p className="font-body text-lg text-[#8A857C] leading-relaxed max-w-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Differentiators
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Differentiators = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const items = [
    { number: '01', title: 'Tailored Experiences', description: 'Every event is uniquely curated to reflect your vision, style, and aspirations.' },
    { number: '02', title: 'Prime Location', description: 'Strategically located at 58B Lagos Express Road, Ikorodu, with easy access across Lagos mainland.' },
    { number: '03', title: 'Unrivaled Ambience', description: 'Sophisticated lighting, elegant interiors, and a canvas designed for world-class celebrations.' },
    { number: '04', title: 'Flawless Execution', description: 'Our experienced team ensures seamless coordination from enquiry to the final moment.' }
  ]

  return (
    <section className="relative py-32 lg:py-48 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0B]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A84C]/5 to-transparent opacity-20"></div>

      <div className="mx-auto max-w-7xl relative">
        <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2 }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <span className="font-body text-sm uppercase tracking-[0.5em] text-[#C9A84C]">Why Elite</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, delay: 0.3 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            The Elite Difference
          </motion.h2>
          <motion.div initial={{ width: 0, left: '50%' }} animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}} transition={{ duration: 1, delay: 0.5 }} className="mt-8 h-px bg-[#C9A84C] relative"></motion.div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/60 via-[#C9A84C]/20 to-transparent"></div>
          <div className="space-y-20 lg:space-y-32">
            {items.map((item, index) => (
              <motion.div key={item.number} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-150px' }} transition={{ duration: 1.2, delay: index * 0.15 }} className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-[#C9A84C]"></div>
                    <div className="absolute inset-0 h-4 w-4 rounded-full bg-[#C9A84C] animate-ping opacity-40"></div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <div className="relative">
                    <span className="font-display text-7xl lg:text-9xl text-[#C9A84C]/10 absolute -top-10 -left-2 lg:-left-8">{item.number}</span>
                    <div className="relative pt-12">
                      <h3 className="font-display text-3xl lg:text-4xl text-[#F7F4EF] mb-4">{item.title}</h3>
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

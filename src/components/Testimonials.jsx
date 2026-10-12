import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const testimonials = [
    { quote: 'Elite Event Center gave us a fairytale wedding. Every detail was perfection, and our guests are still talking about it.', name: 'Amara & Kunle', event: 'Wedding Reception' },
    { quote: 'The venue speaks luxury from the moment you step in. Our corporate gala exceeded every expectation.', name: 'Tosin Adeyemi', event: 'Corporate Gala' },
    { quote: 'Professional, warm, and incredibly attentive. Truly the gold standard for events in Ikorodu.', name: 'Funmi Okoye', event: '50th Birthday' }
  ]

  return (
    <section className="relative py-32 lg:py-48 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2 }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <span className="font-body text-sm uppercase tracking-[0.5em] text-[#C9A84C]">Social Proof</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, delay: 0.3 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            Words from Our Clients
          </motion.h2>
          <motion.div initial={{ width: 0, left: '50%' }} animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}} transition={{ duration: 1, delay: 0.5 }} className="mt-8 h-px bg-[#C9A84C] relative"></motion.div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-150px' }} transition={{ duration: 1.2, delay: index * 0.2 }} className="group relative border border-[#C9A84C]/20 bg-[#0A0A0B]/50 p-8 lg:p-10 hover:border-[#C9A84C]/60 transition-colors duration-700">
              <div className="absolute top-6 right-6 font-display text-6xl text-[#C9A84C]/10">"</div>
              <div className="relative">
                <blockquote className="font-display text-xl lg:text-2xl text-[#F7F4EF] leading-relaxed italic">{testimonial.quote}</blockquote>
                <div className="mt-8">
                  <div className="font-body text-sm uppercase tracking-[0.3em] text-[#C9A84C]">{testimonial.name}</div>
                  <div className="mt-2 font-body text-sm text-[#8A857C]">{testimonial.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

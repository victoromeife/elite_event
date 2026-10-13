import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    { quote: 'Elite Event Center gave us a fairytale wedding. Every detail was perfection, and our guests are still talking about it.', name: 'Amara & Kunle', event: 'Wedding Reception' },
    { quote: 'The venue speaks luxury from the moment you step in. Our corporate gala exceeded every expectation.', name: 'Tosin Adeyemi', event: 'Corporate Gala' },
    { quote: 'Professional, warm, and incredibly attentive. Truly the gold standard for events in Ikorodu.', name: 'Funmi Okoye', event: '50th Birthday' },
    { quote: 'From planning to execution, the team made our anniversary celebration effortless and beautiful.', name: 'Dr. & Mrs. Adebayo', event: '25th Anniversary' },
    { quote: 'The Crystal Room was perfect for our product launch. Elegant, modern, and the staff anticipated every need.', name: 'Chinedu Okafor', event: 'Product Launch' },
    { quote: "Our daughter's sweet 16 was magical. The Terrace at sunset with string lights — unforgettable.", name: 'The Ogunlesi Family', event: 'Sweet 16' },
  ]

  const duplicated = [...testimonials, ...testimonials]

  return (
    <section className="relative py-24 lg:py-36 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-[#C9A84C]">Social Proof</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            Words from Our Clients
          </motion.h2>
          <motion.div initial={{ width: 0, left: '50%' }} animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 h-px bg-[#C9A84C] relative"></motion.div>
        </motion.div>

        {/* Dual Marquee with CSS animations */}
        <div className="relative overflow-hidden">
          {/* Top fade mask */}
          <div className="absolute inset-0 top-0 z-10 h-1/2 bg-gradient-to-b from-[#0A0A0B] to-transparent pointer-events-none"></div>
          {/* Bottom fade mask */}
          <div className="absolute inset-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none"></div>

          <div className="flex space-x-8 lg:space-x-16">
            {/* Marquee 1 - Left to Right */}
            <Marquee 
              items={duplicated} 
              direction="normal" 
              duration={30}
              className="flex-shrink-0"
            />
            
            {/* Marquee 2 - Right to Left */}
            <Marquee 
              items={duplicated} 
              direction="reverse" 
              duration={35}
              className="flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const Marquee = ({ items, direction, duration, className }) => {
  const trackRef = useRef(null)

  return (
    <div className={className} style={{ width: '50%' }}>
      <div 
        ref={trackRef}
        className="flex gap-8"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          willChange: 'transform'
        }}
      >
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="group relative border border-[#C9A84C]/20 bg-[#0A0A0B]/50 p-8 lg:p-10 min-w-[350px] max-w-[420px] hover:border-[#C9A84C]/60 transition-all duration-500"
          >
            <div className="absolute top-4 right-4 font-display text-5xl text-[#C9A84C]/10">"</div>
            <div className="relative">
              <blockquote className="font-display text-lg lg:text-xl text-[#F7F4EF] leading-relaxed italic">{testimonial.quote}</blockquote>
              <div className="mt-6">
                <div className="font-body text-sm uppercase tracking-[0.25em] text-[#C9A84C]">{testimonial.name}</div>
                <div className="mt-1 font-body text-sm text-[#8A857C]">{testimonial.event}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-normal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default Testimonials
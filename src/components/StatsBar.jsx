import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const StatsBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const stats = [
    { value: 500, suffix: '+', label: 'Guests Capacity (Main Hall)' },
    { value: 5, suffix: '+', label: 'Years of Hosting' },
    { value: 200, suffix: '+', label: 'Events Hosted' },
    { value: 95, suffix: '%', label: 'Client Satisfaction' }
  ]

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div className="relative overflow-hidden border border-[#C9A84C]/30 bg-[#0A0A0B]/95 backdrop-blur-md">
          {/* Subtle gold glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.05),transparent)]"></div>

          <div className="relative grid grid-cols-2 gap-6 p-6 md:grid-cols-4 md:gap-10 md:p-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="font-display text-3xl md:text-4xl lg:text-5xl text-[#F7F4EF] leading-none">
                  <AnimatedNumber value={stat.value} isInView={isInView} />
                  <span className="text-[#C9A84C]">{stat.suffix}</span>
                </div>
                <div className="mt-3 font-body text-xs md:text-sm uppercase tracking-[0.25em] text-[#8A857C] leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const AnimatedNumber = ({ value, isInView }) => {
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 150 })
  const ref = useRef(null)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
    return unsubscribe
  }, [springValue])

  return <span ref={ref}>0</span>
}

export default StatsBar
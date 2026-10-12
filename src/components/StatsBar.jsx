import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const StatsBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: 2000, suffix: '+', label: 'Guests Capacity' },
    { value: 12, suffix: '+', label: 'Years of Hosting' },
    { value: 850, suffix: '+', label: 'Events Hosted' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' }
  ]

  return (
    <section className="relative -mt-16 z-20 px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div className="relative overflow-hidden border border-[#C9A84C]/30 bg-[#0A0A0B]/95 backdrop-blur-md">
          {/* Subtle gold glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A84C]/5 to-transparent"></div>

          <div className="relative grid grid-cols-2 gap-8 p-8 md:grid-cols-4 md:gap-12 md:p-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F7F4EF] leading-none">
                  <AnimatedNumber value={stat.value} isInView={isInView} />
                  <span className="text-[#C9A84C]">{stat.suffix}</span>
                </div>
                <div className="mt-4 font-body text-xs md:text-sm uppercase tracking-[0.3em] text-[#8A857C]">
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
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 200 })
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
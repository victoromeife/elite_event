import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Venues = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const venues = [
    {
      number: '01',
      title: 'The Grand Hall',
      capacity: 'Up to 500 guests',
      description: 'Our flagship space — grand, versatile, and breathtaking. High ceilings, premium finishes, and state-of-the-art lighting make it ideal for lavish weddings and landmark celebrations.',
      features: ['Column-free span', 'Motorized rigging points', 'Integrated AV infrastructure', 'Adjacent prep kitchen'],
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80'
    },
    {
      number: '02',
      title: 'The Crystal Room',
      capacity: 'Up to 200 guests',
      description: 'Intimate luxury for receptions, corporate dinners, and private gatherings. Refined details and warm ambience create an exclusive atmosphere.',
      features: ['Floor-to-ceiling windows', 'Crystal chandelier centerpiece', 'Climate-controlled wine wall', 'Private entrance'],
      image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80'
    },
    {
      number: '03',
      title: 'The Terrace',
      capacity: 'Up to 150 guests',
      description: 'Open-air sophistication for cocktails, receptions, and sunset ceremonies. Overlooks landscaped grounds with string lighting and weather protection.',
      features: ['Retractable canopy system', 'Built-in fire features', 'Landscaped garden views', 'Dedicated bar station'],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.1.0&auto=format&fit=crop&w=2498&q=80'
    }
  ]

  return (
    <section id="venues" className="relative py-24 lg:py-36 px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.03),transparent)]"></div>

      <div className="mx-auto max-w-7xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="font-body text-sm uppercase tracking-[0.4em] text-[#C9A84C]">Our Venues</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]"
          >
            Spaces Crafted
            <br />
            to Impress
          </motion.h2>
          <motion.div
            initial={{ width: 0, left: '50%' }}
            animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 h-px bg-[#C9A84C] relative"
          ></motion.div>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {venues.map((venue, index) => (
            <VenueCard 
              key={venue.title} 
              venue={venue} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const VenueCard = ({ venue, index, isInView }) => {
  const isReverse = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative group"
    >
      <div className={`grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Column */}
        <div className="relative overflow-hidden lg:rounded-2xl">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            src={venue.image}
            alt={venue.title}
            className="h-[400px] lg:h-[550px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Number badge on image */}
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center gap-2 bg-[#0A0A0B]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C9A84C]/30">
              <span className="font-display text-2xl text-[#C9A84C]">{venue.number}</span>
            </div>
          </div>

          {/* Feature highlights on hover */}
          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <div className="flex flex-wrap gap-2">
              {venue.features.slice(0, 3).map((feature, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#0A0A0B]/90 backdrop-blur-sm border border-[#C9A84C]/30 text-[#F7F4EF] font-body text-xs uppercase tracking-[0.1em] rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-[#0A0A0B] border border-[#C9A84C]/20 lg:border-l-0 lg:rounded-r-2xl">
          <div className="max-w-xl">
            {/* Number + capacity */}
            <motion.div
              initial={{ opacity: 0, x: isReverse ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="font-display text-5xl lg:text-6xl text-[#C9A84C]/10">{venue.number}</span>
              <div>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{venue.capacity}</span>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display text-3xl lg:text-4xl text-[#F7F4EF] mb-4"
            >
              {venue.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-lg text-[#8A857C] leading-relaxed mb-8"
            >
              {venue.description}
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8 space-y-3"
            >
              {venue.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-[#F7F4EF]/80 font-body text-sm">
                  <div className="h-2 w-2 rounded-full bg-[#C9A84C] shrink-0"></div>
                  {feature}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] font-body text-sm tracking-[0.2em] uppercase"
              >
                <span className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"></span>
                <span className="relative group-hover:text-[#0A0A0B] transition-colors duration-400">View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Venues
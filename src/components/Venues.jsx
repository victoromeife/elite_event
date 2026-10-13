import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Venues = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const venues = [
    {
      title: 'The Grand Hall',
      capacity: 'Up to 2,000 guests',
      description: 'Our flagship space - grand, versatile, and breathtaking.',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80'
    },
    {
      title: 'The Crystal Room',
      capacity: 'Up to 500 guests',
      description: 'Intimate luxury for receptions and corporate dinners.',
      image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80'
    },
    {
      title: 'The Terrace',
      capacity: 'Up to 300 guests',
      description: 'Open-air sophistication for cocktails and receptions.',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80'
    }
  ]

  return (
    <section id="venues" className="relative py-32 lg:py-48 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <span className="font-body text-sm uppercase tracking-[0.5em] text-[#C9A84C]">Our Venues</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, delay: 0.3 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            Spaces Crafted to Impress
          </motion.h2>
          <motion.div initial={{ width: 0, left: '50%' }} animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}} transition={{ duration: 1, delay: 0.5 }} className="mt-8 h-px bg-[#C9A84C] relative"></motion.div>
        </motion.div>

        <div className="space-y-12 lg:space-y-20">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ duration: 1.4, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative ${index % 2 === 1 ? 'lg:ml-auto lg:w-[90%]' : 'lg:w-[90%]'}`}
            >
              <div className="relative overflow-hidden">
                <motion.img whileHover={{ scale: 1.03 }} transition={{ duration: 1.2 }} src={venue.image} alt={venue.title} className="h-[400px] w-full object-cover lg:h-[600px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div>
                      <h3 className="font-display text-3xl lg:text-5xl text-[#F7F4EF] mb-2">{venue.title}</h3>
                      <p className="font-body text-lg text-[#C9A84C] mb-2">{venue.capacity}</p>
                      <p className="font-body text-[#F7F4EF]/80 max-w-md">{venue.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Venues

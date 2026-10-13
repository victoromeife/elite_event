import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.1.0&auto=format&fit=crop&w=2669&q=80', alt: 'Wedding', label: 'Weddings', span: 'lg:col-span-2 lg:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.1.0&auto=format&fit=crop&w=2669&q=80', alt: 'Gala', label: 'Corporate Galas', span: 'lg:col-span-1' },
    { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.1.0&auto=format&fit=crop&w=2565&q=80', alt: 'Birthday', label: 'Celebrations', span: 'lg:col-span-1' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80', alt: 'Stage', label: 'Special Events', span: 'lg:col-span-1' },
    { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80', alt: 'Dance', label: 'Memorable Moments', span: 'lg:col-span-1' },
    { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.1.0&auto=format&fit=crop&w=2670&q=80', alt: 'Table', label: 'Exquisite Details', span: 'lg:col-span-2' },
    // Two additional images to fill the grid gaps
    { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.1.0&auto=format&fit=crop&w=2498&q=80', alt: 'Reception', label: 'Receptions', span: 'lg:col-span-1' },
    { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.1.0&auto=format&fit=crop&w=2669&q=80', alt: 'Banquet', label: 'Banquets', span: 'lg:col-span-1' },
  ]

  return (
    <section id="gallery" className="relative py-24 lg:py-36 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-[#C9A84C]">Gallery</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F7F4EF]">
            Signature Moments
          </motion.h2>
          <motion.div initial={{ width: 0, left: '50%' }} animate={isInView ? { width: '4rem', left: '50%', x: '-50%' } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 h-px bg-[#C9A84C] relative"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[250px] lg:auto-rows-[300px] gap-4">
          {images.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: index * 0.05 }} className={`group relative overflow-hidden ${image.span}`}>
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6">
                <span className="font-display text-2xl text-[#F7F4EF]">{image.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
          <a href="#" className="group relative inline-flex items-center overflow-hidden px-10 py-3 border border-[#C9A84C] text-[#F7F4EF] font-body text-sm tracking-widest uppercase">
            <span className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"></span>
            <span className="relative group-hover:text-[#0A0A0B] transition-colors duration-400">View Full Gallery</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
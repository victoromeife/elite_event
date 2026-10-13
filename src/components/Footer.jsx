import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative border-t border-[#C9A84C]/20 bg-[#0A0A0B] px-6 lg:px-8">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"></div>
      
      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top center, rgba(201,168,76,0.04), transparent 60%)'
        }}
      />

      <div className="mx-auto max-w-7xl relative">
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 xl:grid-cols-4 xl:gap-12">
            {/* Brand Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="xl:col-span-2 lg:col-span-2">
              <div className="flex flex-col mb-6">
                <span className="font-display text-3xl lg:text-4xl text-[#F7F4EF] tracking-widest leading-none">ELITE</span>
                <span className="font-body text-[10px] lg:text-[11px] text-[#C9A84C] tracking-[0.5em] mt-0.5">EVENT CENTER</span>
              </div>
              <p className="font-body text-[#8A857C] leading-relaxed max-w-md lg:max-w-xl">
                A luxury multi-purpose event venue where Lagos celebrates in style. Crafted for weddings, corporate events, and life's most important moments.
              </p>
              {/* Social links */}
              <div className="mt-8 flex items-center gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative text-[#8A857C] hover:text-[#C9A84C] transition-colors duration-300" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5a2.25 2.25 0 00-2.25-2.25h-1.44a27.03 27.03 0 00-1.71 0H9.6a27.03 27.03 0 00-1.71 0H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h1.44a27.03 27.03 0 001.71 0h2.7a27.03 27.03 0 001.71 0h2.7a27.03 27.03 0 001.71 0H21A2.25 2.25 0 0021 16.5V7.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75h.008z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative text-[#8A857C] hover:text-[#C9A84C] transition-colors duration-300" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="group relative text-[#8A857C] hover:text-[#C9A84C] transition-colors duration-300" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Contact Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="font-display text-xl text-[#F7F4EF] mb-6">Contact</h3>
              <ul className="space-y-4 font-body text-[#8A857C]">
                <li className="leading-relaxed flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 shrink-0 mt-0.5 text-[#C9A84C]/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <div className="font-body text-sm text-[#F7F4EF]">58B Lagos Express Road</div>
                    <div className="font-body text-sm">Ikorodu, Lagos, Nigeria</div>
                  </div>
                </li>
                <li>
                  <a href="tel:+2348000000000" className="flex items-center gap-3 hover:text-[#C9A84C] transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 shrink-0 text-[#C9A84C]/60">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-.442a1.125 1.125 0 01-1.445-1.445L9.517 4.84a3.292 3.292 0 01-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                    </svg>
                    <span>+234 (0) 800 000 0000</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@eliteeventcenter.com" className="flex items-center gap-3 hover:text-[#C9A84C] transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 shrink-0 text-[#C9A84C]/60">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>info@eliteeventcenter.com</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
              <h3 className="font-display text-xl text-[#F7F4EF] mb-6">Quick Links</h3>
              <ul className="space-y-3 font-body text-[#8A857C]">
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2">Our Venues</a></li>
                <li><a href="#experience" className="hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2">The Experience</a></li>
                <li><a href="#gallery" className="hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2">Gallery</a></li>
                <li><a href="#contact" className="hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2">Book a Tour</a></li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A84C]/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-body text-sm text-[#8A857C]">© {currentYear} Elite Event Center. All rights reserved.</div>
            <div className="font-body text-sm text-[#8A857C]">Designed for excellence</div>
            <div className="flex items-center gap-6 font-body text-xs text-[#8A857C]/60">
              <a href="#" className="hover:text-[#C9A84C] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[#C9A84C] transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
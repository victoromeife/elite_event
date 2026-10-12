import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#C9A84C]/20 bg-[#0A0A0B] px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-2">
              <div className="flex flex-col mb-6">
                <span className="font-display text-3xl text-[#F7F4EF] tracking-widest leading-none">ELITE</span>
                <span className="font-body text-[10px] text-[#C9A84C] tracking-[0.5em] mt-0.5">EVENT CENTER</span>
              </div>
              <p className="font-body text-[#8A857C] leading-relaxed max-w-md">
                A luxury multi-purpose event venue where Lagos celebrates in style. Crafted for weddings, corporate events, and life's most important moments.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <h3 className="font-display text-xl text-[#F7F4EF] mb-6">Contact</h3>
              <ul className="space-y-4 font-body text-[#8A857C]">
                <li className="leading-relaxed">58B Lagos Express Road,<br />Ikorodu, Lagos, Nigeria</li>
                <li><a href="tel:+2348000000000" className="hover:text-[#C9A84C] transition-colors duration-300">+234 (0) 800 000 0000</a></li>
                <li><a href="mailto:info@eliteeventcenter.com" className="hover:text-[#C9A84C] transition-colors duration-300">info@eliteeventcenter.com</a></li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h3 className="font-display text-xl text-[#F7F4EF] mb-6">Connect</h3>
              <ul className="space-y-4 font-body text-[#8A857C]">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors duration-300">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors duration-300">Facebook</a></li>
                <li><a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors duration-300">WhatsApp</a></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-[#C9A84C]/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-body text-sm text-[#8A857C]">© {currentYear} Elite Event Center. All rights reserved.</div>
            <div className="font-body text-sm text-[#8A857C]">Designed for excellence</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

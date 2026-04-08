import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden px-6'>
      <div className='absolute top-20 right-[15%] w-72 h-72 rounded-full bg-accent/10 blur-3xl' />
      <div className='absolute bottom-32 left-[10%] w-96 h-96 rounded-full bg-primary/5 blur-3xl' />

      <div className='max-w-4xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className='inline-block px-4 py-1.5 rounded-full border border-border text-sm font-body text-muted-foreground mb-8 tracking-wide'>
            Developer → Product Manager
          </span>
        </motion.div>

        <motion.h1
          className='text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] mb-6'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Building products
          <br />
          <span className='text-gradient'>with purpose</span>
        </motion.h1>

        <motion.p
          className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A developer who speaks the language of code and customers. Bridging
          engineering depth with product thinking to ship what matters.
        </motion.p>

        <motion.a
          href='#about'
          className='inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className='w-4 h-4' />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}

export default HeroSection

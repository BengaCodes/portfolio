import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-6'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          className='grid md:grid-cols-5 gap-12 items-start'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='md:col-span-2'>
            <h2 className='text-sm font-display font-semibold uppercase tracking-widest text-accent mb-2'>
              About
            </h2>
            <h3 className='text-3xl sm:text-4xl font-display font-bold leading-tight'>
              From shipping code
              <br />
              to shaping strategy
            </h3>
          </div>

          <div className='md:col-span-3 space-y-5 text-muted-foreground font-body leading-relaxed text-base'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

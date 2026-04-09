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
              to shaping outcomes
            </h3>
          </div>

          <div className='md:col-span-3 space-y-5 text-muted-foreground font-body leading-relaxed text-base'>
            <p>
              I’m a people‑first builder who thrives on strong relationships and
              collaborative problem‑solving. Over the years, I’ve built
              meaningful connections across teams and disciplines — the kind
              that make work better, faster, and more enjoyable. Bringing people
              together is something I naturally gravitate toward, and it’s
              shaped the way I approach both engineering and product thinking.
            </p>
            <p>
              My curiosity for the{' '}
              <span className=' font-bold italic'>why</span> behind products
              started long before I wrote my first line of code. Working in
              wealth management, I saw firsthand how deeply people value
              products that genuinely serve them. Clients lit up when they felt
              understood and supported — and that experience stayed with me. It
              taught me that great products aren’t just built; they’re cared
              for, shaped, and stewarded with intention.
            </p>
            <p>
              That’s what drives my transition into product management: the
              desire to play a bigger role in the life of a product, not just
              how it’s built. I want to influence the decisions, the strategy,
              and the outcomes that ultimately make a difference to users.
            </p>
            <p>
              Outside of work, I’m a big sports person. I love playing and
              watching golf, and I’m a lifelong Arsenal fan. A ruptured Achilles
              in 2022 put an end to my football‑playing days, but it didn’t dull
              my love for the game. I still play most racquet sports and stay
              active wherever I can — competition and movement have always been
              part of who I am.
            </p>
            <p>
              At my core, I’m someone who cares about people, loves solving
              problems, and enjoys building things that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

import { originColors, originLabels, skills } from '@/lib/data'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  return (
    <section className='py-24 px-6 bg-card/50'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <h2 className='text-sm font-display font-semibold uppercase tracking-widest text-accent mb-2'>
            Skills
          </h2>
          <h3 className='text-3xl sm:text-4xl font-display font-bold'>
            Where both worlds meet
          </h3>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className='group p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-colors duration-300'
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300'>
                  <skill.icon className='w-5 h-5' />
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${originColors[skill.origin]}`}
                >
                  {originLabels[skill.origin]}
                </span>
              </div>
              <h4 className='font-display font-semibold text-lg mb-2'>
                {skill.title}
              </h4>
              <p className='text-sm text-muted-foreground font-body leading-relaxed'>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

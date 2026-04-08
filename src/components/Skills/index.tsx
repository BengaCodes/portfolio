import { motion } from 'framer-motion'
import {
  Code2,
  Users,
  BarChart3,
  Lightbulb,
  GitBranch,
  MessageSquare
} from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Technical Architecture',
    description:
      'System design, API strategy, and understanding trade-offs at scale.',
    origin: 'dev'
  },
  {
    icon: Users,
    title: 'User Research',
    description:
      'Customer interviews, journey mapping, and turning insights into requirements.',
    origin: 'pm'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Analytics, A/B testing frameworks, and metrics that matter.',
    origin: 'both'
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description:
      'Roadmap prioritization, OKRs, and aligning teams around outcomes.',
    origin: 'pm'
  },
  {
    icon: GitBranch,
    title: 'Agile Delivery',
    description:
      'Sprint planning, backlog grooming, and shipping with velocity.',
    origin: 'both'
  },
  {
    icon: MessageSquare,
    title: 'Cross-Functional Comms',
    description:
      'Translating between engineering, design, and business stakeholders.',
    origin: 'both'
  }
]

const originColors: Record<string, string> = {
  dev: 'bg-primary/10 text-primary',
  pm: 'bg-accent/10 text-accent',
  both: 'bg-muted text-muted-foreground'
}

const originLabels: Record<string, string> = {
  dev: 'Engineering',
  pm: 'Product',
  both: 'Hybrid'
}

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

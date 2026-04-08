import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    tag: 'Product Strategy',
    title: 'Internal Tool Redesign',
    description:
      'Led the discovery and redesign of a legacy internal tool, reducing support ticket volume by 40% through user research and iterative prototyping.',
    metrics: ['40% fewer tickets', '12-week delivery', '3 teams aligned']
  },
  {
    tag: 'Technical Leadership',
    title: 'API Platform Migration',
    description:
      'Owned the technical roadmap for migrating a monolithic API to microservices, coordinating across 4 engineering squads while maintaining 99.9% uptime.',
    metrics: ['99.9% uptime', '4 squads', 'Zero-downtime migration']
  },
  {
    tag: '0 → 1 Product',
    title: 'Customer Feedback Loop',
    description:
      'Built and launched an in-app feedback system from scratch — from user interviews to shipping the MVP — that increased NPS response rates by 3x.',
    metrics: ['3x NPS responses', 'MVP in 6 weeks', 'Adopted company-wide']
  }
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-6'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <h2 className='text-sm font-display font-semibold uppercase tracking-widest text-accent mb-2'>
            Projects
          </h2>
          <h3 className='text-3xl sm:text-4xl font-display font-bold'>
            Case studies & impact
          </h3>
        </motion.div>

        <div className='space-y-8'>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className='group relative p-8 rounded-2xl border border-border bg-background hover:border-accent/30 transition-all duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className='flex flex-col md:flex-row md:items-start gap-6'>
                <div className='flex-1'>
                  <span className='inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3'>
                    {project.tag}
                  </span>
                  <h4 className='text-xl sm:text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors'>
                    {project.title}
                  </h4>
                  <p className='text-muted-foreground font-body leading-relaxed mb-5'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className='px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border text-foreground'
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='shrink-0 self-start opacity-0 group-hover:opacity-100 transition-opacity'>
                  <ExternalLink className='w-5 h-5 text-accent' />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

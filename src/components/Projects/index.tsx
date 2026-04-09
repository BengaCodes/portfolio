import { projects } from '@/lib/data'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

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
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='w-5 h-5 text-accent' />
                  </a>
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

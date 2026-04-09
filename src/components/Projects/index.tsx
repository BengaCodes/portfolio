import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    tag: '0 → 1 Product',
    title: 'Uber Round‑Up',
    description:
      'Designed a micro‑savings feature that lets riders automatically round up fares and build Uber Credit. Increased retention by turning passive behaviour into habitual engagement.',
    metrics: [
      'Passive micro‑savings',
      'Higher repeat rides',
      'Reduced payment friction'
    ],
    link: 'https://docs.google.com/document/d/1wJM5vIllYXZ8P7c3ALz4OjmH6o-x_fLDZKcG_6bu1qs/edit?tab=t.0'
  },
  {
    tag: 'COMMUNITY IMPACT',
    title: 'Sporting Kids Website',
    description:
      'Designed and built a modern website for a community sports organisation, helping parents discover programmes and increasing sign‑ups for kids’ activities.',
    metrics: [
      'Clearer programme discovery',
      ' Higher trust from parents/teachers',
      'Increased trust + credibility for the business'
    ],
    link: 'https://www.sportingkids.co.uk'
  },
  {
    tag: 'CONSUMER PRODUCT STRATEGY',
    title: 'TikTok Study Mode',
    description:
      'Created a focused revision experience for GCSE/A‑Level students with exam‑aligned playlists, verified educators, and a distraction‑free feed — transforming scrolling into purposeful micro‑learning.',
    metrics: [
      'Safer learning environment',
      ' Higher trust from parents/teachers',
      'Reduced doom‑scrolling'
    ],
    link: 'https://docs.google.com/document/d/1cN_xdfk0AtfRxN5n8juCsFwiUItYKg2qhebPvatNqEU/edit?tab=t.0#heading=h.z6ne0og04bp5'
  },
  {
    tag: '0 → 1 PRODUCT',
    title: 'Budgy App',
    description:
      'Building a lightweight budgeting tool focused on clarity, habit‑building, and reducing financial stress for young professionals.',
    metrics: [
      ' Simple, intuitive UI',
      ' Behaviour‑driven design',
      'Built from real user pain points'
    ],
    link: '#'
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

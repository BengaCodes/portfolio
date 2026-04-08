import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const links = [
  { icon: Mail, label: 'Email', href: 'mailto:benga.olasebikan@gmail.com' },
  { icon: Phone, label: 'Telephone', href: 'tel:+447539529701' },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benga-olasebikan'
  },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/BengaCodes' }
]

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id='contact' className='py-24 px-6 bg-card/50'>
      <div className='max-w-3xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-sm font-display font-semibold uppercase tracking-widest text-accent mb-2'>
            Get in touch
          </h2>
          <h3 className='text-3xl sm:text-4xl font-display font-bold mb-4'>
            Let's build something great
          </h3>
          <p className='text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed'>
            I'm open to product management roles where technical depth is
            valued. Let's chat about how I can help your team ship better
            products.
          </p>

          <form
            action='https://formspree.io/f/xvowdwov'
            method='POST'
            className='text-left space-y-4 mb-10'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <Input
                placeholder='Your name'
                value={name}
                name='Name'
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className='rounded-xl border-border bg-background font-body'
              />
              <Input
                type='email'
                placeholder='Your email'
                value={email}
                name='Email'
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className='rounded-xl border-border bg-background font-body'
              />
            </div>
            <Textarea
              placeholder='Your message'
              value={message}
              name='Message'
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={5}
              className='rounded-xl border-border bg-background font-body resize-none'
            />
            <div className='flex justify-end'>
              <Button
                type='submit'
                className='rounded-xl font-display gap-2 cursor-pointer'
              >
                Send Message
                <Send className='w-4 h-4' />
              </Button>
            </div>
          </form>

          <div className='grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                className='inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-3 rounded-xl border border-border bg-background text-foreground font-display font-medium text-sm hover:border-accent hover:text-accent transition-colors duration-200'
              >
                <link.icon className='w-4 h-4' />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

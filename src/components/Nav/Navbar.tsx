import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50'>
      <div className='max-w-5xl mx-auto flex items-center justify-between h-16 px-6'>
        <a href='#' className='font-display font-bold text-lg tracking-tight'>
          Gbenga<span className='text-accent'>Olasebikan</span>
        </a>

        {/* Desktop */}
        <ul className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-sm font-body text-muted-foreground hover:text-foreground transition-colors'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className='md:hidden p-2 text-foreground'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
        </button>
      </div>

      {open && (
        <motion.div
          className='md:hidden bg-background border-b border-border px-6 pb-6'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <ul className='space-y-4 pt-2'>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='block text-sm font-body text-muted-foreground hover:text-foreground transition-colors'
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar

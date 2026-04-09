import {
  Code2,
  Users,
  BarChart3,
  Lightbulb,
  GitBranch,
  MessageSquare
} from 'lucide-react'

import { Mail, Phone } from 'lucide-react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const skills = [
  {
    icon: Code2,
    title: 'Frontend Architecture',
    description:
      'Modern React/TypeScript architecture, design systems, micro-frontend, performance optimisation, and scalable frontend patterns.',
    origin: 'dev'
  },
  {
    icon: Users,
    title: 'User Research',
    description:
      'Customer interviews, journey mapping, and turning real user behaviour into actionable product requirements.',
    origin: 'pm'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description:
      'Analytics, experimentation frameworks, and defining the metrics that matter for product impact.',
    origin: 'both'
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description:
      'Roadmaps, prioritisation, OKRs, and aligning teams around clear, outcome‑driven goals.',
    origin: 'pm'
  },
  {
    icon: GitBranch,
    title: 'Agile Delivery',
    description:
      'Sprint planning, backlog refinement, and shipping iteratively with cross‑functional teams.',
    origin: 'both'
  },
  {
    icon: MessageSquare,
    title: 'Cross-Functional Comms',
    description:
      'Translating between engineering, design, and business stakeholders to drive clarity and momentum.',
    origin: 'both'
  }
]

export const projects = [
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
    title: 'FinTraxx',
    description:
      'Building a lightweight budgeting tool focused on clarity, habit‑building, and reducing financial stress for young professionals.',
    metrics: [
      ' Simple, intuitive UI',
      ' Behaviour‑driven design',
      'Built from real user pain points'
    ],
    link: 'https://fintraxx.netlify.app/'
  }
]

export const links = [
  { icon: Mail, label: 'Email', href: 'mailto:benga.olasebikan@gmail.com' },
  { icon: Phone, label: 'Telephone', href: 'tel:+447539529701' },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benga-olasebikan'
  },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/BengaCodes' }
]

export const originColors: Record<string, string> = {
  dev: 'bg-primary/10 text-primary',
  pm: 'bg-accent/10 text-accent',
  both: 'bg-muted text-muted-foreground'
}

export const originLabels: Record<string, string> = {
  dev: 'Engineering',
  pm: 'Product',
  both: 'Hybrid'
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Services.css'

const itServices = [
  {
    icon: '⬡',
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise software built with modern tech stacks. From MVP to full-scale production.',
    highlights: ['Web & Mobile Apps', 'Enterprise Software', 'API Development', 'Legacy Modernization'],
    size: 'large',
    color: 'blue',
  },
  {
    icon: '☁',
    title: 'Cloud & DevOps',
    description: 'End-to-end cloud infrastructure, CI/CD pipelines, and DevOps automation on AWS, Azure, and GCP.',
    highlights: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Infrastructure as Code', 'Auto Scaling'],
    size: 'normal',
    color: 'teal',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security audits, compliance frameworks, and threat monitoring.',
    highlights: ['Security Audits', 'Compliance (ISO/SOC2)', 'Penetration Testing', '24/7 Monitoring'],
    size: 'normal',
    color: 'purple',
  },
  {
    icon: '◎',
    title: 'IT Consulting',
    description: 'Strategic technology advisory to align your IT investments with business outcomes and digital transformation.',
    highlights: ['Digital Transformation', 'Tech Stack Advisory', 'IT Roadmaps', 'Cost Optimization'],
    size: 'normal',
    color: 'blue',
  },
]

const bizServices = [
  {
    icon: '📊',
    title: 'Business Consulting',
    description: 'Strategic advisory to optimize operations, improve profitability, and accelerate sustainable growth.',
    highlights: ['Process Optimization', 'Growth Strategy', 'Market Entry', 'Business Restructuring'],
    size: 'large',
    color: 'purple',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns across SEO, paid media, social, and content that convert and scale.',
    highlights: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Performance Ads'],
    size: 'normal',
    color: 'blue',
  },
  {
    icon: '👥',
    title: 'HR & Staffing',
    description: 'End-to-end talent acquisition, HR systems, workforce planning, and people operations management.',
    highlights: ['Talent Acquisition', 'HR Systems', 'Payroll & Compliance', 'Workforce Planning'],
    size: 'normal',
    color: 'teal',
  },
  {
    icon: '🎓',
    title: 'Training & Development',
    description: 'Corporate training programs, skill workshops, and e-learning solutions for continuous team growth.',
    highlights: ['Corporate Training', 'E-learning Platforms', 'Leadership Programs', 'Certification Prep'],
    size: 'normal',
    color: 'purple',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className={`svc__card svc__card--${service.size} svc__card--${service.color}`}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate="show"
      whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.10)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="svc__card-top">
        <div className={`svc__icon svc__icon--${service.color}`}>{service.icon}</div>
        <div className="svc__num">{String(index + 1).padStart(2, '0')}</div>
      </div>
      <h3 className="svc__title">{service.title}</h3>
      <p className="svc__desc">{service.description}</p>
      <ul className="svc__list">
        {service.highlights.map((h) => (
          <li key={h}>
            <span className="svc__check">✓</span>
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  const [tab, setTab] = useState('it')
  const services = tab === 'it' ? itServices : bizServices

  return (
    <section id="services" className="services section section--alt">
      <div className="section__inner">
        <div className="services__header">
          <motion.div
            className="section__label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.div>
          <motion.h2
            className="section__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Solutions for <span className="text-accent">Every Industry</span>
          </motion.h2>
          <motion.p
            className="services__sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Whether you're a tech-first company or a traditional business, we have the
            expertise to deliver exactly what you need.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <motion.div
          className="services__tabs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className={`services__tab${tab === 'it' ? ' active' : ''}`}
            onClick={() => setTab('it')}
          >
            <span>⬡</span> IT Solutions
          </button>
          <button
            className={`services__tab${tab === 'biz' ? ' active' : ''}`}
            onClick={() => setTab('biz')}
          >
            <span>📊</span> Business Services
          </button>
        </motion.div>

        {/* Bento grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="services__bento"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

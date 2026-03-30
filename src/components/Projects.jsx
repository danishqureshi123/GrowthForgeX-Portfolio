import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'RetailEdge E-Commerce Platform',
    category: 'Web App',
    industry: 'Retail',
    year: '2024',
    description: 'Built a full-stack e-commerce platform for a regional retail chain with real-time inventory sync, multi-vendor support, and an AI-driven recommendation engine.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    accent: '#60a5fa',
    result: '3× increase in online revenue',
    icon: '🛍️',
  },
  {
    id: 2,
    title: 'MediCare Patient Portal',
    category: 'Web App',
    industry: 'Healthcare',
    year: '2024',
    description: 'Developed a secure patient management portal with appointment scheduling, lab results tracking, telemedicine integration, and HIPAA-compliant data handling.',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'WebRTC'],
    gradient: 'linear-gradient(135deg, #1a0a3a 0%, #7c3aed 100%)',
    accent: '#a78bfa',
    result: '40% reduction in admin workload',
    icon: '🏥',
  },
  {
    id: 3,
    title: 'FleetTrack Logistics Dashboard',
    category: 'Enterprise',
    industry: 'Transport',
    year: '2023',
    description: 'Delivered an enterprise-grade fleet management system with GPS tracking, driver performance analytics, route optimization, and automated dispatch workflows.',
    tags: ['React', 'Django', 'MySQL', 'Google Maps API'],
    gradient: 'linear-gradient(135deg, #0a2a1a 0%, #0d9488 100%)',
    accent: '#2dd4bf',
    result: '22% fuel cost savings',
    icon: '🚛',
  },
  {
    id: 4,
    title: 'LearnSpark EdTech App',
    category: 'Mobile App',
    industry: 'Education',
    year: '2024',
    description: 'Launched a cross-platform mobile learning app with gamified courses, live tutoring sessions, progress tracking, and offline content access for 50k+ students.',
    tags: ['React Native', 'Firebase', 'Node.js', 'Agora'],
    gradient: 'linear-gradient(135deg, #2a1a0a 0%, #ea580c 100%)',
    accent: '#fb923c',
    result: '50k+ active learners',
    icon: '📱',
  },
  {
    id: 5,
    title: 'BuildMaster Construction ERP',
    category: 'Enterprise',
    industry: 'Construction',
    year: '2023',
    description: 'Engineered an end-to-end ERP for a construction conglomerate covering project costing, procurement, subcontractor management, and compliance reporting.',
    tags: ['Angular', '.NET', 'SQL Server', 'Azure'],
    gradient: 'linear-gradient(135deg, #2a1500 0%, #b45309 100%)',
    accent: '#fbbf24',
    result: '35% faster project delivery',
    icon: '🏗️',
  },
  {
    id: 6,
    title: 'NestKey Real Estate CRM',
    category: 'Web App',
    industry: 'Real Estate',
    year: '2023',
    description: 'Created a CRM platform for a real estate firm with property listing management, lead nurturing pipelines, automated follow-ups, and commission tracking.',
    tags: ['React', 'Express', 'PostgreSQL', 'Twilio'],
    gradient: 'linear-gradient(135deg, #0d1f35 0%, #0369a1 100%)',
    accent: '#38bdf8',
    result: '2× faster deal closure',
    icon: '🏠',
  },
]

const categories = ['All', 'Web App', 'Mobile App', 'Enterprise']

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects section">
      <div className="section__inner">
        <div className="projects__header">
          <motion.div
            className="section__label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.div>
          <motion.h2
            className="section__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Projects That <span className="text-accent">Deliver Results</span>
          </motion.h2>
          <motion.p
            className="projects__sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            From startups to enterprises, here are some of the real-world solutions
            we&apos;ve shipped across industries.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="projects__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className="projects__card"
                variants={cardVariants}
                custom={i}
                initial="hidden"
                animate="show"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                {/* Card visual */}
                <div className="projects__card-img" style={{ background: project.gradient }}>
                  <div className="projects__card-icon-wrap">
                    <span className="projects__card-icon">{project.icon}</span>
                  </div>

                  {/* Year badge */}
                  <div className="projects__card-year">{project.year}</div>

                  {/* Result badge */}
                  <div className="projects__card-result">
                    <span className="projects__card-result-dot" />
                    {project.result}
                  </div>

                  {/* Overlay */}
                  <div className="projects__card-overlay">
                    <a
                      href="#contact"
                      className="projects__card-link"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Discuss a Similar Project →
                    </a>
                  </div>

                  {/* Decorative lines */}
                  <div className="projects__card-lines" aria-hidden="true">
                    <div style={{ background: project.accent }} />
                    <div style={{ background: project.accent }} />
                    <div style={{ background: project.accent }} />
                  </div>
                </div>

                <div className="projects__card-body">
                  <div className="projects__card-meta">
                    <span className="projects__card-category">{project.category}</span>
                    <span className="projects__card-industry">{project.industry}</span>
                  </div>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Have a project in mind? Let&apos;s talk →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

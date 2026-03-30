import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Work.css'

const products = [
  {
    id: 1,
    title: 'GrowthforgexERP',
    category: 'IT Product',
    description: 'A comprehensive enterprise resource planning platform with modules for finance, inventory, HR, and supply chain — built for mid-to-large enterprises.',
    tags: ['Enterprise', 'SaaS', 'React'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    accent: '#60a5fa',
    icon: '⬡',
  },
  {
    id: 2,
    title: 'GrowthforgexAnalytics',
    category: 'IT Product',
    description: 'Business intelligence and data analytics dashboard with real-time reporting, AI-powered insights, and customizable KPIs for every department.',
    tags: ['Analytics', 'AI', 'Dashboard'],
    gradient: 'linear-gradient(135deg, #1a0a3a 0%, #7c3aed 100%)',
    accent: '#a78bfa',
    icon: '◎',
  },
  {
    id: 3,
    title: 'GrowthforgexHR',
    category: 'Non-IT Product',
    description: 'Complete HR management system with recruitment, payroll, performance reviews, and employee engagement tools under one roof.',
    tags: ['HR', 'Payroll', 'Cloud'],
    gradient: 'linear-gradient(135deg, #0a2a1a 0%, #0d9488 100%)',
    accent: '#2dd4bf',
    icon: '👥',
  },
  {
    id: 4,
    title: 'GrowthforgexLearn',
    category: 'Non-IT Product',
    description: 'Corporate e-learning platform with interactive courses, skill assessments, and certification tracking for workforce development.',
    tags: ['E-learning', 'Training', 'LMS'],
    gradient: 'linear-gradient(135deg, #2a1a0a 0%, #ea580c 100%)',
    accent: '#fb923c',
    icon: '🎓',
  },
]

const categories = ['All', 'IT Product', 'Non-IT Product']

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section id="work" className="work section">
      <div className="section__inner">
        <div className="work__header">
          <motion.div
            className="section__label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.div>
          <motion.h2
            className="section__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Powerful <span className="text-accent">Products</span> Built for Scale
          </motion.h2>
          <motion.p
            className="work__sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Explore our suite of ready-to-deploy products designed to solve complex
            business problems from day one.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="work__filters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`work__filter${active === cat ? ' active' : ''}`}
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
            className="work__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((product, i) => (
              <motion.article
                key={product.id}
                className="work__card"
                variants={cardVariants}
                custom={i}
                initial="hidden"
                animate="show"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                {/* Card visual */}
                <div className="work__card-img" style={{ background: product.gradient }}>
                  <div className="work__card-icon-wrap">
                    <span className="work__card-icon">{product.icon}</span>
                  </div>
                  <div className="work__card-overlay">
                    <a href="#contact" className="work__card-link" onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      Request Demo →
                    </a>
                  </div>
                  {/* Decorative lines */}
                  <div className="work__card-lines" aria-hidden="true">
                    <div style={{ background: product.accent }} />
                    <div style={{ background: product.accent }} />
                    <div style={{ background: product.accent }} />
                  </div>
                </div>

                <div className="work__card-body">
                  <div className="work__card-meta">
                    <span className="work__card-category">{product.category}</span>
                  </div>
                  <h3 className="work__card-title">{product.title}</h3>
                  <p className="work__card-desc">{product.description}</p>
                  <div className="work__card-tags">
                    {product.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="work__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#contact" className="btn btn-outline" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Have a custom requirement? Let's build it →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

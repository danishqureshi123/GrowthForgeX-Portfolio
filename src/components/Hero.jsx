import { motion } from 'framer-motion'
import './Hero.css'

const stats = [
  { num: '200+', label: 'Projects Delivered' },
  { num: '150+', label: 'Happy Clients' },
  { num: '15+', label: 'Industries Served' },
  { num: '99%', label: 'Satisfaction Rate' },
]

const chips = [
  { icon: '⬡', label: 'Software Development', delay: 0 },
  { icon: '☁', label: 'Cloud Solutions', delay: 0.15 },
  { icon: '◎', label: 'IT Consulting', delay: 0.3 },
  { icon: '✦', label: 'Business Strategy', delay: 0.45 },
  { icon: '⚡', label: 'AI Automation', delay: 0.6 },
  { icon: '◈', label: 'Digital Marketing', delay: 0.75 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background gradient orbs */}
      <div className="hero__orb hero__orb--blue" aria-hidden="true" />
      <div className="hero__orb hero__orb--purple" aria-hidden="true" />
      <div className="hero__bg-dots" aria-hidden="true" />

      <div className="hero__inner">
        {/* ── Left content ── */}
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="hero__badge-dot" />
            Trusted by businesses worldwide
          </motion.div>

          <motion.h1
            className="hero__heading"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
          >
            Smart Solutions for{' '}
            <span className="hero__heading-accent">Every Business</span>
          </motion.h1>

          <motion.p
            className="hero__sub"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            From cutting-edge IT platforms to strategic business services —
            we deliver tailored solutions that drive real growth across every industry.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
          >
            <a href="#services" className="btn btn-primary" onClick={scrollTo('#services')}>
              Explore Services
            </a>
            <a href="#contact" className="btn btn-outline" onClick={scrollTo('#contact')}>
              Contact Us →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero__stats"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="hero__stat-wrap">
                {i > 0 && <div className="hero__stat-divider" />}
                <div className="hero__stat">
                  <span className="hero__stat-num">{s.num}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right visual ── */}
        <div className="hero__visual">
          {/* Central hub */}
          <motion.div
            className="hero__hub"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="hero__hub-ring hero__hub-ring--1" />
            <div className="hero__hub-ring hero__hub-ring--2" />
            <div className="hero__hub-inner">
              <span className="hero__hub-logo">G</span>
              <span className="hero__hub-tag">growthforgex</span>
            </div>
          </motion.div>

          {/* Service chips orbiting */}
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              className={`hero__chip hero__chip--${i}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + chip.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero__chip-icon">{chip.icon}</span>
              <span>{chip.label}</span>
            </motion.div>
          ))}

          {/* Connector dots */}
          <div className="hero__connector hero__connector--1" aria-hidden="true" />
          <div className="hero__connector hero__connector--2" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

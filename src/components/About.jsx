import { motion } from 'framer-motion'
import './About.css'

const values = [
  { icon: '🎯', title: 'Client-First', desc: 'Every decision we make is guided by your goals and success.' },
  { icon: '⚡', title: 'Innovation', desc: 'We leverage the latest technology to deliver forward-thinking solutions.' },
  { icon: '🤝', title: 'Partnership', desc: 'We work alongside you as long-term partners, not just vendors.' },
  { icon: '✅', title: 'Reliability', desc: 'On-time, on-budget delivery with transparent communication.' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export default function About() {
  return (
    <section id="about" className="about section section--alt">
      <div className="section__inner">
        <div className="about__grid">
          {/* Visual side */}
          <motion.div
            className="about__visual"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="about__visual-card about__visual-card--main">
              <div className="about__visual-icon">🏢</div>
              <h3>Growthforgex Solutions</h3>
              <p>Est. 2010 · Global Operations</p>
              <div className="about__visual-divider" />
              <div className="about__visual-row">
                <span>IT Services</span>
                <span className="about__visual-badge about__visual-badge--blue">Active</span>
              </div>
              <div className="about__visual-row">
                <span>Business Services</span>
                <span className="about__visual-badge about__visual-badge--green">Active</span>
              </div>
              <div className="about__visual-row">
                <span>Product Suite</span>
                <span className="about__visual-badge about__visual-badge--purple">Active</span>
              </div>
            </div>

            <div className="about__visual-card about__visual-card--stat">
              <span className="about__visual-stat-num">10+</span>
              <span className="about__visual-stat-label">Years of Excellence</span>
            </div>

            <div className="about__visual-card about__visual-card--globe">
              <span className="about__visual-globe-icon">🌍</span>
              <span className="about__visual-globe-text">30+ Countries Served</span>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="about__content">
            <motion.div
              className="section__label"
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Who We Are
            </motion.div>

            <motion.h2
              className="section__heading"
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Building Tomorrow's{' '}
              <span className="text-accent">Business Infrastructure</span>{' '}
              Today
            </motion.h2>

            <motion.p
              className="about__text"
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Growthforgex is a full-service solutions company bridging the gap between technology
              and business. We serve clients across both IT and non-IT sectors — from startups
              to enterprise — with one unified goal: driving measurable growth.
            </motion.p>

            <motion.p
              className="about__text"
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              With over a decade of experience and a team of 120+ specialists, we design,
              build, and manage solutions that solve real problems — whether that's a
              cloud platform, an ERP system, or a complete business transformation strategy.
            </motion.p>

            {/* Values grid */}
            <div className="about__values">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="about__value"
                  variants={fadeUp(0.1 * i)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <span className="about__value-icon">{v.icon}</span>
                  <div>
                    <p className="about__value-title">{v.title}</p>
                    <p className="about__value-desc">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about__actions"
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a href="#services" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Our Services
              </a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Get a Free Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

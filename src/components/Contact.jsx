import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact section section--alt">
      <div className="section__inner">
        <div className="contact__grid">
          {/* Left */}
          <div className="contact__left">
            <motion.div
              className="section__label"
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.div>

            <motion.h2
              className="section__heading"
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Let's Build Something{' '}
              <span className="text-accent">Great Together</span>
            </motion.h2>

            <motion.p
              className="contact__desc"
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Ready to transform your business? Whether you need IT solutions,
              business services, or a custom product — our team is here to help.
            </motion.p>

            <motion.div
              className="contact__info"
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a href="mailto:hello@growthforgex.com" className="contact__info-item">
                <span className="contact__info-icon">✉</span>
                <div>
                  <p className="contact__info-label">Email Us</p>
                  <p className="contact__info-value">hello@growthforgex.com</p>
                </div>
              </a>
              <a href="tel:+11234567890" className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div>
                  <p className="contact__info-label">Call Us</p>
                  <p className="contact__info-value">+1 (123) 456-7890</p>
                </div>
              </a>
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <p className="contact__info-label">Global Operations</p>
                  <p className="contact__info-value">Worldwide · Remote & On-site</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact__socials"
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'YouTube', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="contact__social">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="contact__form-group">
              <label htmlFor="company">Company / Organization</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">How Can We Help?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or requirement..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>

            {sent && (
              <p className="contact__success">
                Thanks! Our team will get back to you within 24 hours.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

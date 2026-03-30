import './Footer.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => scrollTo(e, '#home')}>
              growthforgex<span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">
              Smart IT &amp; Business Solutions for Every Industry
            </p>
            <p className="footer__desc">
              Delivering innovative technology and strategic business services
              to clients worldwide since 2010.
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__col-title">Company</p>
              <nav>
                {navLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">IT Solutions</p>
              <nav>
                {['Software Dev', 'Cloud & DevOps', 'Cybersecurity', 'IT Consulting'].map((s) => (
                  <a key={s} href="#services" onClick={(e) => scrollTo(e, '#services')}>{s}</a>
                ))}
              </nav>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Business Services</p>
              <nav>
                {['Consulting', 'Digital Marketing', 'HR & Staffing', 'Training'].map((s) => (
                  <a key={s} href="#services" onClick={(e) => scrollTo(e, '#services')}>{s}</a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Growthforgex Solutions. All rights reserved.
          </p>

          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer__social">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import { catalogue } from '../data/catalogue'

function Navbar() {
  const { brand, contact } = catalogue

  return (
    <header className="navbar no-print">
      <div className="site-container navbar-inner">
        <a href="#" className="brand-wordmark">
          <span className="brand-name">
            PARTY <span className="text-pink">BOOTH</span>
          </span>
          <span className="brand-location">QATAR</span>
        </a>

        <nav className="nav-links">
          <a href="#collection" className="nav-link">Collection</a>
          <a href="#standards" className="nav-link">Service Standard</a>
          <a href="#process" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-cta-wrapper">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

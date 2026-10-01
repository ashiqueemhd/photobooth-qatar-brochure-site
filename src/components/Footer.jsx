import { catalogue } from '../data/catalogue'

function Footer() {
  const { brand, tagline, location } = catalogue

  return (
    <footer className="site-footer no-print">
      <div className="site-container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <span className="footer-brand-name">
              PARTY <span className="text-pink">BOOTH</span>
            </span>
            <span className="footer-brand-tagline">{tagline}</span>
            <span className="footer-brand-loc">{location}</span>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">
              Navigation <span className="text-pink">●</span>
            </span>
            <a href="#collection" className="footer-link">Collection</a>
            <a href="#standards" className="footer-link">Service Standard</a>
            <a href="#process" className="footer-link">How It Works</a>
            <a href="#pricing" className="footer-link">Pricing & Packages</a>
            <a href="#contact" className="footer-link">Reservations</a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">
              Services <span className="text-pink">●</span>
            </span>
            <span className="footer-static-item">Weddings & Private Receptions</span>
            <span className="footer-static-item">Ladies-Only Celebrations</span>
            <span className="footer-static-item">Corporate Galas & Brand Activations</span>
            <span className="footer-static-item">Graduation Balls & University Events</span>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {brand} Qatar. All rights reserved.
          </p>
          <div className="footer-badges">
            <span>Dye-Sublimation Prints</span>
            <span>•</span>
            <span>Female Staff Discretion</span>
            <span>•</span>
            <span>Qatar Venue Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { catalogue, products } from '../data/catalogue'

function HeroCover({ onOpenCalculator }) {
  const { brand, edition } = catalogue

  const scrollToCatalogue = () => {
    const el = document.getElementById('catalogue-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-cover">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-bullet">✦</span>
          <span>{edition} • DOHA, QATAR</span>
        </div>

        <h1 className="hero-title">
          Timeless Moments, <br />
          <em>Captured in Pure Luxury.</em>
        </h1>

        <p className="hero-description">
          Welcome to the official <strong>{brand}</strong> lookbook. Discover Qatar’s most refined fleet of
          interactive smart photobooths and animated magic mirrors — engineered for high-society weddings, VIP galas,
          prestigious graduations, and brand activations.
        </p>

        <div className="hero-highlights">
          <div className="highlight-pill">
            <span className="pill-number">{products.length}</span>
            <span className="pill-label">Signature Machines</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-number">&lt; 5s</span>
            <span className="pill-label">Studio Print Speed</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-number">100%</span>
            <span className="pill-label">Lady Staff Privacy</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-number">Live</span>
            <span className="pill-label">Phone QR AirDrop</span>
          </div>
        </div>

        <div className="hero-ctas no-print">
          <button type="button" className="hero-btn primary" onClick={scrollToCatalogue}>
            <span>View All {products.length} Photobooths</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
          <button type="button" className="hero-btn secondary" onClick={onOpenCalculator}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="10" y2="18" />
              <line x1="14" y1="18" x2="16" y2="18" />
            </svg>
            <span>Estimate Event Quote</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroCover

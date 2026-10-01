import { catalogue, products } from '../data/catalogue'

function Hero() {
  const { tagline, contact } = catalogue
  const featuredBooth = products[0] // Sleek Arc Magic Mirror

  return (
    <section className="hero-section">
      <div className="site-container hero-grid">
        <div className="hero-text-column">
          <span className="section-eyebrow">
            Doha, Qatar • <span className="text-ink">PREMIUM FLEET</span> • <span className="text-pink">2026 COLLECTION</span>
          </span>

          <h1 className="hero-heading">
            Designed for Qatar’s <span className="text-pink">Most Distinguished Celebrations.</span>
          </h1>

          <p className="hero-lead">
            A curated fleet of automated photobooths and interactive smart mirrors.
            Delivering studio-grade dye-sublimation prints, custom event monograms,
            and dedicated female staff attendance across Qatar’s premier venues.
          </p>

          <div className="hero-actions">
            <a href="#collection" className="btn btn-primary">
              Explore Collection
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Check Event Date
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-val">
                {products.length} <span className="text-pink">Units</span>
              </span>
              <span className="metric-lbl">16″ to 65″ & Smart Mirrors</span>
            </div>
            <div className="metric-separator" />
            <div className="metric-item">
              <span className="metric-val">
                &lt; 5 <span className="text-pink">Sec</span>
              </span>
              <span className="metric-lbl">Studio Print Speed</span>
            </div>
            <div className="metric-separator" />
            <div className="metric-item">
              <span className="metric-val">
                100<span className="text-pink">%</span>
              </span>
              <span className="metric-lbl">Female Staff Privacy</span>
            </div>
          </div>
        </div>

        <div className="hero-image-column">
          <div className="hero-media-wrapper">
            <img
              src={featuredBooth.image}
              alt={featuredBooth.name}
              className="hero-main-photo"
              loading="eager"
            />
            <div className="hero-caption-bar">
              <div className="hero-caption-title">
                Sleek Arc <span className="text-pink">Magic Mirror</span>
              </div>
              <div className="hero-caption-price">
                <span className="text-pink">QR 1,800</span> for 2 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

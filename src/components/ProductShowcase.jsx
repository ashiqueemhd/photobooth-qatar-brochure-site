import { useState, useMemo } from 'react'
import { products, catalogue } from '../data/catalogue'

const categories = ['All', 'Magic Mirror', 'Large Display', 'Photo Box', 'Compact Tower', 'Vintage Craft']

function ProductShowcase({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const { contact } = catalogue

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="collection" className="collection-section">
      <div className="site-container">
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">
              THE FLEET • <span className="text-pink">2026 COLLECTION</span>
            </span>
            <h2 className="section-heading">
              Photobooths & <span className="text-pink">Interactive Mirrors</span>
            </h2>
          </div>
          <p className="section-header-lead">
            Every machine is built with studio-grade lighting, commercial sub-5s dye-sublimation
            printers, and dedicated female attendants.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="category-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="catalogue-grid">
          {filteredProducts.map((booth) => {
            const whatsappText = encodeURIComponent(
              `Hello Party Booth Qatar! I would like to inquire about availability for the ${booth.name} (${booth.price} / ${booth.duration}) for my upcoming event.`
            )
            const whatsappHref = `${contact.whatsappHref}?text=${whatsappText}`

            return (
              <article key={booth.id} className="product-item">
                <div className="product-media-box" onClick={() => onSelectProduct(booth)}>
                  <img
                    src={booth.image}
                    alt={booth.name}
                    className="product-photo"
                    loading="lazy"
                  />
                  <div className="product-hover-overlay">
                    <span className="view-specs-link">
                      Inspect <span className="text-pink">Specifications</span> →
                    </span>
                  </div>
                </div>

                <div className="product-info-block">
                  <div className="product-meta-row">
                    <span className="product-category">{booth.category}</span>
                    <span className="product-screen">{booth.screen}</span>
                  </div>

                  <h3 className="product-name">{booth.name}</h3>
                  <p className="product-desc">{booth.shortDesc}</p>

                  <div className="product-pricing-strip">
                    <div className="price-primary">
                      <span className="price-val">
                        <span className="text-pink font-semibold">QR</span> {booth.price.replace('QR ', '')}
                      </span>
                      <span className="price-time">/ {booth.duration}</span>
                    </div>
                    <span className="price-extra-note">{booth.extra}</span>
                  </div>

                  <ul className="product-features-list">
                    {booth.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="feature-line">
                        <span className="feature-dash text-pink">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="product-actions-row">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-block"
                    >
                      Book via WhatsApp
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary btn-block"
                      onClick={() => onSelectProduct(booth)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

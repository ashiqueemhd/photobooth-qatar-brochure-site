import { useState } from 'react'
import { catalogue } from '../data/catalogue'

function BoothCard({ product, viewMode, onOpenLightbox, onOpenCalculator }) {
  const [showAllIncludes, setShowAllIncludes] = useState(false)
  const { contact } = catalogue

  const whatsappMessage = encodeURIComponent(
    `Hello Party Booth Qatar! I am interested in renting the ${product.name} (${product.price} ${product.duration}). Could you please check availability for my event date?`
  )
  const whatsappUrl = `${contact.whatsappHref}?text=${whatsappMessage}`

  const displayedIncludes = showAllIncludes
    ? product.includes
    : product.includes.slice(0, 5)

  const hasMoreIncludes = product.includes.length > 5

  return (
    <article
      id={`booth-${product.id}`}
      className={`booth-card ${viewMode === 'editorial' ? 'spread-layout' : 'grid-layout'}`}
    >
      {/* Visual Image Showcase */}
      <div className="card-media">
        <div className="image-frame" onClick={() => onOpenLightbox(product)}>
          <img
            src={product.image}
            alt={product.name}
            className="booth-img"
            loading="lazy"
          />
          <div className="media-overlay">
            <span className="enlarge-hint">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>Click to view Full HD</span>
            </span>
          </div>
        </div>

        {product.badge && (
          <div className="booth-badge">
            <span className="badge-sparkle">✦</span>
            <span>{product.badge}</span>
          </div>
        )}

        {product.screen && (
          <div className="screen-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>{product.screen}</span>
          </div>
        )}
      </div>

      {/* Editorial Details & Inclusions */}
      <div className="card-details">
        <div className="details-header">
          <div className="meta-line">
            <span className="brand-tag">Party Booth Qatar</span>
            {product.colorway && <span className="color-tag">{product.colorway}</span>}
          </div>
          <h2 className="booth-title">{product.name}</h2>
          {product.tagline && <p className="booth-tagline">{product.tagline}</p>}
        </div>

        {/* Pricing Block */}
        <div className="pricing-box">
          <div className="price-main">
            <span className="price-amount">{product.price}</span>
            <span className="price-period">{product.duration}</span>
          </div>
          {product.extra && (
            <div className="price-extra">
              <span className="extra-badge">Flexible Duration</span>
              <span className="extra-text">{product.extra}</span>
            </div>
          )}
        </div>

        {/* Highlights Pills */}
        {product.highlights && (
          <div className="highlights-row">
            {product.highlights.map((h, i) => (
              <span key={i} className="highlight-tag">
                <span className="highlight-bullet">•</span> {h}
              </span>
            ))}
          </div>
        )}

        {/* Inclusions List */}
        <div className="includes-section">
          <div className="includes-header">
            <h3 className="includes-title">{product.includesLabel || 'With'}</h3>
            <span className="includes-guarantee">Full Setup & Attendance Included</span>
          </div>

          <ul className="includes-list">
            {displayedIncludes.map((item, idx) => (
              <li key={idx} className="includes-item">
                <span className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ul>

          {hasMoreIncludes && (
            <button
              type="button"
              className="toggle-more-btn no-print"
              onClick={() => setShowAllIncludes(!showAllIncludes)}
            >
              {showAllIncludes ? 'Show Less Features' : `+ Show All ${product.includes.length} Features`}
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="card-actions no-print">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn primary-whatsapp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
            <span>Book This Booth</span>
          </a>

          <button
            type="button"
            className="card-btn secondary-quote"
            onClick={() => onOpenCalculator(product)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="10" y2="18" />
              <line x1="14" y1="18" x2="16" y2="18" />
            </svg>
            <span>Calculate Hours</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default BoothCard

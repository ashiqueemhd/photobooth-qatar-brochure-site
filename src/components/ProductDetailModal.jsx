import { useEffect } from 'react'
import { catalogue } from '../data/catalogue'

function ProductDetailModal({ product, onClose }) {
  const { contact } = catalogue

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  const whatsappText = encodeURIComponent(
    `Hello Party Booth Qatar! I would like to reserve the ${product.name} (${product.price} / ${product.duration}). Please let me know if my event date is available.`
  )
  const whatsappHref = `${contact.whatsappHref}?text=${whatsappText}`

  return (
    <div className="modal-backdrop no-print" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-media-pane">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>

          <div className="modal-content-pane">
            <div className="modal-meta-row">
              <span className="modal-category text-pink">{product.category}</span>
              <span className="modal-screen">{product.screen}</span>
            </div>

            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-desc">{product.shortDesc}</p>

            <div className="modal-pricing-box">
              <div className="m-price-main">
                <span className="m-price-num">
                  <span className="text-pink">QR</span> {product.price.replace('QR ', '')}
                </span>
                <span className="m-price-term">/ {product.duration}</span>
              </div>
              <span className="m-price-extra text-pink">{product.extra}</span>
            </div>

            <div className="modal-features-section">
              <h4 className="modal-features-title">
                Technical & <span className="text-pink">Service Specifications</span>
              </h4>
              <ul className="modal-features-list">
                {product.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="modal-actions-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                Inquire on WhatsApp
              </a>
              <button type="button" className="btn btn-secondary btn-block" onClick={onClose}>
                Close Specification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailModal

import { useEffect } from 'react'

function LightboxModal({ product, onClose, onOpenCalculator }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  const whatsappMessage = encodeURIComponent(
    `Hello Party Booth Qatar! I'm viewing your ${product.name} (${product.price} for 2 hrs) in the brochure and would love to check availability for my date.`
  )
  const whatsappUrl = `https://wa.me/97477991234?text=${whatsappMessage}`

  return (
    <div className="lightbox-backdrop no-print" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} title="Close (Esc)">
          ✕
        </button>

        <div className="lightbox-media-frame">
          <img src={product.image} alt={product.name} className="lightbox-image" />
        </div>

        <div className="lightbox-info-bar">
          <div className="lightbox-info-left">
            <span className="lightbox-badge">{product.badge || 'Party Booth Qatar'}</span>
            <h3 className="lightbox-title">{product.name}</h3>
            <p className="lightbox-sub">{product.tagline}</p>
          </div>

          <div className="lightbox-info-right">
            <div className="lightbox-price-tag">
              <span className="l-price">{product.price}</span>
              <span className="l-dur">{product.duration}</span>
            </div>

            <div className="lightbox-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="l-btn whatsapp"
              >
                Inquire on WhatsApp
              </a>
              <button
                type="button"
                className="l-btn calc"
                onClick={() => {
                  onClose()
                  onOpenCalculator(product)
                }}
              >
                Calculate Hours
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LightboxModal

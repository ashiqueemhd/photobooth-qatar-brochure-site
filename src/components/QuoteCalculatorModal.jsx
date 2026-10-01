import { useState, useEffect } from 'react'
import { products, catalogue } from '../data/catalogue'

function QuoteCalculatorModal({ selectedProduct, onClose }) {
  const [activeProductId, setActiveProductId] = useState(
    selectedProduct ? selectedProduct.id : products[0].id
  )
  const [hours, setHours] = useState(2)

  const currentProduct = products.find((p) => p.id === activeProductId) || products[0]

  const isFlatRate = Boolean(currentProduct.isFlatRate)
  const basePrice = currentProduct.numericPrice || 1200
  const extraHours = isFlatRate ? 0 : Math.max(0, hours - 2)
  const extraTotal = extraHours * (currentProduct.extraHourRate ?? 500)
  const grandTotal = isFlatRate ? basePrice : basePrice + extraTotal

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const bookingDuration = isFlatRate ? currentProduct.duration : `${hours} Hours`
  const bookingText = encodeURIComponent(
    `Hello Party Booth Qatar! I used your online quote calculator for:\n- Machine: ${currentProduct.name}\n- Duration: ${bookingDuration}\n- Estimated Total: QR ${grandTotal}\n\nPlease let me know if my event date is available!`
  )
  const whatsappUrl = `${catalogue.contact.whatsappHref}?text=${bookingText}`

  return (
    <div className="modal-backdrop no-print" onClick={onClose}>
      <div className="calculator-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="calculator-header">
          <span className="calc-eyebrow">Interactive Event Estimator</span>
          <h2 className="calc-title">Instant Event Quote Calculator</h2>
          <p className="calc-desc">
            Select your preferred machine and event duration to compute the rental cost across Qatar.
          </p>
        </div>

        <div className="calc-body">
          {/* Machine Selector */}
          <div className="calc-field">
            <label className="field-label">1. Choose Photobooth Machine</label>
            <div className="select-wrapper">
              <select
                className="calc-select"
                value={activeProductId}
                onChange={(e) => setActiveProductId(e.target.value)}
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price} ({p.duration || '2 hrs'})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Machine Quick Preview Card */}
          <div className="calc-machine-preview">
            <img src={currentProduct.image} alt={currentProduct.name} className="calc-thumb" />
            <div className="calc-machine-info">
              <h4 className="preview-name">{currentProduct.name}</h4>
              <p className="preview-tagline">{currentProduct.tagline}</p>
              <span className="preview-base-rate">
                Base Rate: {currentProduct.price} for {currentProduct.duration || '2 hours'}
              </span>
            </div>
          </div>

          {/* Duration Selector */}
          <div className="calc-field">
            <label className="field-label">
              2. Event Duration:{' '}
              <strong>{isFlatRate ? currentProduct.duration : `${hours} Hours`}</strong>
            </label>
            {isFlatRate ? (
              <div className="duration-pill-group">
                <button type="button" className="duration-pill active" style={{ minWidth: '220px' }}>
                  <span className="dur-txt">Full 1-Day Event Rental Included</span>
                </button>
              </div>
            ) : (
              <div className="duration-pill-group">
                {[2, 3, 4, 5, 6].map((h) => (
                  <button
                    key={h}
                    type="button"
                    className={`duration-pill ${hours === h ? 'active' : ''}`}
                    onClick={() => setHours(h)}
                  >
                    <span className="dur-num">{h}</span>
                    <span className="dur-txt">Hours</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Breakdown Summary */}
          <div className="calc-summary-card">
            <div className="summary-row">
              <span>{isFlatRate ? `Event Rental (${currentProduct.duration})` : 'Base Package (First 2 Hours)'}</span>
              <strong>QR {basePrice}</strong>
            </div>

            {!isFlatRate && (
              extraHours > 0 ? (
                <div className="summary-row">
                  <span>Extra Time ({extraHours} {extraHours === 1 ? 'hour' : 'hours'} × QR {currentProduct.extraHourRate || 500})</span>
                  <strong>+ QR {extraTotal}</strong>
                </div>
              ) : (
                <div className="summary-row muted">
                  <span>Extra Hours (QR 500 / hr)</span>
                  <span>None selected</span>
                </div>
              )
            )}

            <div className="summary-divider" />

            <div className="summary-total-row">
              <div>
                <span className="total-label">Total Estimated Investment</span>
                <span className="total-sub">Includes Lady Staff, Setup, & Unlimited Prints</span>
              </div>
              <div className="total-amount-box">
                <span className="currency">QR</span>
                <span className="amount">{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Inclusions Recap */}
          <div className="calc-guarantee-note">
            <span className="note-icon">✓</span>
            <span>Always includes: Unlimited Dye-Sub Prints, Custom Themed Overlays, Live QR Downloads, Props, and On-Site Lady Staff.</span>
          </div>

          {/* Actions */}
          <div className="calc-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="calc-book-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              <span>Reserve via WhatsApp (QR {grandTotal})</span>
            </a>
            <button type="button" className="calc-cancel-btn" onClick={onClose}>
              Back to Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteCalculatorModal

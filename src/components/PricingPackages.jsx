import { catalogue } from '../data/catalogue'

function PricingPackages() {
  const { contact } = catalogue

  return (
    <section id="pricing" className="pricing-section">
      <div className="site-container">
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">
              TRANSPARENT INVESTMENT • <span className="text-pink">ALL-INCLUSIVE PACKAGES</span>
            </span>
            <h2 className="section-heading">
              Pricing & <span className="text-pink">Rental Structure</span>
            </h2>
          </div>
          <p className="section-header-lead">
            Straightforward pricing with zero unexpected add-on charges. All packages include delivery,
            unlimited prints, attendant support, and personalized graphic design.
          </p>
        </div>

        <div className="pricing-columns">
          {/* Base Package Card */}
          <div className="pricing-box">
            <span className="pricing-tier-label text-pink">Standard Signature Booking</span>
            <h3 className="pricing-tier-name">Two-Hour Rental Package</h3>
            <div className="pricing-rate">
              <span className="rate-amount">
                From <span className="text-pink">QR 1,200</span>
              </span>
              <span className="rate-unit">/ 2 Hours Complete</span>
            </div>
            <p className="pricing-summary">
              Ideal for private birthday parties, graduation celebrations, and intimate wedding receptions.
            </p>

            <ul className="pricing-includes-list">
              <li>Full delivery, placement & calibration across Qatar</li>
              <li>Unlimited high-gloss dye-sublimation studio printing</li>
              <li>Dedicated female attendant present on-site</li>
              <li>Customized photo strip border & monogram artwork</li>
              <li>Themed props collection (fun, elegant, corporate)</li>
              <li>Direct smartphone download via instant QR code</li>
            </ul>

            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              Inquire Availability
            </a>
          </div>

          {/* Extension & Custom Details */}
          <div className="pricing-box accent">
            <span className="pricing-tier-label text-pink">Flexible Extended Duration</span>
            <h3 className="pricing-tier-name">Extra Hours & Galas</h3>
            <div className="pricing-rate">
              <span className="rate-amount">
                <span className="text-pink">QR 500</span>
              </span>
              <span className="rate-unit">/ Additional Hour</span>
            </div>
            <p className="pricing-summary">
              Extend your photobooth duration dynamically during your event or book multi-hour gala coverage.
            </p>

            <ul className="pricing-includes-list">
              <li>Available across all 7 photobooths and mirrors</li>
              <li>Continuous attendant coverage without interruption</li>
              <li>Continuous unlimited printing supplies on-site</li>
              <li>Post-event complete digital gallery download link</li>
              <li>Multi-day corporate activation discounts available</li>
              <li>Custom backdrop & branding wraps upon request</li>
            </ul>

            <a
              href={contact.phoneHref}
              className="btn btn-secondary btn-block"
            >
              Call for Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPackages

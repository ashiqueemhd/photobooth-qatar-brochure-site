import { catalogue } from '../data/catalogue'

function TrustGuarantees() {
  const { guarantees } = catalogue

  const renderIcon = (type) => {
    switch (type) {
      case 'sparkles':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
          </svg>
        )
      case 'printer':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
        )
      case 'palette':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
          </svg>
        )
      case 'smartphone':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="guarantees-section">
      <div className="section-head">
        <span className="section-eyebrow">The Party Booth Standard</span>
        <h2 className="section-title">Every Rental Includes Full VIP Service</h2>
        <p className="section-desc">
          No hidden fees. Every booking includes turnkey setup, on-site attendants, high-speed studio printing, and bespoke digital branding.
        </p>
      </div>

      <div className="guarantees-grid">
        {guarantees.map((item, index) => (
          <div key={index} className="guarantee-card">
            <div className="guarantee-icon-box">
              {renderIcon(item.icon)}
            </div>
            <h3 className="guarantee-card-title">{item.title}</h3>
            <p className="guarantee-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustGuarantees

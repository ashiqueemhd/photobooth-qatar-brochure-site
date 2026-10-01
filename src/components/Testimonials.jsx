import { catalogue } from '../data/catalogue'

function Testimonials() {
  const { testimonials } = catalogue

  return (
    <section className="testimonials-section">
      <div className="site-container">
        <div className="section-header-centered">
          <span className="section-eyebrow">
            CLIENT PERSPECTIVES • <span className="text-pink">FIVE-STAR EXPERIENCES</span>
          </span>
          <h2 className="section-heading">
            Trusted Across <span className="text-pink">Qatar’s Premier Venues</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author-block">
                <span className="testimonial-author">{t.author}</span>
                <span className="testimonial-meta">
                  {t.role} • <span className="text-pink">{t.venue}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

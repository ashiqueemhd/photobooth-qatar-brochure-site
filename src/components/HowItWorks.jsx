import { catalogue } from '../data/catalogue'

function HowItWorks() {
  const { steps } = catalogue

  return (
    <section id="process" className="process-section">
      <div className="site-container">
        <div className="process-split">
          <div className="process-intro">
            <span className="section-eyebrow">
              THE EXPERIENCE • <span className="text-pink">FOUR SEAMLESS PHASES</span>
            </span>
            <h2 className="section-heading">
              How Booking <span className="text-pink">Works & Unfolds</span>
            </h2>
            <p className="process-lead">
              From initial date reservation to final guest departure, our process is designed for
              complete peace of mind and luxury execution.
            </p>
            <div className="process-cta-box">
              <a href="#contact" className="btn btn-primary">
                Reserve Your Date
              </a>
            </div>
          </div>

          <div className="process-steps-list">
            {steps.map((st) => (
              <div key={st.step} className="process-step-item">
                <div className="step-counter text-pink">{st.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

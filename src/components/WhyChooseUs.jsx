import { catalogue } from '../data/catalogue'

function WhyChooseUs() {
  const { principles } = catalogue

  return (
    <section id="standards" className="standards-section">
      <div className="site-container">
        <div className="section-header-centered">
          <span className="section-eyebrow">
            SERVICE PHILOSOPHY • <span className="text-pink">WHITE-GLOVE STANDARD</span>
          </span>
          <h2 className="section-heading">
            Every Booking Includes <span className="text-pink">Turnkey White-Glove Service</span>
          </h2>
          <p className="section-header-lead centered">
            We provide full-service event photography. No unexpected surcharges, no hidden fees,
            and no unassisted operation.
          </p>
        </div>

        <div className="standards-columns">
          {principles.map((item, idx) => (
            <div key={idx} className="standard-col">
              <span className="standard-num text-pink">{item.num}</span>
              <h3 className="standard-title">{item.title}</h3>
              <p className="standard-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

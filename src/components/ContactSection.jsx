import { useState } from 'react'
import { catalogue } from '../data/catalogue'

function ContactSection() {
  const [openFaq, setOpenFaq] = useState(null)
  const { contact, faqs } = catalogue

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="site-container">
        <div className="contact-split">
          {/* Direct Inquiries Block */}
          <div className="contact-left">
            <span className="section-eyebrow">
              RESERVATIONS • <span className="text-pink">DOHA & ALL QATAR VENUES</span>
            </span>
            <h2 className="section-heading">
              Secure Your <span className="text-pink">Event Date</span>
            </h2>
            <p className="contact-lead">
              We recommend reserving peak weekend dates at least 2 to 4 weeks in advance.
              Direct inquiries via WhatsApp receive instant availability verification.
            </p>

            <div className="contact-channels">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link whatsapp"
              >
                <div className="channel-info">
                  <span className="channel-title">WhatsApp Booking</span>
                  <span className="channel-val">{contact.whatsapp}</span>
                </div>
                <span className="channel-action text-pink font-semibold">Inquire Now →</span>
              </a>

              <a href={contact.phoneHref} className="channel-link">
                <div className="channel-info">
                  <span className="channel-title">Direct Telephone</span>
                  <span className="channel-val">{contact.phone}</span>
                </div>
                <span className="channel-action">Call Us →</span>
              </a>

              <a href={`mailto:${contact.email}`} className="channel-link">
                <div className="channel-info">
                  <span className="channel-title">Email Inquiries</span>
                  <span className="channel-val">{contact.email}</span>
                </div>
                <span className="channel-action">Send Email →</span>
              </a>
            </div>

            <div className="coverage-notice">
              <span className="coverage-label text-pink">Service Territory</span>
              <p className="coverage-text">{contact.coverage}</p>
            </div>
          </div>

          {/* FAQ Accordion Block */}
          <div className="contact-right">
            <span className="section-eyebrow">
              INFORMATION • <span className="text-pink">EVENT LOGISTICS</span>
            </span>
            <h2 className="section-heading">
              Frequently Asked <span className="text-pink">Questions</span>
            </h2>

            <div className="faq-accordion">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question-row">
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-indicator">{openFaq === idx ? '—' : '+'}</span>
                  </div>
                  {openFaq === idx && (
                    <div className="faq-answer-block">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ===== DATA =====
const contactInfoData = [
  {
    icon: 'fas fa-envelope',
    title: 'Email Support',
    items: [
      { label: 'support@prasadm.com', sub: 'General Inquiries' },
      { label: 'tech@prasadm.com', sub: 'Technical Support' }
    ]
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Phone Support',
    items: [
      { label: '+91 800-PRASADM', sub: 'Support Hotline' },
      { label: '+91 800-772-7236', sub: 'Technical Support' }
    ]
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Office Location',
    items: [
      { label: 'SEWAI Technologies, Tech Park,', sub: '' },
      { label: 'Bangalore, Karnataka 560001', sub: '' }
    ]
  },
  {
    icon: 'fas fa-clock',
    title: 'Support Hours',
    items: [
      { label: 'Mon–Fri: 9 AM – 6 PM IST', sub: '' },
      { label: 'Sat: 10 AM – 4 PM IST', sub: '' }
    ]
  },
]

const faqData = [
  { id: 'faq1', question: 'How quickly can we get started?', answer: 'Most temples can be up and running within 24–48 hours. Our team provides complete setup assistance and training.' },
  { id: 'faq2', question: 'Is my temple data secure?', answer: 'Yes, we use enterprise-grade security with encrypted data storage and regular backup to ensure your information is always protected.' },
  { id: 'faq3', question: 'Do you provide training?', answer: 'Absolutely! We offer comprehensive training for your team, including video tutorials and one-on-one sessions.' },
  { id: 'faq4', question: 'What if I need custom features?', answer: 'We can customize SEWAI to meet your temple\'s specific needs. Contact us to discuss your requirements.' },
  { id: 'faq5', question: 'What payment methods do you accept?', answer: 'We accept all major payment methods including credit cards, bank transfers, and digital payment platforms like UPI and PayPal.' },
  { id: 'faq6', question: 'Do you offer 24/7 support?', answer: 'We provide extended support hours and emergency assistance for critical issues. Our team is committed to keeping your temple operations running smoothly.' },
]

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    orgName: '',
    messageText: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullName, emailAddress, messageText } = formData
    if (!fullName || !emailAddress || !messageText) {
      setFormError('Please fill in all required fields.')
      return
    }
    setFormError('')
    setFormSubmitted(true)
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ============================================================
            CONTACT HERO
            ============================================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl">🕉</div>
            <div className="absolute bottom-10 right-10 text-6xl">🕉</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">🕉</div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Support &amp; <span className="text-amber-400">Contact</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              We're here to help you digitize your temple operations with dedicated support and guidance.
            </p>
          </div>
        </section>

        {/* ============================================================
            CONTACT FORM + INFO
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

              {/* ===== LEFT: FORM ===== */}
              <div className="lg:col-span-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100/50 h-full">
                  <h3 className="font-playfair text-2xl font-bold text-darkBg mb-1">Get in touch</h3>
                  <p className="text-gray-500 text-sm mb-6">Our team will respond within 24 hours.</p>

                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                      <div className="text-5xl mb-4">✅</div>
                      <h4 className="font-bold text-green-700 text-xl">Thank You!</h4>
                      <p className="text-green-600 text-sm mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-5 text-orange-500 font-semibold hover:text-orange-600 text-sm transition-colors"
                      >
                        Send another message →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="emailAddress" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                          placeholder="Enter your email"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="orgName" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Temple/Organization Name
                        </label>
                        <input
                          type="text"
                          id="orgName"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                          placeholder="Enter temple or organization name"
                          value={formData.orgName}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="messageText" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="messageText"
                          rows="4"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400 resize-none"
                          placeholder="Tell us how we can help you..."
                          value={formData.messageText}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {formError && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm">
                          {formError}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30"
                      >
                        Send Message <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* ===== RIGHT: CONTACT INFO CARDS ===== */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-4">
                  {/* Email Support */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-amber-100/50">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-base flex-shrink-0">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-darkBg text-base mb-2">Email Support</h5>
                        <p className="text-sm">
                          <a href="mailto:support@prasadm.com" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                            support@prasadm.com
                          </a>
                        </p>
                        <p className="text-xs text-gray-400 -mt-0.5 mb-1.5">General Inquiries</p>
                        <p className="text-sm">
                          <a href="mailto:tech@prasadm.com" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                            tech@prasadm.com
                          </a>
                        </p>
                        <p className="text-xs text-gray-400 -mt-0.5">Technical Support</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Support */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-amber-100/50">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-base flex-shrink-0">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-darkBg text-base mb-2">Phone Support</h5>
                        <p className="text-sm">
                          <a href="tel:+91800PRASADM" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                            +91 800-PRASADM
                          </a>
                        </p>
                        <p className="text-xs text-gray-400 -mt-0.5 mb-1.5">Support Hotline</p>
                        <p className="text-sm">
                          <a href="tel:+918007727236" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                            +91 800-772-7236
                          </a>
                        </p>
                        <p className="text-xs text-gray-400 -mt-0.5">Technical Support</p>
                      </div>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-amber-100/50">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-base flex-shrink-0">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-darkBg text-base mb-1.5">Office Location</h5>
                        <p className="text-sm text-gray-600">SEWAI Technologies, Tech Park,</p>
                        <p className="text-sm text-gray-600">Bangalore, Karnataka 560001</p>
                      </div>
                    </div>
                  </div>

                  {/* Support Hours */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-amber-100/50">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-base flex-shrink-0">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-darkBg text-base mb-1.5">Support Hours</h5>
                        <p className="text-sm text-gray-600 font-medium">Mon–Fri: 9 AM – 6 PM IST</p>
                        <p className="text-sm text-gray-600 font-medium">Sat: 10 AM – 4 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================
            FAQ SECTION
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Frequently Asked <span className="text-amber-500">Questions</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Quick answers to common questions about SEWAI</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
              {faqData.map((faq, idx) => (
                <div
                  key={faq.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-amber-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    className="w-full text-left px-6 py-4 font-semibold text-darkBg text-base flex items-center justify-between hover:text-orange-500 transition-colors group"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling
                      const icon = e.currentTarget.querySelector('.fa-chevron-down')
                      const isOpen = content.style.maxHeight
                      document.querySelectorAll('.faq-content').forEach(el => {
                        if (el !== content) {
                          el.style.maxHeight = null
                          const btn = el.previousElementSibling
                          const iconEl = btn?.querySelector('.fa-chevron-down')
                          if (iconEl) iconEl.style.transform = 'rotate(0deg)'
                        }
                      })
                      if (isOpen) {
                        content.style.maxHeight = null
                        if (icon) icon.style.transform = 'rotate(0deg)'
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px'
                        if (icon) icon.style.transform = 'rotate(180deg)'
                      }
                    }}
                  >
                    <span>{faq.question}</span>
                    <i className="fas fa-chevron-down text-amber-500 transition-transform duration-300 ml-4 flex-shrink-0 group-hover:text-orange-500"></i>
                  </button>
                  <div
                    className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-6"
                    style={{ maxHeight: idx === 0 ? '200px' : '0px' }}
                  >
                    <div className="pb-4 text-gray-600 text-sm leading-relaxed border-t border-amber-100/30 pt-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA SECTION
            ============================================================ */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
                Still Have Questions?
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Our dedicated support team is ready to help you transform your temple management experience. Get personalized assistance and expert guidance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  🕉 Schedule Demo
                </Link>
                <a
                  href="tel:+918007727236"
                  className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Contact
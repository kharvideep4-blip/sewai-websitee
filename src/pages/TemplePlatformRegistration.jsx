import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ============================================================
// DATA
// ============================================================

const statsData = [
  { number: '500+', label: 'Temples Registered' },
  { number: '50K+', label: 'Devotees Connected' },
  { number: '100+', label: 'Cities Covered' },
  { number: '4.9★', label: 'User Rating' },
]

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹9,999',
    period: '/ year',
    description: 'Perfect for small temples getting started with digital management.',
    popular: false,
    features: [
      'Up to 500 Devotees',
      'Basic Donation Management',
      'Pooja Booking System',
      'Digital Receipts',
      'Email Support',
      'Mobile App Access',
      'Basic Reports',
      '5 GB Storage',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '₹24,999',
    period: '/ year',
    description: 'Ideal for medium-sized temples with growing needs.',
    popular: true,
    features: [
      'Up to 5,000 Devotees',
      'Advanced Donation Management',
      'Pooja & Seva Booking',
      'Digital & WhatsApp Receipts',
      'Priority Email & Phone Support',
      'Mobile App + Web Dashboard',
      'Advanced Reports & Analytics',
      'Inventory Management',
      'Event & Festival Management',
      '50 GB Storage',
      'Tally Integration',
      'Multi-User Access',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large temples and temple trusts with advanced needs.',
    popular: false,
    features: [
      'Unlimited Devotees',
      'Complete Temple ERP',
      'Multi-Branch Management',
      'Custom Feature Development',
      '24/7 Dedicated Support',
      'On-Premise or Cloud Deployment',
      'Custom Reports & Dashboards',
      'API Access & Integrations',
      'AI-Powered Features',
      'Unlimited Storage',
      'SLA & Uptime Guarantee',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },
]

const featuresData = [
  {
    
    title: 'Seamless Devotee Management',
    desc: 'Manage devotee profiles, family records, and engagement history in one place.',
  },
  {
    
    title: 'Smart Donation Tracking',
    desc: 'Track donations, generate 80G receipts, and manage donor relationships.',
  },
  {
    
    title: 'Event & Festival Management',
    desc: 'Plan, schedule, and manage temple events and festivals effortlessly.',
  },
  {
    
    title: 'Mobile App Integration',
    desc: 'Connect devotees with a dedicated mobile app for bookings and updates.',
  },
  {
   
    title: 'Real-time Reports & Analytics',
    desc: 'Get insights into temple operations with real-time dashboards and reports.',
  },
  {
    
    title: 'Enterprise-Grade Security',
    desc: 'Your temple data is protected with bank-grade encryption and security.',
  },
]

const faqData = [
  {
    id: 'faq1',
    question: 'How quickly can we get started?',
    answer: 'Most temples can be up and running within 24–48 hours. Our team provides complete setup assistance and training to ensure a smooth transition.'
  },
  {
    id: 'faq2',
    question: 'Is my temple data secure?',
    answer: 'Yes, we use enterprise-grade security with encrypted data storage, regular backups, and role-based access control to ensure your information is always protected.'
  },
  {
    id: 'faq3',
    question: 'Can I switch plans later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. We\'ll prorate the charges accordingly.'
  },
  {
    id: 'faq4',
    question: 'What if I need custom features?',
    answer: 'We can customize SEWAI to meet your temple\'s specific needs. Contact us to discuss your requirements and we\'ll provide a custom solution.'
  },
  {
    id: 'faq5',
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial for the Professional plan. No credit card required. You can explore all features and decide what works best for your temple.'
  },
  {
    id: 'faq6',
    question: 'Is training included?',
    answer: 'Yes, we provide comprehensive training for your team, including video tutorials, documentation, and one-on-one sessions to ensure everyone is comfortable with the system.'
  },
]

// ============================================================
// COMPONENT
// ============================================================

function TemplePlatformRegistration() {
  const [billingCycle, setBillingCycle] = useState('annual')
  const [selectedPlan, setSelectedPlan] = useState('pro')

  // Feature cards for the bottom section
  const features = featuresData

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
               Temple Platform Registration
            </span>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Digitize Your <span className="text-amber-400">Temple</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of temples already using SEWAI to manage their operations, connect with devotees, and grow their spiritual community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Start Free Trial
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            STATS SECTION
            ============================================================ */}
        <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
              {statsData.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-orange-500">
                    {s.number}
                  </div>
                  <div className="text-gray-600 text-xs mt-0.5 font-medium uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            KEY FEATURES SECTION
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Everything You Need in <span className="text-amber-500">One Platform</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">
                Powerful features to manage every aspect of your temple operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            PRICING SECTION
            ============================================================ */}
        <section id="pricing" className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Choose Your <span className="text-amber-500">Plan</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">
                Select the plan that best fits your temple's needs and scale
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-orange-500' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
                  className="relative w-14 h-7 bg-orange-500 rounded-full transition-colors duration-300 focus:outline-none"
                >
                  <span
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                      billingCycle === 'annual' ? 'left-1' : 'left-8'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-orange-500' : 'text-gray-400'}`}>
                  Annual <span className="text-green-500 text-xs font-semibold">(Save 20%)</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-orange-500 ring-2 ring-orange-500/30 relative'
                      : 'border-amber-100/50'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="text-center">
                    <h3 className="font-playfair text-xl font-bold text-darkBg">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-3xl md:text-4xl font-playfair font-bold text-orange-500">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-400 text-sm">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      to={plan.ctaLink}
                      className={`w-full block text-center font-bold py-3 px-6 rounded-full transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30'
                          : 'bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                    {plan.id === 'pro' && (
                      <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
                    )}
                  </div>
                </div>
              ))}
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
              <p className="section-subtitle text-sm text-gray-600">
                Find answers to common questions about SEWAI temple platform registration
              </p>
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
                Ready to Transform Your Temple?
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Join hundreds of temples already using SEWAI to digitize their operations, connect with devotees, and grow their community.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  🕉 Start Your Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
                >
                  Contact Sales
                </Link>
              </div>
              <p className="text-gray-500 text-xs mt-4">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default TemplePlatformRegistration
import { Link } from 'react-router-dom'

function PaymentGateway() {
  const stats = [
    { number: '99.9%', label: 'Payment Success Rate' },
    { number: '50L+', label: 'Donations Processed' },
    { number: '15+', label: 'Payment Methods' },
    { number: '24/7', label: 'Support Available' },
  ]

  const featureRows = [
    // Row 1: Multiple Payment Methods & Secure Transactions
    [
      {
        id: 1,
        title: 'Multiple Payment Methods',
        description: 'Accept donations through various payment channels including cards, UPI, bank transfers, and digital wallets.',
        bgColor: 'from-purple-600 to-purple-400',
        points: ['Credit/Debit Cards', 'UPI Payments', 'Net Banking', 'Digital Wallets'],
      },
      {
        id: 2,
        title: 'Secure Transactions',
        description: 'Enterprise-grade security with PCI DSS compliance ensuring all transactions are safe and protected.',
        bgColor: 'from-green-500 to-green-600',
        points: ['SSL Encryption', 'PCI DSS Compliant', 'Fraud Detection', 'Secure Storage'],
      },
    ],
    // Row 2: Recurring Donations & Digital Receipts
    [
      {
        id: 3,
        title: 'Recurring Donations',
        description: 'Enable devotees to set up automatic recurring donations for convenient and consistent giving.',
        bgColor: 'from-orange-500 to-amber-500',
        points: ['Monthly Donations', 'Annual Offerings', 'Festival Contributions', 'Custom Schedules'],
      },
      {
        id: 4,
        title: 'Digital Receipts',
        description: 'Automatic generation of digital receipts and tax-deductible certificates for all donations.',
        bgColor: 'from-blue-500 to-blue-600',
        points: ['Instant Receipts', 'Tax Certificates', 'Donation Summary', 'Annual Reports'],
      },
    ],
    // Row 3: Multi-Currency Support & Mobile Payments
    [
      {
        id: 5,
        title: 'Multi-Currency Support',
        description: 'Accept donations from devotees worldwide with support for multiple currencies and conversion.',
        bgColor: 'from-purple-600 to-purple-400',
        points: ['Indian Rupee (INR)', 'US Dollar (USD)', 'Euro (EUR)', 'British Pound (GBP)'],
      },
      {
        id: 6,
        title: 'Mobile Payments',
        description: 'Optimized mobile payment experience for donations on-the-go with quick payment options.',
        bgColor: 'from-green-500 to-green-600',
        points: ['Mobile-Optimized', 'Quick Pay', 'Touch ID/Face ID', 'Wallet Integration'],
      },
    ],
    // Row 4: Payment Analytics & Donor Recognition
    [
      {
        id: 7,
        title: 'Payment Analytics',
        description: 'Comprehensive analytics and reporting to track donation patterns and financial insights.',
        bgColor: 'from-blue-500 to-blue-600',
        points: ['Donation Trends', 'Payment Reports', 'Donor Analytics', 'Financial Dashboards'],
      },
      {
        id: 8,
        title: 'Donor Recognition',
        description: 'Acknowledge and appreciate donors with recognition features and donor management tools.',
        bgColor: 'from-orange-500 to-amber-500',
        points: ['Donor Walls', 'Recognition Certificates', 'Donor Levels', 'Thank You Messages'],
      },
    ],
  ]

  const securityItems = [
    {
      id: 1,
      title: 'PCI DSS Certified',
      desc: 'Fully compliant with Payment Card Industry Data Security Standards for maximum protection.',
    },
    {
      id: 2,
      title: 'Global Standards',
      desc: 'Adheres to international security protocols and compliance requirements worldwide.',
    },
    {
      id: 3,
      title: 'Real-time Monitoring',
      desc: 'Continuous monitoring and fraud detection systems protect every transaction.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Payment <span className="text-amber-400">Gateway</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Secure, flexible, and comprehensive payment solutions designed specifically for temple donation management.
          </p>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-orange-500">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs mt-0.5 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE GRID ===== */}
      {featureRows.map((row, rowIndex) => (
        <section
          key={rowIndex}
          className={`py-12 ${rowIndex % 2 === 1 ? 'bg-gradient-to-b from-amber-50/30 to-cream' : 'bg-gradient-to-b from-cream to-amber-50/30'} border-b border-orange-500/20`}
        >
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {row.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center text-white text-lg font-bold mb-4`}
                  >
                    {String(feature.id).padStart(2, '0')}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.points && feature.points.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-orange-500">✦</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to="#"
                    className="mt-4 inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                  >
                    Explore Feature →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== BANK-LEVEL SECURITY SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/30 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
                Bank-Level <span className="text-amber-500">Security</span>
              </h2>
              <p className="text-gray-600 text-base mt-4 leading-relaxed">
                Your donations are protected by the same security standards used by leading financial institutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {securityItems.map((item) => (
                  <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-amber-100/50 text-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-500 font-bold text-sm mx-auto mb-2">
                      {String(item.id).padStart(2, '0')}
                    </div>
                    <h4 className="font-bold text-darkBg text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100/50 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-500 font-bold text-xl mx-auto mb-4">
                04
              </div>
              <h3 className="font-playfair text-2xl font-bold text-darkBg">Your Trust, Our Priority</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Every transaction is encrypted and monitored to ensure the highest level of security for your temple and devotees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Simplify Your Temple's Payment Processing
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Enable secure, convenient donations with our comprehensive payment gateway designed for temples.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Setup Payments
              </Link>
              <Link
                to="/features/hall-booking"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Explore Hall Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default PaymentGateway
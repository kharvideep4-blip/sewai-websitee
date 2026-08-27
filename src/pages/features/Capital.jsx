import { Link } from 'react-router-dom'

function Capital() {
  const stats = [
    { number: '500+', label: 'Temples Supported' },
    { number: '50K+', label: 'Pilgrims Benefited' },
    { number: '100+', label: 'Heritage Projects' },
    { number: '98%', label: 'Satisfaction Rate' },
  ]

  const features = [
    {
      id: 1,
      title: 'Heritage Conservation',
      description: 'Restoration and preservation of ancient temple architecture, sculptures, and cultural artifacts through capital funding.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Sustainable Tourism',
      description: 'Eco-friendly pilgrimage infrastructure, waste management, and green energy initiatives supported by temple capital.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Community Empowerment',
      description: 'Skill development, livelihood generation, and welfare programs for local communities funded through temple capital.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Digital Pilgrimage',
      description: 'Technology-enabled pilgrimage experiences with virtual darshan, online services, and digital guides funded by temple capital.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const benefits = [
    {
      label: 'Heritage Preservation',
      desc: 'Contribute to the restoration and preservation of ancient temples and cultural heritage sites for future generations.',
    },
    {
      label: 'Community Development',
      desc: 'Support local communities through employment generation, skill development, and welfare programs.',
    },
    {
      label: 'Environmental Sustainability',
      desc: 'Promote eco-friendly pilgrimage practices, waste management, and green energy adoption.',
    },
    {
      label: 'Brand Enhancement',
      desc: 'Build a positive corporate image through meaningful CSR initiatives aligned with cultural heritage.',
    },
    {
      label: 'Spiritual Connection',
      desc: 'Create a deeper connection with spiritual and cultural values through meaningful contributions.',
    },
    {
      label: 'Tourism Growth',
      desc: 'Support sustainable pilgrimage tourism that benefits local economies and cultural preservation.',
    },
    {
      label: 'Strategic Partnership',
      desc: 'Partner with temples, government bodies, and NGOs for impactful CSR initiatives.',
    },
    {
      label: 'Measurable Impact',
      desc: 'Track and measure the impact of CSR initiatives through comprehensive reporting and analytics.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Capital</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Strategic capital management for temple heritage conservation, sustainable pilgrimage development, and community empowerment.
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

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
                What is <span className="text-amber-500">Temple Capital?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Capital is a strategic initiative that combines financial resources with temple heritage conservation, sustainable pilgrimage development, and community welfare. It enables temples and corporations to contribute meaningfully to the preservation of India's rich spiritual and cultural heritage while creating positive social impact.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Through this program, temples and businesses can partner to support infrastructure development, heritage conservation, environmental sustainability, and community empowerment projects, ensuring the long-term sustainability of temple communities.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Partner With Us →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Sustainable Temple Growth</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Preserving heritage, empowering communities, and creating sustainable pilgrimage experiences through strategic capital management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Key <span className="text-amber-500">Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Our Temple Capital initiatives focus on sustainable development and heritage preservation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}>
                  {String(feature.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Temple Capital <span className="text-amber-500">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">How Temple Capital creates value for temples, businesses, and communities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start p-3 border-b border-amber-100/30 last:border-0">
                <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong className="text-darkBg text-sm">{benefit.label}</strong>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Partner for Sustainable Impact
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Join us in preserving India's temple heritage and creating sustainable pilgrimage experiences through strategic capital initiatives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Partner With Us
              </Link>
              <Link
                to="/features"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Capital
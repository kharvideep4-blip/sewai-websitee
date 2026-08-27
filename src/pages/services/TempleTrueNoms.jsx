import { Link } from 'react-router-dom'

function TempleTrueNoms() {
  const stats = [
    { number: '500+', label: 'Temples Registered' },
    { number: '2K+', label: 'Nominations Processed' },
    { number: '150+', label: 'Elections Conducted' },
    { number: '98%', label: 'Satisfaction Rate' },
  ]

  const features = [
    {
      id: 1,
      title: 'Nomination Management',
      description: 'Complete management of nomination processes for temple committees, boards, and leadership positions with transparent workflows.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Election Process Management',
      description: 'End-to-end election management including voter registration, candidate filing, voting, and result declaration with full transparency.',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Committee Formation',
      description: 'Streamlined formation of temple committees, boards, and sub-committees with role-based access and clear governance structures.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Transparent Governance',
      description: 'Ensure complete transparency in all nomination, election, and governance processes with detailed audit trails and public access.',
      bgColor: 'from-green-500 to-green-600',
    },
  ]

  const services = [
    {
      label: 'Nomination Filing & Verification',
      desc: 'Digital nomination filing process with automatic verification of eligibility criteria and document validation.',
    },
    {
      label: 'Voter Registration & Management',
      desc: 'Comprehensive voter registration system with eligibility verification, voter list generation, and real-time updates.',
    },
    {
      label: 'Secure Voting System',
      desc: 'Secure and transparent voting system with digital ballots, verification mechanisms, and real-time vote counting.',
    },
    {
      label: 'Result Declaration & Reporting',
      desc: 'Instant result declaration with detailed reports, winner announcements, and comprehensive election analytics.',
    },
    {
      label: 'Committee Member Management',
      desc: 'Management of committee members with role assignment, tenure tracking, and performance monitoring capabilities.',
    },
    {
      label: 'Audit & Compliance Tracking',
      desc: 'Complete audit trail of all nomination, election, and governance activities for regulatory compliance and transparency.',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Transparent Process',
      desc: 'Ensure complete transparency in all nomination, election, and governance processes for temple stakeholders.',
    },
    {
      id: 2,
      title: 'Efficient Management',
      desc: 'Streamline nomination, election, and committee formation processes with automated workflows and digital tools.',
    },
    {
      id: 3,
      title: 'Regulatory Compliance',
      desc: 'Maintain compliance with all regulatory requirements and governance standards for temple management.',
    },
    {
      id: 4,
      title: 'Enhanced Credibility',
      desc: 'Build trust and credibility among devotees through transparent and well-managed election and nomination processes.',
    },
    {
      id: 5,
      title: 'Data-Driven Decisions',
      desc: 'Leverage analytics and insights from election data to make informed governance decisions for the temple.',
    },
    {
      id: 6,
      title: 'Community Participation',
      desc: 'Encourage active participation from the community in temple governance through accessible nomination and election processes.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">True Noms</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Complete nomination and election management system for temple committees, boards, and leadership positions with transparency and efficiency.
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
                What is <span className="text-amber-500">Temple True Noms?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple True Noms is a comprehensive nomination and election management system designed specifically for temples and religious organizations. It streamlines the entire process of nominating candidates, conducting elections, and forming committees with complete transparency and efficiency.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                From nomination filing and voter registration to secure voting and result declaration, True Noms ensures every step of the governance process is transparent, auditable, and accessible to all stakeholders, building trust and credibility in temple leadership.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Learn More →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Transparent Governance</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Streamlined nomination and election processes for temple leadership.</p>
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
            <p className="text-gray-600 text-sm">Comprehensive tools for managing nominations, elections, and committee formation.</p>
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

      {/* ===== SERVICES DETAILED ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              True Noms <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">End-to-end services for nomination, election, and governance management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex gap-3 items-start p-3 border-b border-amber-100/30 last:border-0">
                <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong className="text-darkBg text-sm">{service.label}</strong>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Benefits of <span className="text-amber-500">True Noms</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Why every temple needs a structured nomination and election management system.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center">
                    {String(benefit.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-11">{benefit.desc}</p>
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
              Ensure Transparent Governance
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Implement a robust nomination and election management system to build trust and credibility in temple leadership.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Get Started
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

export default TempleTrueNoms
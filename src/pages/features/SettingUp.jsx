import { Link } from 'react-router-dom'

function SettingUp() {
  const features = [
    {
      id: 1,
      title: 'Governance & Administrative',
      description: 'Trust/Board management, policies, SOPs, and administrative oversight',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 2,
      title: 'Religious & Ritual Management',
      description: 'Daily puja, rituals, festivals, and religious ceremonies',
      bgColor: 'from-orange-600 to-orange-500',
    },
    {
      id: 3,
      title: 'Financial Management',
      description: 'Income sources, accounting, budgeting, and financial compliance',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 4,
      title: 'Legal & Statutory Compliance',
      description: 'Trust registration, tax exemptions, and regulatory compliance',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 5,
      title: 'Infrastructure & Facility Management',
      description: 'Maintenance, repairs, security systems, and facility upkeep',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 6,
      title: 'Human Resource Management',
      description: 'Staff management, payroll, training, and volunteer coordination',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 7,
      title: 'IT & Digital Systems',
      description: 'Temple management platform, online services, and digital infrastructure',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 8,
      title: 'Community & Devotee Engagement',
      description: 'Community programs, education, welfare, and devotee services',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 9,
      title: 'External Coordination',
      description: 'Liaison with authorities, government departments, and external agencies',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 10,
      title: 'Annual Planning Cycle',
      description: 'Monthly planning, budget cycles, and annual review processes',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 11,
      title: 'Governing Body',
      description: 'Board structure, trustees, and organizational hierarchy',
      bgColor: 'from-orange-600 to-orange-500',
    },
    {
      id: 12,
      title: 'Departments',
      description: 'Departmental structure and functional divisions',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const rows = []
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3))
  }

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Setting <span className="text-amber-400">Up</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Comprehensive temple management solutions designed for the modern era.
          </p>
        </div>
      </section>

      {rows.map((row, rowIndex) => (
        <section
          key={rowIndex}
          className={`py-12 ${rowIndex % 2 === 1 ? 'bg-gradient-to-b from-amber-50/30 to-cream' : 'bg-gradient-to-b from-cream to-amber-50/30'} border-b border-orange-500/20`}
        >
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {row.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
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
                  <Link
                    to="#"
                    className="inline-block mt-4 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                  >
                    Explore Feature →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Ready to Transform Your Temple?
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Join thousands of temples worldwide who have already embraced the future of spiritual management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Start Your Smart Journey
              </Link>
              <Link
                to="/contact"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SettingUp
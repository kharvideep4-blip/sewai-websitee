import { Link } from 'react-router-dom'

function TempleHiring() {
  const stats = [
    { number: '500+', label: 'Positions Filled' },
    { number: '100+', label: 'Partner Temples' },
    { number: '50+', label: 'Priests Placed' },
    { number: '98%', label: 'Success Rate' },
  ]

  const features = [
    {
      id: 1,
      title: 'Priest Recruitment & Placement',
      description: 'Comprehensive priest recruitment services including screening, verification, and placement at temples across India.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Temple Staff Hiring',
      description: 'End-to-end hiring services for temple staff including administrators, accountants, security, and support personnel.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Volunteer Management',
      description: 'Efficient volunteer recruitment, onboarding, scheduling, and management for temple events and daily operations.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Skill Development Programs',
      description: 'Training and skill development programs for priests, staff, and volunteers to enhance temple service quality.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const services = [
    {
      label: 'Priest Recruitment & Verification',
      desc: 'Comprehensive recruitment of qualified priests with thorough background verification and skill assessment.',
    },
    {
      label: 'Staff Hiring & Onboarding',
      desc: 'Complete hiring and onboarding services for temple staff across all departments and roles.',
    },
    {
      label: 'Volunteer Coordination',
      desc: 'Efficient volunteer management from recruitment to scheduling and performance tracking.',
    },
    {
      label: 'Training & Development',
      desc: 'Skill development and training programs for temple personnel to enhance service quality.',
    },
    {
      label: 'Payroll & Compliance',
      desc: 'Professional payroll management and compliance services for temple employees.',
    },
    {
      label: 'Career Counseling & Guidance',
      desc: 'Career guidance and counseling for individuals seeking temple-based employment opportunities.',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Qualified Priests & Staff',
      desc: 'Access to a network of qualified priests, staff, and volunteers for temple services.',
    },
    {
      id: 2,
      title: 'Time-Saving Recruitment',
      desc: 'Save valuable time with streamlined recruitment and hiring processes.',
    },
    {
      id: 3,
      title: 'Quality Assurance',
      desc: 'Ensure quality of temple services through thorough screening and verification.',
    },
    {
      id: 4,
      title: 'Community Engagement',
      desc: 'Engage with the community through volunteer programs and service opportunities.',
    },
    {
      id: 5,
      title: 'Professional Management',
      desc: 'Professional management of temple staff, volunteers, and hiring processes.',
    },
    {
      id: 6,
      title: 'Sustainable Staffing',
      desc: 'Build a sustainable staffing model with continuous support and development.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Hiring</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Professional recruitment and staffing services for temples including priests, staff, volunteers, and specialized temple personnel.
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
                What is <span className="text-amber-500">Temple Hiring?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Hiring is a specialized recruitment service that connects qualified priests, staff, and volunteers with temples and spiritual organizations. We provide end-to-end hiring solutions from candidate screening and verification to onboarding and training.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our services include priest recruitment, staff hiring, volunteer management, skill development programs, and payroll management, ensuring that temples have access to skilled, dedicated personnel who can serve their communities with devotion and professionalism.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Learn More →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Connect Talent with Temples</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Professional recruitment services connecting skilled personnel with temple communities.</p>
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
            <p className="text-gray-600 text-sm">Comprehensive hiring and staffing services for temple communities.</p>
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

      {/* ===== SERVICES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Hiring <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">End-to-end hiring and staffing services for temples.</p>
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
              Benefits of <span className="text-amber-500">Temple Hiring</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Why professional hiring services are essential for temples.</p>
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

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Find the Right Talent for Your Temple
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Connect with qualified priests, dedicated staff, and passionate volunteers through our professional hiring services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact" className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                Get Started
              </Link>
              <Link to="/features" className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105">
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default TempleHiring
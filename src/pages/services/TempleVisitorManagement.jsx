import { Link } from 'react-router-dom'

function TempleVisitorManagement() {
  const stats = [
    { number: '10K+', label: 'Daily Visitors' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Temples Using' },
    { number: '24/7', label: 'Monitoring' },
  ]

  const features = [
    {
      id: 1,
      title: 'Visitor Registration',
      description: 'Simple and fast check-in/check-out system for devotees visiting the temple, capturing essential details for a safe and organized experience.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Entry Pass Management',
      description: 'Generate and manage digital entry passes for darshan, special events, and VIP access with QR code verification.',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Queue & Crowd Control',
      description: 'Intelligent queue management system to ensure smooth flow of devotees, minimize waiting times, and maintain order during peak hours and festivals.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Special Entry Management',
      description: 'Dedicated entry management for senior citizens, specially-abled devotees, VIPs, and emergency access with priority lanes.',
      bgColor: 'from-green-500 to-green-600',
    },
  ]

  const services = [
    {
      label: 'Visitor Registration & Check-in',
      desc: 'Capture visitor details including name, contact, and purpose of visit with timestamp for record keeping.',
    },
    {
      label: 'Digital Darshan Passes',
      desc: 'Issue time-slotted darshan passes with QR codes for quick scanning and verification at entry points.',
    },
    {
      label: 'Crowd Analytics Dashboard',
      desc: 'Real-time monitoring of footfall, peak hours, and visitor patterns to optimize temple operations.',
    },
    {
      label: 'Queue Management System',
      desc: 'Automated queue allocation with token system to reduce waiting time and improve devotee experience.',
    },
    {
      label: 'VIP & Senior Citizen Access',
      desc: 'Priority entry for elderly, differently-abled, VIPs, and special devotees with dedicated entry lanes.',
    },
    {
      label: 'Safety & Security Monitoring',
      desc: 'Continuous surveillance and incident reporting to ensure a safe environment for all devotees.',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Efficient Visitor Flow',
      desc: 'Optimize the movement of devotees throughout the temple premises with smart crowd management.',
    },
    {
      id: 2,
      title: 'Enhanced Safety',
      desc: 'Track every entry and exit, ensuring only authorized visitors are on the premises and quick response to incidents.',
    },
    {
      id: 3,
      title: 'Improved Devotee Experience',
      desc: 'Reduce waiting times and provide a smooth, organized darshan experience for all devotees.',
    },
    {
      id: 4,
      title: 'Data-Driven Decisions',
      desc: 'Analyze visitor patterns and trends to improve temple services, staffing, and resource allocation.',
    },
    {
      id: 5,
      title: 'Festival Preparedness',
      desc: 'Handle large crowds during festivals and special events with proven crowd control strategies.',
    },
    {
      id: 6,
      title: 'Transparent Operations',
      desc: 'Maintain clear records of visitor flow and security incidents for accountability and improvement.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Visitor Management</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Comprehensive visitor management system for temples – from registration and entry passes to crowd control and safety monitoring.
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
                What is <span className="text-amber-500">Temple Visitor Management?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Visitor Management is a comprehensive system designed to streamline the entry, movement, and overall experience of devotees visiting the temple. From registration at the entrance to managing queues for darshan, our solution ensures a seamless and safe experience for all.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                With features like digital entry passes, real-time crowd analytics, priority access for senior citizens, and security monitoring, temple administrators can maintain order, reduce waiting times, and enhance the spiritual journey of every visitor.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Learn More →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Seamless Visitor Experience</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Effortless entry, organized darshan, and safe environment for every devotee.</p>
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
            <p className="text-gray-600 text-sm">Comprehensive tools to manage temple visitors efficiently and safely.</p>
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
              Visitor Management <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">End-to-end services for managing temple visitors.</p>
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
              Benefits of <span className="text-amber-500">Visitor Management</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Why every temple needs a structured visitor management system.</p>
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
              Ensure Safe & Organized Temple Visits
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Implement a robust visitor management system to enhance devotee experience and temple security.
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

export default TempleVisitorManagement
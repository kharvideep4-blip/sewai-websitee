import { Link } from 'react-router-dom'

function TempleSecurity() {
  const stats = [
    { number: '200+', label: 'Temples Secured' },
    { number: '500+', label: 'CCTV Cameras' },
    { number: '98%', label: 'Incident Reduction' },
    { number: '24/7', label: 'Security Monitoring' },
  ]

  const features = [
    {
      id: 1,
      title: 'CCTV Surveillance',
      description: '24/7 high-definition CCTV monitoring with intelligent analytics for real-time threat detection and incident response.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Crowd Management',
      description: 'Professional crowd management systems for festivals, special events, and daily operations to ensure devotee safety.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Security Personnel',
      description: 'Trained and certified security guards for temple premises, VIP protection, and emergency response.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Emergency Response',
      description: 'Quick-response emergency protocols for medical incidents, natural disasters, and security threats.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const services = [
    {
      label: 'Access Control Systems',
      desc: 'Biometric access control, RFID systems, and automated entry management for restricted areas and sacred spaces.',
    },
    {
      label: 'Intrusion Detection',
      desc: 'Advanced alarm systems, motion sensors, and security alerts for unauthorized access and suspicious activities.',
    },
    {
      label: 'Fire Safety Systems',
      desc: 'Fire alarm systems, smoke detectors, fire extinguishers, and emergency evacuation plans for temple safety.',
    },
    {
      label: 'Smart Security Monitoring',
      desc: 'Remote monitoring through mobile apps, real-time alerts, and integrated security management dashboards.',
    },
    {
      label: 'Vehicle & Traffic Management',
      desc: 'Parking management, vehicle access control, and traffic flow management for temple premises.',
    },
    {
      label: 'Security Audits & Assessment',
      desc: 'Comprehensive security audits, vulnerability assessments, and customized security recommendations.',
    },
    {
      label: 'Security Personnel Training',
      desc: 'Training programs for temple security staff on protocols, customer service, and emergency handling.',
    },
    {
      label: 'Incident Reporting & Analytics',
      desc: 'Detailed incident reports, security analytics, and actionable insights for continuous improvement.',
    },
  ]

  const emergencyContacts = [
    { label: 'Emergency Medical', number: '102' },
    { label: 'Police Emergency', number: '112' },
    { label: 'Fire Emergency', number: '101' },
    { label: 'Temple Security Helpline', number: '1800-XXX-XXXX' },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Sacred Space Protection',
      desc: 'Protect the sanctity of temple premises, sacred artifacts, and the spiritual environment for devotees.',
    },
    {
      id: 2,
      title: 'Devotee Safety',
      desc: 'Ensure the safety and well-being of all devotees visiting the temple, especially during festivals and crowded events.',
    },
    {
      id: 3,
      title: 'Asset Protection',
      desc: 'Protect temple valuables, donations, jewelry, and religious artifacts from theft and damage.',
    },
    {
      id: 4,
      title: 'Peace of Mind',
      desc: 'Create a sense of security and peace for devotees, allowing them to focus on their spiritual practice without worry.',
    },
    {
      id: 5,
      title: 'Improved Reputation',
      desc: 'Enhance the temple\'s reputation as a safe and secure place of worship, attracting more devotees.',
    },
    {
      id: 6,
      title: 'Quick Response',
      desc: 'Immediate response to security incidents, medical emergencies, and other critical situations with trained personnel.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Security</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Comprehensive security solutions for temples including CCTV monitoring, crowd management, and devotee safety.
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
                What is <span className="text-amber-500">Temple Security?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Security is a comprehensive security solution designed specifically for the unique needs of temple environments. It combines advanced technology with traditional safety practices to ensure the protection of temple premises, sacred artifacts, devotees, and staff.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our security solutions include CCTV surveillance, crowd management systems, emergency response protocols, trained security personnel, and intelligent safety systems that work together to create a secure and peaceful environment for worship.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Get Security Solutions →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Safe & Secure Worship</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Protecting sacred spaces and devotees with comprehensive security solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Security <span className="text-amber-500">Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Comprehensive security solutions for temple safety and devotee protection.</p>
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

      {/* ===== SECURITY SERVICES DETAILED ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Security <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">End-to-end security solutions for temple safety.</p>
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

      {/* ===== EMERGENCY CONTACTS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Emergency <span className="text-amber-500">Contacts</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">24/7 emergency support for immediate assistance.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center mx-auto mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-xl md:text-2xl font-playfair font-bold text-orange-500">{contact.number}</div>
                <div className="text-gray-600 text-xs mt-1">{contact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Benefits of <span className="text-amber-500">Temple Security</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Why comprehensive security is essential for temples.</p>
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
              Secure Your Sacred Space
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Protect your temple, devotees, and sacred artifacts with our comprehensive security solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Get a Free Security Audit
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

export default TempleSecurity
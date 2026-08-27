import { Link } from 'react-router-dom'

function DevaProgram() {
  const emergencyServices = [
    {
      id: 1,
      title: 'Medical Emergency',
      description: '24/7 medical assistance and ambulance service for devotees during temple visits',
      status: '24/7 Available',
      response: 'Response: <1 minute',
      bgColor: 'from-red-500 to-red-600',
    },
    {
      id: 2,
      title: 'Security Support',
      description: 'Immediate security assistance for lost belongings, harassment, or safety concerns',
      status: '24/7 Available',
      response: 'Response: <2 minutes',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Lost & Found',
      description: 'Help locate lost family members, belongings, or provide directions within temple premises',
      status: '06:00 - 22:00',
      response: 'Response: <5 minutes',
      bgColor: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 4,
      title: 'Emergency Evacuation',
      description: 'Coordinated evacuation assistance during natural disasters or emergency situations',
      status: 'Emergency Only',
      response: 'Response: Immediate',
      bgColor: 'from-purple-500 to-purple-600',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Emergency Alerts',
      description: 'Instant emergency notifications sent to your registered contacts',
      points: ['Instant SMS alerts', 'WhatsApp notifications', 'Voice call backup', 'Location sharing'],
      bgColor: 'from-red-500 to-red-600',
    },
    {
      id: 2,
      title: 'Digital Devotee ID',
      description: 'QR code-based identification with emergency medical information',
      points: ['QR code access', 'Medical info storage', 'Emergency contacts', 'Visit history tracking'],
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 3,
      title: '24/7 Helpline Access',
      description: 'Round-the-clock support via multiple communication channels',
      points: ['Voice support', 'WhatsApp chat', 'SMS assistance', 'Video call support'],
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Family Connection',
      description: 'Connect family members for group safety and communication',
      points: ['Group notifications', 'Location sharing', 'Safety check-ins', 'Contact alerts'],
      bgColor: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 5,
      title: 'Spiritual Support',
      description: 'Access to spiritual guidance and counseling during emergencies',
      points: ['Counselor access', 'Spiritual guidance', 'Prayer support', 'Community help'],
      bgColor: 'from-purple-500 to-purple-600',
    },
    {
      id: 6,
      title: 'Health Monitoring',
      description: 'Basic health monitoring and medical alert system',
      points: ['Health tracking', 'Medical alerts', 'Doctor referrals', 'Health reports'],
      bgColor: 'from-pink-500 to-pink-600',
    },
  ]

  const startCards = [
    {
      id: 1,
      title: 'Instant Registration',
      description: 'Complete registration in under 5 minutes with no fees or hidden charges',
      extra: 'Registration takes only 3 minutes',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 2,
      title: '24/7 Emergency Line',
      description: 'Immediate response team ready to assist you during any temple emergency',
      extra: null,
      bgColor: 'from-red-500 to-red-600',
    },
    {
      id: 3,
      title: 'Digital ID & Protection',
      description: 'Secure digital identity with encrypted emergency contacts and medical info',
      extra: null,
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Devotee Emergency <span className="text-amber-400">Vigilance Assistance</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Your Safety is Our Sacred Duty. 24/7 Emergency Assistance for Devotees During Temple Visits
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">24/7 Active</span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">Verified Service</span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">Trusted by 1,000+ Devotees</span>
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY SERVICES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Emergency <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Comprehensive emergency support services available at your fingertips during temple visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {emergencyServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center text-white text-lg font-bold mb-4`}>
                  {String(service.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">{service.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className={`px-3 py-1 rounded-full font-medium ${service.id === 4 ? 'bg-purple-500 text-white' : service.id === 3 ? 'bg-yellow-500 text-white' : service.id === 2 ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
                    {service.status}
                  </span>
                  <span className="text-gray-500 font-medium">{service.response}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAM BENEFITS ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Program <span className="text-amber-500">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Comprehensive features designed to ensure your safety and peace of mind during spiritual journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center text-white text-lg font-bold mb-4`}>
                  {String(benefit.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{benefit.description}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-orange-500">-</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN DEVA PROGRAM ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-8 border-2 border-orange-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-darkBg">Join DEVA Program</h2>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Get your Digital Devotee ID and unlock 24/7 emergency assistance for safe temple visits.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-orange-500/10 text-orange-500 font-medium text-sm px-4 py-1.5 rounded-full">24/7 Support</span>
                  <span className="bg-green-500/10 text-green-500 font-medium text-sm px-4 py-1.5 rounded-full">FREE Registration</span>
                  <span className="bg-blue-500/10 text-blue-500 font-medium text-sm px-4 py-1.5 rounded-full">100% Secure</span>
                </div>
              </div>
              <div className="lg:text-right">
                <Link
                  to="#"
                  className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  Join DEVA Program Now
                </Link>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-end mt-3 text-xs text-gray-500">
                  <span>Trusted by thousands of devotees across India</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Secure</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Verified</span>
                  <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GET STARTED ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
                Get Started with <span className="text-amber-500">DEVA Program</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-3 rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {startCards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.bgColor} flex items-center justify-center text-white text-lg font-bold mb-4`}>
                      {String(card.id).padStart(2, '0')}
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-darkBg">{card.title}</h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">{card.description}</p>
                    {card.extra && <span className="text-xs text-orange-500 font-medium mt-3">{card.extra}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100/50 flex flex-col items-center text-center self-start">
              <h3 className="font-playfair text-xl font-bold text-darkBg">Ready to Join?</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Get your Digital Devotee ID today and stay protected during every temple visit.
              </p>
              <Link
                to="#"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 mt-4 text-center"
              >
                Join DEVA Program Now
              </Link>
              <div className="mt-4 text-xs text-gray-500">
                <span>Trusted by devotees worldwide</span>
                <div className="flex gap-2 justify-center mt-1">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Secure</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Verified</span>
                  <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Trusted</span>
                </div>
                <div className="flex gap-2 justify-center mt-1">
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Temple Approved</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Always Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Your Safety is Our Sacred Duty
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Join thousands of devotees who trust DEVA Program for their safety during temple visits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="#"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Join DEVA Program
              </Link>
              <Link
                to="/contact"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default DevaProgram
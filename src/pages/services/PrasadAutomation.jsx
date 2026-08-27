import { Link } from 'react-router-dom'

function PrasadAutomation() {
  const stats = [
    { number: '50K+', label: 'Devotees Served' },
    { number: '100+', label: 'Prasad Varieties' },
    { number: '200+', label: 'Partner Temples' },
    { number: '99%', label: 'Satisfaction Rate' },
  ]

  const prasadTypes = [
    {
      id: 1,
      title: 'Sweets & Laddus',
      description: 'Traditional sweets like ladoos, barfis, and halwa prepared with devotion and pure ingredients.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 2,
      title: 'Dry Fruits & Nuts',
      description: 'Premium dry fruits and nuts blessed during special ceremonies and festivals.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Cooked Prasad',
      description: 'Sacred meals including annam, pulihora, and other traditional dishes prepared in temple kitchens.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 4,
      title: 'Festival Specials',
      description: 'Special prasadam prepared during festivals including panakam, chakrapongali, and seasonal offerings.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const services = [
    {
      label: 'Online Prasad Booking',
      desc: 'Conveniently order prasad online for personal consumption, special occasions, or donation to temples.',
    },
    {
      label: 'Home Delivery',
      desc: 'Get blessed prasad delivered to your doorstep with secure packaging and timely delivery.',
    },
    {
      label: 'Festival Prasad',
      desc: 'Special prasad for festivals like Diwali, Ganesh Chaturthi, Navratri, and other celebrations.',
    },
    {
      label: 'Bulk Orders',
      desc: 'Order prasad in bulk for temple events, community gatherings, and spiritual programs.',
    },
    {
      label: 'Custom Prasad Boxes',
      desc: 'Customized prasad boxes for weddings, housewarmings, and other auspicious occasions.',
    },
    {
      label: 'Organic Prasad',
      desc: 'Pure and organic prasad prepared using traditional methods and high-quality ingredients.',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Divine Blessings',
      desc: 'Prasad carries the divine blessings of the deity, bringing spiritual merit and inner peace.',
    },
    {
      id: 2,
      title: 'Inner Peace',
      desc: 'Consuming prasad creates a sense of spiritual fulfillment and connection with the divine.',
    },
    {
      id: 3,
      title: 'Community Connection',
      desc: 'Sharing prasad creates bonds and fosters a sense of community among devotees.',
    },
    {
      id: 4,
      title: 'Pure & Sacred',
      desc: 'Prepared with devotion and pure ingredients, prasad is both spiritually and physically nourishing.',
    },
    {
      id: 5,
      title: 'Spiritual Merit',
      desc: 'Receiving and sharing prasad is a form of seva that generates positive karma and spiritual growth.',
    },
    {
      id: 6,
      title: 'Sacred Tradition',
      desc: 'Connects devotees with the ancient tradition of prasadam and the sanctity of temple offerings.',
    },
  ]

  const steps = [
    { number: '01', title: 'Select Prasad', desc: 'Browse our collection of prasad and choose your preferred type and quantity.' },
    { number: '02', title: 'Place Order', desc: 'Submit your order online with delivery or pickup preferences.' },
    { number: '03', title: 'Receive Blessings', desc: 'Get your prasad blessed by the deity before delivery.' },
    { number: '04', title: 'Enjoy & Share', desc: 'Receive your prasad and share the divine blessings with family and friends.' },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Prasad <span className="text-amber-400">Automation</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Automated prasad management system for blessed food offerings, online booking, and distribution of sacred items.
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

      {/* ===== ABOUT PRASAD ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
                What is <span className="text-amber-500">Prasad?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Prasad is the sacred food offered to the deity during worship that is later distributed to devotees as a divine blessing. It symbolizes the grace of the divine and is considered spiritually purifying and beneficial for both body and soul.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our Prasad Automation system offers devotees the opportunity to receive blessed food offerings online, book prasadam for special occasions, and have sacred items delivered to their doorstep – connecting you with the divine through the sacred tradition of prasadam.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Order Prasad →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Divine Blessings Delivered</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Sacred food offerings blessed by the deity, delivered to devotees with love and devotion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRASAD TYPES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Prasad <span className="text-amber-500">Types</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">A wide variety of blessed offerings available for devotees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {prasadTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.bgColor} flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}>
                  {String(type.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{type.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRASAD SERVICES DETAILED ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Prasad <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Comprehensive prasad services for devotees and temples.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
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
              Benefits of <span className="text-amber-500">Receiving Prasad</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">The spiritual and practical benefits of receiving blessed food offerings.</p>
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

      {/* ===== HOW TO ORDER ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              How to <span className="text-amber-500">Order Prasad</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Simple steps to order blessed prasad online.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.number}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.desc}</p>
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
              Receive Divine Blessings Today
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Order blessed prasad and experience the divine connection through sacred offerings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Order Prasad
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

export default PrasadAutomation
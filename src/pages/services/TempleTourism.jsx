import { Link } from 'react-router-dom'

function TempleTourism() {
  const stats = [
    { number: '200+', label: 'Pilgrimage Sites' },
    { number: '50K+', label: 'Pilgrims Guided' },
    { number: '100+', label: 'Heritage Tours' },
    { number: '98%', label: 'Devotee Satisfaction' },
  ]

  const features = [
    {
      id: 1,
      title: 'Pilgrimage Experience Management',
      description: 'End-to-end management of pilgrimage experiences including itinerary planning, temple visits, and spiritual guidance for devotees.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Temple Heritage Tours',
      description: 'Curated heritage tours exploring ancient temple architecture, history, cultural significance, and sacred traditions.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Sacred Site Exploration',
      description: 'Guided exploration of sacred sites, holy locations, and spiritual landmarks with detailed cultural and historical context.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Digital Pilgrimage Guides',
      description: 'Interactive digital guides with temple history, ritual information, navigation assistance, and real-time updates for pilgrims.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const tourismTypes = [
    {
      label: 'Spiritual Pilgrimage Tours',
      desc: 'Complete pilgrimage experiences covering multiple temples, sacred rivers, and spiritual destinations with priest guidance.',
    },
    {
      label: 'Heritage & Architecture Tours',
      desc: 'In-depth exploration of temple architecture, ancient construction techniques, iconography, and cultural preservation.',
    },
    {
      label: 'Festival Pilgrimages',
      desc: 'Special pilgrimage packages during major temple festivals including Maha Shivaratri, Diwali, Navaratri, and Rath Yatra.',
    },
    {
      label: 'Sacred Circuit Tours',
      desc: 'Curated tours of sacred circuits covering temples, ashrams, and spiritual centers in a specific region.',
    },
    {
      label: 'Custom Pilgrimage Packages',
      desc: 'Personalized pilgrimage packages tailored to individual preferences, group requirements, and specific temple interests.',
    },
    {
      label: 'Virtual Pilgrimage Experiences',
      desc: 'Immersive virtual tours and live darshan experiences for devotees unable to visit temples in person.',
    },
  ]

  const pilgrimageRoutes = [
    {
      id: 1,
      title: 'Char Dham Yatra',
      location: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
      duration: '10-14 Days',
      description: 'Sacred pilgrimage covering four holy shrines in the Himalayas dedicated to Lord Vishnu and Lord Shiva.',
    },
    {
      id: 2,
      title: 'Tamil Nadu Temple Circuit',
      location: 'Madurai, Thanjavur, Kanchipuram, Tiruchirappalli',
      duration: '7-10 Days',
      description: 'Explore the magnificent Dravidian temple architecture and rich cultural heritage of Tamil Nadu.',
    },
    {
      id: 3,
      title: 'Jyotirlinga Yatra',
      location: '12 Jyotirlingas across India',
      duration: '15-20 Days',
      description: 'Complete pilgrimage to the 12 sacred Jyotirlingas dedicated to Lord Shiva across different regions of India.',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Spiritual Enrichment',
      desc: 'Deepen your spiritual connection through meaningful pilgrimage experiences and temple visits.',
    },
    {
      id: 2,
      title: 'Cultural Preservation',
      desc: 'Support and participate in the preservation of India\'s rich temple heritage and cultural traditions.',
    },
    {
      id: 3,
      title: 'Expert Guidance',
      desc: 'Benefit from experienced guides and priests who provide deep insights into temple rituals and traditions.',
    },
    {
      id: 4,
      title: 'Seamless Planning',
      desc: 'Enjoy stress-free pilgrimage planning with comprehensive itineraries, accommodation, and transport arrangements.',
    },
    {
      id: 5,
      title: 'Community Connection',
      desc: 'Connect with fellow pilgrims and devotees, sharing spiritual experiences and building lasting bonds.',
    },
    {
      id: 6,
      title: 'Digital Convenience',
      desc: 'Access digital guides, virtual tours, and real-time updates for a modern pilgrimage experience.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Tourism</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Explore the divine heritage of India through curated pilgrimage experiences, temple heritage tours, and sacred site explorations designed for spiritual seekers.
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
                What is <span className="text-amber-500">Temple Tourism?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Tourism is a specialized pilgrimage and heritage travel service that connects devotees and travelers with India's rich spiritual and cultural heritage. From the majestic temples of South India to the sacred shrines of the Himalayas, we curate meaningful pilgrimage experiences that honor tradition while providing modern convenience.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our services include guided temple tours, heritage walks, festival pilgrimages, sacred circuit journeys, and personalized pilgrimage packages. With expert guides, comfortable accommodations, and seamless planning, we ensure every pilgrimage is a transformative spiritual experience.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Plan Your Pilgrimage →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Explore Sacred Heritage</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Discover the divine heritage of India through curated pilgrimage and temple tourism experiences.</p>
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
            <p className="text-gray-600 text-sm">Comprehensive pilgrimage and temple tourism services for spiritual seekers and heritage enthusiasts.</p>
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

      {/* ===== TOURISM TYPES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Temple Tourism <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Diverse pilgrimage and temple tourism services for every spiritual seeker.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {tourismTypes.map((item, index) => (
              <div key={index} className="flex gap-3 items-start p-3 border-b border-amber-100/30 last:border-0">
                <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong className="text-darkBg text-sm">{item.label}</strong>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PILGRIMAGE ROUTES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Pilgrimage <span className="text-amber-500">Routes</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Popular pilgrimage routes and temple circuits for spiritual journeys.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pilgrimageRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-500 font-bold text-sm">{String(route.id).padStart(2, '0')}</span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{route.title}</h3>
                </div>
                <p className="text-xs text-orange-500 font-medium">{route.location}</p>
                <p className="text-xs text-gray-500">{route.duration}</p>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{route.description}</p>
                <Link to="/contact" className="inline-block mt-3 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                  Explore Route →
                </Link>
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
              Benefits of <span className="text-amber-500">Temple Tourism</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Why temple tourism and pilgrimage experiences are essential for spiritual growth.</p>
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
              Begin Your Pilgrimage Journey
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Explore the divine heritage of India through curated pilgrimage experiences and temple tourism designed for spiritual seekers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Plan Your Pilgrimage
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

export default TempleTourism
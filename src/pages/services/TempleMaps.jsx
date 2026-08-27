import { Link } from 'react-router-dom'

function TempleMaps() {
  const stats = [
    { number: '200+', label: 'Temple Maps Available' },
    { number: '50K+', label: 'Active Users' },
    { number: '98%', label: 'User Satisfaction' },
    { number: '24/7', label: 'Access Available' },
  ]

  const features = [
    {
      id: 1,
      title: 'Interactive Navigation',
      description: 'Real-time location tracking and step-by-step navigation to guide devotees through temple premises.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Shrine Finder',
      description: 'Easily locate all shrines, deities, and sacred spots within the temple complex with detailed descriptions.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Facility Locator',
      description: 'Find restrooms, drinking water, parking, prasad counters, and other essential facilities quickly.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Accessibility Guide',
      description: 'Detailed accessibility information including ramps, wheelchair access, and special assistance points.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const detailedFeatures = [
    {
      label: 'Interactive Temple Layout',
      desc: 'Detailed 2D and 3D maps showing the complete temple complex with all structures and pathways.',
    },
    {
      label: 'QR Code Scanning',
      desc: 'Scan QR codes at different locations to get detailed information about shrines, history, and rituals.',
    },
    {
      label: 'Search & Filter',
      desc: 'Quickly search for specific locations, deities, or facilities within the temple premises.',
    },
    {
      label: 'Multi-language Support',
      desc: 'Available in multiple Indian languages for the convenience of devotees from different regions.',
    },
    {
      label: 'Event & Ritual Timings',
      desc: 'Access daily schedules of aartis, poojas, and special ceremonies at each shrine within the map.',
    },
    {
      label: 'Virtual Tours',
      desc: 'Immersive 360-degree virtual tours of the temple architecture and sacred spaces before visiting.',
    },
    {
      label: 'Devotee Reviews',
      desc: 'Share and read reviews from other devotees about their experiences at specific locations.',
    },
    {
      label: 'Offline Access',
      desc: 'Download temple maps for offline use to navigate even without an internet connection.',
    },
  ]

  const mapTags = ['Main Shrine', 'Hall', 'Facilities', 'Parking', 'Garden', 'Prasad Hall']

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Maps</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Interactive temple maps and navigation guides for easy exploration of temple premises, shrines, and facilities.
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
                Interactive <span className="text-amber-500">Temple Maps</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Maps provide interactive navigation guides that help devotees explore temple premises, locate shrines, find facilities, and plan their spiritual journey with ease.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our comprehensive mapping system includes detailed information about temple architecture, sacred spots, amenities, and accessibility features to ensure a seamless and enriching experience for all visitors.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Explore Maps →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Navigate with Ease</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Explore temple premises effortlessly with interactive maps and real-time navigation guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP PREVIEW ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Temple Map <span className="text-amber-500">Preview</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Interactive map showing key locations and facilities within the temple premises.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-amber-100/50 text-center max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-darkBg">Interactive Temple Map</h3>
            <p className="text-gray-600 text-sm mt-2">Explore the temple layout with detailed information about shrines, halls, facilities, and accessibility features.</p>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 mt-4 border-2 border-dashed border-orange-300">
              <p className="font-semibold text-darkBg text-lg">Temple Map Coming Soon</p>
              <p className="text-gray-500 text-sm">Interactive map with real-time navigation and location tracking</p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {mapTags.map((tag, idx) => (
                  <span key={idx} className="bg-orange-500/10 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Key <span className="text-amber-500">Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Comprehensive mapping features designed to enhance the spiritual experience of devotees.</p>
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

      {/* ===== DETAILED FEATURES LIST ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Complete <span className="text-amber-500">Map Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Everything you need for a seamless temple exploration experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {detailedFeatures.map((item, index) => (
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

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Explore Temples with Ease
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Discover the spiritual richness of temples with our interactive maps and navigation guides designed for devotees.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Try Temple Maps
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

export default TempleMaps
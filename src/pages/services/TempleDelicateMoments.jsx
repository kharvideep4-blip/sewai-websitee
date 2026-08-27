import { Link } from 'react-router-dom'

function TempleDelicateMoments() {
  const stats = [
    { number: '500+', label: 'Ceremonies Managed' },
    { number: '100+', label: 'Rituals Performed' },
    { number: '50+', label: 'Partner Temples' },
    { number: '99%', label: 'Devotee Satisfaction' },
  ]

  const features = [
    {
      id: 1,
      title: 'Sacred Ritual Management',
      description: 'Comprehensive management of all sacred rituals including Abhishekam, Archana, Homam, and special ceremonies with precision and devotion.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Auspicious Ceremony Planning',
      description: 'Planning and coordination of auspicious ceremonies for weddings, housewarmings, naming ceremonies, and other important life events.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Spiritual Moment Recording',
      description: 'Preserve sacred moments with detailed documentation, photography, and video recording of rituals and ceremonies for devotees.',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 4,
      title: 'Special Occasion Services',
      description: 'Customized services for special occasions including festivals, anniversaries, and personal spiritual milestones.',
      bgColor: 'from-green-500 to-green-600',
    },
  ]

  const services = [
    {
      label: 'Abhishekam & Alankaram',
      desc: 'Sacred bathing and decoration of deities with milk, curd, honey, and traditional adornments during special ceremonies.',
    },
    {
      label: 'Archana & Ashtottara',
      desc: 'Recitation of 108 divine names with offerings of flowers, incense, and lamps for spiritual blessings.',
    },
    {
      label: 'Homam & Havan',
      desc: 'Fire rituals with Vedic chanting, offerings, and sacred materials for spiritual purification and blessings.',
    },
    {
      label: 'Wedding Ceremony Management',
      desc: 'Complete management of temple weddings including rituals, priest scheduling, venue preparation, and prasadam.',
    },
    {
      label: 'Festival Celebration Planning',
      desc: 'Coordination of major temple festivals including decorations, processions, special poojas, and community events.',
    },
    {
      label: 'Spiritual Milestone Ceremonies',
      desc: 'Management of personal milestones like birthdays, anniversaries, and other auspicious occasions with temple blessings.',
    },
  ]

  const delicateMoments = [
    {
      id: 1,
      title: 'Vivaha - Wedding Ceremony',
      desc: 'Sacred union of two souls with traditional rituals including Kanyadaan, Mangalya Dharana, and Saptapadi.',
      bgColor: 'from-rose-500 to-rose-600',
    },
    {
      id: 2,
      title: 'Namakaran - Naming Ceremony',
      desc: 'Traditional naming ceremony for newborns with blessings from the deity and community prayers.',
      bgColor: 'from-sky-500 to-sky-600',
    },
    {
      id: 3,
      title: 'Upanayana - Sacred Thread Ceremony',
      desc: 'Thread ceremony for spiritual initiation and the beginning of Vedic education.',
      bgColor: 'from-amber-500 to-amber-600',
    },
    {
      id: 4,
      title: 'Griha Pravesh - Housewarming',
      desc: 'Blessings for a new home with Vastu rituals, offerings, and community participation.',
      bgColor: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 5,
      title: 'Satyanarayana Pooja',
      desc: 'Special pooja dedicated to Lord Satyanarayana for health, wealth, and spiritual well-being.',
      bgColor: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 6,
      title: 'Rudrabhishekam',
      desc: 'Powerful ritual dedicated to Lord Shiva for spiritual growth, protection, and blessings.',
      bgColor: 'from-red-500 to-red-600',
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Preserve Spiritual Legacy',
      desc: 'Document and preserve the spiritual legacy of temples and families through sacred rituals and ceremonies.',
    },
    {
      id: 2,
      title: 'Connect with Divine',
      desc: 'Deepen your spiritual connection through participation in sacred rituals and ceremonies.',
    },
    {
      id: 3,
      title: 'Community Participation',
      desc: 'Bring together family and community for important spiritual events and celebrations.',
    },
    {
      id: 4,
      title: 'Professional Ritual Management',
      desc: 'Expert management of all rituals and ceremonies with experienced priests and staff.',
    },
    {
      id: 5,
      title: 'Cultural Preservation',
      desc: 'Preserve and pass on sacred traditions and cultural practices to future generations.',
    },
    {
      id: 6,
      title: 'Personalized Spiritual Services',
      desc: 'Customized ceremonies and rituals tailored to individual and family spiritual needs.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Delicate Moments</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Preserving sacred ceremonies, rituals, and spiritual moments that define the essence of temple life and devotion.
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
                What are <span className="text-amber-500">Temple Delicate Moments?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Delicate Moments are the sacred and profound experiences that define the spiritual journey of devotees – from birth ceremonies and weddings to festivals and personal milestones. These moments are the heartbeat of temple life, connecting devotees with the divine and with their community.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our Temple Delicate Moments service ensures that every ceremony, ritual, and spiritual event is managed with utmost care, authenticity, and devotion, preserving the sanctity and significance of these precious moments for generations to come.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Explore Services →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Sacred Moments Preserved</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Every ritual, ceremony, and spiritual moment captured and preserved with devotion.</p>
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
            <p className="text-gray-600 text-sm">Comprehensive services for managing sacred ceremonies and spiritual moments.</p>
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
              Delicate Moments <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">End-to-end services for sacred ceremonies and rituals.</p>
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

      {/* ===== DELICATE MOMENTS TYPES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Types of <span className="text-amber-500">Delicate Moments</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Sacred ceremonies and rituals celebrated at the temple.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {delicateMoments.map((moment) => (
              <div
                key={moment.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center">
                    {String(moment.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{moment.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-11">{moment.desc}</p>
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
              Why Choose <span className="text-amber-500">Temple Delicate Moments</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Benefits of preserving sacred moments with professional temple services.</p>
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
              Preserve Your Sacred Moments
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Let us help you preserve and celebrate the delicate moments that define your spiritual journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Book Your Ceremony
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

export default TempleDelicateMoments
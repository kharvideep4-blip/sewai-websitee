import { Link } from 'react-router-dom'

function DevoteeConnect() {
  const features = [
    // Row 1
    {
      id: 1,
      title: 'Digital Devotion',
      description: 'Connect with your spiritual community through personalized digital experiences and sacred content.',
      bgColor: 'from-purple-600 to-purple-400',
      points: ['Prayer reminders', 'Sacred texts', 'Daily verses', 'Meditation guides'],
    },
    {
      id: 2,
      title: 'Event Participation',
      description: 'Stay informed about temple events, festivals, and religious ceremonies with easy registration.',
      bgColor: 'from-orange-500 to-amber-500',
      points: ['Event calendar', 'RSVP system', 'Reminder notifications', 'Festival schedules'],
    },
    {
      id: 3,
      title: 'Online Donations',
      description: 'Make secure donations and offerings with multiple payment options and donation tracking.',
      bgColor: 'from-green-500 to-green-600',
      points: ['Secure payments', 'Recurring donations', 'Donation history', 'Tax receipts'],
    },
    // Row 2
    {
      id: 4,
      title: 'Community Connection',
      description: 'Connect with fellow devotees, share experiences, and participate in spiritual discussions.',
      bgColor: 'from-blue-500 to-blue-600',
      points: ['Community forums', 'Group discussions', 'Spiritual events', 'Devotee network'],
    },
    {
      id: 5,
      title: 'Puja Booking',
      description: 'Book special pujas, ceremonies, and ritual services online with preferred dates and times.',
      bgColor: 'from-orange-600 to-orange-500',
      points: ['Online booking', 'Priest scheduling', 'Custom pujas', 'Service tracking'],
    },
    {
      id: 6,
      title: 'Spiritual Learning',
      description: 'Access sacred texts, spiritual courses, and educational content for continuous learning.',
      bgColor: 'from-purple-600 to-purple-400',
      points: ['Digital library', 'Audio lectures', 'Video content', 'Learning paths'],
    },
    // Row 3
    {
      id: 7,
      title: 'Family Management',
      description: 'Manage your entire family\'s temple activities, donations, and spiritual journey together.',
      bgColor: 'from-green-500 to-green-600',
      points: ['Family profiles', 'Group donations', 'Shared activities', 'Family events'],
    },
    {
      id: 8,
      title: 'Mobile Experience',
      description: 'Access all features on your mobile device with our intuitive and responsive design.',
      bgColor: 'from-blue-500 to-blue-600',
      points: ['Mobile app', 'Offline access', 'Push notifications', 'Touch-friendly design'],
    },
    {
      id: 9,
      title: 'Transform Your Spiritual Experience',
      description: 'Discover how SEWAI enhances your connection with the divine and your temple community.',
      bgColor: 'from-amber-500 to-orange-500',
      points: ['Get Started →', '/contact'],
      isTransform: true,
    },
  ]

  const rows = []
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3))
  }

  const testimonial = {
    quote: '"SEWAI has transformed how I connect with my temple. From booking pujas to participating in community discussions, everything is so much more accessible and meaningful. It\'s like having the temple with me wherever I go."',
    author: '— Priya Sharma',
    devotee: 'Devotee, Sri Krishna Temple',
  }

  const benefits = [
    {
      title: 'Enhanced Spiritual Journey',
      description: 'Deepen your connection with divine through personalized spiritual experiences and guided practices.',
    },
    {
      title: 'Community Belonging',
      description: 'Feel more connected to your temple community with shared experiences and collaborative worship.',
    },
    {
      title: 'Convenient Participation',
      description: 'Participate in temple activities from anywhere, making devotion accessible and flexible.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Devotee <span className="text-amber-400">Connect</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Enhance your spiritual journey with digital tools designed to deepen devotion and strengthen community connections.
          </p>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
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
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col ${
                    feature.isTransform ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-orange-300' : ''
                  }`}
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
                  {feature.points && feature.points.length > 0 && !feature.isTransform && (
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-orange-500">✦</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.isTransform && (
                    <Link
                      to="/contact"
                      className="mt-4 inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                    >
                      Get Started →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== TESTIMONIAL + BENEFITS SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Testimonial */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-4xl mb-4"></div>
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <p className="mt-4 font-bold text-darkBg">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.devotee}</p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-500 font-bold text-lg mx-auto mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg">{benefit.title}</h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{benefit.description}</p>
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
              Begin Your Digital Devotion Journey
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Join thousands of devotees who have enhanced their spiritual experience with SEWAI's devotee features.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Join Community
              </Link>
              <Link
                to="/contact"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default DevoteeConnect
import { Link } from 'react-router-dom'

function KeyTempleEvent() {
  const stats = [
    { number: '100+', label: 'Bhajan Sessions' },
    { number: '5K+', label: 'Devotees Participated' },
    { number: '500+', label: 'Events Synced' },
    { number: '98%', label: 'Satisfaction Rate' },
  ]

  const features = [
    {
      id: 1,
      title: 'One-Click Calendar Sync',
      description: 'Instantly add temple events to Google Calendar, Outlook, or Apple Calendar with a single click.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 2,
      title: 'Live Bhajan Sessions',
      description: 'Authentic live bhajan performances by experienced artists creating a divine atmosphere of devotion.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 3,
      title: 'Community Singing',
      description: 'Group bhajan singing sessions where everyone can participate and experience collective devotion.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Location & Timing Details',
      description: 'Get precise location and timing information for every temple event with detailed descriptions.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const eventTypes = [
    {
      label: 'Morning Bhajan Session',
      desc: 'Start your day with divine melodies – peaceful bhajans and mantras to uplift the spirit.',
    },
    {
      label: 'Evening Bhajan Sandhya',
      desc: 'Special evening bhajan sessions with lamps, incense, and soothing devotional music.',
    },
    {
      label: 'Festival Celebrations',
      desc: 'Grand celebrations of Ganesh Chaturthi, Diwali, Navaratri, and other sacred festivals.',
    },
    {
      label: 'Community Singing & Jamming',
      desc: 'Group singing sessions with harmonium, tabla, and dholak for everyone to participate.',
    },
    {
      label: 'Spiritual Workshops',
      desc: 'Interactive workshops to learn bhajan singing, music, and devotional practices.',
    },
    {
      label: 'Special Pooja & Ceremonies',
      desc: 'Sacred rituals including Vishnu Sahasranama chanting, Abhishekam, and Archana.',
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Morning Aarti & Bhajan',
      date: 'Daily at 6:00 AM',
      location: 'Main Temple Hall',
      description: 'Daily morning prayers with sacred chants, bhajans, and offering to the divine.',
    },
    {
      id: 2,
      title: 'Ganesh Chaturthi Celebration',
      date: '29 August 2025 at 9:00 AM',
      location: 'Temple Complex & Main Hall',
      description: 'Grand celebration of Lord Ganesh\'s birthday with special puja, prasadam, and cultural programs.',
    },
    {
      id: 3,
      title: 'Vishnu Sahasranama Chanting',
      date: 'Every Saturday at 6:00 PM',
      location: 'Prayer Hall',
      description: 'Sacred recitation of the thousand names of Lord Vishnu with community participation.',
    },
  ]

  const syncSteps = [
    { number: '01', label: 'Google Calendar', desc: 'Click "Add to Google Calendar" for instant sync' },
    { number: '02', label: 'Outlook & Apple Calendar', desc: 'Download .ics file and import to your calendar' },
    { number: '03', label: 'Bulk Sync', desc: 'Select multiple events for bulk calendar sync' },
  ]

  const benefits = [
    {
      id: 1,
      title: 'Never Miss Sacred Moments',
      desc: 'Stay connected with all temple events, pujas, bhajans, and festivals through automatic calendar sync.',
    },
    {
      id: 2,
      title: 'Spiritual Connection',
      desc: 'Deepen your spiritual journey through participation in bhajan sessions and devotional music.',
    },
    {
      id: 3,
      title: 'Community Bonding',
      desc: 'Connect with fellow devotees and build meaningful relationships through shared spiritual experiences.',
    },
    {
      id: 4,
      title: 'Smart Notifications',
      desc: 'Receive automatic reminders and updates for all temple events and schedule changes.',
    },
    {
      id: 5,
      title: 'Cultural Preservation',
      desc: 'Participate in preserving and celebrating the rich cultural and spiritual traditions of the temple.',
    },
    {
      id: 6,
      title: 'Flexible Participation',
      desc: 'Choose from a variety of events including morning bhajans, evening aartis, festivals, and workshops.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Key <span className="text-amber-400">Temple Events</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Never miss a sacred moment with our comprehensive event calendar – from daily bhajans and aartis to grand festivals and spiritual workshops. Sync events to your personal calendar with one click.
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
                What are <span className="text-amber-500">Key Temple Events?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Key Temple Events bring together the sacred traditions of devotional music, bhajan sessions, and spiritual celebrations with modern calendar sync technology. From daily morning aartis and evening bhajan sandhyas to grand festivals like Ganesh Chaturthi and Diwali, our comprehensive event calendar ensures you never miss a divine moment.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                With one-click calendar sync, you can easily add temple events to your personal calendar, receive automatic reminders, and stay connected with your spiritual community. Join thousands of devotees in celebrating the sacred moments that define temple life.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Explore Events →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Sacred Moments, One Click Away</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Connect with divine moments through bhajans, festivals, and spiritual events – all synced to your calendar.</p>
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
            <p className="text-gray-600 text-sm">Comprehensive features for temple events, bhajan sessions, and calendar synchronization.</p>
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

      {/* ===== EVENT TYPES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Event <span className="text-amber-500">Types</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">A variety of events, bhajan sessions, and ceremonies offered at the temple.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {eventTypes.map((item, index) => (
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

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Upcoming <span className="text-amber-500">Events</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Upcoming temple events, bhajan sessions, and celebrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-500 font-bold text-sm">{String(event.id).padStart(2, '0')}</span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{event.title}</h3>
                </div>
                <p className="text-xs text-orange-500 font-medium">{event.date}</p>
                <p className="text-xs text-gray-500">{event.location}</p>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{event.description}</p>
                <Link to="/contact" className="inline-block mt-3 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                  Add to Calendar →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW TO SYNC ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              How to <span className="text-amber-500">Sync Events</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Simple steps to sync temple events to your personal calendar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {syncSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.number}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg">{step.label}</h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.desc}</p>
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
              Why Join <span className="text-amber-500">Key Temple Events?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Experience the transformative power of devotional music and community celebration.</p>
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
              Never Miss a Divine Moment
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Sync your calendar now and stay connected with all temple events, bhajan sessions, festivals, and spiritual ceremonies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Sync Calendar Now
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

export default KeyTempleEvent
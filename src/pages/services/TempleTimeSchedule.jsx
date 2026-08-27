import { Link } from 'react-router-dom'

function TempleTimeSchedule() {
  const stats = [
    { number: '10+', label: 'Daily Rituals' },
    { number: '7', label: 'Days Schedule' },
    { number: '15+', label: 'Festival Events' },
    { number: '24/7', label: 'Temple Access' },
  ]

  const dailySchedule = [
    { time: '5:00 AM – 5:30 AM', title: 'Suprabhatam', desc: 'Morning awakening prayers and hymns to invoke divine blessings.' },
    { time: '5:30 AM – 6:00 AM', title: 'Abhishekam', desc: 'Sacred bathing of the deity with milk, curd, honey, and holy water.' },
    { time: '6:00 AM – 6:30 AM', title: 'Morning Aarti', desc: 'First lamp offering of the day with Vedic chants and devotional songs.' },
    { time: '6:30 AM – 7:00 AM', title: 'Archana', desc: 'Recitation of 108 names of the deity with offerings of flowers and incense.' },
    { time: '7:00 AM – 8:00 AM', title: 'Prasadam Distribution', desc: 'Distribution of blessed food offerings to devotees.' },
    { time: '8:00 AM – 12:00 PM', title: 'Individual Pooja & Seva', desc: 'Booked poojas, abhishekams, and special ceremonies for devotees.' },
    { time: '12:00 PM – 4:00 PM', title: 'Temple Administration', desc: 'Administrative tasks, donation processing, and staff duties.' },
    { time: '4:00 PM – 5:00 PM', title: 'Evening Aarti', desc: 'Evening prayer ceremony with oil lamps, incense, and devotional music.' },
    { time: '5:00 PM – 6:00 PM', title: 'Sandhya Aarti', desc: 'Twilight aarti with elaborate lamp offerings and Vedic chanting.' },
    { time: '6:00 PM – 7:00 PM', title: 'Bhajan & Kirtan', desc: 'Devotional singing sessions with community participation.' },
    { time: '7:00 PM – 8:00 PM', title: 'Prasadam & Annadanam', desc: 'Evening prasadam distribution and community meal services.' },
    { time: '8:00 PM – 8:30 PM', title: 'Shej Aarti', desc: 'Night prayer ceremony with deity bed preparation and closing rituals.' },
  ]

  const weeklySchedule = [
    { day: 'Monday', morning: '5:00 AM – 12:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Shiva Abhishekam' },
    { day: 'Tuesday', morning: '5:00 AM – 12:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Ganapathi Pooja' },
    { day: 'Wednesday', morning: '5:00 AM – 12:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Sukla Pooja' },
    { day: 'Thursday', morning: '5:00 AM – 12:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Guru Pooja' },
    { day: 'Friday', morning: '5:00 AM – 12:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Lakshmi Pooja' },
    { day: 'Saturday', morning: '5:00 AM – 1:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Saturn Pooja' },
    { day: 'Sunday', morning: '5:00 AM – 1:00 PM', evening: '4:00 PM – 8:30 PM', special: 'Special Aarti' },
  ]

  const festivalSchedule = [
    { festival: 'Maha Shivaratri', date: 'February', timings: 'Night-long Abhishekam & Jagarana', special: 'Rudrabhishekam' },
    { festival: 'Diwali', date: 'October / November', timings: '6:00 AM – 11:00 PM', special: 'Lakshmi Pooja & Fireworks' },
    { festival: 'Navaratri', date: 'September / October', timings: '6:00 AM – 10:00 PM', special: 'Durga Pooja & Garba' },
    { festival: 'Ganesh Chaturthi', date: 'August / September', timings: '5:00 AM – 11:00 PM', special: 'Ganapathi Homa' },
    { festival: 'Krishna Janmashtami', date: 'August', timings: '5:00 AM – 12:00 AM', special: 'Midnight Aarti & Bhajans' },
    { festival: 'Rath Yatra', date: 'July', timings: '6:00 AM – 9:00 PM', special: 'Chariot Procession & Prasad' },
  ]

  const poojaCategories = [
    { id: 1, title: 'Daily Pooja', desc: 'Regular morning and evening rituals performed daily.' },
    { id: 2, title: 'Special Pooja', desc: 'Ceremonies for specific occasions and festivals.' },
    { id: 3, title: 'Abhishekam', desc: 'Sacred bathing rituals with various offerings.' },
    { id: 4, title: 'Homa / Havan', desc: 'Fire rituals with Vedic chanting and offerings.' },
    { id: 5, title: 'Archana', desc: 'Recitation of divine names with flower offerings.' },
    { id: 6, title: 'Prasadam', desc: 'Blessed food offerings and distribution.' },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Time Schedule</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Complete schedule of daily rituals, weekly services, and festival timings for devotees to plan their temple visits.
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
                Temple <span className="text-amber-500">Time Schedule</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Temple Time Schedule provides a comprehensive overview of all daily rituals, weekly services, and special festival timings. This schedule helps devotees plan their temple visits and participate in their preferred ceremonies.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                From the morning Suprabhatam at dawn to the evening Shej Aarti at dusk, every ritual is conducted with precision and devotion. The schedule also includes special pooja timings for festivals and auspicious occasions throughout the year.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Plan Your Visit →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Plan Your Spiritual Journey</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Access complete temple timings and schedule your visit for a fulfilling spiritual experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DAILY SCHEDULE ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Daily <span className="text-amber-500">Schedule</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Complete daily schedule of temple rituals and ceremonies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {dailySchedule.map((item, index) => (
              <div key={index} className="flex gap-3 items-start p-3 border-b border-amber-100/30 last:border-0">
                <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <div className="font-bold text-orange-500 text-sm">{item.time}</div>
                  <strong className="text-darkBg text-sm block">{item.title}</strong>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WEEKLY SCHEDULE ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Weekly <span className="text-amber-500">Schedule</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Day-wise schedule of special rituals and poojas.</p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100/50">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Day</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Morning</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Evening</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Special Pooja</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white/50' : 'bg-amber-50/30'}>
                    <td className="px-4 py-3 text-sm font-semibold text-darkBg">{item.day}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.morning}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.evening}</td>
                    <td className="px-4 py-3 text-sm text-orange-500 font-medium">{item.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FESTIVAL SCHEDULE ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Festival <span className="text-amber-500">Schedule</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Special timings for major temple festivals and celebrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {festivalSchedule.map((festival, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{festival.festival}</h3>
                </div>
                <p className="text-xs text-orange-500 font-medium">{festival.date}</p>
                <p className="text-gray-600 text-sm mt-2"><strong className="text-darkBg">Timings:</strong> {festival.timings}</p>
                <p className="text-gray-600 text-sm"><strong className="text-darkBg">Special:</strong> {festival.special}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POOJA CATEGORIES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Pooja <span className="text-amber-500">Categories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Different types of rituals and ceremonies offered at the temple.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {poojaCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center">
                    {String(category.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{category.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-11">{category.desc}</p>
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
              Plan Your Temple Visit Today
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Check the complete schedule and plan your visit to participate in your preferred rituals and ceremonies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                View Full Schedule
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

export default TempleTimeSchedule
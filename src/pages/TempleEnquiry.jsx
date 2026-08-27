import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ============================================================
// DATA
// ============================================================

const templeInfo = {
  name: 'Sri SEWAI Temple',
  established: 'Established in 1985',
  description: 'Sri SEWAI Temple is a spiritual haven dedicated to the divine, offering peace, devotion, and community services to all devotees. Our temple is committed to preserving ancient traditions while embracing modern technology to serve the community better.',
  address: 'SEWAI Temple Complex, Temple Road, Bangalore, Karnataka 560001',
  phone: '+91 800-772-7236',
  email: 'info@sewai-temple.org',
  website: 'www.sewai-temple.org',
}

const templeTimings = [
  { day: 'Monday', morning: '5:30 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Abhishekam at 6:00 AM' },
  { day: 'Tuesday', morning: '5:30 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Ganapathi Pooja at 7:00 AM' },
  { day: 'Wednesday', morning: '5:30 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Sukla Pooja at 6:30 AM' },
  { day: 'Thursday', morning: '5:30 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Guru Pooja at 7:00 AM' },
  { day: 'Friday', morning: '5:30 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Lakshmi Pooja at 6:30 AM' },
  { day: 'Saturday', morning: '5:30 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Saturn Pooja at 7:00 AM' },
  { day: 'Sunday', morning: '5:30 AM - 1:00 PM', evening: '4:00 PM - 9:00 PM', special: 'Special Pooja at 8:00 AM' },
]

const festivalsData = [
  {
    id: 1,
    name: 'Maha Shivaratri',
    date: 'February 2025',
    description: 'The great night of Lord Shiva celebrated with night-long prayers, chanting, and special Abhishekam ceremonies.',
    status: 'Upcoming',
  },
  {
    id: 2,
    name: 'Diwali Festival',
    date: 'October 2025',
    description: 'The festival of lights celebrated with temple decorations, Lakshmi Pooja, and grand fireworks display.',
    status: 'Upcoming',
  },
  {
    id: 3,
    name: 'Navaratri Celebrations',
    date: 'September - October 2025',
    description: 'Nine nights of divine celebration dedicated to Goddess Durga with Garba dances and special poojas.',
    status: 'Upcoming',
  },
  {
    id: 4,
    name: 'Ganesh Chaturthi',
    date: 'August 2025',
    description: 'Celebrating the birth of Lord Ganesh with special poojas, processions, and cultural programs.',
    status: 'Upcoming',
  },
  {
    id: 5,
    name: 'Krishna Janmashtami',
    date: 'August 2025',
    description: 'The birth of Lord Krishna celebrated with midnight pooja, bhajans, and devotional singing.',
    status: 'Upcoming',
  },
  {
    id: 6,
    name: 'Rath Yatra',
    date: 'July 2025',
    description: 'The grand chariot festival with a majestic procession of the deities through the temple streets.',
    status: 'Upcoming',
  },
]

const eventsData = [
  {
    id: 1,
    title: 'Daily Morning Aarti',
    time: '6:00 AM - 6:30 AM',
    description: 'Start your day with the divine morning Aarti ceremony with Vedic chants and bells.',
    category: 'Daily Event',
  },
  {
    id: 2,
    title: 'Evening Deeparadhana',
    time: '6:00 PM - 6:30 PM',
    description: 'Experience the beautiful evening Deeparadhana with camphor lamps and sacred mantras.',
    category: 'Daily Event',
  },
  {
    id: 3,
    title: 'Spiritual Discourse on Bhagavad Gita',
    time: '7:00 PM - 8:00 PM (Every Saturday)',
    description: 'Join our spiritual discourse sessions on Bhagavad Gita and ancient scriptures.',
    category: 'Weekly Event',
  },
  {
    id: 4,
    title: 'Bhajan Sandhya - Devotional Singing',
    time: '6:00 PM - 7:30 PM (Every Sunday)',
    description: 'Sing and experience devotional bhajans with the temple community.',
    category: 'Weekly Event',
  },
  {
    id: 5,
    title: 'Temple Cleaning & Maintenance',
    time: '5:00 AM - 5:30 AM (Daily)',
    description: 'Our dedicated team performs daily cleaning and maintenance of the temple premises.',
    category: 'Daily Event',
  },
  {
    id: 6,
    title: 'Annadanam - Free Food Distribution',
    time: '12:00 PM - 2:00 PM (Every Sunday)',
    description: 'Free meals distributed to all devotees and visitors every Sunday.',
    category: 'Weekly Event',
  },
]

const facilitiesData = [
  { name: 'Ample Parking Space', description: 'Sufficient parking available for devotees visiting the temple' },
  { name: 'Wheelchair Accessibility', description: 'Ramps and facilities for differently-abled devotees' },
  { name: 'Drinking Water', description: 'RO purified drinking water available at multiple locations' },
  { name: 'Comfortable Seating', description: 'Seating arrangements for devotees in all prayer halls' },
  { name: 'Spiritual Library', description: 'Collection of spiritual books and scriptures for reading' },
  { name: 'Prasadam Distribution', description: 'Daily Prasad distribution after all ceremonies' },
  { name: 'Medical Assistance', description: 'First aid and emergency medical support available' },
  { name: 'Shoe Stand', description: 'Safe and secure shoe storage facility for devotees' },
]

const enquiryCategories = [
  { id: 'general', label: 'General Enquiry' },
  { id: 'pooja', label: 'Pooja / Seva Booking' },
  { id: 'donation', label: 'Donation / Sponsorship' },
  { id: 'event', label: 'Event Participation' },
  { id: 'volunteer', label: 'Volunteering' },
  { id: 'facility', label: 'Facility Booking' },
]

// ============================================================
// COMPONENT
// ============================================================

function TempleEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'general',
    message: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name || !email || !message) {
      setFormError('Please fill in all required fields.')
      return
    }
    setFormError('')
    setFormSubmitted(true)
    console.log('Enquiry submitted:', formData)
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Temple Enquiry
            </span>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to <span className="text-amber-400">Sri SEWAI Temple</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              A spiritual haven for all devotees. Find temple timings, festivals, events, and contact information below.
            </p>
          </div>
        </section>

        {/* ============================================================
            TEMPLE INFO CARDS
            ============================================================ */}
        <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <h4 className="font-bold text-darkBg text-sm uppercase tracking-wide">Address</h4>
                <p className="text-gray-600 text-sm mt-1">{templeInfo.address}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <h4 className="font-bold text-darkBg text-sm uppercase tracking-wide">Phone</h4>
                <p className="text-gray-600 text-sm mt-1">
                  <a href={`tel:${templeInfo.phone}`} className="text-orange-500 hover:text-orange-600">
                    {templeInfo.phone}
                  </a>
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <h4 className="font-bold text-darkBg text-sm uppercase tracking-wide">Email</h4>
                <p className="text-gray-600 text-sm mt-1">
                  <a href={`mailto:${templeInfo.email}`} className="text-orange-500 hover:text-orange-600">
                    {templeInfo.email}
                  </a>
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <h4 className="font-bold text-darkBg text-sm uppercase tracking-wide">Website</h4>
                <p className="text-gray-600 text-sm mt-1">
                  <a href={`https://${templeInfo.website}`} className="text-orange-500 hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                    {templeInfo.website}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            TEMPLE TIMINGS
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Temple <span className="text-amber-500">Timings</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Daily schedule for darshan, pooja, and ceremonies</p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-lg border border-amber-100/50">
              <table className="w-full bg-white/80 backdrop-blur-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Day</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Morning</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Evening</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Special Pooja</th>
                  </tr>
                </thead>
                <tbody>
                  {templeTimings.map((timing, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white/50' : 'bg-amber-50/30'}>
                      <td className="px-4 py-3 text-sm font-semibold text-darkBg">{timing.day}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{timing.morning}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{timing.evening}</td>
                      <td className="px-4 py-3 text-sm text-orange-500 font-medium">{timing.special}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================================================
            FESTIVALS
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Upcoming <span className="text-amber-500">Festivals</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Annual festivals and special celebrations at our temple</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {festivalsData.map((festival) => (
                <div
                  key={festival.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-playfair text-lg font-bold text-darkBg">{festival.name}</h3>
                      <p className="text-xs text-orange-500 font-medium mt-0.5">{festival.date}</p>
                    </div>
                    <span className="bg-green-500/10 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {festival.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{festival.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            EVENTS
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Temple <span className="text-amber-500">Events</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Daily, weekly, and special events at the temple</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
                >
                  <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 ${
                    event.category === 'Daily Event'
                      ? 'bg-blue-500/10 text-blue-600'
                      : 'bg-purple-500/10 text-purple-600'
                  }`}>
                    {event.category}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{event.title}</h3>
                  <p className="text-xs text-orange-500 font-medium mt-0.5">{event.time}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FACILITIES
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Temple <span className="text-amber-500">Facilities</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Amenities and services available for devotees</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilitiesData.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
                >
                  <h4 className="font-bold text-darkBg text-sm">{facility.name}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ENQUIRY FORM
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100/50">
                  <h3 className="font-playfair text-2xl font-bold text-darkBg mb-1">Send an Enquiry</h3>
                  <p className="text-gray-500 text-sm mb-6">Have questions about pooja, events, or facilities? Fill out the form below.</p>

                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                      <h4 className="font-bold text-green-700 text-xl">Thank You!</h4>
                      <p className="text-green-600 text-sm mt-2">Your enquiry has been sent successfully. We'll get back to you soon.</p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-5 text-orange-500 font-semibold hover:text-orange-600 text-sm transition-colors"
                      >
                        Send another enquiry →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="category" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Enquiry Category
                        </label>
                        <select
                          id="category"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          {enquiryCategories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-darkBg mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400 resize-none"
                          placeholder="Tell us how we can help you..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {formError && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm">
                          {formError}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100/50">
                    <h5 className="font-bold text-darkBg text-base mb-3">Contact Information</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Address</p>
                        <p className="text-sm text-gray-600">{templeInfo.address}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Phone</p>
                        <p className="text-sm">
                          <a href={`tel:${templeInfo.phone}`} className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                            {templeInfo.phone}
                          </a>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</p>
                        <p className="text-sm">
                          <a href={`mailto:${templeInfo.email}`} className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                            {templeInfo.email}
                          </a>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Website</p>
                        <p className="text-sm">
                          <a href={`https://${templeInfo.website}`} className="text-orange-500 font-medium hover:text-orange-600 transition-colors" target="_blank" rel="noopener noreferrer">
                            {templeInfo.website}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100/50">
                    <h5 className="font-bold text-darkBg text-base mb-3">Office Hours</h5>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600"><span className="font-medium text-darkBg">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600"><span className="font-medium text-darkBg">Saturday:</span> 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600"><span className="font-medium text-darkBg">Sunday:</span> 8:00 AM - 2:00 PM</p>
                      <p className="text-xs text-gray-400 mt-2">Closed on public holidays</p>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100/50">
                    <h5 className="font-bold text-darkBg text-base mb-3">Quick Links</h5>
                    <div className="space-y-2 text-sm">
                      <p><a href="#timings" className="text-orange-500 hover:text-orange-600 transition-colors">Temple Timings</a></p>
                      <p><a href="#festivals" className="text-orange-500 hover:text-orange-600 transition-colors">Upcoming Festivals</a></p>
                      <p><a href="#events" className="text-orange-500 hover:text-orange-600 transition-colors">Temple Events</a></p>
                      <p><a href="#facilities" className="text-orange-500 hover:text-orange-600 transition-colors">Temple Facilities</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA SECTION
            ============================================================ */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
                Visit Our Temple
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                We welcome all devotees to experience the divine presence and spiritual peace at Sri SEWAI Temple.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  Plan Your Visit
                </Link>
                <a
                  href={`tel:${templeInfo.phone}`}
                  className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
                >
                  Call Temple Office
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default TempleEnquiry
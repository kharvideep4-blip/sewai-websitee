import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { scriptureCategories, scripturesData, featuredShlokas } from '../data/scripturesData'

// ============================================================
// DATA
// ============================================================

const statsData = [
  { number: '500+', label: 'Videos' },
  { number: '50K+', label: 'Monthly Views' },
  { number: '100+', label: 'Temples Covered' },
  { number: '4.9★', label: 'User Rating' },
]

const categoriesData = [
  { id: 'all', label: 'All Media' },
  { id: 'rituals', label: 'Rituals' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'festivals', label: 'Festivals' },
  { id: 'darshan', label: 'Darshan' },
  { id: 'music', label: 'Music' },
  { id: 'nature', label: 'Nature' },
]

// ============================================================
// MEDIA DATA — YOUR YOUTUBE VIDEO IDs
// ============================================================

const mediaData = [
  // ===== RITUALS =====
  {
    id: 1,
    title: 'Shiva Abhishekam Ritual',
    description: 'Powerful Sri Rudra Abhishekam Mantra for good health and protection against enemies. Chants by Dr. R. Thiagarajan.',
    category: 'rituals',
    tag: 'Rituals',
    videoId: 'VdjmD_oiyi4',
    duration: '12:34',
    views: '3.1M',
  },
  {
    id: 2,
    title: 'Daily Temple Aarti Ceremony',
    description: 'Experience the divine morning Aarti ceremony at a traditional temple with Vedic chants and bell sounds.',
    category: 'rituals',
    tag: 'Rituals',
    videoId: 'LxtE_opVcJ4',
    duration: '8:45',
    views: '8.7K',
  },
  {
    id: 3,
    title: 'Deeparadhana Camphor Ritual',
    description: 'Learn about Deeparadhana, the sacred ritual of offering camphor lamps to deities during evening prayers.',
    category: 'rituals',
    tag: 'Rituals',
    videoId: '-azKiFSfhxc',
    duration: '10:20',
    views: '6.3K',
  },
  {
    id: 4,
    title: 'Temple Archana Ceremony',
    description: 'Watch the live Archana ceremony with sacred chants and offerings at a traditional Hindu temple.',
    category: 'rituals',
    tag: 'Rituals',
    videoId: 'Zg0C-uso_nE',
    duration: 'Live',
    views: '720',
  },
  {
    id: 5,
    title: 'Rudrabhishekam Pooja',
    description: 'Witness the Rudrabhishekam Pooja performed with Vedic mantras for spiritual progress and protection.',
    category: 'rituals',
    tag: 'Rituals',
    videoId: 'VvpHMXY25Qc',
    duration: '15:20',
    views: '12.1K',
  },
  {
    id: 6,
    title: 'Evening Temple Prayers',
    description: 'Experience the peaceful evening temple prayers with Vedic chants and sacred rituals.',
    category: 'rituals',
    tag: 'Rituals',
    videoId: '1tP2YQLipeg',
    duration: '9:15',
    views: '5.4K',
  },
  // ===== ARCHITECTURE =====
  {
    id: 7,
    title: 'Dravidian Temple Architecture',
    description: 'Explore the intricate Dravidian temple architecture with towering gopurams, pillared halls, and intricate carvings.',
    category: 'architecture',
    tag: 'Architecture',
    videoId: 'gJrusmq0AsI',
    duration: '15:10',
    views: '12.8K',
  },
  {
    id: 8,
    title: 'Vastu Shastra Principles',
    description: 'Discover the ancient Vastu Shastra principles used in temple construction, from site selection to deity placement.',
    category: 'architecture',
    tag: 'Architecture',
    videoId: 'L1-Ykr7h9Y0',
    duration: '14:45',
    views: '9.1K',
  },
  {
    id: 9,
    title: 'Gopuram Temple Gateway',
    description: 'Learn about the significance of Gopuram, the massive entrance towers of South Indian temples, covered with intricate sculptures.',
    category: 'architecture',
    tag: 'Architecture',
    videoId: 'gA_M6N0pO1k',
    duration: '11:30',
    views: '7.4K',
  },
  {
    id: 10,
    title: 'Hindu Temple Construction',
    description: 'Watch how stones are chosen, chiseled, and brought together to create a beautiful Hindu temple.',
    category: 'architecture',
    tag: 'Architecture',
    videoId: 'tSHUzCkAuzI',
    duration: '18:20',
    views: '8.9K',
  },
  {
    id: 11,
    title: 'Temple Sculptures & Carvings',
    description: 'Explore the intricate stone carvings and sculptures that adorn the walls of ancient Hindu temples.',
    category: 'architecture',
    tag: 'Architecture',
    videoId: 'NrB5rvEMyo0',
    duration: '13:45',
    views: '6.2K',
  },
  {
    id: 12,
    title: 'Nagara vs Dravidian Architecture',
    description: 'Compare and contrast the Nagara and Dravidian architectural styles in Hindu temple construction.',
    category: 'architecture',
    tag: 'Architecture',
    videoId: '35Cho1OWsRk',
    duration: '16:30',
    views: '5.8K',
  },
  // ===== FESTIVALS =====
  {
    id: 13,
    title: 'Diwali Celebrations at Temple',
    description: 'Watch the grand Diwali celebrations with temple decorations, lamps, and traditional rituals.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'w3BgqHEwn9Y',
    duration: '18:20',
    views: '25.6K',
  },
  {
    id: 14,
    title: 'Maha Shivaratri Temple Festival',
    description: 'Experience the spiritual energy of Maha Shivaratri at temples dedicated to Lord Shiva with night-long prayers.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'IGdauS1xQOQ',
    duration: '16:15',
    views: '18.9K',
  },
  {
    id: 15,
    title: 'Navaratri Celebrations',
    description: 'Witness the vibrant Navaratri celebrations with Garba dances, Durga Pooja, and temple festivities.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'htCnNizvvFc',
    duration: '20:05',
    views: '21.3K',
  },
  {
    id: 16,
    title: 'Ganesh Chaturthi Festival',
    description: 'Celebrate Ganesh Chaturthi with temple processions, prayers, and cultural festivities.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: '6vgb4El9tLE',
    duration: '14:30',
    views: '15.7K',
  },
  {
    id: 17,
    title: 'Krishna Janmashtami Celebration',
    description: 'Celebrate the birth of Lord Krishna with temple decorations, bhajans, and midnight celebrations.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'f6-hmi_JbeA',
    duration: '19:45',
    views: '22.4K',
  },
  {
    id: 18,
    title: 'Durga Pooja Celebrations',
    description: 'Experience the grandeur of Durga Pooja celebrations with traditional rituals and cultural performances.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'he1M12_FMIw',
    duration: '22:10',
    views: '28.1K',
  },
  {
    id: 19,
    title: 'Rath Yatra Festival',
    description: 'Witness the famous Rath Yatra festival with the chariot procession of Lord Jagannath.',
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'qKAni3Qk5hc',
    duration: '17:30',
    views: '16.2K',
  },
  {
    id: 20,
    title: 'Kumbh Mela Festival',
    description: "Experience the world's largest religious gathering at the Kumbh Mela festival.",
    category: 'festivals',
    tag: 'Festivals',
    videoId: 'BXWrL86phYc',
    duration: '24:15',
    views: '31.8K',
  },
  // ===== DARSHAN =====
  {
    id: 21,
    title: 'Sacred Darshan of Deity',
    description: 'Experience the powerful Darshan of the main deity at a traditional Hindu temple with Vedic chants.',
    category: 'darshan',
    tag: 'Darshan',
    videoId: 'tLQ4beAMPEE',
    duration: '9:45',
    views: '32.1K',
  },
  {
    id: 22,
    title: 'Tirupati Balaji Darshan',
    description: 'Witness the sacred Darshan at the famous Tirupati Balaji Temple with thousands of devotees.',
    category: 'darshan',
    tag: 'Darshan',
    videoId: '7yhWobUcTQk',
    duration: '22:30',
    views: '45.8K',
  },
  {
    id: 23,
    title: 'Kedarnath Temple Darshan',
    description: 'Experience the divine Darshan at the holy Kedarnath Temple with beautiful Himalayan views.',
    category: 'darshan',
    tag: 'Darshan',
    videoId: 'VCdMaHY_JaU',
    duration: 'Live',
    views: '4.9K',
  },
  {
    id: 24,
    title: 'Siddhivinayak Temple Darshan',
    description: "Experience the divine Darshan at Siddhivinayak Temple in Mumbai, one of India's most visited temples.",
    category: 'darshan',
    tag: 'Darshan',
    videoId: 'IBs-ggrlwZc',
    duration: 'Live',
    views: '3.2K',
  },
  {
    id: 25,
    title: 'Meenakshi Temple Darshan',
    description: 'Experience the divine Darshan at the famous Meenakshi Temple with its stunning architecture.',
    category: 'darshan',
    tag: 'Darshan',
    videoId: 'rGnDBZWSRfk',
    duration: '14:20',
    views: '28.4K',
  },
  {
    id: 26,
    title: 'Jagannath Temple Darshan',
    description: 'Witness the sacred Darshan at the famous Jagannath Temple in Puri.',
    category: 'darshan',
    tag: 'Darshan',
    videoId: '5qvHq8mBnS0',
    duration: '18:45',
    views: '19.6K',
  },
  // ===== MUSIC =====
  {
    id: 27,
    title: 'Vedic Chants & Mantras',
    description: 'Immerse yourself in the divine Vedic chants and mantras from the sacred scriptures.',
    category: 'music',
    tag: 'Music',
    videoId: '6KgoqAuvnUo',
    duration: '25:10',
    views: '14.7K',
  },
  {
    id: 28,
    title: 'Temple Bhajans',
    description: 'Experience the devotional bhajans at a famous temple with traditional musical instruments.',
    category: 'music',
    tag: 'Music',
    videoId: 't4Vl29TdVvk',
    duration: 'Live',
    views: '2.8K',
  },
  {
    id: 29,
    title: 'Nadaswaram & Thavil Performance',
    description: 'Watch the traditional Nadaswaram and Thavil performance, an essential part of South Indian temple music.',
    category: 'music',
    tag: 'Music',
    videoId: '509NqwF7I30',
    duration: '18:45',
    views: '9.8K',
  },
  {
    id: 30,
    title: 'Shlokas & Mantras',
    description: 'Learn and recite powerful shlokas and mantras from Hindu scriptures.',
    category: 'music',
    tag: 'Music',
    videoId: '2IUUJhWEYIE',
    duration: '22:30',
    views: '11.5K',
  },
  {
    id: 31,
    title: 'Aarti Songs',
    description: 'Experience the divine Aarti songs performed during temple ceremonies.',
    category: 'music',
    tag: 'Music',
    videoId: 'dVTUUtOHUCA',
    duration: '16:20',
    views: '7.3K',
  },
  {
    id: 32,
    title: 'Devotional Music',
    description: 'Immerse yourself in soulful devotional music from Hindu temples.',
    category: 'music',
    tag: 'Music',
    videoId: 'S43uy8YiYmo',
    duration: '30:15',
    views: '13.6K',
  },
  // ===== NATURE =====
  {
    id: 33,
    title: 'Temple Gardens & Nature',
    description: 'Explore the beautiful temple gardens with sacred trees, flowers, and peaceful natural surroundings.',
    category: 'nature',
    tag: 'Nature',
    videoId: 'rf9FAb9gLZg',
    duration: '12:30',
    views: '6.5K',
  },
  {
    id: 34,
    title: 'Temple Ponds (Pushkarini)',
    description: 'Discover the significance of temple ponds (Pushkarini) used for rituals and their connection to nature.',
    category: 'nature',
    tag: 'Nature',
    videoId: 'hWr5IEKU5Sw',
    duration: '10:45',
    views: '5.2K',
  },
  {
    id: 35,
    title: 'Temple Surroundings & Nature',
    description: 'Experience the harmony between nature and spirituality in and around temple complexes.',
    category: 'nature',
    tag: 'Nature',
    videoId: 'FM2OuVbkPVw',
    duration: '14:20',
    views: '4.8K',
  },
  {
    id: 36,
    title: 'Temple Forests & Trees',
    description: 'Explore the sacred forests and trees that surround ancient temple complexes.',
    category: 'nature',
    tag: 'Nature',
    videoId: 'jfCBWF3RF88',
    duration: '11:15',
    views: '3.9K',
  },
  {
    id: 37,
    title: 'Temple Location & Landscape',
    description: 'Discover the stunning landscapes and locations where temples are built.',
    category: 'nature',
    tag: 'Nature',
    videoId: 'cxlIUOMUrS4',
    duration: '16:30',
    views: '3.8M',
  },
]

// ============================================================
// COMPONENT
// ============================================================

function Media() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [scriptureFilter, setScriptureFilter] = useState('all')

  const filteredScriptures = useMemo(() => {
    return scripturesData.filter((item) =>
      scriptureFilter === 'all' ? true : item.category === scriptureFilter
    )
  }, [scriptureFilter])

  const filteredMedia = useMemo(() => {
    return mediaData.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter
      return matchesFilter
    })
  }, [activeFilter])

  const handleVideoClick = (video) => {
    setSelectedVideo(video)
  }

  const closeVideoPlayer = () => {
    setSelectedVideo(null)
  }

  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  const getEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ============================================================
            HERO SECTION WITH BACKGROUND VIDEO
            ============================================================ */}
        <section className="relative py-20 md:py-28 text-white border-b-4 border-orange-500 overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">

          {/* Background Video — fills the section, keeps the top of the footage (people) in frame */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          >
            <source src="/videos/temple-hero-bg.mp4" type="video/mp4" />
            {/* Add more formats for compatibility if needed */}
          </video>

          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Temple <span className="text-amber-400">Media</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              Explore the rich visual heritage of Hindu temples through our curated collection of videos.
            </p>
          </div>
        </section>

        {/* ============================================================
            STATS
            ============================================================ */}
        <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
              {statsData.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-orange-500">
                    {s.number}
                  </div>
                  <div className="text-gray-600 text-xs mt-0.5 font-medium uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FILTERS — NO ICONS
            ============================================================ */}
        <section className="py-8 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categoriesData.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat.id
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-white/80 border-2 border-amber-200/50 text-gray-600 hover:border-orange-500 hover:text-orange-500'
                  }`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}

              {/* Extra pills — link down to the Sacred Texts & Scriptures library */}
              {[
                { id: 'texts', label: 'Texts' },
                { id: 'scriptures', label: 'Scriptures' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/80 border-2 border-amber-200/50 text-gray-600 hover:border-orange-500 hover:text-orange-500"
                  onClick={() =>
                    document.getElementById('sacred-texts')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            MEDIA GRID
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                {activeFilter === 'all' ? 'All' : categoriesData.find(c => c.id === activeFilter)?.label || 'All'}{' '}
                <span className="text-amber-500">Videos</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">
                {filteredMedia.length} {filteredMedia.length === 1 ? 'video' : 'videos'} found
              </p>
            </div>

            {filteredMedia.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="font-playfair text-2xl font-bold text-darkBg">No videos found</h3>
                <p className="text-gray-600 mt-2">Try selecting a different category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredMedia.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 cursor-pointer group"
                    onClick={() => handleVideoClick(item)}
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={getThumbnailUrl(item.videoId)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360"%3E%3Crect width="480" height="360" fill="%23fdf6f0"/%3E%3Ctext x="50%25" y="50%25" font-size="60" text-anchor="middle" dy=".3em" fill="%23E85D26"%3E%3C/text%3E%3C/svg%3E'
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          ▶
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-bold text-white bg-orange-500 rounded-full px-3 py-1 inline-block mb-2 uppercase tracking-wide">
                        {item.tag}
                      </span>
                      <h3 className="font-playfair font-bold text-darkBg text-base mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                        <span>{item.views} views</span>
                        <span className="text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                          Watch Now →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            VIDEO PLAYER MODAL — YOUTUBE EMBED
            ============================================================ */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeVideoPlayer}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/70 hover:bg-black rounded-full flex items-center justify-center text-white text-xl transition-colors"
                onClick={closeVideoPlayer}
              >
                ✕
              </button>
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(selectedVideo.videoId)}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl font-bold text-darkBg">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {selectedVideo.description}
                </p>
                <div className="flex gap-4 mt-3 text-sm text-gray-400">
                  <span>{selectedVideo.duration}</span>
                  <span>{selectedVideo.views} views</span>
                  <span className="text-orange-500 font-medium">#{selectedVideo.tag}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            SACRED TEXTS & SCRIPTURES LIBRARY
            ============================================================ */}
        <section id="sacred-texts" className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Sacred Texts &amp; <span className="text-amber-500">Scriptures</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600 max-w-2xl mx-auto">
                Read or download scriptures, shlokas, and temple history — the classic texts are freely available
                public-domain editions; add your own booklets any time.
              </p>
            </div>

            {/* Featured Shlokas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {featuredShlokas.map((sh) => (
                <div
                  key={sh.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-amber-100/50"
                >
                  <h3 className="font-playfair font-bold text-darkBg text-base mb-2">{sh.title}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed mb-2">{sh.sanskrit}</p>
                  <p className="text-gray-500 text-xs italic leading-relaxed">{sh.meaning}</p>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {scriptureCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    scriptureFilter === cat.id
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-white/80 border-2 border-amber-200/50 text-gray-600 hover:border-orange-500 hover:text-orange-500'
                  }`}
                  onClick={() => setScriptureFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Library grid */}
            {filteredScriptures.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="font-playfair text-xl font-bold text-darkBg">No texts in this category yet</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Add your own PDFs in <code className="text-amber-600">public/assets/pdfs/</code> and list them in{' '}
                  <code className="text-amber-600">src/data/scripturesData.js</code>.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredScriptures.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
                  >
                    <div className="text-3xl mb-3">{item.icon || '📖'}</div>
                    <h3 className="font-playfair font-bold text-darkBg text-base mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed flex-1">{item.description}</p>
                    <a
                      href={item.downloadUrl}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      download={item.external ? undefined : true}
                      className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold hover:scale-105 transition-all"
                    >
                      {item.external ? '↗ Read Online' : '⬇ Download PDF'}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            CTA
            ============================================================ */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
                Share Your Temple Stories
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Have a temple video or story to share? Submit your content and help preserve the rich cultural heritage of Hindu temples.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  Submit Your Video
                </Link>
                <Link
                  to="/knowledge-base"
                  className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
                >
                  Explore Knowledge Base
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Media
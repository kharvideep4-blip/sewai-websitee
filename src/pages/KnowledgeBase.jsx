import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

// ============================================================
// DATA
// ============================================================

const statsData = [
  { number: '5,000+', label: 'Temple Articles' },
  { number: '2,500+', label: 'Rituals Documented' },
  { number: '500+', label: 'Temple Histories' },
  { number: '150+', label: 'Festivals Covered' },
]

const categoriesData = [
  { id: 'all',  label: 'All Topics', count: 'All' },
  { id: 'history',  label: 'History', count: '1,200' },
  { id: 'rituals',  label: 'Rituals', count: '850' },
  { id: 'architecture',  label: 'Architecture', count: '600' },
  { id: 'festivals', label: 'Festivals', count: '400' },
  { id: 'deities', label: 'Deities', count: '750' },
  { id: 'traditions',  label: 'Traditions', count: '500' },
]

const articlesData = [
  // ===== HISTORY =====
  {
    id: 1,
    title: 'The Ancient Origins of South Indian Temple Architecture',
    excerpt: 'Explore the rich history and architectural brilliance of South Indian temples spanning over 1,500 years, from the Pallava dynasty to the Chola empire.',
    category: 'history',
    tag: 'History',
    readTime: '15 min read',
    date: 'December 2024',
  },
  {
    id: 2,
    title: 'Temple Evolution: From Rock-Cut to Grand Structural Marvels',
    excerpt: 'Discover how temple architecture evolved from simple rock-cut caves to magnificent structural marvels with intricate carvings and towering gopurams.',
    category: 'history',
    tag: 'History',
    readTime: '12 min read',
    date: 'November 2024',
  },
  {
    id: 3,
    title: 'The Golden Age of Temple Construction in Ancient India',
    excerpt: 'Learn about the golden era of temple construction during the Gupta and Chola periods when some of the most magnificent temples were built.',
    category: 'history',
    tag: 'History',
    readTime: '18 min read',
    date: 'October 2024',
  },

  // ===== RITUALS =====
  {
    id: 4,
    title: 'Understanding the Significance of Daily Temple Rituals',
    excerpt: 'A deep dive into the spiritual meanings behind traditional temple rituals including Abhishekam, Archana, and Deeparadhana.',
    category: 'rituals',
    tag: 'Rituals',
    readTime: '12 min read',
    date: 'December 2024',
  },
  {
    id: 5,
    title: 'The Power of Vedic Chanting and Mantras in Temple Worship',
    excerpt: 'Vedic chanting uses precise sound vibrations to create spiritual transformation and mental harmony. Learn about the science behind mantras.',
    category: 'rituals',
    tag: 'Rituals',
    readTime: '10 min read',
    date: 'November 2024',
  },
  {
    id: 6,
    title: 'Sacred Offerings: The Art of Prasad Preparation and Distribution',
    excerpt: 'Explore the sacred tradition of preparing and distributing Prasad, from the ingredients used to the spiritual significance of each offering.',
    category: 'rituals',
    tag: 'Rituals',
    readTime: '14 min read',
    date: 'October 2024',
  },

  // ===== ARCHITECTURE =====
  {
    id: 7,
    title: 'Vastu Shastra: The Ancient Science of Temple Construction',
    excerpt: 'Discover the ancient principles of Vastu Shastra that guide temple construction, from site selection to the placement of deities.',
    category: 'architecture',
    tag: 'Architecture',
    readTime: '10 min read',
    date: 'December 2024',
  },
  {
    id: 8,
    title: 'The Symbolism of Temple Architecture: From Foundation to Gopuram',
    excerpt: 'Understand the deep symbolism behind every element of temple architecture, from the foundation to the towering gopuram.',
    category: 'architecture',
    tag: 'Architecture',
    readTime: '15 min read',
    date: 'November 2024',
  },
  {
    id: 9,
    title: 'Dravidian Architecture: The Signature Style of South Indian Temples',
    excerpt: 'Explore the distinctive features of Dravidian architecture, including towering gopurams, mandapams, and intricate stone carvings.',
    category: 'architecture',
    tag: 'Architecture',
    readTime: '12 min read',
    date: 'October 2024',
  },

  // ===== FESTIVALS =====
  {
    id: 10,
    title: 'Diwali: The Festival of Lights and Its Spiritual Significance',
    excerpt: 'Diwali celebrates the triumph of light over darkness through five days of rituals, prayers, and illumination. Learn about its deep spiritual meaning.',
    category: 'festivals',
    tag: 'Festivals',
    readTime: '8 min read',
    date: 'December 2024',
  },
  {
    id: 11,
    title: 'Maha Shivaratri: The Night of Lord Shiva',
    excerpt: 'Discover the significance of Maha Shivaratri, the night dedicated to Lord Shiva, and the rituals performed during this auspicious occasion.',
    category: 'festivals',
    tag: 'Festivals',
    readTime: '10 min read',
    date: 'November 2024',
  },
  {
    id: 12,
    title: 'Navaratri: Nine Nights of Divine Celebration',
    excerpt: 'Explore the nine nights of Navaratri, celebrating the Divine Mother in her various forms, with dances, prayers, and cultural festivities.',
    category: 'festivals',
    tag: 'Festivals',
    readTime: '14 min read',
    date: 'October 2024',
  },

  // ===== DEITIES =====
  {
    id: 13,
    title: 'Lord Ganesh: The Remover of Obstacles and Patron of New Beginnings',
    excerpt: 'Lord Ganesh, the beloved elephant-headed deity, is worshipped as the remover of obstacles and patron of arts, sciences, and new beginnings.',
    category: 'deities',
    tag: 'Deities',
    readTime: '9 min read',
    date: 'December 2024',
  },
  {
    id: 14,
    title: 'Lord Shiva: The Destroyer and Transformer in Hindu Trinity',
    excerpt: 'Understand the significance of Lord Shiva, the Destroyer and Transformer in the Hindu Trinity, and the symbolism behind his various forms.',
    category: 'deities',
    tag: 'Deities',
    readTime: '11 min read',
    date: 'November 2024',
  },
  {
    id: 15,
    title: 'Goddess Lakshmi: The Divine Mother of Wealth and Prosperity',
    excerpt: 'Learn about Goddess Lakshmi, the divine consort of Lord Vishnu, who brings prosperity, fortune, and spiritual abundance to her devotees.',
    category: 'deities',
    tag: 'Deities',
    readTime: '8 min read',
    date: 'October 2024',
  },

  // ===== TRADITIONS =====
  {
    id: 16,
    title: 'The Rich Cultural Traditions of Hindu Temple Worship',
    excerpt: 'Discover the diverse cultural traditions that shape temple worship across different regions, including rituals, customs, and community practices.',
    category: 'traditions',
    tag: 'Traditions',
    readTime: '12 min read',
    date: 'December 2024',
  },
  {
    id: 17,
    title: 'Temple Rituals: The Daily Routine That Connects Devotees to the Divine',
    excerpt: 'Explore the daily temple rituals, from early morning prayers to the evening ceremonies, that create a continuous connection between the devotees and the divine.',
    category: 'traditions',
    tag: 'Traditions',
    readTime: '10 min read',
    date: 'November 2024',
  },
  {
    id: 18,
    title: 'Regional Temple Traditions: A Journey Through India\'s Cultural Diversity',
    excerpt: 'Take a journey through India\'s diverse cultural landscape, exploring the unique temple traditions practiced in different regions.',
    category: 'traditions',
    tag: 'Traditions',
    readTime: '15 min read',
    date: 'October 2024',
  },
]

const impactData = [
  { number: '100K+', label: 'Monthly Readers' },
  { number: '50+', label: 'Contributing Scholars' },
  { number: '10+', label: 'Languages Supported' },
  { number: '4.9★', label: 'User Rating' },
]

// ============================================================
// COMPONENT
// ============================================================

function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter articles based on search query and active filter
  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter = activeFilter === 'all' || article.category === activeFilter
      return matchesSearch && matchesFilter
    })
  }, [searchQuery, activeFilter])

  // Get articles for a specific category (for category cards)
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return articlesData.length
    return articlesData.filter((a) => a.category === categoryId).length
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ============================================================
            KNOWLEDGE HERO — OM SYMBOLS REMOVED
            ============================================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Temple <span className="text-amber-400">Knowledge</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              Discover the rich cultural and historical heritage of Hindu temples
              through our comprehensive AI-powered knowledge repository.
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
            AI FEATURES
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                AI-Powered <span className="text-amber-500">Cultural Insights</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Intelligent search and discovery for temple knowledge</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <div className="text-4xl mb-3"></div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">Intelligent Search</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">Advanced search that understands cultural context, synonyms, and related concepts.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <div className="text-4xl mb-3"></div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">Contextual Understanding</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">AI analyzes historical context, cultural significance, and spiritual meanings.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <div className="text-4xl mb-3"></div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">Smart Connections</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">Automatically discover related topics, historical connections, and cultural parallels.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                <div className="text-4xl mb-3"></div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">Continuous Learning</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">Knowledge base continuously updated with new research and cultural documentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SEARCH & FILTERS
            ============================================================ */}
        <section className="py-8 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-5">
                <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-amber-200/50 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-darkBg placeholder:text-gray-400"
                  placeholder="Search temple knowledge, rituals, history, festivals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Buttons */}
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
                    <span className="mr-1">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ARTICLES GRID
            ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                {activeFilter === 'all' ? 'All' : categoriesData.find(c => c.id === activeFilter)?.label || 'All'}{' '}
                <span className="text-amber-500">Articles</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4"></div>
                <h3 className="font-playfair text-2xl font-bold text-darkBg">No articles found</h3>
                <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
                  >
                    <span className="text-xs font-bold text-white bg-orange-500 rounded-full px-3 py-1 self-start mb-3 uppercase tracking-wide">
                      {article.tag}
                    </span>
                    <h3 className="font-playfair text-lg font-bold text-darkBg mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-amber-100/50 text-xs text-gray-400">
                      <span><i className="far fa-clock mr-1"></i> {article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            KNOWLEDGE IMPACT
            ============================================================ */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold text-amber-400">
                Knowledge <span className="text-amber-500">Impact</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {impactData.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
                    {item.number}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5 font-medium uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA
            ============================================================ */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
                Explore the Wisdom of Temples
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Discover the rich cultural and historical heritage of Hindu temples through our AI-powered knowledge repository.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  to="/knowledge-base"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                   Browse Knowledge Base
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
                >
                  Request Access
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

export default KnowledgeBase
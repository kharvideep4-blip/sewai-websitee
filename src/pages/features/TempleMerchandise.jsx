import { Link } from 'react-router-dom'

function TempleMerchandise() {
  const merchandiseItems = [
    {
      id: 1,
      title: 'Religious Books',
      description: 'Sacred texts, prayer books, spiritual guides, and children\'s religious literature.',
      items: ['Sacred texts & scriptures', 'Prayer books & mantra collections', 'Spiritual guides & teachings', 'Children\'s religious books', 'Devotional literature'],
      tag: 'Sacred Collection',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Puja Items',
      description: 'Essential items for daily worship and special ceremonies including incense, lamps, and sacred vessels.',
      items: ['Incense sticks & dhoop', 'Oil lamps & diyas', 'Sacred vessels & utensils', 'Prayer beads & malas', 'Ritual materials'],
      tag: 'Worship Essentials',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Jewelry & Ornaments',
      description: 'Sacred jewelry, temple ornaments, and devotional accessories for spiritual adornment.',
      items: ['Sacred jewelry & pendants', 'Temple ornaments & decorations', 'Devotional accessories', 'Blessed items & talismans', 'Traditional adornments'],
      tag: 'Divine Adornments',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Prasadam & Food',
      description: 'Sacred food offerings, blessed sweets, and special prasadam for festivals and daily worship.',
      items: ['Sacred food & blessed sweets', 'Special prasadam offerings', 'Festival food items', 'Dry fruits & sweets', 'Organic food offerings'],
      tag: 'Blessed Offerings',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 5,
      title: 'Smart Offerings',
      description: 'Special category for religious offerings, prasadam, and blessed items with digital tracking.',
      items: ['Blessed items & relics', 'Sacred Prasadam orders', 'Religious books & scriptures', 'Devotional kits', 'Festival specials'],
      tag: 'Digital Offerings',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 6,
      title: 'Blessed Items',
      description: 'Specially blessed items including holy ash, sacred threads, consecrated jewelry, and ritual materials.',
      items: ['Sacred ash & vibhuti', 'Holy threads & rakhis', 'Consecrated jewelry', 'Ritual materials & offerings', 'Blessed water & amulets'],
      tag: 'Divine Blessings',
      bgColor: 'from-orange-600 to-orange-500',
    },
    {
      id: 7,
      title: 'Festival Specials',
      description: 'Special merchandise for temple festivals including decorative items, lights, and festival essentials.',
      items: ['Festive decorations', 'Traditional lights & lamps', 'Festival essentials', 'Gift items & hampers', 'Seasonal offerings'],
      tag: 'Festival Collection',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 8,
      title: 'Gift Hampers',
      description: 'Curated gift hampers featuring a combination of religious items, blessed offerings, and spiritual gifts.',
      items: ['Religious gift sets', 'Blessed item combos', 'Festival gift hampers', 'Spiritual care packages', 'Custom gift boxes'],
      tag: 'Perfect Gifts',
      bgColor: 'from-orange-500 to-amber-500',
    },
    // ===== NEW CARD 9 =====
    {
      id: 9,
      title: 'Sacred Artifacts & Statues',
      description: 'Divine idols, sacred artifacts, and spiritual statues for home altars and temple worship.',
      items: ['Divine idols & murtis', 'Sacred artifacts', 'Spiritual statues', 'Home altar items', 'Temple decorations'],
      tag: 'Divine Treasures',
      bgColor: 'from-amber-500 to-orange-500',
    },
  ]

  // Split into rows of 3
  const rows = []
  for (let i = 0; i < merchandiseItems.length; i += 3) {
    rows.push(merchandiseItems.slice(i, i + 3))
  }

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">Merchandise</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Discover sacred offerings, religious books, puja items, blessed jewelry, and prasadam for your spiritual journey.
          </p>
        </div>
      </section>

      {/* ===== MERCHANDISE GRID ===== */}
      {rows.map((row, rowIndex) => (
        <section
          key={rowIndex}
          className={`py-12 ${rowIndex % 2 === 1 ? 'bg-gradient-to-b from-amber-50/30 to-cream' : 'bg-gradient-to-b from-cream to-amber-50/30'} border-b border-orange-500/20`}
        >
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {row.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}
                  >
                    {String(item.id).padStart(2, '0')}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600 text-left">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-orange-500">-</span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block mt-4 bg-orange-500/10 text-orange-500 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Find Your Sacred Treasures
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Discover authentic religious items, blessed offerings, and spiritual merchandise for your devotion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Shop Now
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

export default TempleMerchandise
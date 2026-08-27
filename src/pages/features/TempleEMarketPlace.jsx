import { Link } from 'react-router-dom'

function TempleEMarketPlace() {
  const stats = [
    { number: '500+', label: 'Products Available' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '100+', label: 'Temple Partners' },
    { number: '98%', label: 'Satisfaction Rate' },
  ]

  const categories = [
    {
      id: 1,
      title: 'Religious Books',
      items: ['Sacred texts', 'Prayer books', 'Spiritual guides', 'Children\'s books'],
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Temple Items',
      items: ['Incense', 'Oil lamps', 'Prayer beads', 'Sacred vessels'],
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Jewelry & Ornaments',
      items: ['Sacred jewelry', 'Temple ornaments', 'Devotional accessories', 'Blessed items'],
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Prasadam & Food',
      items: ['Sacred food', 'Blessed sweets', 'Special offerings', 'Festival items'],
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const features = [
    {
      id: 1,
      title: 'Online Store',
      description: 'Complete e-commerce platform for selling religious items, books, and temple merchandise.',
      bgColor: 'from-orange-500 to-amber-500',
      points: ['Product catalog', 'Shopping cart', 'Wishlist', 'Quick checkout'],
    },
    {
      id: 2,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with automated stock alerts and supplier management.',
      bgColor: 'from-green-500 to-green-600',
      points: ['Stock tracking', 'Low stock alerts', 'Supplier management', 'Batch tracking'],
    },
    {
      id: 3,
      title: 'Order Fulfillment',
      description: 'Streamlined order processing with shipping integration and delivery tracking.',
      bgColor: 'from-purple-600 to-purple-400',
      points: ['Order processing', 'Shipping labels', 'Delivery tracking', 'Return management'],
    },
    {
      id: 4,
      title: 'Product Reviews',
      description: 'Customer review and rating system to build trust and improve product quality.',
      bgColor: 'from-blue-500 to-blue-600',
      points: ['Customer reviews', 'Rating system', 'Photo reviews', 'Review moderation'],
    },
    {
      id: 5,
      title: 'Secure Payments',
      description: 'Multiple payment options with secure processing and fraud protection.',
      bgColor: 'from-purple-600 to-purple-400',
      points: ['Multiple payment methods', 'Secure checkout', 'Fraud protection', 'Subscription billing'],
    },
    {
      id: 6,
      title: 'Smart Offerings',
      description: 'Special category for religious offerings, prasadam, and blessed items.',
      bgColor: 'from-orange-500 to-amber-500',
      points: ['Blessed items', 'Prasadam orders', 'Sacred jewelry', 'Religious books'],
    },
    {
      id: 7,
      title: 'Customer Management',
      description: 'Comprehensive customer relationship management with order history and preferences.',
      bgColor: 'from-green-500 to-green-600',
      points: ['Customer profiles', 'Order history', 'Preferences', 'Loyalty programs'],
    },
    {
      id: 8,
      title: 'Sales Analytics',
      description: 'Detailed sales reports and analytics to optimize inventory and marketing strategies.',
      bgColor: 'from-blue-500 to-blue-600',
      points: ['Sales reports', 'Product analytics', 'Customer insights', 'Revenue tracking'],
    },
  ]

  const whyChoose = [
    {
      id: 1,
      title: 'Smart Commerce',
      description: 'Specialized platform for religious items with proper categorization and spiritual context.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Community Focused',
      description: 'Built to serve temple communities with devotee-centric features and experiences.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Revenue Generation',
      description: 'Additional revenue stream for temples through online sales and digital commerce.',
      bgColor: 'from-green-500 to-green-600',
    },
  ]

  // Split features into rows of 4
  const featureRows = []
  for (let i = 0; i < features.length; i += 4) {
    featureRows.push(features.slice(i, i + 4))
  }

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Temple <span className="text-amber-400">E‑MarketPlace</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Complete online marketplace for religious items, books, and temple merchandise with integrated inventory and order management.
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

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Smart <span className="text-amber-500">Product Categories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Curated collection of religious and spiritual items for devotees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.bgColor} flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}>
                  {String(category.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{category.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <span className="text-orange-500">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      {featureRows.map((row, rowIndex) => (
        <section
          key={rowIndex}
          className={`py-12 ${rowIndex % 2 === 1 ? 'bg-gradient-to-b from-amber-50/30 to-cream' : 'bg-gradient-to-b from-cream to-amber-50/30'} border-b border-orange-500/20`}
        >
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {row.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center text-white text-lg font-bold mb-4`}
                  >
                    {String(feature.id).padStart(2, '0')}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{feature.description}</p>
                  {feature.points && feature.points.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-orange-500">-</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="#" className="mt-4 inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                    Explore →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Why Choose SEWAI <span className="text-amber-500">E‑MarketPlace?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Dedicated platform designed specifically for religious and spiritual commerce needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}>
                  {String(item.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
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
              Launch Your Smart Marketplace
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Create an additional revenue stream while serving your devotee community with authentic religious products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Start Selling
              </Link>
              <Link
                to="/features/inventory"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Explore Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default TempleEMarketPlace
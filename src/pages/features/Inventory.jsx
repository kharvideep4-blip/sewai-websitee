import { Link } from 'react-router-dom'

function Inventory() {
  const stats = [
    { number: '35%', label: 'Cost Reduction', desc: 'Reduce inventory costs by 25-40% through better tracking and demand forecasting.' },
    { number: '50%', label: 'Time Saved', desc: 'Streamline inventory operations and reduce manual work with automation.' },
    { number: '98%', label: 'Accuracy Rate', desc: 'Eliminate stock discrepancies and improve inventory accuracy significantly.' },
  ]

  const categories = [
    {
      title: 'Puja Items',
      priority: 'High Priority',
      priorityColor: 'from-orange-500 to-orange-600',
      items: ['Incense sticks', 'Oil lamps', 'Sacred vessels', 'Prayer materials'],
    },
    {
      title: 'Food & Prasadam',
      priority: 'Critical Priority',
      priorityColor: 'from-red-600 to-red-700',
      items: ['Rice', 'Ghee', 'Sweets', 'Fruits'],
    },
    {
      title: 'Cleaning Supplies',
      priority: 'Medium Priority',
      priorityColor: 'from-purple-600 to-purple-400',
      items: ['Temple cleaners', 'Maintenance items', 'Sanitation supplies'],
    },
    {
      title: 'Office Supplies',
      priority: 'Low Priority',
      priorityColor: 'from-blue-500 to-blue-600',
      items: ['Stationery', 'Printing materials', 'Documentation'],
    },
  ]

  const featureRows = [
    // Row 1: Stock Management, Analytics & Reports, Smart Alerts, Supplier Management
    [
      {
        id: 1,
        title: 'Stock Management',
        description: 'Comprehensive inventory tracking with real-time stock levels, product categorization, and location management.',
        bgColor: 'from-green-500 to-green-600',
        points: ['Real-time tracking', 'Product categories', 'Location mapping', 'Batch management'],
      },
      {
        id: 2,
        title: 'Analytics & Reports',
        description: 'Detailed analytics and reporting to understand inventory patterns, usage trends, and optimization opportunities.',
        bgColor: 'from-purple-600 to-purple-400',
        points: ['Usage analytics', 'Trend reports', 'Cost analysis', 'Performance metrics'],
      },
      {
        id: 3,
        title: 'Smart Alerts',
        description: 'Automated alert system for low stock, expiry dates, and reorder points to prevent stockouts.',
        bgColor: 'from-orange-500 to-amber-500',
        points: ['Low stock alerts', 'Expiry notifications', 'Reorder reminders', 'Custom thresholds'],
      },
      {
        id: 4,
        title: 'Supplier Management',
        description: 'Manage supplier relationships, purchase orders, and delivery tracking for seamless procurement.',
        bgColor: 'from-blue-500 to-blue-600',
        points: ['Supplier database', 'Purchase orders', 'Delivery tracking', 'Vendor performance'],
      },
    ],
    // Row 2: Barcode Integration, Movement Tracking, Demand Forecasting, Auto Reordering
    [
      {
        id: 5,
        title: 'Barcode Integration',
        description: 'Barcode and QR code support for quick item identification, check-in/check-out, and inventory audits.',
        bgColor: 'from-purple-600 to-purple-400',
        points: ['Barcode scanning', 'QR code support', 'Mobile scanning', 'Audit trails'],
      },
      {
        id: 6,
        title: 'Movement Tracking',
        description: 'Complete audit trail of all inventory movements with timestamps, user records, and transaction history.',
        bgColor: 'from-green-500 to-green-600',
        points: ['Movement logs', 'User tracking', 'Transaction history', 'Audit reports'],
      },
      {
        id: 7,
        title: 'Demand Forecasting',
        description: 'Intelligent forecasting based on historical data, seasonal patterns, and temple event calendars.',
        bgColor: 'from-orange-500 to-amber-500',
        points: ['Demand prediction', 'Seasonal analysis', 'Event-based planning', 'Smart recommendations'],
      },
      {
        id: 8,
        title: 'Auto Reordering',
        description: 'Automated reordering system based on predefined rules, consumption patterns, and festival schedules.',
        bgColor: 'from-blue-500 to-blue-600',
        points: ['Auto purchase orders', 'Consumption patterns', 'Festival planning', 'Budget controls'],
      },
    ],
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Inventory <span className="text-amber-400">Management</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Comprehensive inventory management system designed for temple operations with smart tracking and automated workflows.
          </p>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-orange-500">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INVENTORY CATEGORIES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Inventory <span className="text-amber-500">Categories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Organized categorization system for all temple inventory items.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <span className={`inline-block text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${category.priorityColor} mb-3`}>
                  {category.priority}
                </span>
                <h3 className="font-playfair text-xl font-bold text-darkBg">{category.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <span className="text-orange-500">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE GRID ===== */}
      {featureRows.map((row, rowIndex) => (
        <section
          key={rowIndex}
          className={`py-12 ${rowIndex % 2 === 1 ? 'bg-gradient-to-b from-amber-50/30 to-cream' : 'bg-gradient-to-b from-cream to-amber-50/30'} border-b border-orange-500/20`}
        >
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  <h3 className="font-playfair text-lg font-bold text-darkBg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.points && feature.points.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-orange-500">✦</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to="#"
                    className="mt-4 inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                  >
                    Explore →
                  </Link>
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
              Master Your Temple Inventory
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Take control of your temple's inventory with intelligent tracking, automated workflows, and comprehensive reporting.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Optimize Inventory
              </Link>
              <Link
                to="/contact"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Inventory
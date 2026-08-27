import { Link } from 'react-router-dom'

function HallBooking() {
  const stats = [
    { number: '500+', label: 'Events Hosted' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '50+', label: 'Partner Vendors' },
    { number: '15+', label: 'Hall Options' },
  ]

  const hallFeatures = [
    {
      id: 1,
      title: 'Spacious Wedding Halls',
      description: 'Elegantly designed wedding halls with capacity ranging from 100 to 2000 guests, suitable for intimate ceremonies and grand celebrations.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Flexible Time Slots',
      description: 'Choose from morning, afternoon, evening, or full-day slots with flexible timing options to suit your wedding schedule.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Premium Amenities',
      description: 'State-of-the-art sound systems, elegant lighting, air conditioning, and comfortable seating arrangements for your guests.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Comprehensive Wedding Services',
      description: 'End-to-end wedding services including decor, catering, photography, videography, and event planning coordination.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const halls = [
    {
      id: 1,
      name: 'Grand Convention Hall',
      capacity: '1000 - 2000 Guests',
      area: '5000 sq ft',
      features: ['Stage & Podium', 'Projector & Screen', 'Dressing Rooms', 'Parking Available'],
      price: '₹1,50,000',
      bgColor: 'from-amber-500 to-orange-500',
    },
    {
      id: 2,
      name: 'Royal Banquet Hall',
      capacity: '400 - 800 Guests',
      area: '2500 sq ft',
      features: ['Crystal Chandeliers', 'Premium Sound', 'VIP Lounge', 'Catering Kitchen'],
      price: '₹85,000',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 3,
      name: 'Garden Pavilion',
      capacity: '200 - 500 Guests',
      area: '1800 sq ft',
      features: ['Open Air Setting', 'Garden View', 'Outdoor Lighting', 'Natural Ambience'],
      price: '₹60,000',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      name: 'Heritage Hall',
      capacity: '100 - 300 Guests',
      area: '1200 sq ft',
      features: ['Traditional Decor', 'Intimate Setting', 'Heritage Architecture', 'Privacy'],
      price: '₹40,000',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const timeSlots = [
    { slot: 'Morning Session', timing: '7:00 AM – 12:00 PM', duration: '5 Hours', price: 'Standard Rate' },
    { slot: 'Afternoon Session', timing: '12:00 PM – 5:00 PM', duration: '5 Hours', price: 'Standard Rate' },
    { slot: 'Evening Session', timing: '5:00 PM – 10:00 PM', duration: '5 Hours', price: 'Premium Rate' },
    { slot: 'Full Day', timing: '7:00 AM – 10:00 PM', duration: '15 Hours', price: 'Discounted Rate' },
    { slot: 'Half Day Morning', timing: '7:00 AM – 12:00 PM', duration: '5 Hours', price: 'Standard Rate' },
    { slot: 'Half Day Evening', timing: '5:00 PM – 10:00 PM', duration: '5 Hours', price: 'Standard Rate' },
  ]

  const services = [
    {
      label: 'Photography Services',
      desc: 'Professional wedding photography with pre-wedding shoots, candid coverage, and complete wedding album.',
      price: '₹25,000 – ₹75,000',
    },
    {
      label: 'Videography Services',
      desc: 'Full wedding video coverage with cinematic highlights, drone shots, and edited wedding film.',
      price: '₹35,000 – ₹95,000',
    },
    {
      label: 'Catering Services',
      desc: 'Customized menu options including vegetarian, non-vegetarian, fusion, and multi-cuisine wedding feasts.',
      price: '₹500 – ₹1500 per plate',
    },
    {
      label: 'Decoration Services',
      desc: 'Theme-based wedding decorations including floral arrangements, stage setup, lighting, and mandap decoration.',
      price: '₹30,000 – ₹1,50,000',
    },
    {
      label: 'Mehendi & Makeup',
      desc: 'Professional bridal makeup, mehendi artists, hairstyling, and grooming services for the wedding party.',
      price: '₹10,000 – ₹40,000',
    },
    {
      label: 'Event Planning & Coordination',
      desc: 'Full wedding planning and coordination services including vendor management, timeline management, and on-site coordination.',
      price: '₹30,000 – ₹90,000',
    },
  ]

  const documentation = [
    'Valid ID Proof (Aadhar, PAN, or Passport)',
    'Proof of Address (Electricity Bill, Rental Agreement, or Property Document)',
    'Wedding Invitation Copy',
    'Booking Advance Payment Receipt',
    'Security Deposit (Refundable)',
    'Signed Terms & Conditions Agreement',
    'Guest List Estimate (for capacity planning)',
    'Special Request Form (if any)',
  ]

  const assets = [
    'Stage & Podium with Decoration',
    'Sound System with Microphones',
    'Projector & Projection Screen',
    'Dressing Rooms (Bride & Groom)',
    'Sofa Sets & Furniture',
    'Dining Tables & Chairs',
    'Parking Area for Guests',
    'Washrooms & Restrooms',
    'Air Conditioning & Heating',
    'Lighting & Electrical Systems',
    'Catering Kitchen with Equipment',
    'Security & Safety Systems',
  ]

  const dressCode = [
    'Traditional Wedding Attire',
    'Formal Evening Wear for Guests',
    'Color Theme (Optional)',
    'No Casual Wear Allowed',
    'Footwear: Formal/ Traditional Only',
    'Dupatta/Stole: Mandatory for Ceremonial Events',
  ]

  const registrationSteps = [
    { step: '01', title: 'Select Hall', desc: 'Choose your preferred wedding hall based on capacity, location, and amenities.' },
    { step: '02', title: 'Choose Date & Time', desc: 'Select your wedding date and preferred time slot from available options.' },
    { step: '03', title: 'Book with Advance', desc: 'Pay a booking advance to confirm your reservation and secure the date.' },
    { step: '04', title: 'Submit Documents', desc: 'Submit required documentation and complete the registration process.' },
    { step: '05', title: 'Plan Services', desc: 'Customize your wedding with additional services like catering, photography, and decor.' },
    { step: '06', title: 'Celebrate Your Day', desc: 'Enjoy your special day with our dedicated support and seamless arrangements.' },
  ]

  const rules = [
    {
      label: 'Booking Confirmation',
      desc: 'Booking is confirmed only after receiving the advance payment and signed agreement.',
    },
    {
      label: 'Cancellation Policy',
      desc: 'Cancellation within 15 days of the event: 50% refund. 7 days: 25% refund. Less than 7 days: No refund.',
    },
    {
      label: 'Security Deposit',
      desc: 'A refundable security deposit of ₹10,000 is required, which is returned after the event (subject to no damages).',
    },
    {
      label: 'Timing Compliance',
      desc: 'The event must end at the agreed time. Extended hours are subject to additional charges.',
    },
    {
      label: 'Outside Vendors',
      desc: 'Outside vendors are allowed with prior approval and must follow temple guidelines.',
    },
    {
      label: 'Alcohol Policy',
      desc: 'Alcohol is strictly prohibited inside the temple premises and halls.',
    },
    {
      label: 'Noise Restrictions',
      desc: 'Sound levels must be maintained within permissible limits. No loud music after 10:00 PM.',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Hall <span className="text-amber-400">Booking</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Book the perfect venue for your wedding, reception, and other special occasions with our elegant halls and comprehensive services.
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
                Wedding & Event <span className="text-amber-500">Hall Booking</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Our wedding hall booking service offers you a seamless experience from planning to execution. With multiple halls ranging from intimate spaces to grand venues, we cater to weddings of all sizes and styles.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Located in a serene temple complex, our halls provide the perfect setting for your special day with easy accessibility, ample parking, and all modern amenities. Our experienced team ensures every detail is taken care of so you can focus on celebrating your special moments.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Book Now →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Perfect Venue for Your Special Day</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Elegant halls, comprehensive services, and dedicated support for a memorable wedding celebration.</p>
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
            <p className="text-gray-600 text-sm">Explore our hall booking features designed for your perfect wedding celebration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {hallFeatures.map((feature) => (
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

      {/* ===== HALLS AVAILABLE ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Available <span className="text-amber-500">Halls</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Choose from a variety of halls to suit your wedding size and style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {halls.map((hall) => (
              <div
                key={hall.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${hall.bgColor} flex items-center justify-center text-white font-bold text-sm mb-3`}>
                  {String(hall.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-xl font-bold text-darkBg">{hall.name}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm">
                  <span className="text-orange-500 font-medium">Capacity: {hall.capacity}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Area: {hall.area}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {hall.features.map((item, idx) => (
                    <span key={idx} className="bg-orange-500/10 text-orange-600 text-xs px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex justify-between items-center border-t border-amber-100/30 pt-3">
                  <span className="text-xl font-playfair font-bold text-orange-500">{hall.price}</span>
                  <Link to="/contact" className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIME SLOTS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Time <span className="text-amber-500">Slots</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Flexible time slots to suit your wedding schedule.</p>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100/50">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Slot Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Timing</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Duration</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white/50' : 'bg-amber-50/30'}>
                    <td className="px-4 py-3 text-sm font-semibold text-darkBg">{item.slot}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.timing}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.duration}</td>
                    <td className="px-4 py-3 text-sm text-orange-500 font-medium">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== WEDDING SERVICES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Wedding <span className="text-amber-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Comprehensive services to make your wedding day truly special.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col p-4 border-b border-amber-100/30 last:border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <strong className="text-darkBg text-sm block">{service.label}</strong>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                    <span className="text-orange-500 font-medium text-xs inline-block mt-1">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ASSETS & FACILITIES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Assets & <span className="text-amber-500">Facilities</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Everything you need for a perfect wedding celebration.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {assets.map((asset, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-amber-100/50 text-center hover:shadow-md transition-all duration-300"
              >
                <span className="text-orange-500 font-bold text-xs block mb-1">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-gray-700 text-sm">{asset}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DRESS CODE ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Dress <span className="text-amber-500">Code</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Guidelines for wedding attire and dress code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {dressCode.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-amber-100/50 flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REGISTRATION PROCESS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Registration <span className="text-amber-500">Process</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Simple steps to book your wedding hall.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {registrationSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUIRED DOCUMENTATION ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Required <span className="text-amber-500">Documentation</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Documents needed for hall booking confirmation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {documentation.map((doc, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-amber-100/50 flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TERMS & RULES ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Terms & <span className="text-amber-500">Rules</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Important terms and conditions for hall booking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-3 items-start p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50">
                <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong className="text-darkBg text-sm block">{rule.label}</strong>
                  <p className="text-gray-600 text-sm">{rule.desc}</p>
                </div>
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
              Book Your Dream Wedding Venue
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Secure the perfect hall for your special day with our easy booking process and comprehensive wedding services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Book Your Hall Now
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

export default HallBooking
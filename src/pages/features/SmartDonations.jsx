import { Link } from 'react-router-dom'

function SmartDonations() {
  const features = [
    {
      id: 1,
      title: 'Intelligent Analysis',
      description: 'AI analyzes your donation history, spiritual preferences, and temple needs to provide smart recommendations.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Targeted Impact',
      description: "Focus donations where they're needed most, ensuring maximum spiritual and practical benefit.",
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 3,
      title: 'Personal Connection',
      description: 'Connect deeply with causes that resonate with your spiritual journey and values.',
      bgColor: 'from-green-500 to-green-600',
    },
  ]

  const recommendations = [
    {
      id: 1,
      title: 'Support Ganesh Chaturthi Celebration',
      description: 'Based on your previous festival donations and high engagement. Your past support for festivals has been invaluable. Ganesh Chaturthi is approaching and needs urgent funding.',
      urgency: 'Urgent',
      match: '98%',
      progress: null,
      progressLabel: null,
      priority: 'High priority',
      showProgress: false,
    },
    {
      id: 2,
      title: 'Daily Puja Services',
      description: 'Support daily temple rituals and ceremonial offerings. Your regular support helps maintain the spiritual energy.',
      urgency: 'Progress',
      match: '85%',
      progress: 64,
      progressLabel: '64% complete',
      priority: 'High priority',
      showProgress: true,
    },
    {
      id: 3,
      title: 'Festival Celebrations',
      description: 'Grand celebrations for upcoming Ganesh Chaturthi. Join thousands of devotees in this spiritual celebration.',
      urgency: 'Progress',
      match: '92%',
      progress: 72.5,
      progressLabel: '72.5% complete',
      priority: 'High priority',
      showProgress: true,
    },
    {
      id: 4,
      title: 'Continue Daily Puja Support',
      description: 'Matches your spiritual preferences and donation pattern. Your regular support for daily pujas helps maintain the spiritual energy you value in morning aartis.',
      urgency: 'Match',
      match: '92%',
      progress: null,
      progressLabel: null,
      priority: null,
      showProgress: false,
    },
    {
      id: 5,
      title: 'Prasadam Distribution Drive',
      description: 'New opportunity aligned with your seva inclination. Given your high engagement level, expanding to food seva could amplify your spiritual merit.',
      urgency: 'Match',
      match: '85%',
      progress: 60,
      progressLabel: '₹48,000 / ₹80,000',
      priority: 'Medium priority',
      showProgress: true,
    },
    {
      id: 6,
      title: 'Temple Infrastructure',
      description: 'Maintenance and improvement of temple facilities. Help preserve the sacred space for generations to come.',
      urgency: 'Match',
      match: '60%',
      progress: 24,
      progressLabel: '₹1,20,000 / ₹5,00,000',
      priority: 'Medium priority',
      showProgress: true,
    },
    {
      id: 7,
      title: 'Spiritual Education',
      description: 'Religious classes and cultural programs. Support the next generation of spiritual leaders and knowledge keepers.',
      urgency: 'Match',
      match: '45%',
      progress: 35,
      progressLabel: '₹35,000 / ₹1,00,000',
      priority: 'Low priority',
      showProgress: true,
    },
  ]

  const insights = [
    { number: '85%', label: 'Donation Timing Accuracy', desc: 'Based on your past patterns' },
    { number: '₹1,750', label: 'Optimal Monthly Amount', desc: 'For maximum spiritual impact' },
    { number: '3.2x', label: 'Impact Multiplier', desc: 'Vs random donations' },
  ]

  const steps = [
    { number: '01', title: 'Data Analysis', desc: 'AI analyzes your donation history, spiritual preferences, and engagement patterns.' },
    { number: '02', title: 'Need Assessment', desc: 'System evaluates current temple needs, urgency levels, and funding gaps.' },
    { number: '03', title: 'Smart Matching', desc: 'AI matches your profile with optimal donation opportunities and timing.' },
    { number: '04', title: 'Personalized Suggestions', desc: 'Receive tailored recommendations with impact projections and spiritual benefits.' },
  ]

  const benefits = [
    { id: 1, title: 'Targeted Impact', desc: 'Your donations go exactly where they\'re needed most, maximizing spiritual and practical benefits.' },
    { id: 2, title: 'Perfect Timing', desc: 'AI identifies optimal donation timing based on temple cycles and your spiritual journey.' },
    { id: 3, title: 'Growing Merit', desc: 'Strategic donations aligned with your values amplify spiritual merit and community impact.' },
    { id: 4, title: 'Community Connection', desc: 'Connect with like-minded devotees and participate in collective spiritual endeavors.' },
    { id: 5, title: 'Clear Insights', desc: 'Understand the real impact of your contributions with detailed analytics and feedback.' },
    { id: 6, title: 'Spiritual Growth', desc: 'Each recommended donation supports your personal spiritual development and temple community.' },
  ]

  const stories = [
    {
      initials: 'RS',
      name: 'Rajesh Sharma',
      role: 'Regular Devotee',
      quote: 'The AI recommendations helped me donate ₹50,000 strategically over 6 months. I could see exactly how my contributions supported the Diwali celebration and daily pujas. The impact visibility made my spiritual journey more meaningful.',
      impact: '3x more effective donations',
    },
    {
      initials: 'PM',
      name: 'Priya Mehta',
      role: 'Community Leader',
      quote: 'The system understood my passion for education and recommended supporting the youth spiritual programs. Now 200+ children benefit from classes I helped fund. The AI made my donations feel personally connected.',
      impact: '200+ children benefited',
    },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Smart Donation <span className="text-amber-400">Recommendations</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Experience AI-powered donation guidance that understands your spiritual journey and maximizes your impact. Get personalized recommendations based on temple needs, your preferences, and divine timing.
          </p>
        </div>
      </section>

      {/* ===== THREE KEY FEATURES ===== */}
      <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center text-white text-lg font-bold mb-4`}>
                  {String(feature.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{feature.description}</p>
                <Link to="#" className="mt-4 inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI-POWERED DONATION RECOMMENDATIONS ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              AI-Powered <span className="text-amber-500">Donation Recommendations</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Our intelligent system analyzes your spiritual journey and temple needs to suggest meaningful donation opportunities that align with your values and maximize impact.
            </p>
          </div>

          {/* User Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100/50 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <div className="font-bold text-darkBg text-lg">Welcome back, Devotee Raman</div>
                <div className="text-gray-500 text-sm">Your spiritual journey matters to us</div>
              </div>
              <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                <div>
                  <span className="text-gray-500 text-sm">Total contributions:</span>
                  <span className="font-bold text-orange-500 ml-1">₹15,000</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Last donation:</span>
                  <span className="font-bold text-orange-500 ml-1">45 days ago</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-center font-playfair text-2xl font-bold text-darkBg mb-6">Personalized Recommendations</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {rec.urgency && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      rec.urgency === 'Urgent' ? 'bg-red-500 text-white' :
                      rec.urgency === 'Progress' ? 'bg-blue-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {rec.urgency}
                    </span>
                  )}
                  {rec.match && (
                    <span className="text-xs font-bold bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full">
                      {rec.match} match
                    </span>
                  )}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg mb-2">{rec.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{rec.description}</p>

                {rec.showProgress && rec.progress !== null && (
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${rec.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{rec.progressLabel}</span>
                    </div>
                  </div>
                )}

                {rec.priority && (
                  <div className="mt-2 text-xs font-medium text-gray-500">
                    {rec.priority}
                  </div>
                )}

                <Link to="#" className="mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-2.5 px-4 rounded-full text-center text-sm hover:scale-105 transition-all duration-300">
                  Donate Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI INSIGHTS & RECOMMENDATIONS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              AI Insights &amp; <span className="text-amber-500">Recommendations</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Data-driven insights to maximize your spiritual impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-playfair font-bold text-orange-500">{item.number}</div>
                <div className="text-gray-700 font-semibold text-sm mt-1">{item.label}</div>
                <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW AI RECOMMENDATIONS WORK ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              How AI <span className="text-amber-500">Recommendations</span> Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Four steps to smarter, more impactful donations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.number}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS OF AI-POWERED DONATIONS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Benefits of <span className="text-amber-500">AI-powered Donations</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Transform your giving experience with intelligent technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center mb-3">
                  {String(benefit.id).padStart(2, '0')}
                </div>
                <h4 className="font-playfair text-lg font-bold text-darkBg">{benefit.title}</h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Success <span className="text-amber-500">Stories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Real devotees, real impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center">
                    {story.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-darkBg">{story.name}</h4>
                    <span className="text-xs text-gray-400">{story.role}</span>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic">"{story.quote}"</blockquote>
                <div className="mt-3 text-xs font-medium">
                  <span className="text-gray-500">Impact:</span>
                  <span className="text-orange-500 font-bold ml-1">{story.impact}</span>
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
              Start Your Smart Donation Journey
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Let AI guide you to make the most meaningful contributions for your spiritual growth and temple community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Get Started
              </Link>
              <Link
                to="/features/payment-gateway"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Explore Payment Gateway
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default SmartDonations
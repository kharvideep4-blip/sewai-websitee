import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function AIFeatures() {
  const [activeTab, setActiveTab] = useState('guide')
  const [workflowProgress, setWorkflowProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { user: 'DevoteeRam', time: '10:45 PM', text: 'Om Namah Shivaya', isSelf: false },
    { user: 'SpiritualSeeker', time: '10:45 PM', text: 'Such peaceful darshan, feeling blessed', isSelf: false },
    { user: 'Temple Priest', time: '10:46 PM', text: "May Lord's blessings be with all devotees", isSelf: false },
    { user: 'Bhakti123', time: '10:46 PM', text: 'Har Har Mahadev! Beautiful arati', isSelf: false },
  ])
  const [chatInput, setChatInput] = useState('')
  const [viewerCount, setViewerCount] = useState(1247)
  const [liveTime, setLiveTime] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const chatMessagesRef = useRef(null)
  const intervalRef = useRef(null)

  // Spiritual content in different languages
  const spiritualContent = {
    'English': {
      title: 'Divine Guidance',
      greeting: 'Welcome to the divine presence. May peace and blessings be with you.',
      mantra: 'Om Namah Shivaya - I bow to Lord Shiva',
      message: 'The journey of devotion begins with a pure heart. Let your prayers be filled with love and surrender.',
      dailyVerse: 'Yoga is the journey of the self, through the self, to the self.',
    },
    'Hindi': {
      title: 'दिव्य मार्गदर्शन',
      greeting: 'ईश्वरीय उपस्थिति में आपका स्वागत है। शांति और आशीर्वाद आपके साथ रहे।',
      mantra: 'ॐ नमः शिवाय - मैं भगवान शिव को नमन करता हूँ',
      message: 'भक्ति की यात्रा शुद्ध हृदय से शुरू होती है। अपनी प्रार्थनाओं को प्रेम और समर्पण से भरें।',
      dailyVerse: 'योग आत्मा की यात्रा है, आत्मा के माध्यम से, आत्मा की ओर।',
    },
    'Sanskrit': {
      title: 'दिव्यम् मार्गदर्शनम्',
      greeting: 'ईश्वरीयसान्निध्ये भवतः स्वागतम्। शान्तिः आशीर्वादः च भवतु।',
      mantra: 'ॐ नमः शिवाय - शिवाय नमः',
      message: 'भक्तेः यात्रा शुद्धहृदयेन आरभ्यते। प्रार्थनाः प्रेमसमर्पणेन पूरयत।',
      dailyVerse: 'योगः आत्मनः यात्रा, आत्मना, आत्मानं प्रति।',
    },
    'Tamil': {
      title: 'தெய்வீக வழிகாட்டுதல்',
      greeting: 'தெய்வீக முன்னிலையில் உங்களை வரவேற்கிறோம். அமைதியும் ஆசீர்வாதமும் உங்களுடன் இருக்கட்டும்.',
      mantra: 'ஓம் நமசிவாய - சிவபெருமானை வணங்குகிறேன்',
      message: 'பக்தியின் பயணம் தூய இதயத்துடன் தொடங்குகிறது. உங்கள் பிரார்த்தனைகளை அன்பு மற்றும் சமர்ப்பணத்துடன் நிரப்புங்கள்.',
      dailyVerse: 'யோகா என்பது ஆத்மாவின் பயணம், ஆத்மாவின் மூலம், ஆத்மாவை நோக்கி.',
    },
    'Telugu': {
      title: 'దివ్య మార్గదర్శనం',
      greeting: 'దివ్య సాన్నిధ్యంలో మీకు స్వాగతం. శాంతి మరియు ఆశీర్వాదాలు మీతో ఉండాలి.',
      mantra: 'ఓం నమః శివాయ - శివుడికి నమస్కారం',
      message: 'భక్తి యొక్క ప్రయాణం స్వచ్ఛమైన హృదయంతో ప్రారంభమవుతుంది. మీ ప్రార్థనలను ప్రేమ మరియు శరణాగతితో నింపండి.',
      dailyVerse: 'యోగా అనేది ఆత్మ యొక్క ప్రయాణం, ఆత్మ ద్వారా, ఆత్మ వైపు.',
    },
    'Marathi': {
      title: 'दैवी मार्गदर्शन',
      greeting: 'ईश्वरीय उपस्थितीत आपले स्वागत आहे. शांती आणि आशीर्वाद आपल्यासोबत राहो.',
      mantra: 'ॐ नमः शिवाय - शिवाला नमस्कार',
      message: 'भक्तीचा प्रवास शुद्ध हृदयाने सुरू होतो. आपल्या प्रार्थना प्रेम आणि समर्पणाने भरा.',
      dailyVerse: 'योग म्हणजे आत्म्याचा प्रवास, आत्म्याद्वारे, आत्म्याकडे.',
    },
    'Gujarati': {
      title: 'દિવ્ય માર્ગદર્શન',
      greeting: 'ઈશ્વરીય ઉપસ્થિતિમાં તમારું સ્વાગત છે. શાંતિ અને આશીર્વાદ તમારી સાથે રહે.',
      mantra: 'ૐ નમઃ શિવાય - શિવને નમસ્કાર',
      message: 'ભક્તિની યાત્રા શુદ્ધ હૃદયથી શરૂ થાય છે. તમારી પ્રાર્થનાઓને પ્રેમ અને સમર્પણથી ભરો.',
      dailyVerse: 'યોગ એ આત્માની યાત્રા છે, આત્મા દ્વારા, આત્મા તરફ.',
    },
    'Bengali': {
      title: 'ঐশ্বরিক নির্দেশনা',
      greeting: 'ঈশ্বরীয় উপস্থিতিতে আপনাকে স্বাগতম। শান্তি ও আশীর্বাদ আপনার সাথে থাকুক।',
      mantra: 'ওঁ নমঃ শিবায় - শিবকে প্রণাম',
      message: 'ভক্তির যাত্রা বিশুদ্ধ হৃদয় দিয়ে শুরু হয়। আপনার প্রার্থনাগুলোকে প্রেম ও আত্মসমর্পণে পূর্ণ করুন।',
      dailyVerse: 'যোগ হল আত্মার যাত্রা, আত্মার মাধ্যমে, আত্মার দিকে।',
    },
  }

  const steps = [
    { label: 'Registration' },
    { label: 'Service Booking' },
    { label: 'Payment' },
    { label: 'Confirm' },
    { label: 'Analytics' },
    { label: 'Management' },
  ]

  const guideFeatures = [
    {
      id: 1,
      title: 'AI Spiritual Guidance',
      description: 'Advanced natural language processing understands spiritual context and provides meaningful guidance.',
      bgColor: 'from-purple-600 to-purple-400',
      points: ['Multilingual support (8+ languages)', 'Text-to-speech for authentic pronunciation', 'Contextual spiritual guidance and mantras', 'Quick access to common spiritual questions'],
    },
    {
      id: 2,
      title: 'Multilingual Support',
      description: 'Connect with devotees in their native language with support for over 8 languages including Sanskrit.',
      bgColor: 'from-green-500 to-green-600',
      points: ['English, Hindi, Sanskrit', 'Tamil, Telugu, Marathi', 'Gujarati, Bengali', 'More languages coming soon'],
    },
    {
      id: 3,
      title: 'Sacred Texts & Mantras',
      description: 'Access a vast library of sacred texts, mantras, and spiritual teachings with AI-powered recommendations.',
      bgColor: 'from-orange-500 to-amber-500',
      points: ['Daily verses and meditation guides', 'Personalized spiritual content', 'Audio and video teachings', 'Smart learning paths'],
    },
  ]

  const languages = ['English', 'Hindi', 'Sanskrit', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Bengali']

  const stats = [
    { number: '24/7', label: 'AI Support Available' },
    { number: '8+', label: 'Languages Supported' },
    { number: '100K+', label: 'Active Users' },
  ]

  const chatUsers = ['DevoteeRam', 'SpiritualSeeker', 'Bhakti123', 'TemplePriest', 'ShivaBhakta', 'GaneshDevotee', 'KrishnaPremi', 'MaaDurga']
  const chatMessagesList = [
    'Har Har Mahadev!',
    'Om Namah Shivaya',
    'Such a peaceful darshan',
    'Feeling blessed today',
    'Beautiful aarti!',
    'Jai Shree Mahakal!',
    "May Lord's blessings be with all",
    'Thank you for this live darshan',
    'Divine experience!',
    'Har Har Mahadev!',
  ]

  // Live time and viewer count
  useEffect(() => {
    const updateLiveInfo = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      setLiveTime(timeStr)
      const base = 1247
      const variation = Math.floor(Math.random() * 40) - 20
      setViewerCount(base + variation)
    }
    updateLiveInfo()
    const interval = setInterval(updateLiveInfo, 10000)
    return () => clearInterval(interval)
  }, [])

  // Simulated chat messages
  useEffect(() => {
    const addRandomMessage = () => {
      const user = chatUsers[Math.floor(Math.random() * chatUsers.length)]
      const msg = chatMessagesList[Math.floor(Math.random() * chatMessagesList.length)]
      setChatMessages(prev => [...prev, { user, time: getRandomTime(), text: msg, isSelf: false }])
    }

    const interval = setInterval(addRandomMessage, Math.floor(Math.random() * 7000) + 8000)
    return () => clearInterval(interval)
  }, [])

  // Scroll chat to bottom
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [chatMessages])

  const getRandomTime = () => {
    const now = new Date()
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  const handleSendMessage = () => {
    const text = chatInput.trim()
    if (!text) return
    setChatMessages(prev => [...prev, { user: 'You', time: getRandomTime(), text, isSelf: true }])
    setChatInput('')
    setTimeout(() => {
      const user = chatUsers[Math.floor(Math.random() * chatUsers.length)]
      const msg = chatMessagesList[Math.floor(Math.random() * chatMessagesList.length)]
      setChatMessages(prev => [...prev, { user, time: getRandomTime(), text: msg, isSelf: false }])
    }, 1500)
  }

  const handleStartAnimation = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentStep(-1)
    setWorkflowProgress(0)

    let step = -1
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (step >= steps.length - 1) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setIsAnimating(false)
        return
      }
      step++
      setCurrentStep(step)
      setWorkflowProgress(Math.round(((step + 1) / steps.length) * 100))
    }, 1200)
  }

  const handleResetAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsAnimating(false)
    setCurrentStep(-1)
    setWorkflowProgress(0)
  }

  const getStepStatus = (index) => {
    if (index < currentStep) return 'completed'
    if (index === currentStep) return 'active'
    return 'pending'
  }

  // Get current spiritual content based on selected language
  const currentContent = spiritualContent[selectedLanguage] || spiritualContent['English']

  return (
    <main className="pt-20">

      {/* HERO SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Advanced Temple <span className="text-amber-400">AI Features</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Experience cutting-edge technology that brings divine wisdom, interactive workflows, and live spiritual experiences directly to your device.
          </p>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="py-8 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'guide'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/80 border-2 border-amber-200/50 text-gray-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              AI Spiritual Guide
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'workflow'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/80 border-2 border-amber-200/50 text-gray-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              Interactive Workflow
            </button>
            <button
              onClick={() => setActiveTab('darshan')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'darshan'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/80 border-2 border-amber-200/50 text-gray-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              Live Darshan
            </button>
          </div>
        </div>
      </section>

      {/* TAB CONTENT */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">

          {/* TAB 1: AI SPIRITUAL GUIDE */}
          {activeTab === 'guide' && (
            <div>
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {guideFeatures.map((feature) => (
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
                            <span className="text-orange-500">✦</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to="#" className="mt-4 inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                      Explore Feature →
                    </Link>
                  </div>
                ))}
              </div>

              {/* Languages - Interactive */}
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-darkBg">Supported Languages</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Available 24/7 for spiritual guidance in your preferred language.
                  <br />
                  <span className="text-orange-500 font-medium">Currently viewing: {selectedLanguage}</span>
                </p>
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`border rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                        selectedLanguage === lang
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-500'
                          : 'bg-white/80 border-amber-200/50 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spiritual Guidance Content Based on Language */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-amber-100/50 max-w-4xl mx-auto mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-playfair text-xl font-bold text-darkBg">{currentContent.title}</h4>
                  <span className="bg-orange-500/10 text-orange-500 font-semibold text-xs px-3 py-1 rounded-full">
                    {selectedLanguage}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-darkBg">Greeting</p>
                    <p className="text-gray-600 text-sm italic">"{currentContent.greeting}"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-darkBg">Mantra</p>
                    <p className="text-gray-600 text-sm font-medium">"{currentContent.mantra}"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-darkBg">Spiritual Message</p>
                    <p className="text-gray-600 text-sm">"{currentContent.message}"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-darkBg">Daily Verse</p>
                    <p className="text-gray-600 text-sm italic">"{currentContent.dailyVerse}"</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-playfair font-bold text-orange-500">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm mt-1 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE WORKFLOW */}
          {activeTab === 'workflow' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-amber-100/50 max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-darkBg">Progress:</span>
                <span className="text-orange-500 font-bold text-xl">{workflowProgress}%</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-1 mb-6">
                {steps.map((step, index) => {
                  const status = getStepStatus(index)
                  let bgColor = 'bg-gray-100'
                  let textColor = 'text-gray-600'
                  let borderColor = 'border-gray-200'
                  let statusText = 'Pending'

                  if (status === 'active') {
                    bgColor = 'bg-orange-500'
                    textColor = 'text-white'
                    borderColor = 'border-orange-600'
                    statusText = 'Active'
                  } else if (status === 'completed') {
                    bgColor = 'bg-green-500'
                    textColor = 'text-white'
                    borderColor = 'border-green-600'
                    statusText = 'Done'
                  }

                  return (
                    <div key={index} className="flex items-center">
                      <div
                        className={`${bgColor} ${textColor} border-2 ${borderColor} rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-semibold transition-all duration-300 min-w-[70px] justify-center`}
                      >
                        <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
                        <span>{step.label}</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">{statusText}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <span className="text-orange-500 font-bold px-1">→</span>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={handleStartAnimation}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-2.5 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  Start Animation
                </button>
                <button
                  onClick={handleResetAnimation}
                  className="border-2 border-orange-500 text-orange-500 font-semibold py-2.5 px-8 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  Reset
                </button>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">Interactive journey from devotee registration to temple analytics</p>
            </div>
          )}

          {/* TAB 3: LIVE DARSHAN */}
          {activeTab === 'darshan' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-amber-100/50">
                    <div className="bg-red-500/10 border-b border-red-500/20 px-6 py-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-red-500 font-bold text-sm">LIVE</span>
                    </div>
                    <div className="p-4">
                      <div className="aspect-video bg-black rounded-xl overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/e8sQGtU6GQs?autoplay=1&mute=1"
                          title="Live Darshan"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="px-6 pb-4 flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>Shree Mahakaleshwar Temple, Ujjain</span>
                      <span>{liveTime || 'Loading...'}</span>
                      <span>{viewerCount.toLocaleString()} watching</span>
                    </div>
                    <div className="px-6 pb-4">
                      <a
                        href="https://www.youtube.com/live/e8sQGtU6GQs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-full text-center transition-all duration-300"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-amber-100/50 flex flex-col h-full">
                    <h4 className="font-playfair text-lg font-bold text-darkBg mb-3">Live Chat</h4>
                    <div
                      ref={chatMessagesRef}
                      className="flex-1 max-h-64 overflow-y-auto space-y-2 mb-3 pr-1"
                    >
                      {chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`rounded-xl p-2.5 ${msg.isSelf ? 'bg-orange-500 text-white' : 'bg-orange-50'}`}
                        >
                          <span className="font-semibold text-sm">{msg.user}</span>
                          <span className="text-xs opacity-70 ml-2">{msg.time}</span>
                          <p className={`text-sm ${msg.isSelf ? 'text-white' : 'text-gray-700'}`}>{msg.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Share your devotional thoughts..."
                        className="flex-1 border-2 border-gray-200 rounded-full px-4 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-5 py-2 rounded-full text-sm hover:scale-105 transition-all duration-300"
                      >
                        Send
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-3">Join {viewerCount.toLocaleString()} devotees in live darshan</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100/50 text-center">
                  <span className="bg-orange-500/10 text-orange-500 font-semibold text-xs px-3 py-1 rounded-full">Next Live Darshan</span>
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-darkBg mt-2">05:30 AM</div>
                  <span className="text-gray-500 text-sm">Morning Aarti</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100/50 flex flex-col sm:flex-row items-center gap-4">
                  <span className="bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full">LIVE</span>
                  <div>
                    <strong className="text-darkBg">Siddhi Vinayak Live Darshan</strong>
                    <p className="text-gray-400 text-sm">Lord Ganesh • 892 watching</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Embrace the Future of Temple Technology
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Discover how SEWAI's AI features can transform your temple's spiritual engagement and administrative efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Get Started
              </Link>
              <Link
                to="#"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Try AI Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default AIFeatures
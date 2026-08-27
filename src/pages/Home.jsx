import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSlideshow } from '../hooks/useSlideshow'
import { features, steps, missionCards, statsData, ecosystemItems, whyChooseData } from '../data/homeData'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllMembers } from '../data/memberStore'

function Home() {
  // Mix of images (each shown for the default interval) and one short
  // video clip (shown for a shorter `duration`, then it moves on too).
  const slides = [
    { type: 'image', src: '/assets/images/hero-temple-bg.webp' },
    { type: 'image', src: '/assets/images/hero-temple-2.jpg' },
    { type: 'video', src: '/videos/temple-hero-bg.mp4', duration: 6000 },
    { type: 'image', src: '/assets/images/hero-temple-3.jpg' },
    { type: 'image', src: '/assets/images/hero-temple-4.jpg' },
    { type: 'image', src: '/assets/images/minister.jpg' },
    { type: 'video', src: '/videos/running-video.mp4', duration: 8000 },
  ]
  const { currentIndex, goToSlide, next, prev } = useSlideshow(slides, 5000)

  // Live devotee membership count, read from local storage so the home
  // page always reflects how many members have been created so far.
  const [memberCount, setMemberCount] = useState(0)
  useEffect(() => {
    setMemberCount(getAllMembers().length)
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ===== HERO SECTION ===== */}
        <section className="relative h-screen min-h-[550px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                {slide.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.src})` }}
                  ></div>
                )}
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto py-10">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-amber-400">Sacred Enterprise</span>
              <br />
              <span className="text-white">for Worship</span>
              <br />
              <span className="text-amber-400">Administration &amp; Integration</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience the future of temple administration with{' '}
              <span className="text-amber-400 font-bold">SEWAI</span>
              — Smart &amp; Automated Temple Management System.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <span className="bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-1.5 rounded-full text-sm"> Smart Donations</span>
              <span className="bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-1.5 rounded-full text-sm"> Event Management</span>
              <span className="bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-1.5 rounded-full text-sm"> Community Connect</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30">
                 Start Journey →
              </Link>
              <Link to="/features" className="border-2 border-white text-white font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-white hover:text-darkBg hover:scale-105">
                 Explore Features
              </Link>
            </div>

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-white/40 hover:bg-white/70'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-amber-400 text-2xl transition-colors">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-amber-400 text-2xl transition-colors">
            <i className="fas fa-chevron-right"></i>
          </button>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl">
                Comprehensive <span className="highlight">Temple Management</span>
              </h2>
              <div className="section-line"></div>
              <p className="section-subtitle text-sm">
                Discover our divine suite of features designed to transform and streamline every aspect of temple operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-lg font-playfair font-bold text-darkBg group-hover:text-amber-600 transition-colors">{f.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{f.desc}</p>
                  <Link to="/features" className="inline-block mt-3 text-amber-600 font-semibold text-sm hover:text-amber-700 hover:underline">
                    Explore Feature →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="py-3 bg-amber-50/30">
          <div className="flex items-center justify-center gap-4 text-amber-500 text-2xl">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <span>🕉</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
        </div>

        {/* ===== DEVOTEE MEMBERSHIP ===== */}
        <section className="py-14 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5 text-center md:text-left">
                <div className="hidden sm:flex w-16 h-16 rounded-full bg-amber-500/15 border border-amber-400/30 items-center justify-center text-3xl shrink-0">
                  🪪
                </div>
                <div>
                  <p className="text-amber-400 text-xs uppercase tracking-wider font-semibold mb-1">Devotee Membership</p>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold">
                    <span className="text-amber-400">{memberCount}</span>{' '}
                    {memberCount === 1 ? 'devotee has' : 'devotees have'} joined so far
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 max-w-md">
                    Register for a membership card, add your family, and get an instant printable/downloadable ID card.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center shrink-0">
                <Link to="/devotee-membership" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 whitespace-nowrap">
                  🪪 Become a Member
                </Link>
                <Link to="/devotee-membership/members" className="border-2 border-amber-400/50 text-amber-300 font-semibold py-2.5 px-6 rounded-full transition-all duration-300 hover:bg-amber-500/10 hover:scale-105 whitespace-nowrap">
                  View All Members →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl">
                How It <span className="highlight">Works</span>
              </h2>
              <div className="section-line"></div>
              <p className="section-subtitle text-sm">
                From devotee login to comprehensive reports, discover the seamless temple workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-200/50 text-center relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-2xl text-amber-400">›</div>
                  )}
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="font-playfair font-bold text-base text-darkBg">{s.title}</h3>
                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 w-10 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MISSION ===== */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/30">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl">
                Smart Mission: <span className="highlight">Bridging Worlds</span>
              </h2>
              <div className="section-line"></div>
              <p className="section-subtitle text-sm">
                SEWAI harmoniously bridges ancient wisdom with modern technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {missionCards.map((m, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50">
                  <div className="text-4xl mb-3">{m.icon}</div>
                  <h3 className="text-lg font-playfair font-bold text-darkBg">{m.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{m.desc}</p>
                  <Link to="/features" className="inline-block mt-3 text-amber-600 font-semibold text-sm hover:text-amber-700 hover:underline">
                    {m.link} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHY ===== */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Where Ancient Wisdom Meets Modern Innovation
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <div className="max-w-4xl mx-auto p-6 border border-amber-500/20 rounded-2xl bg-amber-500/5 backdrop-blur-sm">
              <p className="text-base md:text-lg italic text-gray-300 leading-relaxed">
                "Technology should serve humanity's highest aspirations. SEWAI honors this principle by creating solutions that amplify the sacred work of temples while respecting timeless traditions."
              </p>
              <p className="mt-4 text-amber-400 font-semibold">— The SEWAI Philosophy</p>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="py-12 bg-gradient-to-b from-amber-50/30 to-cream">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-darkBg">
                Trusted by Temple Communities <span className="text-amber-600">Worldwide</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {statsData.map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 shadow-lg border border-amber-200/50">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-600">{s.number}</div>
                  <div className="text-gray-600 text-xs mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ECOSYSTEM ===== */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/30">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl">
                Complete Temple <span className="highlight">Ecosystem</span>
              </h2>
              <div className="section-line"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ecosystemItems.map((e, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50">
                  <div className="text-4xl mb-3">{e.icon}</div>
                  <h3 className="text-lg font-playfair font-bold text-darkBg">{e.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE ===== */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl">
                Why Temples Choose <span className="highlight">SEWAI</span>
              </h2>
              <div className="section-line"></div>
              <p className="section-subtitle text-sm">
                Trusted by hundreds of temples worldwide for comprehensive digital transformation
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {whyChooseData.map((w, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 flex flex-col md:flex-row gap-4">
                  <div className="text-4xl">{w.icon}</div>
                  <div>
                    <h3 className="text-lg font-playfair font-bold text-darkBg">{w.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{w.desc}</p>
                    <ul className="mt-2 space-y-0.5 text-sm text-gray-600">
                      {w.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">✦</span>
                          <span className="text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Ready to Transform Your Temple?
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Join thousands of temples worldwide who have already embraced the future of spiritual management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact" className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                🕉 Start Your Smart Journey
              </Link>
              <Link to="/contact" className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105">
                Connect With Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home
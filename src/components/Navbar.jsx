import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

// How long to wait before closing a hover menu after the pointer leaves.
// This grace period is what actually fixes the "dropdown closes while
// moving the mouse toward it" bug — CSS-only :hover has no forgiveness
// for the gap between the trigger and the panel, a delayed close does.
const CLOSE_DELAY = 250

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  const featuresTimer = useRef(null)
  const servicesTimer = useRef(null)

  // Scroll hide
  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      lastScroll = currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setFeaturesOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Clean up any pending close timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(featuresTimer.current)
      clearTimeout(servicesTimer.current)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleFeatures = (e) => { e.preventDefault(); setFeaturesOpen((v) => !v) }
  const toggleServices = (e) => { e.preventDefault(); e.stopPropagation(); setServicesOpen((v) => !v) }

  // ---- Desktop hover handlers (no-ops on touch devices, since those
  // don't fire mouseenter/mouseleave — mobile keeps using the click
  // handlers above) ----
  const openFeaturesHover = () => {
    clearTimeout(featuresTimer.current)
    setFeaturesOpen(true)
  }
  const closeFeaturesHover = () => {
    clearTimeout(featuresTimer.current)
    featuresTimer.current = setTimeout(() => {
      setFeaturesOpen(false)
      setServicesOpen(false)
    }, CLOSE_DELAY)
  }
  const openServicesHover = () => {
    clearTimeout(servicesTimer.current)
    setServicesOpen(true)
  }
  const closeServicesHover = () => {
    clearTimeout(servicesTimer.current)
    servicesTimer.current = setTimeout(() => setServicesOpen(false), CLOSE_DELAY)
  }

  const navLinkClass = ({ isActive }) => `px-3 lg:px-4 py-1.5 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Top Row: 3-column grid for perfect centering */}
      <div className="grid grid-cols-3 items-center px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-amber-500 focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div className="hidden lg:block w-10"></div>
        </div>

        <div className="flex justify-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/images/sewai-logo.png"
              alt="SEWAI Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold text-amber-500">SEWAI</span>
              <span className="text-[8px] text-gray-500 leading-tight hidden sm:block">
                SACRED ENTERPRISE<br />Administration & Integration
              </span>
            </div>
          </Link>
        </div>

        <div className="flex justify-end items-center">
          <Link to="/contact" className="btn-primary hidden lg:inline-block text-sm px-4 py-2">
            Request Quote
          </Link>
          <div className="lg:hidden w-10"></div>
        </div>
      </div>

      {/* Bottom Row: Orange navigation bar - SINGLE LINE */}
      <div className={`w-full bg-amber-500 ${isOpen ? 'block' : 'hidden'} lg:block overflow-x-auto`}>
        <div className="flex items-center justify-center gap-1 lg:gap-2 py-2 px-2 text-white text-xs lg:text-sm font-medium whitespace-nowrap">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

          {/* ===== Features Dropdown ===== */}
          <div
            className="relative"
            onMouseEnter={openFeaturesHover}
            onMouseLeave={closeFeaturesHover}
          >
            <button onClick={toggleFeatures} className="flex items-center px-3 lg:px-4 py-1.5 rounded hover:bg-white/10">
              Features <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform ${featuresOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {featuresOpen && (
              <div
                className="mt-1 w-full lg:mt-0 lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:top-[104px] lg:w-[900px] lg:max-w-[95vw] bg-white text-gray-700 border border-gray-200 rounded-xl shadow-2xl p-4 z-40"
                onMouseEnter={openFeaturesHover}
                onMouseLeave={closeFeaturesHover}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 items-start">
                  <Link to="/features/capital" className="px-3 py-2 hover:bg-amber-50 rounded font-semibold text-amber-600">Capital</Link>
                  <Link to="/features/setting-up" className="px-3 py-2 hover:bg-amber-50 rounded">Setting Up</Link>
                  <Link to="/features/devotee-connect" className="px-3 py-2 hover:bg-amber-50 rounded">Devotee Connect</Link>
                  <Link to="/features/payment-gateway" className="px-3 py-2 hover:bg-amber-50 rounded">Payment Gateway</Link>
                  <Link to="/features/temple-education" className="px-3 py-2 hover:bg-amber-50 rounded">Temple Education</Link>
                  <Link to="/features/temple-hiring" className="px-3 py-2 hover:bg-amber-50 rounded">Temple Hiring</Link>
                  <Link to="/features/hall-booking" className="px-3 py-2 hover:bg-amber-50 rounded">Hall Booking</Link>
                  <Link to="/features/temple-e-marketplace" className="px-3 py-2 hover:bg-amber-50 rounded">Temple E‑MarketPlace</Link>
                  <Link to="/features/inventory" className="px-3 py-2 hover:bg-amber-50 rounded">Inventory</Link>
                  <Link to="/features/ai-features" className="px-3 py-2 hover:bg-amber-50 rounded">AI Features</Link>
                  <Link to="/features/procedures" className="px-3 py-2 hover:bg-amber-50 rounded">Procedures</Link>
                  <Link to="/features/smart-donations" className="px-3 py-2 hover:bg-amber-50 rounded">Smart Donations</Link>
                  <Link to="/features/deva-program" className="px-3 py-2 hover:bg-amber-50 rounded">Deva Program</Link>
                  <Link to="/features/temple-merchandise" className="px-3 py-2 hover:bg-amber-50 rounded">Temple Merchandise</Link>

                  {/* Temple Services — hover flyout on desktop, click flyout on mobile.
                      Rendered as a single vertical list (not a multi-column grid) so
                      long labels can never visually collide with a neighboring column. */}
                  <div
                    className="relative"
                    onMouseEnter={openServicesHover}
                    onMouseLeave={closeServicesHover}
                  >
                    <button
                      onClick={toggleServices}
                      className="flex items-center justify-between w-full px-3 py-2 hover:bg-amber-50 rounded text-left"
                    >
                      Temple Services <i className={`fas fa-chevron-right ml-2 text-xs transition-transform ${servicesOpen ? 'rotate-90' : ''}`}></i>
                    </button>

                    {servicesOpen && (
                      <div
                        className="mt-1 lg:mt-0 lg:absolute lg:left-0 lg:top-full lg:w-72 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 max-h-96 overflow-y-auto"
                        onMouseEnter={openServicesHover}
                        onMouseLeave={closeServicesHover}
                      >
                        <div className="flex flex-col divide-y divide-gray-50">
                          <Link to="/features/temple-services/temple-maps" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple Maps</Link>
                          <Link to="/features/temple-services/temple-tourism" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple Tourism</Link>
                          <Link to="/features/temple-services/temple-time-schedule" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple Time Schedule</Link>
                          <Link to="/features/temple-services/key-temple-event" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Key Temple Event</Link>
                          <Link to="/features/temple-services/temple-delicate-moments" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple Delicate Moments</Link>
                          <Link to="/features/temple-services/temple-security" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple Security</Link>
                          <Link to="/features/temple-services/temple-true-noms" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple True Noms</Link>
                          <Link to="/features/temple-services/temple-visitor-management" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Temple Visitor Management</Link>
                          <Link to="/features/temple-services/prasad-automation" className="block px-4 py-2 hover:bg-amber-50 text-sm leading-snug">Prasad Automation</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/knowledge-base" className={navLinkClass}>Knowledge Base</NavLink>
          <NavLink to="/media" className={navLinkClass}>Media</NavLink>
          <NavLink to="/devotee-membership" className={navLinkClass}>Devotee Membership</NavLink>
          <NavLink to="/temple-platform-registration" className={navLinkClass}>Temple Platform Registration</NavLink>
          <NavLink to="/temple-enquiry" className={navLinkClass}>Temple Enquiry</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          <Link to="/contact" className="lg:hidden px-3 py-1.5 rounded bg-white/20 hover:bg-white/30 text-xs">Request Quote</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

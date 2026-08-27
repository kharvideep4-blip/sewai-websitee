import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { QRCodeSVG as QRCode } from 'qrcode.react'
import html2canvas from 'html2canvas'
import { getLastMember } from '../data/memberStore'

// Senior citizen threshold (years). Members at or above this age get the
// green card theme instead of the default red/amber theme.
const SENIOR_AGE = 60

function calculateAge(dobString) {
  if (!dobString) return null
  const dob = new Date(dobString)
  if (Number.isNaN(dob.getTime())) return null
  const today = new Date()
  let age = today.getFullYear() - dob.getFullYear()
  const monthDiff = today.getMonth() - dob.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--
  }
  return age
}

// Resolves once every <img> inside the given element has finished loading
// (or failed) — html2canvas can capture a blank/broken image if it runs
// before an <img> has actually loaded, especially right after the page
// first renders.
function waitForImages(el) {
  const imgs = Array.from(el.querySelectorAll('img'))
  return Promise.all(
    imgs.map((img) => {
      if (img.complete) return Promise.resolve()
      return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true })
        img.addEventListener('error', resolve, { once: true })
      })
    })
  )
}

function MembershipCard() {
  const location = useLocation()
  const navigate = useNavigate()
  // Prefer the data passed via navigation; fall back to the last saved
  // member so refreshing this page doesn't lose the card.
  const [cardData, setCardData] = useState(location.state?.cardData || null)
  const [showPreview, setShowPreview] = useState(false)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    if (!location.state?.cardData) {
      const last = getLastMember()
      if (last) setCardData(last)
    }
  }, [location.state])

  if (!cardData) {
    return (
      <>
        <Navbar />
        <main className="pt-20">
          <section className="py-24 bg-gradient-to-b from-cream to-amber-50/50 min-h-[60vh] flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="font-playfair text-2xl font-bold text-darkBg mb-3">No membership card found</h2>
              <p className="text-gray-600 mb-6">Please complete the registration and payment first.</p>
              <button
                onClick={() => navigate('/devotee-membership')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-all"
              >
                Go to Devotee Membership
              </button>
            </div>
          </section>
        </main>
      </>
    )
  }

  const age = calculateAge(cardData.dateOfBirth)
  const isSenior = age !== null && age >= SENIOR_AGE

  // Merge the front and back card into a single image and download it.
  const downloadCard = async () => {
    setDownloading(true)
    try {
      const frontEl = document.getElementById('card-front')
      const backEl = document.getElementById('card-back')

      await Promise.all([waitForImages(frontEl), waitForImages(backEl)])

      const [frontCanvas, backCanvas] = await Promise.all([
        html2canvas(frontEl, { scale: 2, useCORS: true, backgroundColor: null }),
        html2canvas(backEl, { scale: 2, useCORS: true, backgroundColor: null })
      ])

      const gap = 60
      const merged = document.createElement('canvas')
      merged.width = frontCanvas.width + backCanvas.width + gap
      merged.height = Math.max(frontCanvas.height, backCanvas.height)

      const ctx = merged.getContext('2d')
      ctx.fillStyle = '#fdf6f0'
      ctx.fillRect(0, 0, merged.width, merged.height)
      ctx.drawImage(frontCanvas, 0, 0)
      ctx.drawImage(backCanvas, frontCanvas.width + gap, 0)

      const link = document.createElement('a')
      link.download = `SEWAI-Devotee-Card-${cardData.id}.png`
      link.href = merged.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Card download failed:', err)
      alert('Could not generate the card image. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ===== MEMBERSHIP CARD DISPLAY ===== */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-6xl mx-auto px-4">

            {/* Success Message */}
            <div className="bg-green-50 border border-green-300 rounded-2xl p-6 mb-10 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h2 className="font-playfair text-3xl font-bold text-green-700 mb-2">Welcome to SEWAI Community!</h2>
              <p className="text-green-600">
                Your membership has been successfully activated. Your ID: <span className="font-bold">{cardData.id}</span>
              </p>
              {isSenior && (
                <p className="mt-2 inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🌿 Senior Citizen Membership
                </p>
              )}
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold text-darkBg mb-4">Front Side</h3>
                <div className="w-full max-w-xs">
                  <MembershipCardFront cardData={cardData} isSenior={isSenior} elementId="card-front" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold text-darkBg mb-4">Back Side</h3>
                <div className="w-full max-w-xs">
                  <MembershipCardBack cardData={cardData} isSenior={isSenior} elementId="card-back" />
                </div>
              </div>
            </div>

            {/* View / Download actions for the card */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={() => setShowPreview(true)}
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-all"
              >
                👁 View Card
              </button>
              <button
                onClick={downloadCard}
                disabled={downloading}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100"
              >
                {downloading ? 'Preparing...' : '⬇ Download Card'}
              </button>
            </div>

            {/* Family Tree Section */}
            {cardData.familyMembers && cardData.familyMembers.length > 0 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100/50 mb-8">
                <h3 className="font-playfair text-2xl font-bold text-darkBg mb-6">Your Family Tree</h3>
                <FamilyTree data={cardData} />
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/devotee-membership')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-all"
              >
                Register Another Member
              </button>
              <Link
                to="/"
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-all"
              >
                Back to Home
              </Link>
              <Link
                to="/devotee-membership/members"
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-all"
              >
                View All Members
              </Link>
            </div>
          </div>
        </section>

      </main>
      {/* <Footer /> */}

      {/* ===== CARD PREVIEW MODAL ===== */}
      {showPreview && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full space-y-6 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-playfair text-xl font-bold text-darkBg">Your Devotee Card</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>
            <MembershipCardFront cardData={cardData} isSenior={isSenior} />
            <MembershipCardBack cardData={cardData} isSenior={isSenior} />
            <button
              onClick={downloadCard}
              disabled={downloading}
              className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100"
            >
              {downloading ? 'Preparing...' : '⬇ Download Card'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// ============================================================
// MEMBERSHIP CARD FRONT — temple/brand cover side
// ============================================================
function MembershipCardFront({ cardData, isSenior, elementId }) {
  const theme = isSenior
    ? {
        cornerFrom: '#15803d',
        cornerTo: '#065f46',
        panelFrom: '#15803d',
        panelTo: '#064e3b',
        gold: 'text-emerald-300'
      }
    : {
        cornerFrom: '#991b1b',
        cornerTo: '#7c2d12',
        panelFrom: '#991b1b',
        panelTo: '#78350f',
        gold: 'text-amber-300'
      }

  const gradId = `panelGrad-${elementId || 'preview'}`

  return (
    <div
      id={elementId}
      className="w-full aspect-[3.5/5.5] rounded-2xl shadow-2xl relative overflow-hidden"
    >
      {/* Background temple photo */}
      <img
        src="/assets/images/hero-temple-4.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        crossOrigin="anonymous"
      />

      {/* Top-right diagonal accent — SVG so it renders correctly on download */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute top-0 right-0 w-2/5 h-1/4"
      >
        <polygon points="100,0 100,100 0,0" fill={theme.cornerFrom} opacity="0.9" />
      </svg>

      {/* Disclaimer */}
      <div className="absolute top-4 left-4 right-16 z-10">
        <p className="text-xs font-bold text-red-700 bg-white rounded px-2 py-1 inline-block shadow-sm">
          Created for demo purpose only
        </p>
      </div>

      {/* Bottom brand panel — SVG diagonal-top background so it renders correctly on download */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="0">
              <stop offset="0%" stopColor={theme.panelFrom} />
              <stop offset="100%" stopColor={theme.panelTo} />
            </linearGradient>
          </defs>
          <polygon points="0,8 100,0 100,40 0,40" fill={`url(#${gradId})`} />
        </svg>
        <div className="relative z-10 h-full px-4 pt-6 pb-3 flex items-end justify-between gap-2">
          <img
            src="/assets/images/sewai-logo.png"
            alt="SEWAI"
            className="w-12 h-12 object-contain drop-shadow"
            crossOrigin="anonymous"
          />
          <div className="bg-white p-1.5 rounded-lg shrink-0">
            <QRCode value={cardData.id} size={48} level="H" />
          </div>
          <div className="text-right">
            <p className="text-[9px] text-white/90 leading-tight">Scan to experience the Grace of</p>
            <p className={`text-lg font-playfair font-bold leading-tight ${theme.gold}`}>SEWAI</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MEMBERSHIP CARD BACK — devotee ID side
// ============================================================
function MembershipCardBack({ cardData, isSenior, elementId }) {
  const theme = isSenior
    ? {
        cornerFrom: '#15803d',
        cornerTo: '#065f46',
        text: 'text-green-800',
        pill: 'bg-green-800',
        border: 'border-green-200',
        badgeBg: 'bg-emerald-50'
      }
    : {
        cornerFrom: '#b91c1c',
        cornerTo: '#b45309',
        text: 'text-red-800',
        pill: 'bg-red-800',
        border: 'border-amber-200',
        badgeBg: 'bg-amber-50'
      }

  const gradId = `cornerGrad-${elementId || 'preview'}`

  return (
    <div
      id={elementId}
      className={`w-full aspect-[3.5/5.5] bg-white rounded-2xl shadow-2xl relative overflow-hidden border-2 ${theme.border} flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-5 relative z-10">
        <div>
          <p className={`text-[10px] font-bold tracking-widest ${theme.text}`}>DEVOTEE</p>
          <h3 className="font-playfair text-lg font-bold text-darkBg leading-tight">ID CARD</h3>
        </div>
        <img
          src="/assets/images/sewai-logo.png"
          alt="SEWAI"
          className="w-10 h-10 object-contain"
          crossOrigin="anonymous"
        />
      </div>

      {/* Diagonal corner + photo — fixed-height wrapper so nothing below can overlap it */}
      <div className="relative h-28 mx-5 mt-3 shrink-0 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute -left-5 -top-3 w-32 h-32"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor={theme.cornerFrom} />
              <stop offset="100%" stopColor={theme.cornerTo} />
            </linearGradient>
          </defs>
          <polygon points="0,0 75,0 0,100" fill={`url(#${gradId})`} opacity="0.95" />
        </svg>
        <div className="relative z-10 flex items-center gap-3 h-full">
          <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 shrink-0">
            {cardData.profileImage ? (
              <img src={cardData.profileImage} alt={cardData.fullName} className="w-full h-full object-cover" crossOrigin="anonymous" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl">👤</div>
            )}
          </div>
          {isSenior && (
            <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${theme.badgeBg} ${theme.text} border ${theme.border}`}>
              Senior Citizen
            </span>
          )}
        </div>
      </div>

      {/* Name */}
      <div className="px-5 mt-4">
        <h2 className="text-xl font-playfair font-extrabold text-darkBg leading-tight uppercase break-words">
          {cardData.fullName}
        </h2>
        <div className={`w-10 h-1 ${theme.pill} rounded-full mt-2`}></div>
      </div>

      {/* Instructions */}
      <div className="px-5 mt-3 space-y-2 text-[11px] text-gray-600 leading-snug">
        <p>Carry this ID card at all times during your visit for identification.</p>
        <p>In any emergency: scan the QR code to reach the member's emergency contacts.</p>
      </div>

      {/* ID pill + QR */}
      <div className="px-5 mt-auto mb-3 flex items-center justify-between gap-2">
        <div className={`${theme.pill} text-white text-[11px] font-bold px-3 py-2 rounded-full`}>
          ID: {cardData.id}
        </div>
        <div className="bg-white p-1 rounded-lg border border-gray-200 shrink-0">
          <QRCode
            value={JSON.stringify({
              id: cardData.id,
              name: cardData.fullName,
              phone: cardData.phone,
              email: cardData.email
            })}
            size={44}
            level="H"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 flex items-center justify-between text-[10px] text-gray-500">
        <span>or visit <span className={`font-bold ${theme.text}`}>www.sewai.com</span></span>
        <i className="fa-brands fa-whatsapp text-green-600 text-base"></i>
      </div>
    </div>
  )
}

// ============================================================
// FAMILY TREE COMPONENT
// ============================================================
function FamilyTree({ data }) {
  return (
    <div className="space-y-6">
      {/* Family Head */}
      {data.familyHead && (
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-center shadow-lg">
            <span className="text-sm">{data.familyHead.split(' ')[0]}</span>
          </div>
          <p className="text-darkBg font-bold mt-3">Family Head</p>
          <p className="text-gray-600 text-sm">{data.familyHead}</p>
        </div>
      )}

      {/* Primary Member */}
      <div className="flex flex-col items-center mb-8 pb-8 border-b-2 border-amber-300">
        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-center shadow-lg">
          <span className="text-sm">{data.firstName}</span>
        </div>
        <p className="text-darkBg font-bold mt-3">Primary Member</p>
        <p className="text-gray-600 text-sm">{data.fullName}</p>
        <p className="text-orange-500 font-semibold text-xs mt-1">ID: {data.id}</p>
      </div>

      {/* Family Members Grid */}
      {data.familyMembers && data.familyMembers.length > 0 && (
        <div>
          <h4 className="font-bold text-darkBg mb-4">Family Members</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.familyMembers.map((member, idx) => (
              member.name && (
                <div key={idx} className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 text-center">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mx-auto mb-3 shadow">
                    <span className="text-xs text-center">{member.name.split(' ')[0]}</span>
                  </div>
                  <p className="font-bold text-darkBg text-sm">{member.name}</p>
                  <div className="flex justify-center gap-2 mt-2 text-xs text-gray-600">
                    <span className="bg-white px-2 py-1 rounded">Age: {member.age || 'N/A'}</span>
                    <span className="bg-white px-2 py-1 rounded capitalize">{member.relation || 'Family'}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MembershipCard

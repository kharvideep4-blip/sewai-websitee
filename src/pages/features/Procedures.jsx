import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Procedures() {
  const [activeSection, setActiveSection] = useState('section-a')

  const sections = [
    {
      id: 'section-a',
      letter: 'A',
      title: 'Daily Temple Operations',
      items: [
        { label: 'Temple Opening & Closing', desc: 'Priest opens sanctum with protocol; logs in register' },
        { label: 'Daily Puja Schedule', desc: 'Follow temple‑specific Agama rituals' },
        { label: 'Cleanliness & Sanitation', desc: 'Daily sweeping, disinfecting of floors and sanctum' },
        { label: 'Crowd Management', desc: 'Barricades, queue system, volunteers in uniform' },
        { label: 'Offerings Collection', desc: '2‑person team opens donation box, video‑recorded' },
      ],
    },
    {
      id: 'section-b',
      letter: 'B',
      title: 'Priest & Religious Functions',
      items: [
        { label: 'Priest Appointment', desc: 'Must be trained in Agama/Shastra, background verified' },
        { label: 'Dress Code', desc: 'Traditional attire; specific for each role' },
        { label: 'Ritual Inventory', desc: 'Daily checklist for ghee, flowers, dhool, prasadam' },
        { label: 'Festival Preparation', desc: '15‑30 day prior planning with rituals, logistics, and PR' },
      ],
    },
    {
      id: 'section-c',
      letter: 'C',
      title: 'Financial SOPs',
      items: [
        { label: 'Donations (Cash)', desc: 'Daily deposit to bank; maintain counterfoils' },
        { label: 'Online Donations', desc: 'UPI, website, SMS gateway with auto receipts' },
        { label: 'Expense Tracking', desc: 'Vouchers with approvals; Tally/ERP entry' },
        { label: 'Monthly Reports', desc: 'Income‑Expenditure, donation source breakdown' },
        { label: 'Year‑End Audit', desc: 'Appoint auditor, prepare Form 10B, ITR‑7 filing' },
      ],
    },
    {
      id: 'section-d',
      letter: 'D',
      title: 'Legal & Statutory Compliance',
      items: [
        { label: 'Trust Registration', desc: 'Under Indian Trusts Act or relevant State Act' },
        { label: 'PAN, 12A & 80G Registration', desc: 'For tax exemption & donor benefit' },
        { label: 'FCRA (if applicable)', desc: 'Separate FCRA bank a/c, quarterly & annual filings' },
        { label: 'Labour Compliance', desc: 'ESI, PF registration, salary slips, registers' },
        { label: 'Annual Returns', desc: 'Trust renewal, ITR, FCRA returns (FC‑4)' },
      ],
    },
    {
      id: 'section-e',
      letter: 'E',
      title: 'Property & Asset Management',
      items: [
        { label: 'Asset Register', desc: 'Maintain log with photos, serial numbers' },
        { label: 'Rentals', desc: 'Lease agreements vetted by lawyer' },
        { label: 'Land Use', desc: 'Monitor encroachments, mutation records' },
        { label: 'Temple Vehicles', desc: 'Logbooks, fuel vouchers, servicing records' },
      ],
    },
    {
      id: 'section-f',
      letter: 'F',
      title: 'Human Resource SOPs',
      items: [
        { label: 'Hiring', desc: 'Job description, ID verification, service rules' },
        { label: 'Training', desc: 'Religious rituals, security drills, hygiene' },
        { label: 'Payroll', desc: 'Salary slips, PF/ESI challans, biometric attendance' },
        { label: 'Volunteer Management', desc: 'ID badges, schedules, training manuals' },
      ],
    },
    {
      id: 'section-g',
      letter: 'G',
      title: 'Infrastructure & Maintenance',
      items: [
        { label: 'Civil Works', desc: 'Annual maintenance calendar, AMC for lifts, A/C' },
        { label: 'Electrical', desc: 'Regular inspections, backup systems, safety checks' },
        { label: 'Fire Safety', desc: 'Fire extinguishers, alarms, quarterly drills' },
        { label: 'Water Supply', desc: 'Borewell/tap water testing, storage tanks hygiene' },
        { label: 'Garbage Disposal', desc: 'Tie‑up with municipality or private contractor' },
      ],
    },
    {
      id: 'section-h',
      letter: 'H',
      title: 'Festivals & Events Management',
      items: [
        { label: 'Planning', desc: 'Committee meeting 30‑45 days prior' },
        { label: 'Procurement', desc: 'List items, vendors, budget approval' },
        { label: 'Publicity', desc: 'Posters, social media, press invites' },
        { label: 'Execution', desc: 'Volunteers assigned to departments' },
        { label: 'Crowd & Traffic', desc: 'Liaison with police, barricading, CCTV live feed' },
      ],
    },
    {
      id: 'section-i',
      letter: 'I',
      title: 'Digital Systems',
      items: [
        { label: 'Website', desc: 'Events, online darshan, donations page' },
        { label: 'Temple App', desc: 'E‑puja booking, daily calendar, e‑receipts' },
        { label: 'Digital Display', desc: 'Queue status, announcements, aarti schedule' },
      ],
    },
    {
      id: 'section-j',
      letter: 'J',
      title: 'Community & Outreach Programs',
      items: [
        { label: 'Annadanam', desc: 'Menu, donor schedule, hygiene checks' },
        { label: 'Free Classes', desc: 'Sanskrit, Vedas, Yoga by trained teachers' },
        { label: 'Medical Camps', desc: 'Tie‑up with hospitals, basic first‑aid on site' },
      ],
    },
  ]

  const registrations = [
    'PAN Card (mandatory for banking)',
    'Trust Deed / Society Registration',
    '12A & 80G (for tax exemption)',
    'FCRA Registration (for foreign funds)',
    'GST (if applicable) for canteen, shops',
    'Shops & Establishment License',
    'Fire Safety Certificate',
    'Building Completion Certificate',
    'Labour Welfare Board Registration (if staff > 10)',
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-10% 0px -30% 0px',
        threshold: 0.3,
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <main className="pt-20">

      {/* HERO SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Standard Operating <span className="text-amber-400">Procedures</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Empowering temples with structured protocols for safety, transparency, and spiritual excellence.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <nav className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-amber-100/50 flex flex-col gap-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleNavClick(e, section.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-orange-500'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeSection === section.id
                        ? 'bg-white text-orange-500'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {section.letter}
                    </span>
                    <span className="flex-1">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-3 space-y-6">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100/50 scroll-mt-24"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                      {section.letter}
                    </span>
                    <h2 className="font-playfair text-xl md:text-2xl font-bold text-darkBg">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start border-b border-amber-100/30 pb-2 last:border-0">
                        <span className="text-orange-500 font-bold text-sm mt-0.5">-</span>
                        <div>
                          <span className="font-semibold text-darkBg text-sm">{item.label}</span>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* REGISTRATIONS BOX - No Icons */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 border-2 border-orange-500/30">
                <h3 className="font-playfair text-xl font-bold text-darkBg mb-4">
                  Required Registrations and Certificates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {registrations.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 border-b border-orange-100/30 pb-1.5">
                      <span className="text-green-600 font-bold text-sm">-</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Ready to Implement These SOPs?
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Let us help you establish structured protocols for your temple's operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Get Started
              </Link>
              <Link
                to="/features/smart-donations"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Explore Smart Donations
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Procedures
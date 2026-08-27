import Navbar from '../components/Navbar'
import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllMembers, deleteMember } from '../data/memberStore'
import FamilyTreeModal from '../components/FamilyTreeModal'

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

const MEMBERSHIP_LABELS = {
  monthly: 'Monthly',
  annual: 'Annual',
  lifetime: 'Lifetime',
}

const MEMBERSHIP_BADGE_CLASSES = {
  monthly: 'bg-blue-50 text-blue-700 border-blue-200',
  annual: 'bg-amber-50 text-amber-700 border-amber-200',
  lifetime: 'bg-purple-50 text-purple-700 border-purple-200',
}

function Members() {
  const navigate = useNavigate()
  const [members, setMembers] = useState([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [treeMember, setTreeMember] = useState(null)

  useEffect(() => {
    setMembers(getAllMembers())
  }, [])

  const stats = useMemo(() => {
    const total = members.length
    const byType = { monthly: 0, annual: 0, lifetime: 0 }
    let seniors = 0
    members.forEach((m) => {
      if (byType[m.membershipType] !== undefined) byType[m.membershipType]++
      const age = calculateAge(m.dateOfBirth)
      if (age !== null && age >= SENIOR_AGE) seniors++
    })
    return { total, byType, seniors }
  }, [members])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return members
      .filter((m) => (typeFilter === 'all' ? true : m.membershipType === typeFilter))
      .filter((m) => {
        if (!q) return true
        return (
          m.fullName?.toLowerCase().includes(q) ||
          m.id?.toLowerCase().includes(q) ||
          m.phone?.toLowerCase().includes(q) ||
          m.email?.toLowerCase().includes(q)
        )
      })
      .sort((a, b) => (b.id || '').localeCompare(a.id || ''))
  }, [members, search, typeFilter])

  const handleView = (member) => {
    navigate('/devotee-membership/card', { state: { cardData: member } })
  }

  const handleDelete = (member) => {
    const ok = window.confirm(`Remove ${member.fullName} (${member.id}) from the members list? This cannot be undone.`)
    if (!ok) return
    deleteMember(member.id)
    setMembers(getAllMembers())
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* ===== HERO SECTION ===== */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Devotee <span className="text-amber-400">Members</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              Every devotee who has registered for a membership card on this device.
            </p>
          </div>
        </section>

        {/* ===== BODY ===== */}
        <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 min-h-[60vh]">
          <div className="w-full max-w-7xl mx-auto px-4">

            {/* Note about where this data comes from */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 mb-8 text-sm text-gray-700">
              This list shows members registered from this browser. Cards are saved locally, so a member
              created on a different device or browser won't appear here — connect a real backend/database
              to share one member list across everyone.
            </div>

            {/* ===== STATS ===== */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow border border-amber-100/60 text-center">
                <p className="text-2xl font-bold text-darkBg">{stats.total}</p>
                <p className="text-xs text-gray-500 mt-1">Total Members</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-amber-100/60 text-center">
                <p className="text-2xl font-bold text-blue-600">{stats.byType.monthly}</p>
                <p className="text-xs text-gray-500 mt-1">Monthly</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-amber-100/60 text-center">
                <p className="text-2xl font-bold text-amber-600">{stats.byType.annual}</p>
                <p className="text-xs text-gray-500 mt-1">Annual</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-amber-100/60 text-center">
                <p className="text-2xl font-bold text-purple-600">{stats.byType.lifetime}</p>
                <p className="text-xs text-gray-500 mt-1">Lifetime</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-amber-100/60 text-center">
                <p className="text-2xl font-bold text-green-600">{stats.seniors}</p>
                <p className="text-xs text-gray-500 mt-1">Senior Citizens</p>
              </div>
            </div>

            {/* ===== SEARCH + FILTER ===== */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, ID, phone, or email..."
                className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border-2 border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">All Membership Types</option>
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
                <option value="lifetime">Lifetime</option>
              </select>
              <button
                onClick={() => navigate('/devotee-membership')}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:scale-105 transition-all whitespace-nowrap"
              >
                + New Member
              </button>
            </div>

            {/* ===== EMPTY STATE ===== */}
            {members.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center shadow border border-amber-100/60">
                <div className="text-5xl mb-4">🪪</div>
                <h3 className="font-playfair text-xl font-bold text-darkBg mb-2">No members yet</h3>
                <p className="text-gray-500 mb-6">Registered devotees will show up here once someone completes the membership form.</p>
                <button
                  onClick={() => navigate('/devotee-membership')}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-all"
                >
                  Register a Devotee
                </button>
              </div>
            )}

            {/* ===== NO SEARCH RESULTS ===== */}
            {members.length > 0 && filtered.length === 0 && (
              <div className="bg-white rounded-2xl p-10 text-center shadow border border-amber-100/60">
                <p className="text-gray-500">No members match your search or filter.</p>
              </div>
            )}

            {/* ===== MEMBERS TABLE (desktop) ===== */}
            {filtered.length > 0 && (
              <div className="hidden md:block bg-white rounded-2xl shadow border border-amber-100/60 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-amber-50 text-gray-600 uppercase text-xs tracking-wide">
                    <tr>
                      <th className="px-5 py-3">Devotee</th>
                      <th className="px-5 py-3">ID</th>
                      <th className="px-5 py-3">Contact</th>
                      <th className="px-5 py-3">Membership</th>
                      <th className="px-5 py-3">Joined</th>
                      <th className="px-5 py-3">Family</th>
                      <th className="px-5 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filtered.map((m) => {
                      const age = calculateAge(m.dateOfBirth)
                      const isSenior = age !== null && age >= SENIOR_AGE
                      return (
                        <tr key={m.id} className="hover:bg-amber-50/50 transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-amber-200 shrink-0">
                                {m.profileImage ? (
                                  <img src={m.profileImage} alt={m.fullName} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-lg">👤</div>
                                )}
                              </div>
                              <div>
                                <p className="font-semibold text-darkBg">{m.fullName}</p>
                                {isSenior && <span className="text-[10px] font-bold text-green-700">🌿 Senior Citizen</span>}
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3 font-mono text-xs text-gray-600">{m.id}</td>
                          <td className="px-5 py-3">
                            <p className="text-gray-700">{m.phone}</p>
                            <p className="text-gray-400 text-xs">{m.email}</p>
                          </td>
                          <td className="px-5 py-3">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${MEMBERSHIP_BADGE_CLASSES[m.membershipType] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                              {MEMBERSHIP_LABELS[m.membershipType] || m.membershipType}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-gray-600">{m.joinDate}</td>
                          <td className="px-5 py-3 text-gray-600">
                            {m.familyMembers?.filter((f) => f.name).length || 0}
                          </td>
                          <td className="px-5 py-3">
                            <div className="flex justify-end gap-2 flex-wrap">
                              <button
                                onClick={() => handleView(m)}
                                className="px-3 py-1.5 text-xs font-semibold border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-all"
                              >
                                View Card
                              </button>
                              <button
                                onClick={() => setTreeMember(m)}
                                className="px-3 py-1.5 text-xs font-semibold border-2 border-amber-400 text-amber-600 rounded-full hover:bg-amber-50 transition-all"
                              >
                                🌳 Family Tree
                              </button>
                              <button
                                onClick={() => handleDelete(m)}
                                className="px-3 py-1.5 text-xs font-semibold border-2 border-red-300 text-red-500 rounded-full hover:bg-red-50 transition-all"
                              >
                                Remove
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* ===== MEMBERS CARDS (mobile) ===== */}
            {filtered.length > 0 && (
              <div className="md:hidden space-y-4">
                {filtered.map((m) => {
                  const age = calculateAge(m.dateOfBirth)
                  const isSenior = age !== null && age >= SENIOR_AGE
                  return (
                    <div key={m.id} className="bg-white rounded-xl p-4 shadow border border-amber-100/60">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-amber-200 shrink-0">
                          {m.profileImage ? (
                            <img src={m.profileImage} alt={m.fullName} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xl">👤</div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-darkBg truncate">{m.fullName}</p>
                          <p className="text-xs text-gray-400 font-mono">{m.id}</p>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border shrink-0 ${MEMBERSHIP_BADGE_CLASSES[m.membershipType] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                          {MEMBERSHIP_LABELS[m.membershipType] || m.membershipType}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1 mb-3">
                        <p>📞 {m.phone}</p>
                        <p>✉️ {m.email}</p>
                        <p>📅 Joined {m.joinDate}</p>
                        {isSenior && <p className="text-green-700 font-bold">🌿 Senior Citizen</p>}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => handleView(m)}
                          className="flex-1 px-3 py-2 text-xs font-semibold border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-all"
                        >
                          View Card
                        </button>
                        <button
                          onClick={() => setTreeMember(m)}
                          className="flex-1 px-3 py-2 text-xs font-semibold border-2 border-amber-400 text-amber-600 rounded-full hover:bg-amber-50 transition-all"
                        >
                          🌳 Family Tree
                        </button>
                        <button
                          onClick={() => handleDelete(m)}
                          className="flex-1 px-3 py-2 text-xs font-semibold border-2 border-red-300 text-red-500 rounded-full hover:bg-red-50 transition-all"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

          </div>
        </section>
      </main>

      {treeMember && (
        <FamilyTreeModal member={treeMember} onClose={() => setTreeMember(null)} />
      )}
    </>
  )
}

export default Members

import { useState } from 'react'
import html2canvas from 'html2canvas'

function initials(name) {
  if (!name) return '?'
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join('')
}

function TreeNode({ label, sub, isRoot }) {
  return (
    <div
      className={`flex flex-col items-center px-4 py-3 rounded-xl border-2 shadow-sm min-w-[130px] max-w-[160px] ${
        isRoot
          ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-600'
          : 'bg-white border-amber-200 text-darkBg'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${
          isRoot ? 'bg-white/20' : 'bg-amber-50 text-amber-600'
        }`}
      >
        {initials(label)}
      </div>
      <p className="font-semibold text-sm text-center leading-tight break-words">{label}</p>
      {sub && <p className={`text-[11px] mt-0.5 text-center ${isRoot ? 'text-white/80' : 'text-gray-500'}`}>{sub}</p>}
    </div>
  )
}

function FamilyTreeModal({ member, onClose }) {
  const [downloading, setDownloading] = useState(false)

  if (!member) return null

  const familyMembers = (member.familyMembers || []).filter((f) => f.name)

  const downloadTree = async () => {
    setDownloading(true)
    try {
      const el = document.getElementById('family-tree-capture')
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#fdf6f0' })
      const link = document.createElement('a')
      link.download = `SEWAI-Family-Tree-${member.id || member.fullName}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Family tree download failed:', err)
      alert('Could not generate the family tree image. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-cream rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-playfair text-xl font-bold text-darkBg">Family Tree — {member.fullName}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
        </div>

        <div id="family-tree-capture" className="bg-[#fdf6f0] rounded-xl p-6 md:p-10">
          <div className="flex flex-col items-center">
            <TreeNode
              label={member.fullName}
              sub={member.membershipType ? `${member.membershipType} member` : 'Primary member'}
              isRoot
            />

            {familyMembers.length > 0 ? (
              <>
                <div className="w-0.5 h-6 bg-amber-300"></div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
                  {familyMembers.map((f, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-0.5 h-4 bg-amber-300"></div>
                      <TreeNode
                        label={f.name}
                        sub={[f.relation, f.age ? `${f.age} yrs` : null].filter(Boolean).join(' • ')}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-400 text-sm mt-4 italic">No family members added for this devotee yet.</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition-all"
          >
            Close
          </button>
          <button
            onClick={downloadTree}
            disabled={downloading}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:scale-105 transition-all disabled:opacity-60"
          >
            {downloading ? 'Preparing...' : '⬇ Download Tree'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FamilyTreeModal

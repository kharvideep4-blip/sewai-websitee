// Simple client-side persistence for devotee membership cards.
// This is demo-grade storage (browser localStorage) — good enough to make
// sure a generated card isn't lost on refresh, and to keep a running list
// of every member created on this device. Swap this out for a real backend
// API when you're ready to go beyond the demo.

const ALL_MEMBERS_KEY = 'sewai_members'
const LAST_MEMBER_KEY = 'sewai_last_member'

export function saveMember(cardInfo) {
  try {
    localStorage.setItem(LAST_MEMBER_KEY, JSON.stringify(cardInfo))

    const existing = getAllMembers()
    const withoutDuplicate = existing.filter((m) => m.id !== cardInfo.id)
    withoutDuplicate.push(cardInfo)
    localStorage.setItem(ALL_MEMBERS_KEY, JSON.stringify(withoutDuplicate))
  } catch (err) {
    // localStorage can fail (private browsing, quota exceeded, etc.) —
    // don't block the demo flow if it does.
    console.error('Could not save member to local storage:', err)
  }
}

export function getLastMember() {
  try {
    const raw = localStorage.getItem(LAST_MEMBER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (err) {
    console.error('Could not read last member from local storage:', err)
    return null
  }
}

export function getAllMembers() {
  try {
    const raw = localStorage.getItem(ALL_MEMBERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error('Could not read members from local storage:', err)
    return []
  }
}

export function getMemberById(id) {
  return getAllMembers().find((m) => m.id === id) || null
}

export function deleteMember(id) {
  try {
    const remaining = getAllMembers().filter((m) => m.id !== id)
    localStorage.setItem(ALL_MEMBERS_KEY, JSON.stringify(remaining))

    // If the one being deleted was also the "last member" shortcut, clear
    // that too so a stale card doesn't keep showing up.
    const last = getLastMember()
    if (last && last.id === id) {
      localStorage.removeItem(LAST_MEMBER_KEY)
    }
  } catch (err) {
    console.error('Could not delete member from local storage:', err)
  }
}

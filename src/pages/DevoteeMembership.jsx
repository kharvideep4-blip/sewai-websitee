import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveMember } from '../data/memberStore'

function DevoteeMembership() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [showPayment, setShowPayment] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    profileImage: null,
    familyHead: '',
    familyMembers: [{ name: '', age: '', relation: '' }],
    templeLocation: '',
    membershipType: 'annual',
    notifications: true,
    offerings: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          profileImage: event.target.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const addFamilyMember = () => {
    setFormData(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, { name: '', age: '', relation: '' }]
    }))
  }

  const updateFamilyMember = (index, field, value) => {
    const updatedMembers = [...formData.familyMembers]
    updatedMembers[index][field] = value
    setFormData(prev => ({
      ...prev,
      familyMembers: updatedMembers
    }))
  }

  const removeFamilyMember = (index) => {
    setFormData(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter((_, i) => i !== index)
    }))
  }

  const generateMembershipId = () => {
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `SEWAI${timestamp}${random}`
  }

  const handleStepNext = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.email || !formData.phone) {
        alert('Please fill in all required fields')
        return
      }
    }
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleStepPrev = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleProcessPayment = () => {
    const membershipId = generateMembershipId()
    const cardInfo = {
      id: membershipId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      profileImage: formData.profileImage,
      membershipType: formData.membershipType,
      joinDate: new Date().toLocaleDateString('en-IN'),
      templeLocation: formData.templeLocation,
      familyMembers: formData.familyMembers,
      familyHead: formData.familyHead
    }
    setShowPayment(false)
    // Fake payment done — save the card so it survives a refresh, then
    // send the member to a separate page to view their card
    saveMember(cardInfo)
    navigate('/devotee-membership/card', { state: { cardData: cardInfo } })
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ===== HERO SECTION ===== */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl">🕉</div>
            <div className="absolute bottom-10 right-10 text-6xl">🕉</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">🕉</div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              Devotee <span className="text-amber-400">Membership</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              Join our sacred community and unlock exclusive access to temple services, events, and spiritual programs.
            </p>
          </div>
        </section>

        {/* ===== MEMBERSHIP FORM SECTION ===== */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
            <div className="w-full max-w-4xl mx-auto px-4">

              {/* ===== STEP INDICATOR ===== */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex flex-col items-center flex-1">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                        s === step ? 'bg-orange-500 text-white shadow-lg scale-110' :
                        s < step ? 'bg-green-500 text-white' :
                        'bg-gray-300 text-gray-600'
                      }`}>
                        {s < step ? '✓' : s}
                      </div>
                      <p className="text-sm font-semibold mt-2 text-gray-700">
                        {s === 1 ? 'Personal' : s === 2 ? 'Family' : 'Preferences'}
                      </p>
                      {s < 3 && <div className={`flex-1 h-1 mx-2 mt-3 ${s < step ? 'bg-green-500' : 'bg-gray-300'}`}></div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== FORM CARD ===== */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100/50">

                {/* ===== STEP 1: PERSONAL INFORMATION ===== */}
                {step === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-darkBg mb-1">Personal Information</h3>
                      <p className="text-gray-500 text-sm mb-6">Tell us about yourself</p>
                    </div>

                    {/* Profile Photo Upload */}
                    <div className="bg-amber-50 rounded-xl p-6 border-2 border-dashed border-amber-300">
                      <div className="flex flex-col items-center gap-4">
                        {formData.profileImage ? (
                          <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-4 border-orange-500"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
                            📷
                          </div>
                        )}
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <span className="text-orange-500 font-semibold hover:text-orange-600">
                            Upload Photo
                          </span>
                        </label>
                        <p className="text-xs text-gray-500">JPG, PNG (max 5MB)</p>
                      </div>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-darkBg mb-1.5">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-darkBg mb-1.5">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-darkBg mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                          placeholder="Enter email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-darkBg mb-1.5">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    {/* DOB & Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-darkBg mb-1.5">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-darkBg mb-1.5">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* ===== STEP 2: FAMILY INFORMATION ===== */}
                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-darkBg mb-1">Family Information</h3>
                      <p className="text-gray-500 text-sm mb-6">Add your family members to build your family tree</p>
                    </div>

                    {/* Family Head */}
                    <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                      <p className="text-sm font-semibold text-darkBg mb-3">Family Head</p>
                      <input
                        type="text"
                        name="familyHead"
                        value={formData.familyHead}
                        onChange={handleInputChange}
                        placeholder="Enter family head name"
                        className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-sm"
                      />
                    </div>

                    {/* Family Members */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-darkBg">Family Members</h4>
                        <button
                          type="button"
                          onClick={addFamilyMember}
                          className="text-orange-500 hover:text-orange-600 font-semibold text-sm"
                        >
                          + Add Member
                        </button>
                      </div>

                      {formData.familyMembers.map((member, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-4 space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => updateFamilyMember(idx, 'name', e.target.value)}
                              placeholder="Name"
                              className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm"
                            />
                            <input
                              type="number"
                              value={member.age}
                              onChange={(e) => updateFamilyMember(idx, 'age', e.target.value)}
                              placeholder="Age"
                              className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm"
                            />
                            <select
                              value={member.relation}
                              onChange={(e) => updateFamilyMember(idx, 'relation', e.target.value)}
                              className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm"
                            >
                              <option value="">Relation</option>
                              <option value="spouse">Spouse</option>
                              <option value="child">Child</option>
                              <option value="parent">Parent</option>
                              <option value="sibling">Sibling</option>
                              <option value="grandchild">Grandchild</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          {formData.familyMembers.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeFamilyMember(idx)}
                              className="text-red-500 hover:text-red-600 font-semibold text-xs"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ===== STEP 3: PREFERENCES ===== */}
                {step === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-darkBg mb-1">Membership Preferences</h3>
                      <p className="text-gray-500 text-sm mb-6">Customize your membership experience</p>
                    </div>

                    {/* Temple Location */}
                    <div>
                      <label className="block text-sm font-semibold text-darkBg mb-1.5">
                        Preferred Temple Location
                      </label>
                      <select
                        name="templeLocation"
                        value={formData.templeLocation}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                      >
                        <option value="">Select temple</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="other">Other Location</option>
                      </select>
                    </div>

                    {/* Membership Type */}
                    <div>
                      <label className="block text-sm font-semibold text-darkBg mb-3">Membership Type</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { value: 'monthly', label: 'Monthly', price: '₹299' },
                          { value: 'annual', label: 'Annual', price: '₹2,999' },
                          { value: 'lifetime', label: 'Lifetime', price: '₹9,999' }
                        ].map(type => (
                          <label key={type.value} className="cursor-pointer">
                            <input
                              type="radio"
                              name="membershipType"
                              value={type.value}
                              checked={formData.membershipType === type.value}
                              onChange={handleInputChange}
                              className="hidden"
                            />
                            <div className={`p-4 rounded-xl border-2 transition-all ${
                              formData.membershipType === type.value
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 bg-white'
                            }`}>
                              <p className="font-semibold text-darkBg">{type.label}</p>
                              <p className="text-orange-500 font-bold text-lg">{type.price}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Special Offerings */}
                    <div>
                      <label className="block text-sm font-semibold text-darkBg mb-1.5">
                        Special Offerings Interest
                      </label>
                      <textarea
                        name="offerings"
                        value={formData.offerings}
                        onChange={handleInputChange}
                        placeholder="E.g., Pooja services, Spiritual counseling, Educational programs..."
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white/80 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                        rows="3"
                      />
                    </div>

                    {/* Notifications */}
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-orange-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        Receive updates about temple events and programs
                      </span>
                    </label>

                    {/* Terms */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-xs text-gray-600">
                        By proceeding, you agree to our terms of membership and privacy policy. Your information is secure and encrypted.
                      </p>
                    </div>
                  </div>
                )}

                {/* ===== NAVIGATION BUTTONS ===== */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleStepPrev}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      step === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    disabled={step === 1}
                  >
                    ← Back
                  </button>
                  {step === 3 ? (
                    <button
                      onClick={() => setShowPayment(true)}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all"
                    >
                      Proceed to Payment →
                    </button>
                  ) : (
                    <button
                      onClick={handleStepNext}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all"
                    >
                      Next Step →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

        {/* ===== PAYMENT MODAL ===== */}
        {showPayment && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h3 className="font-playfair text-2xl font-bold text-darkBg mb-2">Payment Details</h3>
              <p className="text-gray-600 text-sm mb-6">Complete your membership registration</p>

              <div className="bg-amber-50 rounded-xl p-4 mb-6 border-2 border-amber-200">
                <div className="flex justify-between mb-3 pb-3 border-b border-amber-300">
                  <span className="text-gray-700">Membership</span>
                  <span className="font-bold text-darkBg">
                    {formData.membershipType === 'monthly' && '₹299'}
                    {formData.membershipType === 'annual' && '₹2,999'}
                    {formData.membershipType === 'lifetime' && '₹9,999'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-darkBg">Total Amount</span>
                  <span className="text-lg font-bold text-orange-500">
                    {formData.membershipType === 'monthly' && '₹299'}
                    {formData.membershipType === 'annual' && '₹2,999'}
                    {formData.membershipType === 'lifetime' && '₹9,999'}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-darkBg mb-2">Select Payment Method</label>
                  <select className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none">
                    <option>Credit/Debit Card</option>
                    <option>UPI</option>
                    <option>Net Banking</option>
                    <option>Digital Wallet</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                onClick={handleProcessPayment}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-full hover:scale-105 transition-all mb-3"
              >
                ✓ Complete Payment
              </button>
              <button
                onClick={() => setShowPayment(false)}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-2 rounded-full hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default DevoteeMembership

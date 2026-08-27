import { useState, useRef, useEffect } from 'react'

function BackgroundMusicPlayer() {
  // ── Music State ──
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // ── Bell State ──
  const [isBellEnabled, setIsBellEnabled] = useState(() => {
    const saved = localStorage.getItem('bellSoundEnabled')
    return saved !== null ? saved === 'true' : true
  })
  const bellAudioRef = useRef(null)
  const lastBellPlayTime = useRef(0)

  // ── Position State ──
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('musicWidgetPos')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return null
      }
    }
    return null
  })

  const widgetRef = useRef(null)
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  })

  // ── Initialize Audio ──
  useEffect(() => {
    audioRef.current = new Audio('/assets/audio/bgmusic.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    bellAudioRef.current = new Audio('/assets/audio/bell.mp3')
    bellAudioRef.current.volume = 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
      if (bellAudioRef.current) {
        bellAudioRef.current.pause()
        bellAudioRef.current.src = ''
      }
    }
  }, [])

  // ── Save Bell Preference ──
  useEffect(() => {
    localStorage.setItem('bellSoundEnabled', String(isBellEnabled))
  }, [isBellEnabled])

  // ── Save Position ──
  useEffect(() => {
    if (position) {
      localStorage.setItem('musicWidgetPos', JSON.stringify(position))
    }
  }, [position])

  // ── Global Click Listener for Bell ──
  useEffect(() => {
    if (!isBellEnabled) return

    const handleClick = () => {
      if (!bellAudioRef.current) return

      const now = Date.now()
      if (now - lastBellPlayTime.current < 150) return
      lastBellPlayTime.current = now

      try {
        bellAudioRef.current.currentTime = 0
        bellAudioRef.current.play().catch(() => {})
      } catch (e) {
        // Ignore errors
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [isBellEnabled])

  // ── Music Controls ──
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Playback error:', err))
    }
  }

  // ── Manual Bell Ring ──
  const ringBell = () => {
    if (!bellAudioRef.current) return
    try {
      bellAudioRef.current.currentTime = 0
      bellAudioRef.current.play().catch(() => {})
    } catch (e) {
      // Ignore
    }
  }

  // ── Toggle Bell On/Off ──
  const toggleBell = () => {
    setIsBellEnabled(!isBellEnabled)
    // Play a quick ring to indicate toggle
    setTimeout(() => {
      if (bellAudioRef.current) {
        bellAudioRef.current.currentTime = 0
        bellAudioRef.current.play().catch(() => {})
      }
    }, 100)
  }

  // ── Drag Handlers ──
  const handleDragStart = (e) => {
    e.preventDefault()
    const touch = e.touches?.[0] || e
    const rect = widgetRef.current?.getBoundingClientRect()
    if (!rect) return

    let currentLeft = position?.left ?? rect.left
    let currentTop = position?.top ?? rect.top

    dragRef.current.startX = touch.clientX
    dragRef.current.startY = touch.clientY
    dragRef.current.offsetX = touch.clientX - currentLeft
    dragRef.current.offsetY = touch.clientY - currentTop
    dragRef.current.isDragging = false

    window.addEventListener('mousemove', handleDragMove)
    window.addEventListener('mouseup', handleDragEnd)
    window.addEventListener('touchmove', handleDragMove, { passive: false })
    window.addEventListener('touchend', handleDragEnd)
  }

  const handleDragMove = (e) => {
    e.preventDefault()
    const touch = e.touches?.[0] || e
    const dx = touch.clientX - dragRef.current.startX
    const dy = touch.clientY - dragRef.current.startY

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      dragRef.current.isDragging = true
    }

    if (!dragRef.current.isDragging) return

    let newLeft = touch.clientX - dragRef.current.offsetX
    let newTop = touch.clientY - dragRef.current.offsetY

    const padding = 10
    const widgetWidth = 80
    const widgetHeight = 160
    const maxLeft = window.innerWidth - widgetWidth - padding
    const maxTop = window.innerHeight - widgetHeight - padding
    newLeft = Math.max(padding, Math.min(newLeft, maxLeft))
    newTop = Math.max(padding, Math.min(newTop, maxTop))

    setPosition({ left: newLeft, top: newTop })
  }

  const handleDragEnd = () => {
    window.removeEventListener('mousemove', handleDragMove)
    window.removeEventListener('mouseup', handleDragEnd)
    window.removeEventListener('touchmove', handleDragMove)
    window.removeEventListener('touchend', handleDragEnd)
  }

  const handleButtonClick = (callback) => (e) => {
    if (dragRef.current.isDragging) {
      dragRef.current.isDragging = false
      return
    }
    callback()
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleDragMove)
      window.removeEventListener('mouseup', handleDragEnd)
      window.removeEventListener('touchmove', handleDragMove)
      window.removeEventListener('touchend', handleDragEnd)
    }
  }, [])

  const style = position
    ? { left: position.left, top: position.top }
    : { bottom: '24px', right: '24px' }

  // ── Render ──
  return (
    <div
      ref={widgetRef}
      className="fixed z-[9999] flex flex-col items-center cursor-grab select-none"
      style={style}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Bell Toggle Button */}
      <button
        onClick={handleButtonClick(toggleBell)}
        className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center text-lg hover:scale-110 transition-transform duration-300 cursor-pointer select-none mb-1 ${
          isBellEnabled
            ? 'bg-amber-500/80 text-white hover:bg-amber-600'
            : 'bg-gray-400/80 text-white/50 hover:bg-gray-500'
        }`}
        aria-label={isBellEnabled ? 'Disable click bell' : 'Enable click bell'}
        title={isBellEnabled ? 'Bell: ON (click anywhere)' : 'Bell: OFF'}
      >
        {isBellEnabled ? '🔔' : '🔕'}
      </button>

      {/* Play / Pause Button */}
      <button
        onClick={handleButtonClick(togglePlay)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-2xl flex items-center justify-center text-2xl hover:scale-105 transition-transform duration-300 cursor-pointer select-none"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        )}
      </button>

      {/* Status Label */}
      <span className="text-[10px] font-medium text-gray-500 mt-1.5 bg-white/80 px-2 py-0.5 rounded-full shadow-sm select-none">
        {isPlaying ? 'Playing' : 'Paused'}
      </span>

      {/* Bell Status */}
      <span className="text-[8px] font-medium text-gray-400 mt-0.5 select-none">
        {isBellEnabled ? 'Bell: ON' : 'Bell: OFF'}
      </span>

      {/* Drag Hint */}
      <span className="text-[8px] text-gray-400 mt-0.5 opacity-0 hover:opacity-100 transition-opacity duration-300 select-none">
        ⇱ Drag me
      </span>
    </div>
  )
}

export default BackgroundMusicPlayer
import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Slideshow hook that supports a mix of image and video slides.
 *
 * `slides` can either be:
 *   - an array of image URL strings (old behaviour, all use `intervalTime`), or
 *   - an array of objects: { type: 'image' | 'video', src, duration }
 *     where `duration` (ms) overrides `intervalTime` for that one slide
 *     (handy for a short video clip that should move on quickly).
 */
export function useSlideshow(slides, intervalTime = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef(null)

  const goToSlide = useCallback((index) => {
    const newIndex = (index + slides.length) % slides.length
    setCurrentIndex(newIndex)
  }, [slides.length])

  const next = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide])
  const prev = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide])

  // Duration for the slide currently on screen — falls back to intervalTime
  // for plain image strings or slides with no explicit duration.
  const currentSlide = slides[currentIndex]
  const currentDuration =
    typeof currentSlide === 'object' && currentSlide?.duration
      ? currentSlide.duration
      : intervalTime

  useEffect(() => {
    timerRef.current = setTimeout(next, currentDuration)
    return () => clearTimeout(timerRef.current)
  }, [next, currentDuration])

  return { currentIndex, goToSlide, next, prev }
}

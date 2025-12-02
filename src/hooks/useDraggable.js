import { useCallback, useEffect, useRef, useState } from 'react'

const useDraggable = (initialOffset = { x: 0, y: 0 }) => {
  const [offset, setOffset] = useState(() => ({ x: initialOffset.x || 0, y: initialOffset.y || 0 }))
  const [isDragging, setIsDragging] = useState(false)
  const last = useRef({ x: 0, y: 0 })
  const pointerId = useRef(null)

  const onPointerDown = useCallback((e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerId.current = e.pointerId
    e.currentTarget.setPointerCapture?.(e.pointerId)
    setIsDragging(true)
    last.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    const onPointerMove = (e) => {
      if (!isDragging) return
      if (pointerId.current !== null && e.pointerId !== pointerId.current) return
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      last.current = { x: e.clientX, y: e.clientY }
      setOffset((o) => ({ x: o.x + dx, y: o.y + dy }))
    }
    const onPointerUp = (e) => {
      if (pointerId.current !== null && e.pointerId !== pointerId.current) return
      pointerId.current = null
      setIsDragging(false)
    }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
    }
  }, [isDragging])

  const onMouseDown = onPointerDown

  return { offset, isDragging, onPointerDown, onMouseDown }
}

export default useDraggable

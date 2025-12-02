import { useEffect, useRef, useState } from 'react'

export default function useDraggable(initialOffset = { x: 0, y: 0 }) {
  const [offset, setOffset] = useState(() => ({ x: initialOffset.x || 0, y: initialOffset.y || 0 }))
  const [isDragging, setIsDragging] = useState(false)
  const last = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e) {
      if (!isDragging) return
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      last.current = { x: e.clientX, y: e.clientY }
      setOffset((o) => ({ x: o.x + dx, y: o.y + dy }))
    }
    function onUp() {
      setIsDragging(false)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [isDragging])

  function onMouseDown(e) {
    setIsDragging(true)
    last.current = { x: e.clientX, y: e.clientY }
  }

  return { offset, isDragging, onMouseDown }
}

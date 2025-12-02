import { useMemo, useState } from 'react'

const KEYS = ['resume', 'contact', 'bio', 'projects']

export default function useWindowManager() {
  const [state, setState] = useState(() => ({
    resume: { open: false, pos: null },
    contact: { open: false, pos: null },
    bio: { open: false, pos: null },
    projects: { open: false, pos: null },
  }))

  const openOffsets = useMemo(() => {
    const arr = []
    for (const k of KEYS) {
      const w = state[k]
      if (w.open && w.pos) arr.push(w.pos)
    }
    return arr
  }, [state])

  function randomOffset() {
    const rx = Math.floor(Math.random() * 480) - 240
    const ry = Math.floor(Math.random() * 360) - 180
    return { x: rx, y: ry }
  }

  function farFromExisting(candidate) {
    const minDist = 140
    for (const o of openOffsets) {
      const dx = candidate.x - o.x
      const dy = candidate.y - o.y
      const dist = Math.hypot(dx, dy)
      if (dist < minDist) return false
    }
    return true
  }

  function computeSpawnOffset() {
    for (let i = 0; i < 20; i++) {
      const cand = randomOffset()
      if (farFromExisting(cand)) return cand
    }
    const base = { x: (openOffsets.length % 5) * 30, y: (openOffsets.length % 5) * 24 }
    return base
  }

  function openWindow(key) {
    setState((prev) => ({
      ...prev,
      [key]: { open: true, pos: computeSpawnOffset() },
    }))
  }

  function closeWindow(key) {
    setState((prev) => ({
      ...prev,
      [key]: { open: false, pos: null },
    }))
  }

  function isOpen(key) {
    return !!state[key]?.open
  }
  function getOffset(key) {
    return state[key]?.pos || null
  }

  const anyOpen = KEYS.some((k) => state[k].open)

  return {
    openWindow,
    closeWindow,
    isOpen,
    getOffset,
    anyOpen,
  }
}

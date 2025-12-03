import { useMemo, useState } from 'react'

const KEYS = ['resume', 'contact', 'bio', 'projects', 'bughunt']

const useWindowManager = () => {
  const [state, setState] = useState(() => ({
    resume: { open: false, pos: null, z: 0 },
    contact: { open: false, pos: null, z: 0 },
    bio: { open: false, pos: null, z: 0 },
    projects: { open: false, pos: null, z: 0 },
    bughunt: { open: false, pos: null, z: 0 },
    nextZ: 100,
  }))

  const openOffsets = useMemo(() => {
    const arr = []
    for (const k of KEYS) {
      const w = state[k]
      if (w.open && w.pos) arr.push(w.pos)
    }
    return arr
  }, [state])

  const randomOffset = () => {
    const rx = Math.floor(Math.random() * 480) - 240
    const ry = Math.floor(Math.random() * 360) - 180
    return { x: rx, y: ry }
  }

  const farFromExisting = (candidate) => {
    const minDist = 140
    for (const o of openOffsets) {
      const dx = candidate.x - o.x
      const dy = candidate.y - o.y
      const dist = Math.hypot(dx, dy)
      if (dist < minDist) return false
    }
    return true
  }

  const computeSpawnOffset = () => {
    for (let i = 0; i < 20; i++) {
      const cand = randomOffset()
      if (farFromExisting(cand)) return cand
    }
    const base = { x: (openOffsets.length % 5) * 30, y: (openOffsets.length % 5) * 24 }
    return base
  }

  const openWindow = (key) => {
    setState((prev) => ({
      ...prev,
      [key]: { open: true, pos: computeSpawnOffset(), z: prev.nextZ },
      nextZ: prev.nextZ + 1,
    }))
  }

  const openWindowCentered = (key) => {
    setState((prev) => ({
      ...prev,
      [key]: { open: true, pos: { x: 0, y: 0 }, z: prev.nextZ },
      nextZ: prev.nextZ + 1,
    }))
  }

  const closeWindow = (key) => {
    setState((prev) => ({
      ...prev,
      [key]: { open: false, pos: null, z: prev[key]?.z || 0 },
    }))
  }

  const isOpen = (key) => !!state[key]?.open
  const getOffset = (key) => state[key]?.pos || null
  const getZ = (key) => state[key]?.z || 0

  const focusWindow = (key) => {
    setState((prev) => ({
      ...prev,
      [key]: { ...prev[key], z: prev.nextZ },
      nextZ: prev.nextZ + 1,
    }))
  }

  const anyOpen = KEYS.some((k) => state[k].open)

  return {
    openWindow,
    openWindowCentered,
    closeWindow,
    isOpen,
    getOffset,
    getZ,
    focusWindow,
    anyOpen,
  }
}

export default useWindowManager

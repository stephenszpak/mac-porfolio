import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const GAME_DURATION_MS = 30000
export const BUG_SPAWN_INTERVAL_MS = 800
export const MAX_BUGS_ON_SCREEN = 8
export const HIGH_SCORE_EASTER_EGG_THRESHOLD = 25

type BugType = 'react' | 'elixir' | 'ts' | 'css'

export type Bug = {
  id: string
  x: number
  y: number
  type: BugType
  label: string
  anim: string
}

type GameState = 'idle' | 'running' | 'finished'

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min

const pickType = (): BugType => {
  const arr: BugType[] = ['react', 'elixir', 'ts', 'css']
  return arr[Math.floor(Math.random() * arr.length)]
}

const labelFor = (t: BugType) =>
  t === 'react' ? 'React bug' : t === 'elixir' ? 'Elixir bug' : t === 'ts' ? 'TypeScript bug' : 'CSS bug'

export const useBugHuntGame = (containerRef: React.RefObject<HTMLElement>) => {
  const [state, setState] = useState<GameState>('idle')
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [bugs, setBugs] = useState<Bug[]>([])
  const [remainingMs, setRemainingMs] = useState(GAME_DURATION_MS)
  const timerRef = useRef<number | null>(null)
  const spawnRef = useRef<number | null>(null)
  const startedAtRef = useRef<number>(0)
  const stateRef = useRef<GameState>(state)
  const bugsLenRef = useRef<number>(0)

  useEffect(() => {
    const saved = Number(localStorage.getItem('bughunt:best') || '0')
    if (!Number.isNaN(saved)) setBest(saved)
  }, [])

  useEffect(() => { stateRef.current = state }, [state])
  useEffect(() => { bugsLenRef.current = bugs.length }, [bugs])

  const reset = useCallback(() => {
    setScore(0)
    setBugs([])
    setRemainingMs(GAME_DURATION_MS)
  }, [])

  const endGame = useCallback(() => {
    setState('finished')
    if (spawnRef.current) window.clearTimeout(spawnRef.current)
    if (timerRef.current) window.clearInterval(timerRef.current)
    if (score > best) {
      setBest(score)
      localStorage.setItem('bughunt:best', String(score))
    }
  }, [score, best])

  const spawnBug = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    if (bugsLenRef.current >= MAX_BUGS_ON_SCREEN) return
    const rect = el.getBoundingClientRect()
    const pad = 24
    const x = randomInt(pad, Math.max(pad, rect.width - pad))
    const y = randomInt(pad, Math.max(pad, rect.height - pad))
    const t = pickType()
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    const anim = `${randomFloat(1.2, 2.0)}s`
    const bug: Bug = { id, x, y, type: t, label: labelFor(t), anim }
    setBugs((arr) => [...arr, bug])
  }, [containerRef])

  const startGame = useCallback(() => {
    reset()
    setState('running')
    startedAtRef.current = Date.now()
  }, [reset])

  const restartGame = useCallback(() => {
    reset()
    setState('running')
    startedAtRef.current = Date.now()
  }, [reset])

  useEffect(() => {
    if (state !== 'running') return
    timerRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startedAtRef.current
      const remain = Math.max(0, GAME_DURATION_MS - elapsed)
      setRemainingMs(remain)
      if (remain <= 0) endGame()
    }, 100)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [state, endGame])

  useEffect(() => {
    if (state !== 'running') return
    const loop = () => {
      spawnRef.current = window.setTimeout(() => {
        spawnBug()
        if (stateRef.current === 'running') loop()
      }, BUG_SPAWN_INTERVAL_MS)
    }
    loop()
    return () => {
      if (spawnRef.current) window.clearTimeout(spawnRef.current)
    }
  }, [state, spawnBug])

  const clickBug = useCallback((id: string) => {
    setBugs((arr) => arr.filter((b) => b.id !== id))
    setScore((s) => s + 1)
  }, [])

  const timeLeft = useMemo(() => Math.ceil(remainingMs / 100) / 10, [remainingMs])

  return {
    state,
    score,
    best,
    bugs,
    timeLeft,
    startGame,
    restartGame,
    clickBug,
    HIGH_SCORE_EASTER_EGG_THRESHOLD,
  }
}

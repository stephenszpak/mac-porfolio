import { useEffect, useState } from 'react'
import styles from './MacWindow.module.css'
import useDraggable from '../hooks/useDraggable.js'

const MacWindow = ({ title = 'Untitled', children, onClose, initialOffset, zIndex = 0, onFocus, wide = false }) => {
  const { offset, isDragging, onPointerDown } = useDraggable(initialOffset)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  const handlePointerDown = (e) => {
    if (isMobile) return
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('[data-nodrag]')) return
    onPointerDown(e)
  }

  const transform = `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`
  const style = isMobile
    ? { top: '15vh', left: '50%', transform: 'translateX(-50%)' }
    : { transform }

  return (
    <div className={`${styles.window} ${wide ? styles.wide : ''}`} style={{ ...style, zIndex }} onMouseDown={onFocus}>
      <div className={styles.titleBar} onPointerDown={handlePointerDown} data-dragging={isDragging}>
        <div className={styles.traffic}>
          <button className={`${styles.dot} ${styles.red}`} aria-label="Close" onClick={onClose} />
          <span className={`${styles.dot} ${styles.yellow}`} aria-hidden />
          <span className={`${styles.dot} ${styles.green}`} aria-hidden />
        </div>
        <div className={styles.title} title={title}>{title}</div>
        <div className={styles.placeholder} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default MacWindow

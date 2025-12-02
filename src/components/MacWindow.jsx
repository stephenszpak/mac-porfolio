import styles from './MacWindow.module.css'
import useDraggable from '../hooks/useDraggable.js'

export default function MacWindow({ title = 'Untitled', children, onClose, initialOffset }) {
  const { offset, isDragging, onPointerDown } = useDraggable(initialOffset)
  const handlePointerDown = (e) => {
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('[data-nodrag]')) return
    onPointerDown(e)
  }

  const transform = `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`

  return (
    <div className={styles.window} style={{ transform }}>
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

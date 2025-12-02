import React from 'react'
import styles from './DesktopIcon.module.css'

export default function DesktopIcon({ label, onOpen, icon }) {
  return (
    <button className={styles.icon} onClick={onOpen} title={label}>
      <span className={styles.glyph} aria-hidden>
        {icon ? icon : '📄'}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  )
}

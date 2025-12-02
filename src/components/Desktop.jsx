import React from 'react'
import styles from './Desktop.module.css'
import logo from '../images/self-logo.png'
import DesktopIcon from './DesktopIcon.jsx'
import FolderIcon from './icons/FolderIcon.jsx'

export default function Desktop({ onOpenResume, onOpenProjects, logoShifted = false }) {
  return (
    <div className={styles.desktop}>
      <div className={styles.wallpaperOverlay}>
        <img className={`${styles.logoImg} ${logoShifted ? styles.logoShiftLeft : ''}`} src={logo} alt="Logo" />
      </div>

      <div className={styles.iconsArea}>
        <DesktopIcon label="Resume.pdf" onOpen={onOpenResume} />
        <DesktopIcon label="Projects" onOpen={onOpenProjects} icon={<FolderIcon />} />
      </div>
    </div>
  )
}

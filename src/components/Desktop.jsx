import styles from './Desktop.module.css'
import logo from '../images/self-logo.png'
import DesktopIcon from './DesktopIcon.jsx'
import FolderIcon from './icons/FolderIcon.jsx'

const Desktop = ({ onOpenResume, onOpenProjects, logoShifted = false }) => {
  return (
    <div className={styles.desktop}>
      <div className={styles.wallpaperOverlay}>
        <div className={`${styles.logoWrap} ${logoShifted ? styles.logoShiftLeft : ''}`}>
          <div className={styles.logoAura} />
          <img className={styles.logoImg} src={logo} alt="Logo" />
        </div>
      </div>

      <div className={styles.iconsArea}>
        <DesktopIcon label="Resume.pdf" onOpen={onOpenResume} />
        <DesktopIcon label="Projects" onOpen={onOpenProjects} icon={<FolderIcon />} />
      </div>
    </div>
  )
}

export default Desktop

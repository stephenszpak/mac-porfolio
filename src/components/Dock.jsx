import React from 'react'
import styles from './Dock.module.css'
import MailIcon from './icons/MailIcon.jsx'
import ContactsIcon from './icons/ContactsIcon.jsx'
import FinderIcon from './icons/FinderIcon.jsx'
import NotesIcon from './icons/NotesIcon.jsx'
// Try to use a local LinkedIn image if present; fallback to Font Awesome
const imageUrls = import.meta.glob('../images/*', { eager: true, as: 'url' })
function resolveImage(prefix) {
  const key = Object.keys(imageUrls).find((k) => (k.split('/').pop() || '').toLowerCase().startsWith(prefix))
  return key ? imageUrls[key] : null
}
const linkedInImg = resolveImage('linkedin')

const items = [
  { key: 'projects', label: 'Projects', icon: '🧰' },
  { key: 'contact', label: 'Contact', icon: '✉️' },
  { key: 'bio', label: 'Bio', icon: '👤' },
  { key: 'resume', label: 'Resume', icon: '📄' },
  { key: 'linkedin', label: 'LinkedIn', icon: null },
  { key: 'github', label: 'GitHub', icon: null },
]

export default function Dock({ onOpenBio, onOpenProjects, onOpenContact, onOpenResume }) {
  const handleClick = (key) => {
    if (key === 'bio' && onOpenBio) onOpenBio()
    if (key === 'projects' && onOpenProjects) onOpenProjects()
    if (key === 'contact' && onOpenContact) onOpenContact()
    if (key === 'resume' && onOpenResume) onOpenResume()
    if (key === 'linkedin') {
      window.open('https://linkedin.com/in/stephen-szpak', '_blank', 'noopener,noreferrer')
    }
    if (key === 'github') {
      window.open('https://github.com/stephenszpak', '_blank', 'noopener,noreferrer')
    }
  }
  return (
    <div className={styles.dockWrap}>
      <div className={styles.dock}>
        {items.map((it) => (
          <button
            key={it.key}
            className={`${styles.item} ease-transform`}
            aria-label={it.label}
            onClick={() => handleClick(it.key)}
          >
            <span className={styles.emoji} aria-hidden>
              {it.key === 'contact' ? (
                <MailIcon />
              ) : it.key === 'bio' ? (
                <ContactsIcon />
              ) : it.key === 'projects' ? (
                <FinderIcon />
              ) : it.key === 'resume' ? (
                <NotesIcon />
              ) : it.key === 'linkedin' ? (
                linkedInImg ? <img src={linkedInImg} alt="" /> : <i className="fa-brands fa-linkedin" aria-hidden />
              ) : it.key === 'github' ? (
                <i className="fa-brands fa-square-github" aria-hidden />
              ) : (
                it.icon
              )}
            </span>
            <span className={styles.tooltip} role="tooltip">{it.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

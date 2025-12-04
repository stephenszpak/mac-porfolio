import { useState } from 'react'
import '../styles/notifications.css'

const Notifications = ({ show, onClose }) => {
  const [hiding, setHiding] = useState(false)

  const handleClose = () => {
    setHiding(true)
    setTimeout(() => onClose?.(), 220)
  }

  if (!show) return null
  return (
    <div className="notif-root">
      <div className={`notif notif-card ${hiding ? 'hide' : ''}`} role="status" aria-live="polite">
        <div className="notif-icon"><i className="fa-regular fa-circle-question" aria-hidden /></div>
        <div className="notif-content">
          <div className="notif-title">Welcome</div>
          <div className="notif-text">
            This portfolio mimics a macOS desktop. Use the Dock to open Bio, Projects, Contact, Resume, etc.
          </div>
        </div>
        <div className="notif-actions">
          <button className="notif-btn" onClick={handleClose}>Got it</button>
        </div>
      </div>
    </div>
  )
}

export default Notifications

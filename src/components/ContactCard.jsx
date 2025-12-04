import styles from './ContactCard.module.css'
import headshot from '../images/headshot.jpeg'

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
    <path fill="#0b5fff" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
    <path fill="#fff" d="M5 8l7 5 7-5v0"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
    <path fill="#111827" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-1.97c-3.26.71-3.95-1.41-3.95-1.41-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.33-1.3-5.33-5.79 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.18 0 0 .99-.32 3.25 1.2a11.2 11.2 0 0 1 5.92 0c2.26-1.52 3.25-1.2 3.25-1.2.63 1.66.23 2.88.11 3.18.75.82 1.2 1.86 1.2 3.14 0 4.5-2.73 5.49-5.34 5.79.42.36.79 1.08.79 2.18v3.23c0 .3.22.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
  </svg>
)

const ContactCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}><img src={headshot} alt="Headshot" /></div>
        <div className={styles.title}>
          <div className={styles.name}>Contact</div>
          <div className={styles.sub}>Thanks for stopping by — let’s connect</div>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.icon}><MailIcon /></div>
          <div className={styles.label}>Email</div>
          <div className={styles.value}><a href="mailto:srszpak@gmail.com">srszpak@gmail.com</a></div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><i className="fa-brands fa-linkedin-in" aria-hidden /></div>
          <div className={styles.label}>LinkedIn</div>
          <div className={styles.value}><a href="https://linkedin.com/in/stephen-szpak" target="_blank" rel="noreferrer noopener">linkedin.com/in/stephen-szpak</a></div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><GitHubIcon /></div>
          <div className={styles.label}>GitHub</div>
          <div className={styles.value}><a href="https://github.com/stephenszpak" target="_blank" rel="noreferrer noopener">github.com/stephenszpak</a></div>
        </div>
      </div>

      <div className={styles.hint}>You can also reach me via the dock icons below.</div>
    </div>
  )
}

export default ContactCard

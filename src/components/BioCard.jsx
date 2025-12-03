import styles from './BioCard.module.css'
import headshot from '../images/headshot.jpeg'

const BioCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}><img src={headshot} alt="Headshot" /></div>
        <div>
          <div className={styles.name}>Stephen Szpak</div>
          <div className={styles.subtitle}>AVP Front-End Developer · AllianceBernstein</div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.fields}>
          <div className={styles.row}>
            <div className={styles.label}>Email</div>
            <div className={styles.value}>
              <a href="mailto:srszpak@gmail.com">srszpak@gmail.com</a>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.label}>Websites</div>
            <div className={styles.value}>
              <a href="https://linkedin.com/in/stephen-szpak" target="_blank" rel="noreferrer noopener">linkedin.com/in/stephen-szpak</a>
              <a href="https://github.com/stephenszpak" target="_blank" rel="noreferrer noopener">github.com/stephenszpak</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.notesTitle}>Notes</div>
        <div className={styles.notes}>
          <p>
            I’m a front-end engineer with 9+ years of experience building modern, performant user interfaces. I currently
            serve as an AVP Front-End Developer at AllianceBernstein, supporting enterprise marketing initiatives. I maintain
            and enhance components for the public site and internal campaign tools, primarily using React and Adobe Experience
            Manager.
          </p>
          <p>
            Outside of my core role, I design and build data-focused tools and prototypes—dashboards, analytics utilities,
            and workflow helpers. I occasionally explore language models and automation when they add clear value to usability
            and insight. I work across multiple programming languages and ecosystems and make a point every year to learn a new
            one or deepen my expertise in an existing language.
          </p>
          <p>
            I care about intuitive, reliable software that improves day-to-day work. Lately I’ve been exploring real-time
            data, sentiment signals, and conversational interfaces to turn information into actionable decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BioCard

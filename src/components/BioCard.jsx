import styles from './BioCard.module.css'
import headshot from '../images/headshot.jpeg'

const BioCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}><img src={headshot} alt="Headshot" /></div>
        <div>
          <div className={styles.name}>Stephen Szpak</div>
          <div className={styles.subtitle}>Full Stack Developer</div>
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
            With a little over nine years in the industry, I’ve ended up specializing in building fast, clean, and maintainable front-end systems, backed by enough backend experience to keep everything running smoothly. In my role as an AVP Front-End Developer at AllianceBernstein, I spend most of my time leveling up our React and Adobe Experience Manager setups by modernizing components, tightening up build pipelines, wiring in analytics and API layers, and making sure our marketing tools and sites stay solid under global traffic.
          </p>
          <p>
            I’m also the kind of developer who can’t leave well enough alone, so outside of my day job I build a lot of side tools and prototypes. Sometimes it’s analytics dashboards, workflow helpers, or automation utilities; sometimes it’s bigger experiments, like large-scale game server backends or AI-assisted systems. I bounce between languages and frameworks and make a point each year to learn something new or go deeper on something I already know.
          </p>
          <p>
            Away from the keyboard, I’m a dad to two young kids, a lifelong musician, and a tech obsessive who always has some half-built gadget or experimental project going. Most of my free time is split between chasing toddlers, tinkering with gear, writing music, or testing out whatever new tech rabbit hole I stumbled into that week.
          </p>
          <p>
            At the end of the day, I care about building intuitive, reliable software that actually makes people’s work easier. Clean architecture, predictable behavior, and systems that scale without turning brittle — that’s the stuff I aim for.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BioCard

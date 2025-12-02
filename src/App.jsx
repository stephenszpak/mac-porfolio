import React, { useMemo, useState } from 'react'
import Desktop from './components/Desktop.jsx'
import Dock from './components/Dock.jsx'
import MacWindow from './components/MacWindow.jsx'
import ProjectsPane from './components/ProjectsPane.jsx'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [bioOpen, setBioOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const [resumePos, setResumePos] = useState(null)
  const [contactPos, setContactPos] = useState(null)
  const [bioPos, setBioPos] = useState(null)
  const [projectsPos, setProjectsPos] = useState(null)

  const anyOpen = resumeOpen || contactOpen || bioOpen || projectsOpen

  // Logo does not react to window state anymore

  const openOffsets = useMemo(() => {
    const arr = []
    if (resumeOpen && resumePos) arr.push(resumePos)
    if (contactOpen && contactPos) arr.push(contactPos)
    if (bioOpen && bioPos) arr.push(bioPos)
    if (projectsOpen && projectsPos) arr.push(projectsPos)
    return arr
  }, [resumeOpen, contactOpen, bioOpen, projectsOpen, resumePos, contactPos, bioPos, projectsPos])

  function randomOffset() {
    const rx = Math.floor(Math.random() * 480) - 240 // [-240, 240]
    const ry = Math.floor(Math.random() * 360) - 180 // [-180, 180]
    return { x: rx, y: ry }
  }

  function farFromExisting(candidate) {
    const minDist = 140
    for (const o of openOffsets) {
      const dx = candidate.x - o.x
      const dy = candidate.y - o.y
      const dist = Math.hypot(dx, dy)
      if (dist < minDist) return false
    }
    return true
  }

  function computeSpawnOffset() {
    // Try several times to avoid overlapping current windows
    for (let i = 0; i < 20; i++) {
      const cand = randomOffset()
      if (farFromExisting(cand)) return cand
    }
    // Fallback: small cascade
    const base = { x: (openOffsets.length % 5) * 30, y: (openOffsets.length % 5) * 24 }
    return base
  }

  const handleOpenResume = () => {
    setResumePos(computeSpawnOffset())
    setResumeOpen(true)
  }
  const handleOpenContact = () => {
    setContactPos(computeSpawnOffset())
    setContactOpen(true)
  }
  const handleOpenBio = () => {
    setBioPos(computeSpawnOffset())
    setBioOpen(true)
  }
  const handleOpenProjects = () => {
    setProjectsPos(computeSpawnOffset())
    setProjectsOpen(true)
  }

  return (
    <>
      <Desktop onOpenProjects={handleOpenProjects} onOpenResume={handleOpenResume} logoShifted={anyOpen} />

      {resumeOpen && (
        <MacWindow title="Resume.pdf" onClose={() => { setResumeOpen(false); setResumePos(null) }} initialOffset={resumePos}>
          <div style={{ padding: 16, lineHeight: 1.6 }}>
            Resume placeholder. Content goes here.
          </div>
        </MacWindow>
      )}

      {contactOpen && (
        <MacWindow title="Contact" onClose={() => { setContactOpen(false); setContactPos(null) }} initialOffset={contactPos}>
          <div style={{ padding: 16, lineHeight: 1.8 }}>
            <div style={{ marginBottom: 8 }}>Get in touch:</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
              <li>
                Email: <a href="mailto:srszpak@gmail.com">srszpak@gmail.com</a>
              </li>
              <li>
                LinkedIn: <a href="https://linkedin.com/in/stephen-szpak" target="_blank" rel="noreferrer noopener">linkedin.com/in/stephen-szpak</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/stephenszpak" target="_blank" rel="noreferrer noopener">github.com/stephenszpak</a>
              </li>
            </ul>
          </div>
        </MacWindow>
      )}

      {bioOpen && (
        <MacWindow title="Bio" onClose={() => { setBioOpen(false); setBioPos(null) }} initialOffset={bioPos}>
          <div style={{ padding: 16, lineHeight: 1.7, display: 'grid', gap: 12 }}>
            <p>
              I’m a front-end engineer with 9+ years of experience building modern, performant user interfaces.
              I currently serve as an AVP Front-End Developer at AllianceBernstein, supporting enterprise marketing
              initiatives. I maintain and enhance components for the public site and internal campaign tools, primarily
              using React and Adobe Experience Manager.
            </p>
            <p>
              Outside of my core role, I design and build data-focused tools and prototypes—dashboards, analytics
              utilities, and workflow helpers. I occasionally explore language models and automation when they add clear
              value to usability and insight.
            </p>
            <p>
              I care about intuitive, reliable software that improves day-to-day work. Lately I’ve been exploring
              real-time data, sentiment signals, and conversational interfaces to turn information into actionable
              decisions.
            </p>
          </div>
        </MacWindow>
      )}

      {projectsOpen && (
        <MacWindow title="Projects" onClose={() => { setProjectsOpen(false); setProjectsPos(null) }} initialOffset={projectsPos}>
          <ProjectsPane
            items={[
              { name: 'Natural Language Dashboard', imageKey: 'nl_dashboard' },
            ]}
          />
        </MacWindow>
      )}

      <Dock
        onOpenBio={handleOpenBio}
        onOpenProjects={handleOpenProjects}
        onOpenContact={handleOpenContact}
        onOpenResume={handleOpenResume}
      />
    </>
  )
}

import { useState } from 'react'
import Desktop from './components/Desktop.jsx'
import Dock from './components/Dock.jsx'
import MacWindow from './components/MacWindow.jsx'
import ProjectsPane from './components/ProjectsPane.jsx'
import useWindowManager from './hooks/useWindowManager.js'

export default function App() {
  const wm = useWindowManager()
  const handleOpenResume = () => wm.openWindow('resume')
  const handleOpenContact = () => wm.openWindow('contact')
  const handleOpenBio = () => wm.openWindow('bio')
  const handleOpenProjects = () => wm.openWindow('projects')

  return (
    <>
      <Desktop onOpenProjects={handleOpenProjects} onOpenResume={handleOpenResume} logoShifted={wm.anyOpen} />

      {wm.isOpen('resume') && (
        <MacWindow title="Resume.pdf" onClose={() => wm.closeWindow('resume')} initialOffset={wm.getOffset('resume')}>
          <div style={{ padding: 16, lineHeight: 1.6 }}>
            Resume placeholder. Content goes here.
          </div>
        </MacWindow>
      )}

      {wm.isOpen('contact') && (
        <MacWindow title="Contact" onClose={() => wm.closeWindow('contact')} initialOffset={wm.getOffset('contact')}>
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

      {wm.isOpen('bio') && (
        <MacWindow title="Bio" onClose={() => wm.closeWindow('bio')} initialOffset={wm.getOffset('bio')}>
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

      {wm.isOpen('projects') && (
        <MacWindow title="Projects" onClose={() => wm.closeWindow('projects')} initialOffset={wm.getOffset('projects')}>
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

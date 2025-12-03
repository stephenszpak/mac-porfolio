import { useEffect } from 'react'
import Desktop from './components/Desktop.jsx'
import Dock from './components/Dock.jsx'
import MacWindow from './components/MacWindow.jsx'
import ProjectsPane from './components/ProjectsPane.jsx'
import useWindowManager from './hooks/useWindowManager.js'
import BugHunt from './components/bughunt/BugHunt'
import BioCard from './components/BioCard.jsx'

const App = () => {
  const wm = useWindowManager()
  useEffect(() => {
    const open = () => wm.openWindow('bughunt')
    window.addEventListener('dock:open-bughunt', open)
    return () => window.removeEventListener('dock:open-bughunt', open)
  }, [wm])
  const handleOpenResume = () => wm.openWindow('resume')
  const handleOpenContact = () => wm.openWindow('contact')
  const handleOpenBio = () => wm.openWindowCentered('bio')
  const handleOpenProjects = () => wm.openWindow('projects')

  return (
    <>
      <Desktop onOpenProjects={handleOpenProjects} onOpenResume={handleOpenResume} logoShifted={wm.anyOpen} />

      {wm.isOpen('resume') && (
        <MacWindow
          title="Resume.pdf"
          onClose={() => wm.closeWindow('resume')}
          initialOffset={wm.getOffset('resume')}
          zIndex={wm.getZ('resume')}
          onFocus={() => wm.focusWindow('resume')}
        >
          <div style={{ padding: 16, lineHeight: 1.6 }}>
            Resume placeholder. Content goes here.
          </div>
        </MacWindow>
      )}

      {wm.isOpen('contact') && (
        <MacWindow
          title="Contact"
          onClose={() => wm.closeWindow('contact')}
          initialOffset={wm.getOffset('contact')}
          zIndex={wm.getZ('contact')}
          onFocus={() => wm.focusWindow('contact')}
        >
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
        <MacWindow
          title="Bio"
          onClose={() => wm.closeWindow('bio')}
          initialOffset={{ x: 0, y: 0 }}
          zIndex={wm.getZ('bio')}
          onFocus={() => wm.focusWindow('bio')}
        >
          <BioCard />
        </MacWindow>
      )}

      {wm.isOpen('projects') && (
        <MacWindow
          title="Projects"
          onClose={() => wm.closeWindow('projects')}
          initialOffset={wm.getOffset('projects')}
          zIndex={wm.getZ('projects')}
          onFocus={() => wm.focusWindow('projects')}
        >
          <ProjectsPane
            items={[
              { name: 'Natural Language Dashboard', imageKey: 'nl_dashboard' },
            ]}
          />
        </MacWindow>
      )}

      {wm.isOpen('bughunt') && (
        <MacWindow
          title="Bug Hunt"
          onClose={() => wm.closeWindow('bughunt')}
          initialOffset={wm.getOffset('bughunt')}
          zIndex={wm.getZ('bughunt')}
          onFocus={() => wm.focusWindow('bughunt')}
        >
          <BugHunt />
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

export default App

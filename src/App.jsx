import { useEffect, useState } from 'react'
import Desktop from './components/Desktop.jsx'
import Dock from './components/Dock.jsx'
import MacWindow from './components/MacWindow.jsx'
import ProjectsPane from './components/ProjectsPane.jsx'
import useWindowManager from './hooks/useWindowManager.js'
import BioCard from './components/BioCard.jsx'
import ContactCard from './components/ContactCard.jsx'
import ResumeViewer from './components/ResumeViewer.jsx'
import Notifications from './components/Notifications.jsx'

const App = () => {
  const wm = useWindowManager()
  const [showNotif, setShowNotif] = useState(true)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  const closeOthers = (except) => {
    const keys = ['resume', 'contact', 'bio', 'projects']
    keys.forEach((k) => {
      if (k !== except && wm.isOpen(k)) wm.closeWindow(k)
    })
  }

  const toggleResume = () => {
    if (wm.isOpen('resume')) return wm.closeWindow('resume')
    if (isMobile) closeOthers('resume')
    return wm.openWindowCentered('resume')
  }
  const toggleContact = () => {
    if (wm.isOpen('contact')) return wm.closeWindow('contact')
    if (isMobile) closeOthers('contact')
    return wm.openWindow('contact')
  }
  const toggleBio = () => {
    if (wm.isOpen('bio')) return wm.closeWindow('bio')
    if (isMobile) closeOthers('bio')
    return wm.openWindowCentered('bio')
  }
  const toggleProjects = () => {
    if (wm.isOpen('projects')) return wm.closeWindow('projects')
    if (isMobile) closeOthers('projects')
    return wm.openWindow('projects')
  }

  

  return (
    <>
      <Desktop onOpenProjects={toggleProjects} onOpenResume={toggleResume} logoShifted={wm.anyOpen} />

      {wm.isOpen('resume') && (
        <MacWindow
          title="Resume (PDF)"
          onClose={() => wm.closeWindow('resume')}
          initialOffset={wm.getOffset('resume')}
          zIndex={wm.getZ('resume')}
          onFocus={() => wm.focusWindow('resume')}
          wide
        >
          <ResumeViewer />
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
          <ContactCard />
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
              { name: 'Portfolio Site', imageKey: 'webpage' },
              { name: 'MMO Server', imageKey: 'mmo-server-image' },
            ]}
          />
        </MacWindow>
      )}


      <Dock
        onToggleBio={toggleBio}
        onToggleProjects={toggleProjects}
        onToggleContact={toggleContact}
        onToggleResume={toggleResume}
      />

      <Notifications show={showNotif} onClose={() => setShowNotif(false)} />
    </>
  )
}

export default App

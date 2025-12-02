import React, { useMemo, useState } from 'react'
import pane from './ProjectsPane.module.css'
import ProjectsGrid from './ProjectsGrid.jsx'

export default function ProjectsPane({ items }) {
  const [selected, setSelected] = useState(null)

  const view = selected ? 'detail' : 'list'

  const details = useMemo(() => {
    if (!selected) return null
    // Content map; expand as more projects are added
    if (selected.name === 'Natural Language Dashboard') {
      return (
        <div className={pane.detailBody}>
          <section>
            <h3>About This Project</h3>
            <p>
              A sophisticated Phoenix LiveView application that combines AI-driven sentiment analysis with competitive
              intelligence. Features automated data collection from social media (Twitter, Reddit) and news feeds,
              real-time sentiment analysis using OpenAI and local models with Ollama fallbacks, autonomous agent subsystem
              for pattern recognition and historical analysis, intelligent trigger system for competitor activity monitoring,
              comprehensive analytics with VegaLite visualizations, conversational AI interface for natural language queries,
              scheduled data processing with background jobs, and alert system for significant market changes. The dashboard
              provides actionable insights through AI assistance, making complex data analysis accessible through natural
              language interactions.
            </p>
          </section>
          <section>
            <h3>Technologies Used</h3>
            <ul>
              <li>Phoenix LiveView</li>
              <li>Elixir</li>
              <li>OpenAI</li>
            </ul>
          </section>
          <section>
            <a
              href="https://github.com/stephenszpak/nl-dashboard/tree/main/dashboard_gen"
              target="_blank"
              rel="noreferrer noopener"
              className={pane.link}
            >
              Source code link
            </a>
          </section>
        </div>
      )
    }
    return <div className={pane.detailBody}>Details coming soon.</div>
  }, [selected])

  return (
    <div className={pane.container}>
      {view === 'detail' && (
        <div className={`${pane.header} ${pane.headerShadow}`}>
          <button className={pane.backBtn} onClick={() => setSelected(null)} aria-label="Back to Projects">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={pane.headerTitle}>{selected?.name}</div>
          <span className={pane.rightPlaceholder} />
        </div>
      )}

      <div className={`${pane.track} ${view === 'detail' ? pane.toDetail : pane.toList}`}>
        <div className={pane.slide}>
          {/* List view */}
          <ProjectsGrid items={items} onSelect={setSelected} />
        </div>
        <div className={pane.slide}>
          {/* Detail view */}
          <div className={pane.detailWrap}>{details}</div>
        </div>
      </div>
    </div>
  )
}

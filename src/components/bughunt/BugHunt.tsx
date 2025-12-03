import React, { useMemo, useRef } from 'react'
import '../../styles/bughunt.css'
import { useBugHuntGame, HIGH_SCORE_EASTER_EGG_THRESHOLD } from '../../hooks/useBugHuntGame'
import Bug from './Bug'

const BugHunt: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null)
  const game = useBugHuntGame(editorRef as React.RefObject<HTMLElement>)

  const lines = useMemo(() => Array.from({ length: 24 }, (_, i) => i + 1), [])
  const statusText = useMemo(
    () => `NORMAL  main.tsx  UTF-8  Unix  ${game.state === 'running' ? Math.round((1 - game.timeLeft / 30) * 100) : 0}%`,
    [game.state, game.timeLeft]
  )

  return (
    <div className="bughunt-window">
      <div className="bughunt-root">
        <div className="bughunt-tree">
          <div className="h">src/</div>
          <div className="f">App.tsx</div>
          <div className="f">BugHunt.tsx</div>
          <div className="f">main.tsx</div>
          <div className="h" style={{ marginTop: 8 }}>elixir/</div>
          <div className="f">zone_logic.ex</div>
          <div className="h" style={{ marginTop: 8 }}>react/</div>
          <div className="f">hooks.ts</div>
          <div className="h" style={{ marginTop: 8 }}>analytics/</div>
          <div className="f">dashboard-gen.ts</div>
        </div>
        <div className="bughunt-editor">
          <div className="bughunt-editor-inner" ref={editorRef}>
            <div className="bughunt-gutter">
              {lines.map((n) => (
                <div key={n}>{n}</div>
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`t${i}`} className="bughunt-tilde">~</div>
              ))}
            </div>
            <div className="bughunt-lines">
              {game.state === 'idle' && (
                <div className="bughunt-start">
                  <button className="bughunt-btn" onClick={game.startGame}>Start Debugging</button>
                </div>
              )}
              {game.state === 'running' && (
                <div className="bughunt-hud">
                  <div>⏱ {game.timeLeft.toFixed(1)}s</div>
                  <div>Score: {game.score}</div>
                </div>
              )}
              {game.state === 'running' && (
                <div className="bughunt-bugs-layer">
                  {game.bugs.map((b) => (
                    <Bug key={b.id} {...b} onClick={game.clickBug} />
                  ))}
                </div>
              )}
              {game.state === 'finished' && (
                <div className="bughunt-overlay">
                  <div className="bughunt-panel">
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>Time’s up!</div>
                    <div style={{ marginBottom: 6 }}>Bugs squashed: {game.score}</div>
                    <div style={{ marginBottom: 12 }}>Best score: {game.best}</div>
                    {game.best >= HIGH_SCORE_EASTER_EGG_THRESHOLD && (
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontWeight: 600, marginBottom: 6 }}>You’ve unlocked the Secret Debug Log!</div>
                        <a className="bughunt-btn" href="/secret-resume.pdf" target="_blank" rel="noreferrer noopener">Download</a>
                      </div>
                    )}
                    <button className="bughunt-btn" onClick={game.restartGame}>Play Again</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bughunt-status">{statusText}</div>
        </div>
      </div>
    </div>
  )
}

export default BugHunt

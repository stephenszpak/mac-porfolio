import React from 'react'

type Props = {
  id: string
  x: number
  y: number
  type: 'react' | 'elixir' | 'ts' | 'css'
  label: string
  anim: string
  onClick: (id: string) => void
}

const Bug: React.FC<Props> = ({ id, x, y, type, label, anim, onClick }) => {
  const style: React.CSSProperties = {
    left: x,
    top: y,
    animationDuration: anim,
  }
  const letter = type === 'react' ? 'R' : type === 'elixir' ? 'E' : type === 'ts' ? 'TS' : 'CSS'
  return (
    <div className={`bughunt-bug ${type}`} style={style} title={label} onClick={() => onClick(id)} role="button" aria-label={label}>
      {letter}
      <span className="bughunt-bug-label">{label}</span>
    </div>
  )
}

export default Bug

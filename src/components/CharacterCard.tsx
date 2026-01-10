import { GaugeBar } from './GaugeBar'
import type { Character } from '../data/characters'

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  const { name, role, icon, iconColor, angerPercent, sorrowPercent, description, highlight } = character

  return (
    <div
      className={`character-card bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg transition-all duration-300 border border-gold/20 ${
        highlight ? 'ring-2 ring-gold/30' : ''
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${iconColor} flex items-center justify-center text-paper font-mincho text-xl`}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-mincho text-xl text-ink">{name}</h3>
          <p className="text-ink/50 text-sm">{role}</p>
        </div>
      </div>
      <div className="space-y-4">
        <GaugeBar type="anger" percent={angerPercent} label="怒り" />
        <GaugeBar type="sorrow" percent={sorrowPercent} label="哀しみ" />
      </div>
      <p className="mt-4 text-sm text-ink/60 border-t border-ink/10 pt-4">
        {description}
      </p>
    </div>
  )
}

interface GaugeBarProps {
  type: 'anger' | 'sorrow'
  percent: number
  label: string
}

export function GaugeBar({ type, percent, label }: GaugeBarProps) {
  const emoji = type === 'anger' ? '😡' : '😢'
  const colorClass = type === 'anger' ? 'text-anger' : 'text-sorrow'
  const gaugeClass = type === 'anger' ? 'gauge-anger' : 'gauge-sorrow'

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm flex items-center gap-1">
          <span>{emoji}</span> {label}
        </span>
        <span className={`${colorClass} font-bold`}>{percent}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${gaugeClass} rounded-full animate-gauge`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

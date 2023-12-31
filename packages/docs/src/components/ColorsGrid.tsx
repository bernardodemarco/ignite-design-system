import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([colorName, colorValue]) => {
    return (
      <div
        style={{ backgroundColor: colorValue, padding: '2rem' }}
        key={colorName}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(colorValue, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${colorName}</strong>
          <span>{colorValue}</span>
        </div>
      </div>
    )
  })
}

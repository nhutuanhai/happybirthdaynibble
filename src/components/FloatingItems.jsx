import './FloatingItems.css'

const items = [
  '🎁', '🎀', '🎊', '🎉', '🎈', '🎂', '🍰', '🧁',
  '🍭', '🍬', '🍫', '🍩', '🎵', '🎶', '💝', '💖',
  '💕', '❤️', '🌸', '🌺', '🌷', '🌹', '🌻', '🌼',
  '🍀', '🌿', '🍃', '🌾', '🎪', '🎠', '🎡', '🎢',
  '🏮', '🎐', '🎋', '🎏', '⭐', '🌟', '✨', '💫',
  '🦋', '🌈', '🎗️', '🎯', '🧸', '🪅', '🪄', '🫧'
]

function FloatingItems() {
  return (
    <div className="floating-items-container">
      {[...Array(45)].map((_, i) => {
        const item = items[i % items.length]
        return (
          <div
            key={i}
            className="floating-item"
            style={{
              left: `${Math.random() * 95}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              fontSize: `${16 + Math.random() * 24}px`,
              opacity: 0.7 + Math.random() * 0.3,
            }}
          >
            {item}
          </div>
        )
      })}

      {/* Side decorations - flowers and leaves */}
      <div className="side-deco side-deco-left">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="side-flower" style={{
            top: `${i * 12 + 5}%`,
            animationDelay: `${i * 0.5}s`,
          }}>
            {['🌸', '🌺', '🌿', '🍃', '🌷', '🌹', '🍀', '🌾'][i]}
          </div>
        ))}
      </div>
      <div className="side-deco side-deco-right">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="side-flower" style={{
            top: `${i * 12 + 5}%`,
            animationDelay: `${i * 0.5 + 0.25}s`,
          }}>
            {['🌻', '🌼', '🌿', '🍃', '🌸', '🌺', '🍀', '🌾'][i]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloatingItems

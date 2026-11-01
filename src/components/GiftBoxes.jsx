import './GiftBoxes.css'

function GiftBoxes() {
  const gifts = [
    { emoji: '🎁', size: 50, left: '10%', delay: 0 },
    { emoji: '🎁', size: 45, left: '25%', delay: 0.3 },
    { emoji: '🎁', size: 55, left: '40%', delay: 0.6 },
    { emoji: '🎁', size: 40, left: '55%', delay: 0.9 },
    { emoji: '🎁', size: 48, left: '70%', delay: 1.2 },
    { emoji: '🎁', size: 52, left: '85%', delay: 1.5 },
  ]

  return (
    <div className="gift-boxes-container">
      {gifts.map((gift, i) => (
        <div
          key={i}
          className="gift-box"
          style={{
            left: gift.left,
            fontSize: `${gift.size}px`,
            animationDelay: `${gift.delay}s`,
          }}
        >
          <div className="gift-emoji">{gift.emoji}</div>
          <div className="gift-sparkle">✨</div>
        </div>
      ))}
    </div>
  )
}

export default GiftBoxes

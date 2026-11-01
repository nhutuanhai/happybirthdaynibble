import './PartyHats.css'

function PartyHats() {
  return (
    <div className="party-hats-container">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="party-hat" style={{
          animationDelay: `${i * 0.3}s`,
        }}>
          🥳
        </div>
      ))}
    </div>
  )
}

export default PartyHats

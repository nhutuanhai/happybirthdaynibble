import './Confetti.css'

const confettiColors = [
  '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94',
  '#F8B500', '#FF6F61', '#88D8B0', '#B19CD9', '#FF77A9',
  '#6EC5FF', '#FFDAC1', '#E2B0FF', '#98D8C8', '#F7DC6F'
]

function Confetti() {
  return (
    <div className="confetti-container">
      {[...Array(60)].map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
          backgroundColor: confettiColors[i % confettiColors.length],
          width: `${6 + Math.random() * 8}px`,
          height: `${6 + Math.random() * 8}px`,
          borderRadius: Math.random() > 0.5 ? '50%' : `${Math.random() * 3}px`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }

        return (
          <div key={i} className={`confetti confetti-${i % 3}`} style={style}></div>
        )
      })}
      
      {/* Ribbon confetti */}
      {[...Array(20)].map((_, i) => (
        <div key={`ribbon-${i}`} className="confetti-ribbon" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${4 + Math.random() * 4}s`,
          backgroundColor: confettiColors[i % confettiColors.length],
          width: `${3 + Math.random() * 4}px`,
          height: `${15 + Math.random() * 20}px`,
        }}></div>
      ))}
    </div>
  )
}

export default Confetti

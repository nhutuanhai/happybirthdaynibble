import './Sparkles.css'

function Sparkles() {
  return (
    <div className="sparkles-container">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="sparkle-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#7B68EE', '#32CD32', '#FF4500', '#1E90FF'][Math.floor(Math.random() * 8)],
          }}
        ></div>
      ))}
    </div>
  )
}

export default Sparkles

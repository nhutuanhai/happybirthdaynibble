import './Balloons.css'

const balloonColors = [
  '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94',
  '#F8B500', '#FF6F61', '#88D8B0', '#B19CD9', '#FF77A9',
  '#6EC5FF', '#FFDAC1', '#E2B0FF', '#98D8C8', '#F7DC6F',
  '#FF9FF3', '#54A0FF', '#5F27CD', '#01A3A4', '#F368E0'
]

function Balloons() {
  return (
    <div className="balloons-container">
      {[...Array(25)].map((_, i) => {
        const color = balloonColors[i % balloonColors.length]
        const left = Math.random() * 95
        const delay = Math.random() * 8
        const duration = 8 + Math.random() * 8
        const size = 35 + Math.random() * 25
        
        return (
          <div
            key={i}
            className="balloon-wrapper"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <div className="balloon" style={{
              width: `${size}px`,
              height: `${size * 1.2}px`,
              background: `radial-gradient(circle at 30% 30%, ${color}dd, ${color})`,
              boxShadow: `inset -8px -8px 20px rgba(0,0,0,0.15), inset 4px 4px 10px rgba(255,255,255,0.4), 0 0 15px ${color}44`,
            }}>
              <div className="balloon-shine"></div>
              <div className="balloon-knot" style={{ borderTopColor: color }}></div>
            </div>
            <div className="balloon-string" style={{ height: `${40 + Math.random() * 30}px` }}></div>
          </div>
        )
      })}
    </div>
  )
}

export default Balloons

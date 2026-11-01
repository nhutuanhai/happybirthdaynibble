import { useState, useEffect } from 'react'
import './Fireworks.css'

function Fireworks() {
  const [fireworks, setFireworks] = useState([])

  useEffect(() => {
    const createFirework = () => {
      const id = Date.now() + Math.random()
      const fw = {
        id,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 40,
        color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#B19CD9', '#FF77A9', '#6EC5FF'][Math.floor(Math.random() * 8)],
        size: 80 + Math.random() * 60,
      }
      
      setFireworks(prev => [...prev.slice(-8), fw])
      
      setTimeout(() => {
        setFireworks(prev => prev.filter(f => f.id !== id))
      }, 1500)
    }

    const interval = setInterval(createFirework, 2000)
    createFirework()
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fireworks-container">
      {fireworks.map(fw => (
        <div
          key={fw.id}
          className="firework"
          style={{
            left: `${fw.x}%`,
            top: `${fw.y}%`,
            width: `${fw.size}px`,
            height: `${fw.size}px`,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="firework-particle"
              style={{
                background: fw.color,
                transform: `rotate(${i * 30}deg)`,
                boxShadow: `0 0 6px ${fw.color}, 0 0 12px ${fw.color}`,
              }}
            ></div>
          ))}
          <div className="firework-center" style={{ background: fw.color, boxShadow: `0 0 20px ${fw.color}` }}></div>
        </div>
      ))}
    </div>
  )
}

export default Fireworks

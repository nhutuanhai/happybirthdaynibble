import { useState, useEffect } from 'react'
import './App.css'
import BirthdayCake from './components/BirthdayCake'
import Balloons from './components/Balloons'
import Confetti from './components/Confetti'
import Fireworks from './components/Fireworks'
import FloatingItems from './components/FloatingItems'
import GiftBoxes from './components/GiftBoxes'
import PartyHats from './components/PartyHats'
import Sparkles from './components/Sparkles'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500)
  }, [])

  return (
    <div className="birthday-app">
      {/* Background gradient animation */}
      <div className="bg-gradient"></div>
      
      {/* Floating particles */}
      <Sparkles />
      
      {/* Confetti rain */}
      <Confetti />
      
      {/* Fireworks */}
      <Fireworks />
      
      {/* Floating birthday items */}
      <FloatingItems />
      
      {/* Balloons */}
      <Balloons />

      {/* Main content */}
      <div className={`main-content ${showContent ? 'show' : ''}`}>
        {/* Stars decoration */}
        <div className="stars-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="star" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}>⭐</div>
          ))}
        </div>

        {/* Title */}
        <div className="title-section">
          <div className="title-decoration-top">
            <span className="deco-emoji">🎊</span>
            <span className="deco-emoji">🎉</span>
            <span className="deco-emoji">🎊</span>
          </div>
          
          <h1 className="birthday-title">
            <span className="title-line title-line-1">
              {'🎂 Chúc Mừng Sinh Nhật 🎂'.split('').map((char, i) => (
                <span key={i} className="title-char" style={{ animationDelay: `${i * 0.05}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <span className="title-line title-line-2">
              <span className="name-highlight">
                {'✨ Nibble ✨'.split('').map((char, i) => (
                  <span key={i} className="name-char" style={{ animationDelay: `${i * 0.08 + 1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </span>
            <span className="title-line title-line-3">
              <span className="age-badge">
                <span className="age-number">22</span>
                <span className="age-text">Tuổi</span>
              </span>
            </span>
          </h1>

          <div className="title-decoration-bottom">
            <span className="deco-emoji bounce-1">🌸</span>
            <span className="deco-emoji bounce-2">🌺</span>
            <span className="deco-emoji bounce-3">🌷</span>
            <span className="deco-emoji bounce-4">🌹</span>
            <span className="deco-emoji bounce-5">🌻</span>
          </div>

          <p className="birthday-message">
            🎁 Chúc bạn có một ngày sinh nhật thật vui vẻ và hạnh phúc! 🎁
          </p>
          <p className="birthday-submessage">
            💖 Mãi yêu thương và bình an 💖
          </p>
        </div>

        {/* Party hats */}
        <PartyHats />

        {/* 3D Cake */}
        <BirthdayCake />

        {/* Gift boxes */}
        <GiftBoxes />

        {/* Flower border */}
        <div className="flower-border-bottom">
          {[...Array(30)].map((_, i) => (
            <span key={i} className="flower-item" style={{ animationDelay: `${i * 0.1}s` }}>
              {['🌸', '🌺', '🌷', '🌹', '🌻', '🍀', '🌿', '🍃', '🌾', '🌼'][i % 10]}
            </span>
          ))}
        </div>
      </div>

      {/* Ribbon decorations */}
      <div className="ribbon ribbon-left"></div>
      <div className="ribbon ribbon-right"></div>
    </div>
  )
}

export default App

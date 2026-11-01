import './BirthdayCake.css'

function BirthdayCake() {
  return (
    <div className="cake-section">
      {/* Glow effect behind cake */}
      <div className="cake-glow"></div>
      <div className="cake-glow cake-glow-2"></div>

      <div className="cake-stage">
        <div className="cake-3d-wrapper">
          <div className="cake-3d">

            {/* ===== TIER 5 - TOP (smallest) ===== */}
            <div className="cake-tier tier-5">
              <div className="tier-cylinder">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="tier-face" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(32px)`,
                    background: `linear-gradient(180deg, #FFF9C4 0%, #FFD54F 30%, #FFB300 70%, #FF8F00 100%)`,
                  }}></div>
                ))}
                <div className="tier-top tier-top-5"></div>
                <div className="tier-bottom tier-bottom-5"></div>
              </div>

              {/* Decorations on tier 5 */}
              <div className="tier-decor-ring tier-decor-5">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="decor-item" style={{
                    transform: `rotateY(${i * 30}deg) translateZ(36px)`,
                  }}>
                    <span className="decor-emoji">{'⭐🌟✨💫⭐🌟✨💫⭐🌟✨💫'[i]}</span>
                  </div>
                ))}
              </div>

              {/* CANDLES on top tier */}
              <div className="candles-ring">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="candle-3d" style={{
                    transform: `rotateY(${i * (360/7)}deg) translateZ(22px)`,
                  }}>
                    <div className="candle-stick" style={{
                      background: ['#FF4081', '#7C4DFF', '#00BCD4', '#FF9800', '#4CAF50', '#E91E63', '#2196F3'][i],
                      height: `${28 + (i % 3) * 6}px`,
                    }}>
                      <div className="candle-stripe-wrap">
                        <div className="candle-stripe-line"></div>
                        <div className="candle-stripe-line s2"></div>
                      </div>
                    </div>
                    <div className="flame-wrapper">
                      <div className="flame">
                        <div className="flame-outer"></div>
                        <div className="flame-mid"></div>
                        <div className="flame-inner"></div>
                        <div className="flame-glow-ring"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* BIG CENTER CANDLE with "22" */}
              <div className="center-candle-3d">
                <div className="center-stick">
                  <span className="center-number">22</span>
                </div>
                <div className="flame-wrapper big">
                  <div className="flame flame-big">
                    <div className="flame-outer"></div>
                    <div className="flame-mid"></div>
                    <div className="flame-inner"></div>
                    <div className="flame-glow-ring big-glow"></div>
                  </div>
                </div>
              </div>

              {/* Topper star */}
              <div className="cake-topper">🌟</div>
            </div>

            {/* ===== TIER 4 ===== */}
            <div className="cake-tier tier-4">
              <div className="tier-cylinder">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="tier-face" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(52px)`,
                    background: `linear-gradient(180deg, #F8BBD0 0%, #F06292 30%, #EC407A 70%, #D81B60 100%)`,
                  }}></div>
                ))}
                <div className="tier-top tier-top-4"></div>
                <div className="tier-bottom tier-bottom-4"></div>
              </div>

              {/* Cream drips */}
              <div className="drip-ring drip-ring-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="cream-drip-3d" style={{
                    transform: `rotateY(${i * 22.5}deg) translateZ(54px)`,
                  }}>
                    <div className="drip-blob" style={{
                      height: `${12 + Math.random() * 18}px`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}></div>
                  </div>
                ))}
              </div>

              {/* Strawberries */}
              <div className="tier-decor-ring tier-decor-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="decor-item decor-fruit" style={{
                    transform: `rotateY(${i * 30}deg) translateZ(56px)`,
                  }}>
                    <span className="decor-emoji">{['🍓', '🍒', '🫐'][i % 3]}</span>
                  </div>
                ))}
              </div>

              {/* Ribbon */}
              <div className="tier-ribbon-ring ribbon-4">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="ribbon-segment" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(53px)`,
                  }}></div>
                ))}
              </div>
            </div>

            {/* ===== TIER 3 ===== */}
            <div className="cake-tier tier-3">
              <div className="tier-cylinder">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="tier-face" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(75px)`,
                    background: `linear-gradient(180deg, #E1BEE7 0%, #CE93D8 30%, #AB47BC 70%, #8E24AA 100%)`,
                  }}></div>
                ))}
                <div className="tier-top tier-top-3"></div>
                <div className="tier-bottom tier-bottom-3"></div>
              </div>

              {/* Chocolate drips */}
              <div className="drip-ring drip-ring-3">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="cream-drip-3d" style={{
                    transform: `rotateY(${i * 18}deg) translateZ(77px)`,
                  }}>
                    <div className="drip-blob drip-choco" style={{
                      height: `${10 + Math.random() * 22}px`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}></div>
                  </div>
                ))}
              </div>

              {/* Flowers */}
              <div className="tier-decor-ring tier-decor-3">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="decor-item decor-flower" style={{
                    transform: `rotateY(${i * 22.5}deg) translateZ(79px)`,
                  }}>
                    <span className="decor-emoji">{['🌸', '🌺', '🌷', '🌹'][i % 4]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== TIER 2 ===== */}
            <div className="cake-tier tier-2">
              <div className="tier-cylinder">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="tier-face" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(100px)`,
                    background: `linear-gradient(180deg, #B3E5FC 0%, #4FC3F7 30%, #29B6F6 70%, #0288D1 100%)`,
                  }}></div>
                ))}
                <div className="tier-top tier-top-2"></div>
                <div className="tier-bottom tier-bottom-2"></div>
              </div>

              {/* White cream drips */}
              <div className="drip-ring drip-ring-2">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="cream-drip-3d" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(102px)`,
                  }}>
                    <div className="drip-blob drip-white" style={{
                      height: `${12 + Math.random() * 20}px`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}></div>
                  </div>
                ))}
              </div>

              {/* Rosettes & bows */}
              <div className="tier-decor-ring tier-decor-2">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="decor-item" style={{
                    transform: `rotateY(${i * 18}deg) translateZ(104px)`,
                  }}>
                    <span className="decor-emoji">{['🎀', '💖', '⭐', '🌟', '🎀'][i % 5]}</span>
                  </div>
                ))}
              </div>

              {/* Gold ribbon */}
              <div className="tier-ribbon-ring ribbon-2">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="ribbon-segment ribbon-gold" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(101px)`,
                  }}></div>
                ))}
              </div>
            </div>

            {/* ===== TIER 1 - BOTTOM (largest) ===== */}
            <div className="cake-tier tier-1">
              <div className="tier-cylinder">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="tier-face" style={{
                    transform: `rotateY(${i * 12}deg) translateZ(130px)`,
                    background: `linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 30%, #EF5350 70%, #E53935 100%)`,
                  }}></div>
                ))}
                <div className="tier-top tier-top-1"></div>
                <div className="tier-bottom tier-bottom-1"></div>
              </div>

              {/* Pink cream drips */}
              <div className="drip-ring drip-ring-1">
                {[...Array(28)].map((_, i) => (
                  <div key={i} className="cream-drip-3d" style={{
                    transform: `rotateY(${i * (360/28)}deg) translateZ(132px)`,
                  }}>
                    <div className="drip-blob drip-pink" style={{
                      height: `${14 + Math.random() * 24}px`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}></div>
                  </div>
                ))}
              </div>

              {/* Mixed decorations */}
              <div className="tier-decor-ring tier-decor-1">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="decor-item" style={{
                    transform: `rotateY(${i * 15}deg) translateZ(134px)`,
                  }}>
                    <span className="decor-emoji">{['🌸', '🎀', '💝', '🍓', '✨', '🌺'][i % 6]}</span>
                  </div>
                ))}
              </div>

              {/* Candy ribbon */}
              <div className="tier-ribbon-ring ribbon-1">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="ribbon-segment ribbon-candy" style={{
                    transform: `rotateY(${i * 12}deg) translateZ(131px)`,
                  }}></div>
                ))}
              </div>
            </div>

            {/* ===== CAKE PLATE / STAND ===== */}
            <div className="cake-stand">
              <div className="stand-top">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="stand-face" style={{
                    transform: `rotateY(${i * 12}deg) translateZ(145px)`,
                  }}></div>
                ))}
              </div>
              <div className="stand-pillar"></div>
              <div className="stand-base">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="stand-base-face" style={{
                    transform: `rotateY(${i * 12}deg) translateZ(155px)`,
                  }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sparkle ring around cake */}
        <div className="cake-sparkle-ring">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="ring-sparkle" style={{
              animationDelay: `${i * 0.15}s`,
              transform: `rotate(${i * 15}deg) translateY(-220px)`,
            }}>✨</div>
          ))}
        </div>

        {/* Floating hearts */}
        <div className="cake-hearts">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="floating-heart" style={{
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              fontSize: `${14 + Math.random() * 16}px`,
            }}>
              {['💖', '💕', '💗', '💝', '❤️'][i % 5]}
            </div>
          ))}
        </div>

        {/* Light rays */}
        <div className="light-rays">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="light-ray" style={{
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.3}s`,
            }}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BirthdayCake

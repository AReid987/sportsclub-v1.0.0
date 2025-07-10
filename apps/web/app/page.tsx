'use client';

import React, { useState, useEffect } from 'react';

// Color palette
const colors = {
  primary: '#2D5BFF',
  accent: '#FF6B35',
  neutral: {
    50: '#F9F9F9',
    100: '#F5F5F9',
    800: '#2A2A2A',
    900: '#171717',
  },
  success: '#00C853',
  error: '#FF1744',
  white: '#FFFFFF',
};

// Countdown Timer Component (Client-side only)
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59,
      );
      const timeDiff = endOfMonth.getTime() - now.getTime();

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}
          >
            --
          </div>
          <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Days</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}
          >
            --
          </div>
          <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Hours</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}
          >
            --
          </div>
          <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Min</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}
          >
            --
          </div>
          <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Sec</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}>
          {timeLeft.days}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Days</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}>
          {timeLeft.hours}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Hours</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}>
          {timeLeft.minutes}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Min</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}>
          {timeLeft.seconds}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Sec</div>
      </div>
    </div>
  );
}

// Month Display Component (Client-side only)
function MonthDisplay() {
  const [monthYear, setMonthYear] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMonthYear(
      new Date().toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      }),
    );
  }, []);

  if (!mounted) {
    return <span>Current Month</span>;
  }

  return <span>{monthYear}</span>;
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(135deg, #1a1d29 0%, #2d3748 50%, #1a202c 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Subtle dot pattern background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(45, 91, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              color: '#ffffff',
            }}
          >
            <div
              style={{
                background: 'rgba(45, 91, 255, 0.1)',
                color: '#60A5FA',
                fontSize: '16px',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '24px',
                border: '1px solid rgba(45, 91, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              🏆 Join 50,000+ Smart Sports Players
            </div>

            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: '900',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              <span className="chrome-glow-text">Sportsclub</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '800',
                marginBottom: '24px',
                lineHeight: '1.1',
                color: '#F1F5F9',
              }}
            >
              Stop Guessing.{' '}
              <span style={{ color: '#60A5FA' }}>Start Winning.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: '500',
                marginBottom: '24px',
                lineHeight: '1.4',
                color: '#CBD5E1',
                maxWidth: '700px',
                margin: '0 auto 24px auto',
              }}
            >
              Your sports knowledge is now a cash asset.
            </p>

            <p
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: '600',
                marginBottom: '40px',
                lineHeight: '1.4',
                color: '#FCD34D',
                maxWidth: '700px',
                margin: '0 auto 40px auto',
              }}
            >
              Play Smart. Win Big.
            </p>

            <div style={{ marginBottom: '32px' }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                  border: '2px solid transparent',
                  borderRadius: '50px',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
                  color: colors.white,
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundClip: 'padding-box',
                }}
                className="star-border-button"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    'scale(1.05) translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 40px rgba(37, 99, 235, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(37, 99, 235, 0.4)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  🏆 Start Your First Competition
                </span>
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                fontSize: '16px',
                color: '#94A3B8',
                marginBottom: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#10B981',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
                <span style={{ fontSize: '16px' }}>Free account available</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#10B981',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
                <span>Cancel anytime</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#10B981',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
                <span style={{ fontSize: '16px' }}>Real cash prizes</span>
              </div>
            </div>

            {/* Live Countdown Timer */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  color: '#FEF3C7',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  gap: '8px',
                }}
              >
                ⏰ Next Prize Payout
              </div>
              <CountdownTimer />
              <div
                style={{
                  color: '#94A3B8',
                  fontSize: '12px',
                }}
              >
                Until next month's payout 12:00 AM EST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Leaderboard Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '80px 0',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            <h2
              style={{
                color: '#F1F5F9',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                marginBottom: '16px',
              }}
            >
              🏆 Live Competition
            </h2>
            <p
              style={{
                color: '#94A3B8',
                fontSize: '24px',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Where Prowess is Proven
            </p>
          </div>

          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            {/* User's Rank - Glassmorphism Sticky Card */}
            <div
              style={{
                position: 'sticky',
                top: '16px',
                zIndex: 30,
                margin: '0 0 24px 0',
                background: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '20px 24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow:
                  '0 16px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(96, 165, 250, 0.2)',
                animation: 'userRankFloat 3s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(71, 85, 105, 0.8)',
                      borderRadius: '12px',
                      color: '#CBD5E1',
                      fontSize: '16px',
                      fontWeight: '800',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                    }}
                  >
                    47
                  </div>
                  <div style={{ fontSize: '24px' }}>🎯</div>
                </div>

                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      color: '#F1F5F9',
                      fontWeight: '700',
                      fontSize: '16px',
                      marginBottom: '6px',
                    }}
                  >
                    You
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '4px',
                    }}
                  >
                    <span
                      style={{
                        color: '#60A5FA',
                        fontWeight: '800',
                        fontSize: '15px',
                      }}
                    >
                      1,890 coins
                    </span>
                    <span
                      style={{
                        color: '#10B981',
                        fontSize: '13px',
                        fontWeight: '700',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '2px 6px',
                        borderRadius: '6px',
                      }}
                    >
                      +12
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '90px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: '#94A3B8' }}>Safe:</span>
                    <span style={{ color: '#10B981', fontWeight: '700' }}>
                      680
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: '#94A3B8' }}>Risk:</span>
                    <span style={{ color: '#F59E0B', fontWeight: '700' }}>
                      120
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '4px',
                      borderTop: '1px solid rgba(71, 85, 105, 0.4)',
                    }}
                  >
                    <span style={{ color: '#CBD5E1', fontWeight: '600' }}>
                      Total:
                    </span>
                    <span style={{ color: '#60A5FA', fontWeight: '800' }}>
                      800
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                padding: 'clamp(20px, 4vw, 40px)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(51, 65, 85, 0.6)',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <h3
                  style={{
                    color: '#F1F5F9',
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    fontWeight: '700',
                    margin: 0,
                  }}
                >
                  <MonthDisplay /> Leaderboard
                </h3>
                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10B981',
                    padding: '6px 16px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      background: '#10B981',
                      borderRadius: '50%',
                      animation: 'pulse 1s infinite',
                    }}
                  />
                  LIVE UPDATES
                </div>
              </div>

              {/* Top 3 Players - Podium Layout */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.4fr 1fr',
                  gap: '20px',
                  marginBottom: '40px',
                  alignItems: 'end',
                  maxWidth: '800px',
                  margin: '0 auto 40px auto',
                }}
              >
                {/* 2nd Place - Left */}
                <div
                  style={{
                    background: '#0f172a',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid #475569',
                    position: 'relative',
                    animation: 'slideUpBounce 1s ease-out 0.2s both',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #94a3b8, #cbd5e1)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      position: 'relative',
                    }}
                  >
                    ⚡
                    <div
                      style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #94a3b8, #cbd5e1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        color: '#1e293b',
                      }}
                    >
                      2
                    </div>
                  </div>

                  <h4
                    style={{
                      color: '#f1f5f9',
                      fontSize: '16px',
                      fontWeight: '700',
                      marginBottom: '8px',
                      margin: 0,
                    }}
                  >
                    QuickPick_Elite
                  </h4>

                  <div
                    style={{
                      color: '#60a5fa',
                      fontSize: '18px',
                      fontWeight: '800',
                      marginBottom: '8px',
                    }}
                  >
                    2,398 coins
                  </div>

                  <div
                    style={{
                      color: '#10b981',
                      fontSize: '12px',
                      fontWeight: '600',
                      background: '#064e3b',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      display: 'inline-block',
                    }}
                  >
                    +89 today
                  </div>
                </div>

                {/* 1st Place - Center (Larger) */}
                <div
                  style={{
                    background: '#0f172a',
                    borderRadius: '20px',
                    padding: '28px',
                    border: '2px solid #fbbf24',
                    boxShadow: '0 20px 60px rgba(251, 191, 36, 0.15)',
                    position: 'relative',
                    animation: 'slideUpBounce 1s ease-out both',
                    textAlign: 'center',
                    transform: 'scale(1.1)',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                      margin: '0 auto 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      position: 'relative',
                      border: '3px solid rgba(251, 191, 36, 0.3)',
                    }}
                  >
                    🔥
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '-12px',
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: '900',
                        color: '#92400e',
                        boxShadow: '0 4px 20px rgba(251, 191, 36, 0.4)',
                      }}
                    >
                      1
                    </div>
                  </div>

                  <h4
                    style={{
                      color: '#f1f5f9',
                      fontSize: '20px',
                      fontWeight: '800',
                      marginBottom: '12px',
                      margin: 0,
                    }}
                  >
                    DataMaster_Pro
                  </h4>

                  <div
                    style={{
                      color: '#fcd34d',
                      fontSize: '26px',
                      fontWeight: '900',
                      marginBottom: '12px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    2,450 coins
                  </div>

                  <div
                    style={{
                      color: '#10b981',
                      fontSize: '14px',
                      fontWeight: '700',
                      background: '#064e3b',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      display: 'inline-block',
                    }}
                  >
                    +125 today
                  </div>
                </div>

                {/* 3rd Place - Right */}
                <div
                  style={{
                    background: '#0f172a',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid #475569',
                    position: 'relative',
                    animation: 'slideUpBounce 1s ease-out 0.4s both',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #a16207, #ca8a04)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      position: 'relative',
                    }}
                  >
                    🧠
                    <div
                      style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #a16207, #ca8a04)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        color: '#1e293b',
                      }}
                    >
                      3
                    </div>
                  </div>

                  <h4
                    style={{
                      color: '#f1f5f9',
                      fontSize: '15px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      margin: 0,
                    }}
                  >
                    StatsGuru99
                  </h4>

                  <div
                    style={{
                      color: '#60a5fa',
                      fontSize: '17px',
                      fontWeight: '700',
                      marginBottom: '8px',
                    }}
                  >
                    2,340 coins
                  </div>

                  <div
                    style={{
                      color: '#10b981',
                      fontSize: '12px',
                      fontWeight: '600',
                      background: '#064e3b',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      display: 'inline-block',
                    }}
                  >
                    +67 today
                  </div>
                </div>
              </div>

              {/* Rest of Leaderboard - Animated */}
              <div
                style={{
                  display: 'grid',
                  gap: '12px',
                }}
              >
                {[
                  {
                    rank: 4,
                    name: 'SportsSage',
                    score: 2290,
                    change: '+45',
                    safe: 850,
                    risk: 150,
                    total: 1000,
                    avatar: '⚡',
                    trending: 'up',
                    activity: 'gaining',
                  },
                  {
                    rank: 5,
                    name: 'AIPredictor',
                    score: 2245,
                    change: '+23',
                    safe: 780,
                    risk: 220,
                    total: 1000,
                    avatar: '🤖',
                    trending: 'up',
                    activity: 'stable',
                  },
                  {
                    rank: 6,
                    name: 'ScoreWizard',
                    score: 2190,
                    change: '+67',
                    safe: 650,
                    risk: 350,
                    total: 1000,
                    avatar: '🧙‍♂️',
                    trending: 'up',
                    activity: 'gaining',
                  },
                  {
                    rank: 7,
                    name: 'BetMaster88',
                    score: 2156,
                    change: '-12',
                    safe: 720,
                    risk: 280,
                    total: 1000,
                    avatar: '💰',
                    trending: 'down',
                    activity: 'losing',
                  },
                  {
                    rank: 8,
                    name: 'PicksProdigy',
                    score: 2098,
                    change: '+78',
                    safe: 600,
                    risk: 400,
                    total: 1000,
                    avatar: '🌟',
                    trending: 'up',
                    activity: 'gaining',
                  },
                ].map((player, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr auto 40px',
                      alignItems: 'center',
                      padding: '20px 24px',
                      borderRadius: '16px',
                      background:
                        player.activity === 'gaining'
                          ? 'rgba(16, 185, 129, 0.08)'
                          : player.activity === 'losing'
                          ? 'rgba(239, 68, 68, 0.08)'
                          : 'rgba(51, 65, 85, 0.4)',
                      border: `1px solid ${
                        player.activity === 'gaining'
                          ? 'rgba(16, 185, 129, 0.2)'
                          : player.activity === 'losing'
                          ? 'rgba(239, 68, 68, 0.2)'
                          : 'rgba(71, 85, 105, 0.3)'
                      }`,
                      transition: 'all 0.4s ease',
                      gap: '16px',
                      animation: `slideInFromRight 0.8s ease-out ${
                        0.6 + index * 0.1
                      }s both, ${
                        player.activity === 'gaining'
                          ? 'rankUp'
                          : player.activity === 'losing'
                          ? 'rankDown'
                          : 'rankPulse'
                      } 2s ease-in-out infinite`,
                      marginBottom: '12px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(71, 85, 105, 0.8)',
                          borderRadius: '12px',
                          color: '#CBD5E1',
                          fontSize: '16px',
                          fontWeight: '800',
                          border: '1px solid rgba(148, 163, 184, 0.2)',
                        }}
                      >
                        {player.rank}
                      </div>
                      <div style={{ fontSize: '24px' }}>{player.avatar}</div>
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          color: '#F1F5F9',
                          fontWeight: '700',
                          fontSize: '16px',
                          marginBottom: '6px',
                        }}
                      >
                        {player.name}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '4px',
                        }}
                      >
                        <span
                          style={{
                            color: '#60A5FA',
                            fontWeight: '800',
                            fontSize: '15px',
                          }}
                        >
                          {player.score.toLocaleString()} coins
                        </span>
                        <span
                          style={{
                            color: player.change.includes('+')
                              ? '#10B981'
                              : '#EF4444',
                            fontSize: '13px',
                            fontWeight: '700',
                            background: player.change.includes('+')
                              ? 'rgba(16, 185, 129, 0.1)'
                              : 'rgba(239, 68, 68, 0.1)',
                            padding: '2px 6px',
                            borderRadius: '6px',
                          }}
                        >
                          {player.change}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: 'right',
                        fontSize: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        minWidth: '90px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ color: '#94A3B8' }}>Safe:</span>
                        <span style={{ color: '#10B981', fontWeight: '700' }}>
                          {player.safe}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ color: '#94A3B8' }}>Risk:</span>
                        <span style={{ color: '#F59E0B', fontWeight: '700' }}>
                          {player.risk}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingTop: '4px',
                          borderTop: '1px solid rgba(71, 85, 105, 0.4)',
                        }}
                      >
                        <span style={{ color: '#CBD5E1', fontWeight: '600' }}>
                          Total:
                        </span>
                        <span style={{ color: '#60A5FA', fontWeight: '800' }}>
                          {player.total}
                        </span>
                      </div>
                    </div>

                    {/* Trend Indicator */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '24px',
                          animation:
                            player.trending === 'up'
                              ? 'trendUp 1.5s ease-in-out infinite'
                              : 'trendDown 1.5s ease-in-out infinite',
                        }}
                      >
                        {player.trending === 'up' ? '📈' : '📉'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(135deg, #1a1d29 0%, #2d3748 50%, #1a202c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#f5f5f5',
              }}
            >
              Your Sports Genius{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.error}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                is Wasted.
              </span>
            </h2>
            <p
              style={{
                fontSize: '24px',
                color: '#ffffff',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              The Problem with Traditional Sports Gaming
            </p>
          </div>

          <div
            style={{
              marginTop: '40px',
              width: '100%',
            }}
            className="three-card-grid"
          >
            <div
              style={{
                background: '#0f172a',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #334155',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💸</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                It's Costly & High-Risk
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Traditional betting requires you to risk your own money on
                uncertain outcomes.
              </p>
            </div>

            <div
              style={{
                background: '#0f172a',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #334155',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎲</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                It's Based on Luck
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Most fantasy leagues can be won or lost on a single lucky (or
                unlucky) week, not true skill.
              </p>
            </div>

            <div
              style={{
                background: '#0f172a',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #334155',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>😔</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                It's Isolating
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Most platforms are a solo experience, lacking a true community
                to discuss strategy and share the excitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        style={{
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: colors.neutral[100],
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span style={{ color: '#ffffff' }}>Your Path to</span>
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Consistent Wins
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gap: 'clamp(20px, 4vw, 40px)',
              marginTop: '40px',
              width: '100%',
              maxWidth: '900px',
              margin: '40px auto 0',
            }}
            className="how-it-works-grid"
          >
            {[
              {
                step: '01',
                icon: '👤',
                title: 'Sign Up & Get Coins',
                desc: 'Create your account, and get a monthly deposit of virtual coins to play with.',
              },
              {
                step: '02',
                icon: '🎯',
                title: 'Make Smart Picks',
                desc: 'Use your knowledge and our AI insights to make predictions on major sporting events.',
              },
              {
                step: '03',
                icon: '🏆',
                title: 'Compete & Climb',
                desc: 'Track your progress on the real-time leaderboard as your correct picks multiply your coin balance.',
              },
              {
                step: '04',
                icon: '🎁',
                title: 'Win Real Prizes',
                desc: 'Finish among the top-ranked players at the end of the month to win real cash prizes.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#0f172a',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid #334155',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px',
                  width: '100%',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      marginBottom: '20px',
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: '#ffffff',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: '#9b9b9b',
                    lineHeight: '1.6',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section
        style={{
          background:
            'linear-gradient(135deg, rgba(45, 91, 255, 0.082), rgba(255, 107, 53, 0.082))',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  background:
                    'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                  color: '#E879F9',
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '24px',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    animation: 'pulse 2s infinite',
                  }}
                />
                🎓 Meet Annie the Analyst
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 'bold',
                  marginBottom: '24px',
                  color: colors.neutral[100],
                }}
              >
                <span style={{ color: '#ffffff' }}>Learn From</span>{' '}
                <span
                  style={{
                    background: `linear-gradient(135deg, #A855F7, #EC4899)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Annie
                </span>
              </h2>
              <p
                style={{
                  fontSize: '24px',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                }}
              >
                Your personal AI sports analyst who teaches you to think like a
                pro. Annie provides data insights and educational guidance in
                the latent space—never telling you what to pick, but showing you
                how to analyze effectively.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      filter: 'drop-shadow(0 4px 8px rgba(168, 85, 247, 0.3))',
                    }}
                  >
                    💡
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: '#E879F9',
                      }}
                    >
                      Educational Insights
                    </h3>
                    <p
                      style={{
                        color: '#CBD5E1',
                        lineHeight: '1.6',
                        fontSize: '18px',
                      }}
                    >
                      Annie breaks down complex sports analytics into digestible
                      lessons, teaching you the 'why' behind every data point
                      without bias.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      filter: 'drop-shadow(0 4px 8px rgba(168, 85, 247, 0.3))',
                    }}
                  >
                    🎨
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: '#E879F9',
                      }}
                    >
                      Beautiful Visualizations
                    </h3>
                    <p
                      style={{
                        color: '#CBD5E1',
                        lineHeight: '1.6',
                        fontSize: '18px',
                      }}
                    >
                      Watch data come alive through Annie's generative
                      UI—interactive charts, trend analyses, and pattern
                      recognition made intuitive.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      filter: 'drop-shadow(0 4px 8px rgba(168, 85, 247, 0.3))',
                    }}
                  >
                    🧮
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: '#E879F9',
                      }}
                    >
                      Latent Space Learning
                    </h3>
                    <p
                      style={{
                        color: '#CBD5E1',
                        lineHeight: '1.6',
                        fontSize: '18px',
                      }}
                    >
                      Discover hidden patterns and relationships in sports data
                      through Annie's advanced analytical frameworks and
                      thoughtful guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Annie the Analyst - Educational Chat Interface */}
            <div
              style={{
                position: 'relative',
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                boxShadow:
                  '0 24px 48px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(168, 85, 247, 0.1)',
                transform: 'perspective(1000px) rotateX(1deg)',
                overflow: 'hidden',
              }}
            >
              {/* Floating glass effect background with Annie's colors */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Annie's Chat Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '32px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    boxShadow: '0 12px 24px rgba(168, 85, 247, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  👩‍🎓
                </div>
                <div>
                  <div
                    style={{
                      color: '#F1F5F9',
                      fontSize: '20px',
                      fontWeight: '700',
                      marginBottom: '2px',
                    }}
                  >
                    Annie the Analyst
                  </div>
                  <div
                    style={{
                      color: '#E879F9',
                      fontSize: '14px',
                      fontWeight: '500',
                      marginBottom: '4px',
                    }}
                  >
                    Your AI Sports Tutor
                  </div>
                  <div
                    style={{
                      color: '#10B981',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10B981',
                        animation: 'pulse 2s infinite',
                      }}
                    />
                    Teaching mode active
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* User Message */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(168, 85, 247, 0.2)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '20px 20px 4px 20px',
                      padding: '16px 20px',
                      maxWidth: '300px',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    <div
                      style={{
                        color: '#F1F5F9',
                        fontSize: '15px',
                        lineHeight: '1.4',
                      }}
                    >
                      Annie, what should I understand about team performance
                      patterns?
                    </div>
                    <div
                      style={{
                        color: '#CBD5E1',
                        fontSize: '11px',
                        marginTop: '6px',
                        textAlign: 'right',
                      }}
                    >
                      Just now
                    </div>
                  </div>
                </div>

                {/* Annie's Educational Response */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(15, 23, 42, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px 20px 20px 4px',
                      padding: '20px',
                      maxWidth: '100%',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, #A855F7, #EC4899)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                        }}
                      >
                        👩‍🎓
                      </div>
                      <span
                        style={{
                          color: '#E879F9',
                          fontSize: '12px',
                          fontWeight: '600',
                        }}
                      >
                        ANNIE
                      </span>
                    </div>
                    <div
                      style={{
                        color: '#F1F5F9',
                        fontSize: '15px',
                        lineHeight: '1.5',
                        marginBottom: '20px',
                      }}
                    >
                      Excellent question! Let me teach you about the key
                      performance indicators that matter most. Here's what the
                      data tells us about team patterns—I'll show you how to
                      analyze, not what to conclude:
                    </div>

                    {/* Interactive Data Visualization */}
                    <div
                      style={{
                        background: 'rgba(30, 41, 59, 0.6)',
                        borderRadius: '12px',
                        padding: '16px',
                        border: '1px solid rgba(71, 85, 105, 0.4)',
                      }}
                    >
                      {/* Chart Header */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '16px',
                        }}
                      >
                        <div
                          style={{
                            color: '#60A5FA',
                            fontSize: '12px',
                            fontWeight: '600',
                          }}
                        >
                          Performance Metrics
                        </div>
                        <div
                          style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#10B981',
                            padding: '2px 8px',
                            borderRadius: '8px',
                            fontSize: '10px',
                            fontWeight: '600',
                          }}
                        >
                          LIVE
                        </div>
                      </div>

                      {/* Animated Progress Bars */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                      >
                        {[
                          {
                            label: 'Lakers ATS L5',
                            value: 80,
                            color: '#10B981',
                          },
                          {
                            label: 'Warriors Home Record',
                            value: 65,
                            color: '#60A5FA',
                          },
                          {
                            label: 'O/U Trend (Under)',
                            value: 75,
                            color: '#F59E0B',
                          },
                          {
                            label: 'Injury Impact',
                            value: 45,
                            color: '#EF4444',
                          },
                        ].map((metric, index) => (
                          <div key={index}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '4px',
                              }}
                            >
                              <span
                                style={{
                                  color: '#CBD5E1',
                                  fontSize: '11px',
                                  fontWeight: '500',
                                }}
                              >
                                {metric.label}
                              </span>
                              <span
                                style={{
                                  color: metric.color,
                                  fontSize: '11px',
                                  fontWeight: '600',
                                }}
                              >
                                {metric.value}%
                              </span>
                            </div>
                            <div
                              style={{
                                width: '100%',
                                height: '6px',
                                background: 'rgba(71, 85, 105, 0.3)',
                                borderRadius: '3px',
                                overflow: 'hidden',
                              }}
                            >
                              <div
                                style={{
                                  width: `${metric.value}%`,
                                  height: '100%',
                                  background: `linear-gradient(90deg, ${metric.color}, ${metric.color}dd)`,
                                  borderRadius: '3px',
                                  animation: `fillBar 1.5s ease-out ${
                                    index * 0.2
                                  }s both`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Recommendation */}
                      <div
                        style={{
                          marginTop: '16px',
                          padding: '12px',
                          background: 'rgba(96, 165, 250, 0.1)',
                          borderRadius: '8px',
                          border: '1px solid rgba(96, 165, 250, 0.2)',
                        }}
                      >
                        <div
                          style={{
                            color: '#60A5FA',
                            fontSize: '11px',
                            fontWeight: '600',
                            marginBottom: '4px',
                          }}
                        >
                          AI RECOMMENDATION
                        </div>
                        <div
                          style={{
                            color: '#F1F5F9',
                            fontSize: '12px',
                            lineHeight: '1.3',
                          }}
                        >
                          Lakers +6.5 (Strong confidence: 78%)
                          <br />
                          Under 235.5 (Moderate confidence: 65%)
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        color: '#94A3B8',
                        fontSize: '10px',
                        marginTop: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#94A3B8',
                          animation: 'pulse 1.5s infinite',
                        }}
                      />
                      AI is typing...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Insights Section */}
      <section
        style={{
          padding: '80px 20px',
          background:
            'linear-gradient(135deg, rgba(45, 91, 255, 0.05), rgba(255, 107, 53, 0.05))',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div
              style={{
                marginBottom: '20px',
                background: 'rgba(96, 165, 250, 0.2)',
                color: '#60A5FA',
                padding: '8px 16px',
                borderRadius: '25px',
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: '600',
                border: '1px solid rgba(96, 165, 250, 0.3)',
              }}
            >
              🤖 Your Unfair Advantage
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#ffffff',
              }}
            >
              Master Your Game with{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI Insights
              </span>
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#CBD5E1',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Unlock the power of artificial intelligence to elevate your sports
              prediction game
            </p>
          </div>

          <div
            style={{
              marginTop: '40px',
              width: '100%',
            }}
            className="three-card-grid"
          >
            <div
              style={{
                background: '#0f172a',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #334155',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💬</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                Smart Q&A
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Ask anything from player stats to historical trends. Get
                instant, intelligent answers powered by comprehensive sports
                data.
              </p>
            </div>

            <div
              style={{
                background: '#0f172a',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #334155',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                Visual Analysis
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Get AI-generated charts and graphs to visualize team performance
                and your prediction patterns.
              </p>
            </div>

            <div
              style={{
                background: '#0f172a',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #334155',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                Personalized Tutoring
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Let the AI guide you on what data is important and review your
                monthly performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        style={{
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div
              style={{
                marginBottom: '20px',
                background: `${colors.accent}20`,
                color: colors.accent,
                padding: '8px 16px',
                borderRadius: '25px',
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              👥 50,000+ Active Members
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: colors.neutral[100],
              }}
            >
              Connect, Discuss,{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Conquer Together
              </span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: colors.neutral[100] }}>
              Join a thriving community of sports enthusiasts and data-driven
              predictors
            </p>
          </div>
        </div>
      </section>

      {/* Early Adopter Pricing Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a1d29 0%, #2d3748 100%)',
          padding: '80px 20px',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #F59E0B, #F97316)',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '24px',
              display: 'inline-block',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)',
            }}
          >
            🔥 Limited Time: Early Adopter Pricing
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Choose Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Game Plan
            </span>
          </h2>

          <p
            style={{
              fontSize: '24px',
              marginBottom: '48px',
              lineHeight: '1.6',
              color: '#CBD5E1',
              maxWidth: '600px',
              margin: '0 auto 48px auto',
            }}
          >
            Free account includes community forums, practice league, and AI
            tutoring. Subscribe for predictions and real prizes.
          </p>

          {/* Pricing Tiers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              marginTop: '48px',
            }}
            className="pricing-grid"
          >
            {/* Prediction Padawan */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 24px 48px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                }}
              >
                🥋
              </div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: '#F1F5F9',
                }}
              >
                Prediction Padawan
              </h3>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#60A5FA',
                  marginBottom: '8px',
                }}
              >
                $19.99
                <span
                  style={{
                    fontSize: '16px',
                    color: '#94A3B8',
                    fontWeight: '400',
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: '#94A3B8',
                  fontSize: '16px',
                  marginBottom: '24px',
                  lineHeight: '1.5',
                }}
              >
                Perfect for beginners ready to start making smart predictions
              </p>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '32px',
                }}
              >
                {[
                  'Monthly virtual coins',
                  'Basic AI predictions',
                  'Community access',
                  'Performance tracking',
                  'Mobile app access',
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ color: '#10B981', fontSize: '16px' }}>
                      ✓
                    </span>
                    <span style={{ color: '#CBD5E1', fontSize: '16px' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                style={{
                  width: '100%',
                  background: 'rgba(96, 165, 250, 0.2)',
                  border: '2px solid #60A5FA',
                  borderRadius: '16px',
                  padding: '16px',
                  color: '#60A5FA',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#60A5FA';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)';
                  e.currentTarget.style.color = '#60A5FA';
                }}
              >
                Start Learning
              </button>
            </div>

            {/* Analyst League */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                padding: '32px',
                border: '2px solid #F59E0B',
                position: 'relative',
                transition: 'all 0.3s ease',
                transform: 'scale(1.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'scale(1.05) translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 32px 64px rgba(245, 158, 11, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #F59E0B, #F97316)',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                MOST POPULAR
              </div>
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                }}
              >
                📊
              </div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: '#F1F5F9',
                }}
              >
                Analyst League
              </h3>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#F59E0B',
                  marginBottom: '8px',
                }}
              >
                $49.99
                <span
                  style={{
                    fontSize: '16px',
                    color: '#94A3B8',
                    fontWeight: '400',
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: '#94A3B8',
                  fontSize: '16px',
                  marginBottom: '24px',
                  lineHeight: '1.5',
                }}
              >
                Advanced features for serious sports analysts
              </p>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '32px',
                }}
              >
                {[
                  'Everything in Padawan',
                  'Advanced AI analytics',
                  'Custom data visualizations',
                  'Priority support',
                  'Advanced leaderboards',
                  'Exclusive tournaments',
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ color: '#F59E0B', fontSize: '16px' }}>
                      ✓
                    </span>
                    <span style={{ color: '#CBD5E1', fontSize: '16px' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #F59E0B, #F97316)',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '16px',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 32px rgba(245, 158, 11, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(245, 158, 11, 0.3)';
                }}
              >
                Level Up Now
              </button>
            </div>

            {/* Premier Pro */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(168, 85, 247, 0.6)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 24px 48px rgba(168, 85, 247, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                }}
              >
                👑
              </div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: '#F1F5F9',
                }}
              >
                Premier Pro
              </h3>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#A855F7',
                  marginBottom: '8px',
                }}
              >
                $99.99
                <span
                  style={{
                    fontSize: '16px',
                    color: '#94A3B8',
                    fontWeight: '400',
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: '#94A3B8',
                  fontSize: '16px',
                  marginBottom: '24px',
                  lineHeight: '1.5',
                }}
              >
                Professional-grade tools for elite predictors
              </p>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '32px',
                }}
              >
                {[
                  'Everything in Analyst',
                  'AI-powered recommendations',
                  'Private coaching sessions',
                  'VIP community access',
                  'Custom analytics dashboard',
                  'Highest prize pool access',
                  'White-glove support',
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ color: '#A855F7', fontSize: '16px' }}>
                      ✓
                    </span>
                    <span style={{ color: '#CBD5E1', fontSize: '16px' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                style={{
                  width: '100%',
                  background: 'rgba(168, 85, 247, 0.2)',
                  border: '2px solid #A855F7',
                  borderRadius: '16px',
                  padding: '16px',
                  color: '#A855F7',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#A855F7';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.color = '#A855F7';
                }}
              >
                Go Pro
              </button>
            </div>
          </div>

          {/* Free Account CTA */}
          <div
            style={{
              marginTop: '56px',
              padding: '32px',
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '24px',
              border: '1px solid rgba(51, 65, 85, 0.6)',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#F1F5F9',
              }}
            >
              Not Ready to Subscribe?
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: '#94A3B8',
                marginBottom: '24px',
                lineHeight: '1.5',
              }}
            >
              Create a free account to access community forums, practice
              leagues, and AI tutoring. Upgrade anytime to unlock predictions
              and real prizes.
            </p>
            <button
              style={{
                background: 'transparent',
                border: '2px solid #60A5FA',
                borderRadius: '16px',
                padding: '16px 32px',
                color: '#60A5FA',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(96, 165, 250, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#0F172A',
          padding: '60px 20px 30px',
          borderTop: '1px solid #334155',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  Sportsclub
                </span>
              </div>
              <p
                style={{
                  color: '#94A3B8',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}
              >
                Play Smart. Win Big. Transform your sports predictions with
                AI-powered insights and skill-based gaming.
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#F1F5F9',
                }}
              >
                Quick Links
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {['How It Works', 'AI Assistant', 'Community', 'Pricing'].map(
                  (link, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{
                        color: '#94A3B8',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#60A5FA';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#94A3B8';
                      }}
                    >
                      {link}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: '30px',
              borderTop: '1px solid #334155',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '14px', color: colors.neutral[100] }}>
              © 2024 Sportsclub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

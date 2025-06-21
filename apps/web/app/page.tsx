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
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '600',
                marginBottom: '40px',
                lineHeight: '1.2',
                color: '#F1F5F9',
              }}
            >
              Play Smart. <span style={{ color: '#60A5FA' }}>Win Big.</span>
            </h2>

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
                  🎯 Join Sportsclub Now
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
                <span style={{ fontSize: '16px' }}>Free trial included</span>
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
              See how you stack up against thousands of players competing for
              real prizes
            </p>
          </div>

          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            {/* User's Rank - Sticky leaderboard row style */}
            <div
              style={{
                position: 'sticky',
                top: '80px',
                zIndex: 20,
                margin: '0 0 16px 0',
                background: 'rgba(37, 99, 235, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '16px 20px',
                border: '1px solid rgba(37, 99, 235, 0.4)',
                boxShadow: '0 8px 32px rgba(37, 99, 235, 0.3)',
                animation: 'pulse 2s infinite',
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

              {/* Rest of Leaderboard */}
              <div
                style={{
                  display: 'grid',
                  gap: '8px',
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
                  },
                  {
                    rank: 7,
                    name: 'BetMaster88',
                    score: 2156,
                    change: '+34',
                    safe: 720,
                    risk: 280,
                    total: 1000,
                    avatar: '💰',
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
                  },
                ].map((player, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr auto',
                      alignItems: 'center',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      background: 'rgba(51, 65, 85, 0.4)',
                      border: '1px solid rgba(71, 85, 105, 0.3)',
                      transition: 'all 0.3s ease',
                      gap: '16px',
                      animation: `slideInFromRight 0.8s ease-out ${
                        0.6 + index * 0.1
                      }s both`,
                      marginBottom: '8px',
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
              Stop Guessing.{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Start Winning.
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
              Traditional sports prediction is broken. We've built a better way.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '40px',
              width: '100%',
            }}
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
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚠️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                Information Overload
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Drowning in stats, opinions, and conflicting advice from
                countless sources.
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
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧠</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                No Predictive Skills
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Traditional gut feelings and hunches lead to inconsistent
                results.
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
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff',
                }}
              >
                High-Risk / Low Reward
              </h3>
              <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                Traditional sports picks require large stakes with unpredictable
                outcomes.
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
              <span style={{ color: '#ffffff' }}>How It</span>
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Works
              </span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#ffffff' }}>
              Get started in minutes and begin your journey to smarter sports
              predictions.
            </p>
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
                desc: 'Create your account and receive monthly virtual coins to start playing. No upfront costs, just pure skill-based fun.',
              },
              {
                step: '02',
                icon: '🎯',
                title: 'Make Smart Picks',
                desc: 'Use our AI insights to make informed predictions on your favorite sports. Learn from real-time data and expert analysis.',
              },
              {
                step: '03',
                icon: '🏆',
                title: 'Compete & Climb',
                desc: 'Watch your predictions play out in real-time and climb the leaderboard. Track your progress and improve your skills.',
              },
              {
                step: '04',
                icon: '🎁',
                title: 'Win Real Prizes',
                desc: 'Top performers earn real cash prizes, exclusive rewards, and recognition. Your skills directly translate to rewards.',
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
                  background: 'rgba(45, 91, 255, 0.125)',
                  color: colors.primary,
                  fontSize: '14px',
                  fontWeight: '600',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  display: 'inline-block',
                  marginBottom: '20px',
                }}
              >
                🧠 AI-Powered Intelligence
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 'bold',
                  marginBottom: '24px',
                  color: colors.neutral[100],
                }}
              >
                <span style={{ color: '#ffffff' }}>Master Your Game with</span>{' '}
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
                  fontSize: '24px',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  marginBottom: '30px',
                }}
              >
                Our advanced AI assistant doesn't just give you predictions—it
                teaches you how to think like a pro analyst. Learn, adapt, and
                improve with every interaction.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  fontSize: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                    }}
                  >
                    💬
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: '#ffffff',
                      }}
                    >
                      Smart Q&A
                    </h3>
                    <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                      Ask questions about teams, players, and matchups. Get
                      instant, data-driven answers.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                    }}
                  >
                    📊
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: '#ffffff',
                      }}
                    >
                      Visual Analytics
                    </h3>
                    <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                      Generative UI creates custom charts and visualizations for
                      better insights.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                    }}
                  >
                    📚
                  </div>
                  <div style={{ color: '#ffffff' }}>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: '#ffffff',
                      }}
                    >
                      Personal Tutor
                    </h3>
                    <p style={{ color: '#9b9b9b', lineHeight: '1.6' }}>
                      Learn sports analytics concepts with personalized
                      explanations and examples.
                    </p>
                  </div>
                </div>
              </div>
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
              <div
                style={{
                  background: '#1e293b',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    color: '#60A5FA',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '12px',
                  }}
                >
                  AI Analysis: Lakers vs Warriors
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: '#CBD5E1',
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>Lakers ATS Last 5</span>
                    <span style={{ color: colors.success, fontWeight: 'bold' }}>
                      4-1
                    </span>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>O/U Trend</span>
                    <span style={{ color: colors.accent, fontWeight: 'bold' }}>
                      Under 65%
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    color: colors.neutral[100],
                    marginTop: '10px',
                  }}
                >
                  Recommendation: Lakers +6.5, Under 235.5
                </p>
              </div>
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

      {/* Final CTA Section */}
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
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              marginBottom: '20px',
              background: `${colors.success}20`,
              color: colors.success,
              padding: '8px 16px',
              borderRadius: '25px',
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            ⭐ 4.9/5 Average Rating
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            Ready to Transform Your{' '}
            <span style={{ color: '#FFE066' }}>Sports Predictions?</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              marginBottom: '40px',
              lineHeight: '1.6',
            }}
          >
            Stop gambling with gut feelings. Start winning with data-driven
            insights, AI guidance, and skill-based predictions.
          </p>

          <div style={{ marginBottom: '40px' }}>
            <button
              style={{
                background: '#1e293b',
                color: colors.white,
                padding: '20px 40px',
                borderRadius: '50px',
                border: 'none',
                fontWeight: '600',
                fontSize: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
              }}
            >
              🚀 Start Your Free Trial
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

'use client';

import React, { useState, useEffect } from 'react';

// Color palette
const colors = {
  primary: '#2D5BFF',
  accent: '#FF6B35',
  neutral: {
    50: '#F9F9F9',
    100: '#F5F5F5',
    800: '#2A2A2A',
    900: '#171717',
  },
  success: '#00C853',
  white: '#FFFFFF',
};

// Styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  hero: {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    textAlign: 'center' as const,
    padding: '40px 20px',
  },
  section: {
    padding: '80px 20px',
  },
  button: {
    background: colors.white,
    color: colors.primary,
    padding: '16px 32px',
    borderRadius: '50px',
    border: 'none',
    fontWeight: '600',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  card: {
    background: colors.white,
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    margin: '20px 0',
    transition: 'transform 0.3s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '40px',
    width: '100%',
  },
};

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
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(45, 91, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        />

        <div style={styles.container}>
          <div
            style={{
              textAlign: 'center',
              color: colors.white,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                marginBottom: '24px',
                background: 'rgba(45, 91, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(45, 91, 255, 0.3)',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#60A5FA',
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
              <span
                style={{
                  background:
                    'linear-gradient(145deg, #E5E7EB, #F9FAFB, #D1D5DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 0 #374151',
                  WebkitTextStroke: '1px rgba(55, 65, 81, 0.8)',
                  letterSpacing: '0.02em',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
                }}
              >
                Sportsclub
              </span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '600',
                marginBottom: '24px',
                lineHeight: '1.2',
                color: '#F1F5F9',
              }}
            >
              Play Smart. <span style={{ color: '#60A5FA' }}>Win Big.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                marginBottom: '40px',
                lineHeight: '1.6',
                color: '#CBD5E1',
                maxWidth: '600px',
                margin: '0 auto 40px auto',
              }}
            >
              Master skill-based sports predictions with AI-powered insights.
              Compete on leaderboards, win real prizes, and join a community of
              data-driven sports enthusiasts.
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
                fontSize: '14px',
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
                Free trial included
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
                Cancel anytime
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
                Real cash prizes
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                Until{' '}
                {new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() + 1,
                  1,
                ).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                12:00 AM EST
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
        <div style={styles.container}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                color: '#F1F5F9',
                marginBottom: '16px',
              }}
            >
              🏆 Live Competition
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#94A3B8',
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
            {/* User's Rank - Sticky (when not in top 3 or actual position) */}
            <div
              style={{
                position: 'absolute',
                top: '60px',
                right: '20px',
                zIndex: 10,
                background: 'rgba(37, 99, 235, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '12px 16px',
                border: '1px solid rgba(37, 99, 235, 0.4)',
                boxShadow: '0 8px 32px rgba(37, 99, 235, 0.3)',
                animation: 'pulse 2s infinite',
              }}
            >
              <div
                style={{
                  color: '#60A5FA',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '4px',
                }}
              >
                YOUR RANK
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '16px' }}>🎯</span>
                <div>
                  <div
                    style={{
                      color: '#F1F5F9',
                      fontWeight: '700',
                      fontSize: '14px',
                    }}
                  >
                    #47
                  </div>
                  <div style={{ color: '#CBD5E1', fontSize: '10px' }}>
                    1,890 pts
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
                  {new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  Leaderboard
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

              {/* Winners Podium - Top 3 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '20px',
                  marginBottom: '40px',
                  padding: '20px',
                  background: 'rgba(251, 191, 36, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(251, 191, 36, 0.1)',
                }}
              >
                {/* 2nd Place */}
                <div
                  style={{
                    textAlign: 'center',
                    transform: 'translateY(20px)',
                    animation: 'slideUpBounce 1s ease-out 0.2s both',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #C0C0C0, #E5E5E5)',
                      borderRadius: '8px 8px 0 0',
                      margin: '0 auto 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#374151',
                    }}
                  >
                    2
                  </div>
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>
                    👑
                  </div>
                  <div
                    style={{
                      color: '#F1F5F9',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                  >
                    PredictionKing
                  </div>
                  <div
                    style={{
                      color: '#F59E0B',
                      fontWeight: '700',
                      fontSize: '16px',
                    }}
                  >
                    2,380 pts
                  </div>
                  <div
                    style={{
                      color: '#10B981',
                      fontSize: '12px',
                      marginTop: '4px',
                    }}
                  >
                    +89 today
                  </div>
                </div>

                {/* 1st Place */}
                <div
                  style={{
                    textAlign: 'center',
                    animation: 'slideUpBounce 1s ease-out both',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      borderRadius: '8px 8px 0 0',
                      margin: '0 auto 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#92400E',
                      boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
                    }}
                  >
                    1
                  </div>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                    🔥
                  </div>
                  <div
                    style={{
                      color: '#F1F5F9',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                  >
                    DataMaster_Pro
                  </div>
                  <div
                    style={{
                      color: '#F59E0B',
                      fontWeight: '700',
                      fontSize: '18px',
                    }}
                  >
                    2,450 pts
                  </div>
                  <div
                    style={{
                      color: '#10B981',
                      fontSize: '12px',
                      marginTop: '4px',
                    }}
                  >
                    +125 today
                  </div>
                </div>

                {/* 3rd Place */}
                <div
                  style={{
                    textAlign: 'center',
                    transform: 'translateY(40px)',
                    animation: 'slideUpBounce 1s ease-out 0.4s both',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #CD7F32, #B8860B)',
                      borderRadius: '8px 8px 0 0',
                      margin: '0 auto 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#374151',
                    }}
                  >
                    3
                  </div>
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>
                    🧠
                  </div>
                  <div
                    style={{
                      color: '#F1F5F9',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                  >
                    StatsGuru99
                  </div>
                  <div
                    style={{
                      color: '#F59E0B',
                      fontWeight: '700',
                      fontSize: '16px',
                    }}
                  >
                    2,340 pts
                  </div>
                  <div
                    style={{
                      color: '#10B981',
                      fontSize: '12px',
                      marginTop: '4px',
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
                      gridTemplateColumns: 'auto auto 1fr auto',
                      alignItems: 'center',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(51, 65, 85, 0.3)',
                      border: '1px solid transparent',
                      transition: 'all 0.3s ease',
                      gap: '12px',
                      animation: `slideInFromRight 0.8s ease-out ${
                        0.6 + index * 0.1
                      }s both`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#64748B',
                        minWidth: '24px',
                      }}
                    >
                      #{player.rank}
                    </span>

                    <span style={{ fontSize: '20px' }}>{player.avatar}</span>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        alignItems: 'center',
                        gap: '16px',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            color: '#F1F5F9',
                            fontWeight: '600',
                            fontSize: '14px',
                            marginBottom: '2px',
                          }}
                        >
                          {player.name}
                        </div>
                        <div
                          style={{
                            color: '#94A3B8',
                            fontSize: '12px',
                            display: 'flex',
                            gap: '12px',
                          }}
                        >
                          <span>Safe: {player.safe}</span>
                          <span>Risk: {player.risk}</span>
                          <span>Total: {player.total}</span>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: 'right',
                        }}
                      >
                        <div
                          style={{
                            color: '#F59E0B',
                            fontWeight: '700',
                            fontSize: '14px',
                          }}
                        >
                          {player.score.toLocaleString()} pts
                        </div>
                        <div
                          style={{
                            color: '#10B981',
                            fontSize: '11px',
                            fontWeight: '600',
                          }}
                        >
                          {player.change} today
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        color: '#10B981',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      ↗️
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '32px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(51, 65, 85, 0.6)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '24px',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      color: '#F59E0B',
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                      fontWeight: '700',
                      marginBottom: '4px',
                    }}
                  >
                    $12,500
                  </div>
                  <div
                    style={{
                      color: '#94A3B8',
                      fontSize: 'clamp(12px, 2vw, 14px)',
                    }}
                  >
                    Total Prize Pool
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: '#10B981',
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                      fontWeight: '700',
                      marginBottom: '4px',
                    }}
                  >
                    2,847
                  </div>
                  <div
                    style={{
                      color: '#94A3B8',
                      fontSize: 'clamp(12px, 2vw, 14px)',
                    }}
                  >
                    Active Players
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: '#60A5FA',
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                      fontWeight: '700',
                      marginBottom: '4px',
                    }}
                  >
                    {(() => {
                      const now = new Date();
                      const nextMonth = new Date(
                        now.getFullYear(),
                        now.getMonth() + 1,
                        1,
                      );
                      const diff = nextMonth.getTime() - now.getTime();
                      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                      return days;
                    })()}{' '}
                    Days
                  </div>
                  <div
                    style={{
                      color: '#94A3B8',
                      fontSize: 'clamp(12px, 2vw, 14px)',
                    }}
                  >
                    Time Remaining
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section style={{ ...styles.section, background: colors.neutral[50] }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: colors.neutral[900],
              }}
            >
              Stop Guessing. Start{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Winning.
              </span>
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                color: colors.neutral[800],
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              Traditional sports prediction is broken. We've built a better way.
            </p>
          </div>

          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚠️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: colors.neutral[900],
                }}
              >
                Information Overload
              </h3>
              <p style={{ color: colors.neutral[800], lineHeight: '1.6' }}>
                Drowning in stats, opinions, and conflicting advice from
                countless sources.
              </p>
            </div>
            <div style={styles.card}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧠</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: colors.neutral[900],
                }}
              >
                No Predictive Skills
              </h3>
              <p style={{ color: colors.neutral[800], lineHeight: '1.6' }}>
                Traditional gut feelings and hunches lead to inconsistent
                results.
              </p>
            </div>
            <div style={styles.card}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: colors.neutral[900],
                }}
              >
                High-Risk / Low Reward
              </h3>
              <p style={{ color: colors.neutral[800], lineHeight: '1.6' }}>
                Traditional sports picks require large stakes with unpredictable
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: colors.neutral[900],
              }}
            >
              How It{' '}
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
            <p style={{ fontSize: '1.25rem', color: colors.neutral[800] }}>
              Get started in minutes and begin your journey to smarter sports
              predictions
            </p>
          </div>

          <div
            style={{
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
                  ...styles.card,
                  textAlign: 'center',
                  width: '100%',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      marginBottom: '20px',
                      color: colors.neutral[800],
                    }}
                  >
                    {item.step}
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 4rem)',
                      marginBottom: '20px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: colors.neutral[900],
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: colors.neutral[800],
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
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
          ...styles.section,
          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}15)`,
        }}
      >
        <div style={styles.container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  marginBottom: '20px',
                  background: `${colors.primary}20`,
                  color: colors.primary,
                  padding: '8px 16px',
                  borderRadius: '25px',
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                🧠 AI-Powered Intelligence
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: colors.neutral[900],
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
                  color: colors.neutral[800],
                  marginBottom: '30px',
                  lineHeight: '1.6',
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
                }}
              >
                {[
                  {
                    icon: '💬',
                    title: 'Smart Q&A',
                    desc: 'Ask questions about teams, players, and matchups. Get instant, data-driven answers.',
                  },
                  {
                    icon: '📊',
                    title: 'Visual Analytics',
                    desc: 'Generative UI creates custom charts and visualizations for better insights.',
                  },
                  {
                    icon: '📚',
                    title: 'Personal Tutor',
                    desc: 'Learn sports analytics concepts with personalized explanations and examples.',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '15px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{ fontSize: '2rem', flexShrink: 0 }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          marginBottom: '8px',
                          color: colors.neutral[900],
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          color: colors.neutral[800],
                          lineHeight: '1.6',
                        }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.card}>
              <div
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  🧠
                </div>
                <span
                  style={{ fontWeight: 'bold', color: colors.neutral[900] }}
                >
                  AI Assistant
                </span>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    background: colors.success,
                    borderRadius: '50%',
                    marginLeft: 'auto',
                  }}
                ></div>
              </div>
              <div
                style={{
                  background: colors.neutral[50],
                  padding: '20px',
                  borderRadius: '15px',
                  marginBottom: '15px',
                }}
              >
                <p style={{ color: colors.neutral[800], marginBottom: '15px' }}>
                  Based on recent performance data:
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    fontSize: '14px',
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
                    color: colors.neutral[800],
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
      <section style={styles.section}>
        <div style={styles.container}>
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
                color: colors.neutral[900],
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
            <p style={{ fontSize: '1.25rem', color: colors.neutral[800] }}>
              Join a thriving community of sports prediction enthusiasts. Share
              strategies, celebrate wins, and learn from the best minds in the
              game.
            </p>
          </div>

          <div style={styles.grid}>
            {[
              {
                icon: '💬',
                title: 'Reddit-Style Forum',
                desc: 'Discuss strategies, share insights, and learn from experienced players in topic-based communities.',
                stat: '10K+ Daily Discussions',
              },
              {
                icon: '⚡',
                title: 'Live Event Chat',
                desc: 'Real-time chat during games with fellow enthusiasts. React to plays as they happen.',
                stat: 'Active During All Games',
              },
              {
                icon: '🛡️',
                title: 'AI Moderation',
                desc: 'Smart moderation keeps discussions constructive and informative. Quality conversations guaranteed.',
                stat: '95% Positive Interactions',
              },
            ].map((feature, index) => (
              <div key={index} style={styles.card}>
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    color: colors.neutral[900],
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: colors.neutral[800],
                    lineHeight: '1.6',
                    marginBottom: '15px',
                  }}
                >
                  {feature.desc}
                </p>
                <div
                  style={{
                    background: `${colors.success}20`,
                    color: colors.success,
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  {feature.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ ...styles.section, background: colors.neutral[50] }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
                color: colors.neutral[900],
              }}
            >
              Trusted by{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                50,000+ Players
              </span>
            </h2>
          </div>

          <div style={styles.grid}>
            {[
              {
                name: 'Mike Rodriguez',
                role: 'Data Analyst',
                quote:
                  "Sportsclub changed how I approach sports predictions. The AI insights are incredibly accurate, and I've improved my win rate by 40% in just 3 months.",
                metric: '40% Win Rate Increase',
              },
              {
                name: 'Sarah Chen',
                role: 'Fantasy Sports Enthusiast',
                quote:
                  'The community aspect is amazing. Learning from other experienced players has been invaluable. Plus, the monthly prizes make it even more exciting!',
                metric: '$1,200 Won Last Quarter',
              },
              {
                name: 'James Williams',
                role: 'Casual Sports Bettor',
                quote:
                  'Finally, a platform that teaches you HOW to think about sports betting instead of just giving picks. The AI tutor feature is like having a personal coach.',
                metric: '85% Accuracy Rate',
              },
            ].map((testimonial, index) => (
              <div key={index} style={styles.card}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.white,
                      fontWeight: 'bold',
                    }}
                  >
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h4
                      style={{ fontWeight: 'bold', color: colors.neutral[900] }}
                    >
                      {testimonial.name}
                    </h4>
                    <p style={{ fontSize: '14px', color: colors.neutral[800] }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{ color: '#FFD700', fontSize: '1.2rem' }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    color: colors.neutral[800],
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div
                  style={{
                    background: `${colors.success}20`,
                    color: colors.success,
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  📈 {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{
          ...styles.section,
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
          color: colors.white,
        }}
      >
        <div style={styles.container}>
          <div
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <div
              style={{
                marginBottom: '20px',
                background: 'rgba(255,255,255,0.2)',
                padding: '8px 16px',
                borderRadius: '25px',
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              🚀 Join 50,000+ Smart Sports Players
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
                  background: colors.white,
                  color: colors.primary,
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
                  e.currentTarget.style.boxShadow =
                    '0 12px 40px rgba(0,0,0,0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 30px rgba(0,0,0,0.2)';
                }}
              >
                🚀 Start Your Free Trial →
              </button>
              <p style={{ fontSize: '14px', marginTop: '15px', opacity: 0.8 }}>
                No credit card required • Start with 500 free coins • Cancel
                anytime
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '30px',
                marginTop: '40px',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#FFE066',
                  marginBottom: '10px',
                }}
              >
                $19.99
              </div>
              <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                per month
              </div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>
                Less than $0.67 per day • Unlimited predictions • Full AI access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: colors.neutral[900],
          color: colors.white,
          padding: '60px 20px 20px',
        }}
      >
        <div style={styles.container}>
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
                  gap: '10px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  S
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Sportsclub
                </span>
              </div>
              <p
                style={{
                  color: colors.neutral[100],
                  marginBottom: '20px',
                  lineHeight: '1.6',
                }}
              >
                Play Smart. Win Big. Transform your sports predictions with
                AI-powered insights and skill-based gaming.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '15px' }}>
                Product
              </h3>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                {['How It Works', 'AI Assistant', 'Community', 'Pricing'].map(
                  (link, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{
                        color: colors.neutral[100],
                        textDecoration: 'none',
                        fontSize: '14px',
                      }}
                    >
                      {link}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '15px' }}>
                Legal
              </h3>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                {[
                  'Terms of Service',
                  'Privacy Policy',
                  'Compliance',
                  'Responsible Gaming',
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      color: colors.neutral[100],
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '15px' }}>
                Stay Updated
              </h3>
              <p
                style={{
                  color: colors.neutral[100],
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              >
                Get the latest insights and updates.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '10px',
                    border: 'none',
                    background: colors.neutral[800],
                    color: colors.white,
                  }}
                />
                <button
                  style={{
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    background: colors.primary,
                    color: colors.white,
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: `1px solid ${colors.neutral[800]}`,
              paddingTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div style={{ fontSize: '14px', color: colors.neutral[100] }}>
              © 2024 Sportsclub. All rights reserved.
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                fontSize: '14px',
                color: colors.neutral[100],
              }}
            >
              <span>🇺🇸 Available in US</span>
              <span>🔒 SSL Secured</span>
              <span>✅ Licensed Platform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

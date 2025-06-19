'use client';

import React from 'react';

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
      <section style={styles.hero}>
        <div style={styles.container}>
          <div
            style={{
              marginBottom: '20px',
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: '25px',
              display: 'inline-block',
            }}
          >
            🏆 Join 50,000+ Smart Sports Players
          </div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            <span
              style={{
                background: `linear-gradient(135deg, ${colors.white}, #FFE066)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sportsclub
            </span>
          </h1>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            Play Smart. <span style={{ color: '#FFE066' }}>Win Big.</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              lineHeight: '1.6',
            }}
          >
            Master skill-based sports predictions with AI-powered insights.
            Compete on leaderboards, win real prizes, and join a community of
            data-driven sports enthusiasts.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <button
              style={styles.button}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
            >
              🎯 Join Sportsclub Now
            </button>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                fontSize: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: colors.success,
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                ></span>
                Free trial included
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: colors.success,
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                ></span>
                Cancel anytime
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    background: colors.success,
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                ></span>
                Real cash prizes
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
                High-Risk Betting
              </h3>
              <p style={{ color: colors.neutral[800], lineHeight: '1.6' }}>
                Traditional sports betting requires large stakes with
                unpredictable outcomes.
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
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: 'clamp(20px, 4vw, 40px)',
              marginTop: '40px',
              width: '100%',
              maxWidth: '900px',
              margin: '40px auto 0',
              '@media (max-width: 768px)': {
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'repeat(4, 1fr)',
              },
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

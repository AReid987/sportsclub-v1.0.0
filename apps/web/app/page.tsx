export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #2563eb, #ea580c)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1
          style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}
        >
          Sportsclub
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Play Smart. Win Big.
        </p>
        <button
          style={{
            background: 'white',
            color: '#2563eb',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            fontWeight: '600',
            fontSize: '1.125rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', lineHeight: '1.2', marginBottom: '24px' }}>
        Systems That Make Growth Predictable.
      </h1>
      <p style={{ fontSize: '20px', color: '#444', marginBottom: '32px' }}>
        We design operational systems, intelligent automation, and digital infrastructure
        that eliminate chaos and make growth scalable.
      </p>
      <a 
        href="https://calendly.com/auotam/meeting"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '14px 28px',
          background: '#b91c1c',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '600'
        }}
      >
        Book a Systems Discovery Call
      </a>
    </main>
  )
}

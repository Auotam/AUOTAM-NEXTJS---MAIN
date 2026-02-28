export const metadata = {
  title: 'AUOTAM — Systems That Make Growth Predictable',
  description: 'AUOTAM builds operational systems, intelligent automation, and digital infrastructure.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif', background: '#faf6f6' }}>
        {children}
      </body>
    </html>
  )
}

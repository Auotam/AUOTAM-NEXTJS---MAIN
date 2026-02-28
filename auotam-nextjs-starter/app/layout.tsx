import "./globals.css"

export const metadata = {
  title: "AUOTAM — Systems That Make Growth Predictable",
  description:
    "AUOTAM builds operational systems, intelligent automation, and digital infrastructure.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-black antialiased">
        {children}
      </body>
    </html>
  )
}

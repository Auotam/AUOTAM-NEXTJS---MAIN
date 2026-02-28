import "./globals.css"
import Header from "../components/layout/Header"

export const metadata = {
  title: "AUOTAM",
  description: "Systems. Automation. Technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}

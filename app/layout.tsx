import "./globals.css"
import Container from "../ui/Container"

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

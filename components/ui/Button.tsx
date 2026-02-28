export default function Button({
  children,
  href,
  target = "_self",
}: {
  children: React.ReactNode
  href: string
  target?: string
}) {
  return (
    <a
      href={href}
      target={target}
      className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
    >
      {children}
    </a>
  )
}

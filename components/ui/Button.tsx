import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/10";

  const styles: Record<string, string> = {
    primary:
      "bg-[var(--btn)] text-[var(--btnText)] hover:bg-[var(--btnHover)]",
    secondary:
      "bg-[var(--btn2)] text-[var(--btn2Text)] border border-[var(--btn2Border)] hover:bg-black/[0.06]",
    ghost:
      "bg-transparent text-[var(--text)] hover:bg-black/[0.06]",
  };

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}

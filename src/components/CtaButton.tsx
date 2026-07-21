import { ArrowRight } from "lucide-react";

export function CtaButton({
  children,
  variant = "primary",
  className = "",
  href = "#contato",
  target,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  const base =
    "group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-ink",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    ghost: "border border-white/30 text-white hover:bg-white hover:text-ink",
  }[variant];
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

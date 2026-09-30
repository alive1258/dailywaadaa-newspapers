/* ================= LOGO MARK (SVG) ================= */
/* A paw print inside a solid circle — reused as-is on both light (Navbar)
   and dark (Footer) backgrounds since the circle carries its own fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="20" fill="#E8733D" />
    <ellipse cx="20" cy="24.5" rx="7.2" ry="6.2" fill="#FFF9F4" />
    <ellipse
      cx="12.2"
      cy="16.8"
      rx="3.1"
      ry="3.8"
      transform="rotate(-18 12.2 16.8)"
      fill="#FFF9F4"
    />
    <ellipse cx="19.2" cy="12.6" rx="3.2" ry="4" fill="#FFF9F4" />
    <ellipse
      cx="26.6"
      cy="13.6"
      rx="3.1"
      ry="3.9"
      transform="rotate(14 26.6 13.6)"
      fill="#FFF9F4"
    />
    <ellipse
      cx="29.8"
      cy="19.6"
      rx="2.9"
      ry="3.6"
      transform="rotate(28 29.8 19.6)"
      fill="#FFF9F4"
    />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-7 h-7", text: "text-lg" },
  md: { icon: "w-9 h-9", text: "text-xl" },
  lg: { icon: "w-11 h-11", text: "text-2xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`font-bold leading-none whitespace-nowrap tracking-tight ${text} ${
          variant === "dark" ? "text-brand-900" : "text-white"
        }`}
      >
        Daily
        <span
          className={variant === "dark" ? "text-accent-500" : "text-accent-300"}
        >
          waadaa
        </span>
      </span>
    </span>
  );
};

export default Logo;

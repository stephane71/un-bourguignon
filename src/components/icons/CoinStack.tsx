interface CoinStackProps {
  className?: string;
  size?: number;
}

export function CoinStack({ className = "", size = 24 }: CoinStackProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9.354a4 4 0 1 0 0 5.292" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  );
}

interface CloseProps {
  className?: string;
  size?: number;
}

export function Close({ className = "", size = 24 }: CloseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <line x1={6} y1={6} x2={18} y2={18} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1={6} y1={18} x2={18} y2={6} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

interface CardProps {
  children: React.ReactNode;
  variant?: "on-white" | "on-ecru";
  className?: string;
}

export function Card({ children, variant = "on-white", className = "" }: CardProps) {
  const variants = {
    "on-white": "bg-white border border-sable",
    "on-ecru": "bg-white",
  };

  return (
    <div className={`rounded-xl p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

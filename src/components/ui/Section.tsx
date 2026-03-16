import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  alternate?: boolean;
  className?: string;
}

export function Section({ id, children, alternate = false, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`${alternate ? "bg-ecru" : "bg-white"} py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

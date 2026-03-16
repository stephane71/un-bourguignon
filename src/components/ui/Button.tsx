interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center min-h-12 px-6 rounded-lg font-sans text-base font-bold leading-tight tracking-wide cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2";

  const variants = {
    primary: "bg-brun text-white hover:bg-brun/90",
    secondary: "bg-transparent text-brun border-[1.5px] border-brun hover:bg-ecru",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.as === "a") {
    const { as, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

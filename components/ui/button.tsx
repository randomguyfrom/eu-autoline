import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "@/i18n/navigation";

const variantClasses = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 border border-accent",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-foreground/40",
  inverse:
    "bg-background text-accent border border-background hover:bg-background/90",
} as const;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-150";

type Variant = keyof typeof variantClasses;

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: Variant;
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as NativeButtonProps)}>
      {props.children}
    </button>
  );
}

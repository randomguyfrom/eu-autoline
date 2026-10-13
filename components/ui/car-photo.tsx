import Image from "next/image";
import { CarPlaceholder } from "./car-placeholder";

export function CarPhoto({
  src,
  alt,
  sizes,
  eager = false,
  className = "",
}: {
  src?: string;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}) {
  if (!src) return <CarPlaceholder className={className} />;

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : undefined}
        fetchPriority={eager ? "high" : undefined}
        className="object-cover"
      />
    </div>
  );
}

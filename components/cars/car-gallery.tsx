"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CarImage } from "@/lib/cars";
import { CarPhoto } from "@/components/ui/car-photo";

export function CarGallery({
  images,
  alt,
}: {
  images: CarImage[];
  alt: string;
}) {
  const t = useTranslations("carDetail");
  const [active, setActive] = useState(0);
  const current = images[active];
  const hasMultiple = images.length > 1;

  return (
    <div>
      <CarPhoto
        src={current?.src}
        alt={
          current?.alt ??
          (hasMultiple ? `${alt} – ${active + 1}/${images.length}` : alt)
        }
        sizes="(min-width: 1024px) 50vw, 100vw"
        eager
        className="aspect-[4/3] w-full rounded-sm"
      />

      {hasMultiple && (
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={t("showImage", {
                  current: index + 1,
                  total: images.length,
                })}
                aria-current={index === active}
                className={`relative block aspect-[4/3] w-full overflow-hidden rounded-sm border bg-surface transition-colors ${
                  index === active
                    ? "border-accent ring-1 ring-accent"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 12vw, 22vw"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

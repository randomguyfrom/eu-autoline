"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Car, getPrimaryImage } from "@/lib/cars";
import { formatMileage, formatPrice } from "@/lib/format";
import { CarPhoto } from "./car-photo";

export function CarCard({ car }: { car: Car }) {
  const locale = useLocale();
  const t = useTranslations("common");
  const tBody = useTranslations("bodyTypes");
  const tFuel = useTranslations("fuelTypes");
  const tTransmission = useTranslations("transmissions");

  return (
    <Link
      href={`/cars/${car.slug}`}
      className="group block overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-accent/40"
    >
      <div className="relative">
        <CarPhoto
          src={getPrimaryImage(car)?.src}
          alt={`${car.make} ${car.model}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full"
        />
        {car.featured && (
          <span className="absolute left-3 top-3 rounded-sm border border-accent-secondary/40 bg-background/90 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-accent-secondary">
            {t("featured")}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 p-5">
        <span className="text-xs uppercase tracking-wide text-muted">
          {car.bodyType ? `${tBody(car.bodyType)} · ` : ""}
          {car.year}
        </span>
        <h3 className="text-lg font-medium text-foreground">
          {car.make} {car.model}
        </h3>
        <p className="text-sm text-muted">
          {formatMileage(car.mileageKm, locale)} · {tFuel(car.fuel)} ·{" "}
          {tTransmission(car.transmission)}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-base font-semibold text-foreground">
            {formatPrice(car.priceEur, locale)}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            {t("viewDetails")}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

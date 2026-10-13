import { notFound } from "next/navigation";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CarGallery } from "@/components/cars/car-gallery";
import { Link } from "@/i18n/navigation";
import { cars, getCarBySlug } from "@/lib/cars";
import {
  formatBattery,
  formatMileage,
  formatPrice,
  formatRange,
} from "@/lib/format";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const car = getCarBySlug(slug);
  if (!car) notFound();

  const t = await getTranslations("carDetail");
  const tCommon = await getTranslations("common");
  const tFuel = await getTranslations("fuelTypes");
  const tTransmission = await getTranslations("transmissions");
  const tBody = await getTranslations("bodyTypes");
  const tColor = await getTranslations("colors");
  const activeLocale = await getLocale();

  const specs = [
    { label: t("year"), value: car.year },
    { label: t("mileage"), value: formatMileage(car.mileageKm, activeLocale) },
    { label: t("fuel"), value: tFuel(car.fuel) },
    { label: t("transmission"), value: tTransmission(car.transmission) },
    {
      label: t("battery"),
      value:
        car.batteryKwh !== undefined
          ? formatBattery(car.batteryKwh, activeLocale)
          : undefined,
    },
    {
      label: t("range"),
      value:
        car.rangeKm !== undefined
          ? formatRange(car.rangeKm, activeLocale)
          : undefined,
    },
    { label: t("color"), value: car.color ? tColor(car.color) : undefined },
    {
      label: t("charger"),
      value:
        car.hasCharger !== undefined
          ? car.hasCharger
            ? t("yes")
            : t("no")
          : undefined,
    },
    {
      label: t("power"),
      value: car.powerHp !== undefined ? `${car.powerHp} hp` : undefined,
    },
    {
      label: t("bodyType"),
      value: car.bodyType ? tBody(car.bodyType) : undefined,
    },
  ].filter((spec) => spec.value !== undefined);

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <Link
          href="/cars"
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ← {tCommon("backToCars")}
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <CarGallery
            images={car.images ?? []}
            alt={`${car.make} ${car.model}`}
          />

          <div>
            <span className="text-xs uppercase tracking-wide text-muted">
              {car.bodyType ? `${tBody(car.bodyType)} · ` : ""}
              {car.year}
            </span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {car.make} {car.model}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-foreground">
              {formatPrice(car.priceEur, activeLocale)}
            </p>
            {car.description && (
              <p className="mt-6 text-base leading-relaxed text-muted">
                {car.description}
              </p>
            )}

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-8">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Button href="/contact" variant="primary">
                {tCommon("enquire")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

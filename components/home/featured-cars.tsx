import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { CarCard } from "@/components/ui/car-card";
import { Button } from "@/components/ui/button";
import { getFeaturedCars } from "@/lib/cars";

export async function FeaturedCars() {
  const t = await getTranslations("home.featuredCars");
  const tCommon = await getTranslations("common");
  const cars = getFeaturedCars();

  return (
    <section className="bg-accent-soft py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-2 text-base text-muted">{t("subtitle")}</p>
          </div>
          <Button href="/cars" variant="secondary">
            {tCommon("seeAllCars")}
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </Container>
    </section>
  );
}

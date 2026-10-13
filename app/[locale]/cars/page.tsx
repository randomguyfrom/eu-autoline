import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { CarsExplorer } from "@/components/cars/car-filters";
import { cars } from "@/lib/cars";

export default async function CarsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cars");

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="h-px w-8 bg-accent" />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-2 text-base text-muted">{t("subtitle")}</p>
        </div>

        <div className="mt-10">
          <CarsExplorer cars={cars} />
        </div>
      </Container>
    </section>
  );
}

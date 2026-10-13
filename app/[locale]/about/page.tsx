import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { CarPlaceholder } from "@/components/ui/car-placeholder";
import { BrandMark } from "@/components/ui/brand-mark";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <section className="py-16 lg:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <CarPlaceholder className="aspect-[4/3] w-full rounded-sm" />
          <BrandMark className="absolute -bottom-4 -right-4 h-14 w-14 text-sm shadow-sm" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="h-px w-8 bg-accent" />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-2 text-base text-muted">{t("subtitle")}</p>

          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>{t("body3")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

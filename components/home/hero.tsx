import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CarPlaceholder } from "@/components/ui/car-placeholder";
import { BrandMark } from "@/components/ui/brand-mark";

export async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section className="border-b border-border">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              {t("eyebrow")}
            </p>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-accent">{t("titleLead")}</span>{" "}
            <span className="text-foreground">{t("titleRest")}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/cars" variant="primary">
              {t("primaryCta")}
            </Button>
            <Button href="/contact" variant="secondary">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>

        <div className="relative">
          <CarPlaceholder className="aspect-[4/3] w-full rounded-sm" />
          <BrandMark className="absolute -bottom-4 -left-4 h-14 w-14 text-sm shadow-sm" />
        </div>
      </Container>
    </section>
  );
}

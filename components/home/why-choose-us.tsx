import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";

const points = ["trust", "quality", "experience", "service"] as const;

export async function WhyChooseUs() {
  const t = await getTranslations("home.whyChooseUs");

  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t("title")}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((key, index) => (
            <div key={key}>
              <span className="text-sm font-medium text-accent-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium text-foreground">
                {t(`${key}Title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t(`${key}Body`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

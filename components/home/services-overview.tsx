import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Link } from "@/i18n/navigation";
import { SectionNumber } from "@/components/ui/section-number";
import { serviceKeys } from "@/lib/constants";

export async function ServicesOverview() {
  const t = await getTranslations("home.services");
  const tServices = await getTranslations("services");
  const tCommon = await getTranslations("common");

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-2 text-base text-muted">{t("subtitle")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {serviceKeys.map((key, index) => (
            <Link
              key={key}
              href={`/services#${key}`}
              className="group relative flex flex-col justify-between gap-6 overflow-hidden bg-background p-8 transition-colors hover:bg-accent-soft"
            >
              <SectionNumber
                index={index + 1}
                className="pointer-events-none absolute -right-2 -top-4 text-6xl"
              />
              <div className="relative">
                <h3 className="text-lg font-medium text-foreground">
                  {tServices(`${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tServices(`${key}.body`)}
                </p>
              </div>
              <span className="relative text-sm font-medium text-accent group-hover:underline">
                {tCommon("learnMore")} →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionNumber } from "@/components/ui/section-number";
import { serviceKeys } from "@/lib/constants";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");
  const tCommon = await getTranslations("common");

  return (
    <div>
      <section className="border-b border-border py-16 lg:py-20">
        <Container className="max-w-2xl">
          <div className="h-px w-8 bg-accent" />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-3 text-base text-muted">{t("subtitle")}</p>
        </Container>
      </section>

      {serviceKeys.map((key, index) => (
        <section
          key={key}
          id={key}
          className={`scroll-mt-24 overflow-hidden py-16 lg:py-20 ${
            index % 2 === 1 ? "bg-surface" : ""
          }`}
        >
          <Container className="relative grid grid-cols-1 gap-10 lg:grid-cols-2">
            <SectionNumber
              index={index + 1}
              className="pointer-events-none absolute -top-6 right-6 hidden text-8xl lg:block"
            />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {t(`${key}.title`)}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {t(`${key}.body`)}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  {tCommon("contactUs")}
                </Button>
              </div>
            </div>
            <ul className="flex flex-col gap-4 self-start border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              {[1, 2, 3].map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t(`${key}.point${n}`)}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}
    </div>
  );
}

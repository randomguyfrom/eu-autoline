import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

export async function ContactCta() {
  const t = await getTranslations("home.contactCta");

  return (
    <section className="py-16 lg:py-24">
      <Container className="flex flex-col items-center gap-6 rounded-sm border border-accent bg-accent px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-accent-foreground sm:text-3xl">
          {t("title")}
        </h2>
        <p className="max-w-md text-base text-accent-foreground/70">{t("body")}</p>
        <Button href="/contact" variant="inverse">
          {t("cta")}
        </Button>
        <p className="text-sm text-accent-foreground/60">
          {t("orCall")}{" "}
          <a href={companyInfo.phoneHref} className="font-medium text-accent-foreground underline underline-offset-4">
            {companyInfo.phone}
          </a>
        </p>
      </Container>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";

export async function Intro() {
  const t = await getTranslations("home.intro");

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          {t("body")}
        </p>
      </Container>
    </section>
  );
}

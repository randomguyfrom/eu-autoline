import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { companyInfo } from "@/lib/constants";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

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

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
              {t("infoTitle")}
            </h2>
            <dl className="mt-4 flex flex-col gap-4 text-sm">
              <div>
                <dt className="text-muted">{t("addressLabel")}</dt>
                <dd className="mt-1 text-foreground">
                  {companyInfo.addressLine1}
                  <br />
                  {companyInfo.addressLine2}, {companyInfo.country}
                </dd>
              </div>
              <div>
                <dt className="text-muted">{t("phoneLabel")}</dt>
                <dd className="mt-1">
                  <a href={companyInfo.phoneHref} className="text-foreground hover:text-accent">
                    {companyInfo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">{t("emailLabel")}</dt>
                <dd className="mt-1">
                  <a href={`mailto:${companyInfo.email}`} className="text-foreground hover:text-accent">
                    {companyInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">{t("hoursLabel")}</dt>
                <dd className="mt-1 text-foreground">
                  {t("hoursDays")}: {companyInfo.hoursValue}
                </dd>
              </div>
              <div>
                <dt className="text-muted">{t("cvrLabel")}</dt>
                <dd className="mt-1 text-foreground">{companyInfo.cvr}</dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { navLinks, companyInfo } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  return (
    <footer className="bg-surface">
      <div className="h-[3px] bg-accent" />
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-8 w-8 text-xs" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              {companyInfo.name}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {tFooter("tagline")}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">
            {tFooter("navTitle")}
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">
            {tFooter("contactTitle")}
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            <li>
              {companyInfo.addressLine1}
              <br />
              {companyInfo.addressLine2}, {companyInfo.country}
            </li>
            <li>
              <a href={companyInfo.phoneHref} className="hover:text-foreground">
                {companyInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${companyInfo.email}`} className="hover:text-foreground">
                {companyInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">
            {tFooter("hoursTitle")}
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            <li>
              {tFooter("hoursDays")}: {companyInfo.hoursValue}
            </li>
            <li>
              {tFooter("cvrLabel")}: {companyInfo.cvr}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {companyInfo.legalName}.{" "}
            {tFooter("rightsReserved")}
          </p>
          <LanguageSwitcher />
        </Container>
      </div>
    </footer>
  );
}

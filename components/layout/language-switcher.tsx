"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  da: "Dansk",
  en: "English",
  de: "Deutsch",
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div
      className={`flex items-center gap-3 text-sm ${className}`}
      role="group"
      aria-label={t("languageLabel")}
    >
      {routing.locales.map((code, index) => (
        <span key={code} className="flex items-center gap-3">
          {index > 0 && <span className="text-border">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={
              code === locale
                ? "font-medium text-accent"
                : "text-muted hover:text-foreground"
            }
            aria-current={code === locale}
          >
            {labels[code]}
          </button>
        </span>
      ))}
    </div>
  );
}

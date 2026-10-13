import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { FeaturedCars } from "@/components/home/featured-cars";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ContactCta } from "@/components/home/contact-cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Intro />
      <FeaturedCars />
      <ServicesOverview />
      <WhyChooseUs />
      <ContactCta />
    </>
  );
}

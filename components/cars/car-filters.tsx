"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { BodyType, Car } from "@/lib/cars";
import { CarCard } from "@/components/ui/car-card";

type SortOption = "priceAsc" | "priceDesc" | "yearDesc";

const selectClasses =
  "rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none";

export function CarsExplorer({ cars }: { cars: Car[] }) {
  const t = useTranslations("cars");
  const tFilters = useTranslations("cars.filters");
  const tBody = useTranslations("bodyTypes");

  const makes = useMemo(
    () => Array.from(new Set(cars.map((car) => car.make))).sort(),
    [cars],
  );
  const bodyTypes = useMemo(
    () =>
      Array.from(
        new Set(
          cars
            .map((car) => car.bodyType)
            .filter((type): type is BodyType => type !== undefined),
        ),
      ),
    [cars],
  );

  const [make, setMake] = useState<string>("all");
  const [bodyType, setBodyType] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("yearDesc");

  const filtered = useMemo(() => {
    let result = cars.filter((car) => {
      if (make !== "all" && car.make !== make) return false;
      if (bodyType !== "all" && car.bodyType !== bodyType) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sort === "priceAsc") return a.priceEur - b.priceEur;
      if (sort === "priceDesc") return b.priceEur - a.priceEur;
      return b.year - a.year;
    });

    return result;
  }, [cars, make, bodyType, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <select
          className={selectClasses}
          value={make}
          onChange={(event) => setMake(event.target.value)}
          aria-label={tFilters("makeLabel")}
        >
          <option value="all">{tFilters("allMakes")}</option>
          {makes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          className={selectClasses}
          value={bodyType}
          onChange={(event) => setBodyType(event.target.value)}
          aria-label={tFilters("bodyTypeLabel")}
        >
          <option value="all">{tFilters("allBodyTypes")}</option>
          {bodyTypes.map((type) => (
            <option key={type} value={type}>
              {tBody(type)}
            </option>
          ))}
        </select>

        <select
          className={`${selectClasses} sm:ml-auto`}
          value={sort}
          onChange={(event) => setSort(event.target.value as SortOption)}
          aria-label={tFilters("sortLabel")}
        >
          <option value="yearDesc">{tFilters("sortYearDesc")}</option>
          <option value="priceAsc">{tFilters("sortPriceAsc")}</option>
          <option value="priceDesc">{tFilters("sortPriceDesc")}</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted">{t("empty")}</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

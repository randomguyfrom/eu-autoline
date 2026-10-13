export type FuelType = "petrol" | "diesel" | "electric" | "hybrid";
export type Transmission = "automatic" | "manual";
export type BodyType = "sedan" | "suv" | "estate" | "coupe" | "hatchback";
export type CarColor =
  | "black"
  | "white"
  | "grey"
  | "silver"
  | "blue"
  | "red"
  | "green"
  | "brown"
  | "beige";

export type CarImage = {
  /** Path under /public, e.g. "/cars/ioniq-5/front-3-4.jpg". */
  src: string;
  /** Falls back to "<make> <model>" when omitted. */
  alt?: string;
};

export type Car = {
  slug: string;
  make: string;
  model: string;
  year: number;
  priceEur: number;
  mileageKm: number;
  fuel: FuelType;
  transmission: Transmission;
  /** Optional specs: components only render the ones a car actually has. */
  bodyType?: BodyType;
  powerHp?: number;
  color?: CarColor;
  /** Electric cars. */
  batteryKwh?: number;
  rangeKm?: number;
  hasCharger?: boolean;
  featured?: boolean;
  /**
   * Gallery images. The first image is the primary one used on cards and
   * as the initial gallery image. Cars without images get a placeholder.
   */
  images?: CarImage[];
  /**
   * Copy in Danish (primary market). In a future iteration this should come
   * from a CMS with per-locale fields, like the rest of the site's UI copy
   * already does via messages/*.json.
   */
  description?: string;
};

export function getPrimaryImage(car: Car): CarImage | undefined {
  return car.images?.[0];
}

// Static inventory for now — swap this for a real data source later without
// changing component code. Cars without `images` render a placeholder, and
// the first six entries are still sample data, not real stock.
export const cars: Car[] = [
  {
    slug: "hyundai-ioniq-5-2025",
    make: "Hyundai",
    model: "IONIQ 5",
    year: 2025,
    priceEur: 40000,
    mileageKm: 13900,
    fuel: "electric",
    transmission: "automatic",
    color: "grey",
    batteryKwh: 90,
    rangeKm: 530,
    hasCharger: true,
    images: [
      { src: "/cars/ioniq-5/front-3-4.jpg" },
      { src: "/cars/ioniq-5/front.jpg" },
      { src: "/cars/ioniq-5/rear-3-4.jpg" },
    ],
  },
  {
    slug: "bmw-5-series-2022",
    make: "BMW",
    model: "5 Series 520d",
    year: 2022,
    priceEur: 42900,
    mileageKm: 38000,
    fuel: "diesel",
    transmission: "automatic",
    bodyType: "sedan",
    powerHp: 190,
    featured: true,
    description:
      "Velholdt BMW 5-Serie med fuld servicehistorik, adaptiv fartpilot og lædersæder. Importeret og klargjort af EU Autoline.",
  },
  {
    slug: "mercedes-glc-2023",
    make: "Mercedes-Benz",
    model: "GLC 300 4MATIC",
    year: 2023,
    priceEur: 54500,
    mileageKm: 21000,
    fuel: "hybrid",
    transmission: "automatic",
    bodyType: "suv",
    powerHp: 258,
    featured: true,
    description:
      "Næsten ny GLC med firehjulstræk, panoramatag og premium lydanlæg. Eftersynt og klar til levering.",
  },
  {
    slug: "audi-a6-avant-2021",
    make: "Audi",
    model: "A6 Avant 40 TDI",
    year: 2021,
    priceEur: 37900,
    mileageKm: 61000,
    fuel: "diesel",
    transmission: "automatic",
    bodyType: "estate",
    powerHp: 204,
    featured: true,
    description:
      "Rummelig og økonomisk stationcar, ideel til familien eller erhverv. Nyligt importeret fra Tyskland.",
  },
  {
    slug: "volkswagen-id4-2022",
    make: "Volkswagen",
    model: "ID.4 Pro",
    year: 2022,
    priceEur: 33900,
    mileageKm: 29500,
    fuel: "electric",
    transmission: "automatic",
    bodyType: "suv",
    powerHp: 204,
    description:
      "100% elektrisk SUV med lang rækkevidde og lavt driftsomkostningsniveau. Ét ejerskab, ingen skader.",
  },
  {
    slug: "volvo-v60-2020",
    make: "Volvo",
    model: "V60 T4",
    year: 2020,
    priceEur: 28500,
    mileageKm: 74000,
    fuel: "petrol",
    transmission: "automatic",
    bodyType: "estate",
    powerHp: 190,
    description:
      "Skandinavisk design og et af markedets sikreste biler. Nysynet og klar til indregistrering.",
  },
  {
    slug: "porsche-macan-2021",
    make: "Porsche",
    model: "Macan S",
    year: 2021,
    priceEur: 68900,
    mileageKm: 42000,
    fuel: "petrol",
    transmission: "automatic",
    bodyType: "suv",
    powerHp: 380,
    description:
      "Sportslig SUV med Sport Chrono-pakke og luftaffjedring. Importeret fra Tyskland med fuld historik.",
  },
];

export function getFeaturedCars(): Car[] {
  return cars.filter((car) => car.featured);
}

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

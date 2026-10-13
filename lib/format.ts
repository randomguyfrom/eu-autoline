export function formatPrice(priceEur: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(priceEur);
}

export function formatMileage(km: number, locale: string): string {
  return `${new Intl.NumberFormat(locale).format(km)} km`;
}

export function formatRange(km: number, locale: string): string {
  return `${new Intl.NumberFormat(locale).format(km)} km`;
}

export function formatBattery(kwh: number, locale: string): string {
  return `${new Intl.NumberFormat(locale).format(kwh)} kWh`;
}

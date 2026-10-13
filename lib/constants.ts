export const navLinks = [
  { href: "/", key: "home" },
  { href: "/cars", key: "cars" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export const serviceKeys = ["import", "export", "repairs"] as const;
export type ServiceKey = (typeof serviceKeys)[number];

export const companyInfo = {
  name: "EU Autoline",
  legalName: "EU AUTOLINE ApS",
  phone: "+45 52 52 52 81",
  phoneHref: "tel:+4552525281",
  email: "info@euautoline.dk",
  addressLine1: "Naverland 17",
  addressLine2: "2600 Glostrup",
  country: "Danmark",
  cvr: "39616696",
  hoursValue: "09:00–16:00",
};

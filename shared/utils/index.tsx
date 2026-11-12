import { MAGICAL_TYPES } from "./constants";
import { COLORS } from "./color";

export const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0]?.icon;
};

export const getFilterPillColor = (magicalType: string) => {
  switch (magicalType) {
    case "fire":
      return COLORS.fire;
    case "ice":
      return COLORS.ice;
    case "electric":
      return COLORS.electric;
    default:
      return COLORS.primary;
  }
};

export const isDev = process.env.NODE_ENV === "development";
export const ORIGIN_URL = isDev 
  ? "http://localhost:3000" 
  : "https://spirit-shop.vercel.app";
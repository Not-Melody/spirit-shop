import { FlameIcon, SnowflakeIcon, ZapIcon, SparklesIcon } from "lucide-react";
import { COLORS } from "@/shared/utils/color";

export const MAGICAL_TYPES = [
  {
    id: "fire",
    value: "🔥",
    label: "Fire-type",
    icon: <FlameIcon size={20} color={COLORS.fire} />,
  },
  {
    id: "ice",
    value: "❄️",
    label: "Ice-type",
    icon: <SnowflakeIcon size={20} color={COLORS.ice} />,
  },
  {
    id: "electric",
    value: "⚡",
    label: "Electric-type",
    icon: <ZapIcon size={20} color={COLORS.electric} />,
  },
  {
    id: "all",
    value: "✨",
    label: "All Types",
    icon: <SparklesIcon size={20} color={COLORS.primary} />,
  },
] as const;

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};
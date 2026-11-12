import Link from "next/link";
import { MAGICAL_TYPES } from "@/shared/utils/constants";
import { getFilterPillColor } from "@/shared/utils";
import { SparklesIcon } from "lucide-react";
import { COLORS } from "@/shared/utils/color";

export function PotionFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      {MAGICAL_TYPES.map(({ id, icon, label }) => (
        <Link
          href={id === "all" ? "/" : `/?type=${id}`}
          key={id}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300 overflow-hidden"
          style={{ borderColor: getFilterPillColor(id), color: "#fff" }}
        >
          <span
            className="absolute inset-0 -z-10"
            style={{ backgroundColor: getFilterPillColor(id), opacity: 0.25 }}
          ></span>
          {id === "all" ? <SparklesIcon size={20} color={COLORS.primary} /> : icon}
          {label}
        </Link>
      ))}
    </div>
  );
}
import { COLORS } from "@/shared/utils/color";
import { StarIcon, PackageIcon } from "lucide-react";
import { formatNumber } from "@/shared/utils/constants";
import Image from "next/image";

export const PotionHeader = ({
  name,
  owner: { login, avatar_url },
  size = "small",
}: {
  name: string;
  owner: { login: string; avatar_url: string };
  size?: "small" | "medium";
}) => (
  <div className={`flex items-center ${size === "medium" ? "mb-6" : "mb-2"}`}>
    <div
      className={`relative overflow-hidden rounded-full mr-3 ${
        size === "medium" ? "w-12 h-12" : "w-10 h-10"
      }`}
      style={{ boxShadow: `0 0 0 2px ${COLORS.primary}` }}
    >
      <Image src={avatar_url} fill sizes="48px" className="object-cover" alt={login} />
    </div>
    <div>
      <h3 className={`font-bold ${size === "medium" ? "text-lg" : "text-base"}`} style={{ color: COLORS.primaryLight }}>
        {name}
      </h3>
      <p className={`text-xs ${size === "medium" ? "text-sm" : "text-xs"}`} style={{ color: COLORS.textMuted }}>
        {login}
      </p>
    </div>
  </div>
);

export const PotionInfoCard = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="p-4 rounded-lg" style={{ border: `1px solid ${COLORS.border}` }}>
    <h4 className="text-sm font-medium mb-2" style={{ color: COLORS.primaryLight }}>
      {title}
    </h4>
    {children}
  </div>
);

export const PotionStats = ({
  stars,
  forks,
  classNames,
}: {
  stars: number;
  forks: number;
  classNames?: string;
}) => (
  <div className={`flex justify-between ${classNames || ""}`}>
    <div className="flex items-center gap-1">
      <StarIcon size={16} color={COLORS.star} />
      <span className="text-sm" style={{ color: COLORS.primaryLight }}>{formatNumber(stars)}</span>
    </div>
    <div className="flex items-center gap-1">
      <PackageIcon size={16} color={COLORS.fork} />
      <span className="text-sm" style={{ color: COLORS.primaryLight }}>{formatNumber(forks)}</span>
    </div>
  </div>
);
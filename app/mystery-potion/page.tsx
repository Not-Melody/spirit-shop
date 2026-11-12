import { fetchRandomTrendingPotion } from "@/modules/potions/services/github";
import PotionInfo from "@/modules/potions/components/potion-info";
import { COLORS } from "@/shared/utils/color";
import { ORIGIN_URL } from "@/shared/utils";
import { notFound } from "next/navigation";

export const instant = false;

export async function generateMetadata() {
  const potion = await fetchRandomTrendingPotion();

  return {
    title: `Mystery Potion – ${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `${ORIGIN_URL}/mystery-potion`,
    },
  };
}

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: COLORS.background, opacity: 0.25 }}
      ></div>

      <div className="relative z-10">
        <PotionInfo potion={potion} />
      </div>
    </div>
  );
}
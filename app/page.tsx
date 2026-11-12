import { fetchPotions } from "@/modules/potions/services/github";
import { PotionGrid } from "@/modules/potions/components/potion-grid";
import { PotionFilters } from "@/modules/potions/components/potion-filters";
import { PotionType } from "@/modules/potions/types/github";
import { COLORS } from "@/shared/utils/color";
import { Text } from "@mantine/core";

export const instant = false;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const allPotions = await fetchPotions();

  const potions = type
    ? allPotions.filter((p: PotionType) => p.magicalType === type)
    : allPotions;

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: COLORS.background, opacity: 0.25 }}
      ></div>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Text
            component="h1"
            size="3rem"
            fw={700}
            variant="gradient"
            gradient={{ from: "violet.3", to: "violet.6", deg: 90 }}
            mb="md"
          >
            Open Source Spirit Shop
          </Text>
          <p className="text-lg text-white/80">
            Discover magical potions brewed from the powers of popular open-source tools
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <PotionFilters />
        </div>

        <PotionGrid potions={potions} />
      </main>
    </div>
  );
}
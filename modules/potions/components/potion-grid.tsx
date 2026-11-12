import { SimpleGrid } from "@mantine/core";
import { PotionType } from "@/modules/potions/types/github";
import { PotionCard } from "./potion-card";

interface PotionGridProps {
  potions: PotionType[];
}

export function PotionGrid({ potions }: PotionGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" verticalSpacing="lg">
      {potions.map((potion, index) => (
        <PotionCard key={`${potion.full_name}-${index}`} {...potion} />
      ))}
    </SimpleGrid>
  );
}
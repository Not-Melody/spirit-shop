import { SimpleGrid, Box, Stack, Progress, Text } from "@mantine/core";
import { PotionType } from "@/modules/potions/types/github";
import { COLORS } from "@/shared/utils/color";
import { PotionHeader, PotionInfoCard, PotionStats } from "./potion-common";
import {
  CodeIcon,
  CalendarIcon,
  ExternalLinkIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";

export default function PotionInfo({ potion }: { potion: PotionType }) {
  const {
    name,
    owner: { login, avatar_url },
    description,
    stargazers_count,
    forks_count,
    potionEffect,
    topics,
    language,
    updated_at,
  } = potion;

  const brewingDifficulty = (forks_count / (stargazers_count || 1)) * 100;
  const potency = Math.min(
    5,
    Math.max(1, Math.floor(stargazers_count / 50000)),
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <Box mb="xl">
        <Text
          component="h1"
          size="2.5rem"
          fw={700}
          variant="gradient"
          gradient={{ from: "violet.3", to: "violet.6", deg: 90 }}
          mb="sm"
        >
          Potion Details
        </Text>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Discover the magical properties of this enchanted brew
        </p>
      </Box>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        <Box
          className="md:col-span-1 p-6 rounded-2xl border"
          style={{ borderColor: COLORS.border }}
        >
          <PotionHeader
            name={name}
            owner={{ login, avatar_url }}
            size="medium"
          />

          <Stack gap="md">
            <PotionInfoCard title="Effect">
              <p className="text-sm" style={{ color: COLORS.primaryLight }}>
                {potionEffect}
              </p>
            </PotionInfoCard>

            <PotionInfoCard title="GitHub Stats">
              <PotionStats stars={stargazers_count} forks={forks_count} />
            </PotionInfoCard>

            <PotionInfoCard title="Language">
              <div className="flex items-center gap-2">
                <CodeIcon size={16} color={COLORS.primary} />
                <span
                  className="text-sm"
                  style={{ color: COLORS.primaryLight }}
                >
                  {language}
                </span>
              </div>
            </PotionInfoCard>

            <PotionInfoCard title="Last Updated">
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} color={COLORS.primary} />
                <span
                  className="text-sm"
                  style={{ color: COLORS.primaryLight }}
                >
                  {new Date(updated_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </PotionInfoCard>
          </Stack>
        </Box>

        <Box className="md:col-span-2">
          <Stack gap="lg">
            <div
              className="p-6 rounded-2xl border"
              style={{ borderColor: COLORS.border }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Text
                    component="h2"
                    size="1.8rem"
                    fw={700}
                    variant="gradient"
                    gradient={{
                      from: COLORS.primary,
                      to: COLORS.grape,
                      deg: 90,
                    }}
                    mb="sm"
                  >
                    Repository Details
                  </Text>
                  <p className="text-sm" style={{ color: COLORS.textMuted }}>
                    {description}
                  </p>
                </div>
                <a
                  href={`https://github.com/${login}/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 shrink-0"
                  style={{ backgroundColor: COLORS.grape, color: "white" }}
                >
                  <ExternalLinkIcon size={16} />
                  View on GitHub
                </a>
              </div>

              <SimpleGrid cols={2} spacing="md" mb="lg">
                <PotionInfoCard title="Organization">
                  <div className="flex items-center gap-2">
                    <Image
                      src={avatar_url}
                      alt={login}
                      width={20}
                      height={20}
                      className="rounded-full"
                      sizes="20px"
                    />
                    <span
                      className="text-sm"
                      style={{ color: COLORS.primaryLight }}
                    >
                      {login}
                    </span>
                  </div>
                </PotionInfoCard>
                <PotionInfoCard title="Repository Name">
                  <span
                    className="text-sm"
                    style={{ color: COLORS.primaryLight }}
                  >
                    {name}
                  </span>
                </PotionInfoCard>
              </SimpleGrid>

              <PotionInfoCard title="Topics">
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic, index) => (
                    <span
                      key={index}
                      className="relative text-xs px-2 py-1 rounded-full overflow-hidden"
                      style={{ color: COLORS.primaryLight }}
                    >
                      <span
                        className="absolute inset-0 -z-10"
                        style={{
                          backgroundColor: COLORS.primary,
                          opacity: 0.25,
                        }}
                      ></span>
                      {topic}
                    </span>
                  ))}
                </div>
              </PotionInfoCard>
            </div>

            <div
              className="p-6 rounded-2xl border"
              style={{ borderColor: COLORS.border }}
            >
              <Text
                component="h3"
                size="1.5rem"
                fw={700}
                variant="gradient"
                gradient={{ from: COLORS.primary, to: COLORS.grape, deg: 90 }}
                mb="md"
              >
                Magical Properties
              </Text>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="lg">
                <PotionInfoCard title="Brewing Difficulty">
                  <div className="flex items-center gap-2">
                    <Progress
                      value={brewingDifficulty}
                      size="sm"
                      radius="xl"
                      className="flex-1"
                      color="grape"
                    />
                    <span
                      className="text-sm"
                      style={{ color: COLORS.primaryLight }}
                    >
                      {brewingDifficulty.toFixed(0)}%
                    </span>
                  </div>
                </PotionInfoCard>
                <PotionInfoCard title="Potency">
                  <div className="flex">
                    {Array.from({ length: potency }).map((_, i) => (
                      <StarIcon
                        key={i}
                        size={16}
                        color={COLORS.starGold}
                        fill={COLORS.starGold}
                      />
                    ))}
                  </div>
                </PotionInfoCard>
              </SimpleGrid>

              <PotionInfoCard title="Notes from the Alchemist">
                <p
                  className="italic text-sm"
                  style={{ color: COLORS.textMuted }}
                >
                  &quot;This powerful brew contains the essence of open source
                  magic, harnessed from the contributions of developers
                  worldwide. Use it wisely to enhance your coding abilities and
                  bring your digital creations to life.&quot;
                </p>
              </PotionInfoCard>
            </div>
          </Stack>
        </Box>
      </SimpleGrid>
    </main>
  );
}

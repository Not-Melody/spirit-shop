import { Card, Text, Group, Badge, Stack } from "@mantine/core";
import { PotionType } from "@/modules/potions/types/github";
import { getMagicalTypeIcon } from "@/shared/utils";
import { formatNumber } from "@/shared/utils/constants";
import { COLORS } from "@/shared/utils/color";
import Image from "next/image";
import { StarIcon, PackageIcon } from "lucide-react";
import Link from "next/link";

export const PotionCard = ({
  full_name,
  name,
  description,
  topics,
  owner: { login, avatar_url },
  magicalType,
  potionEffect,
  stargazers_count,
  forks_count,
}: PotionType) => {
  return (
    <Link href={`/potions/${full_name.replace("/", "_")}`} className="block h-full">
      <Card
        className={`potion-card potion-${magicalType} cursor-pointer h-full flex flex-col`}
        padding="lg"
        radius="md"
      >
        <div className="absolute right-4 top-4 z-10">
          {getMagicalTypeIcon(magicalType)}
        </div>

        <Group wrap="nowrap" align="flex-start" mb="md" className="relative z-10">
          <div
            className="relative overflow-hidden rounded-full"
            style={{ width: 40, height: 40, boxShadow: `0 0 0 2px ${COLORS.primary}` }}
          >
            <Image src={avatar_url} fill sizes="40px" className="object-cover" alt={login} />
          </div>

          <Stack gap={0}>
            <Text fw={700} size="lg" style={{ color: COLORS.primaryLight }} lineClamp={1}>
              {name}
            </Text>
            <Text size="xs" style={{ color: COLORS.textMuted }}>
              {login}
            </Text>
          </Stack>
        </Group>

        <Stack gap="xs" className="relative z-10 flex-1">
          <Text size="sm" style={{ color: COLORS.textMuted }} lineClamp={3} mih={60}>
            {description}
          </Text>

          <Text size="sm" fw={500} style={{ color: COLORS.primaryLight }}>
            ✦ Effect: {potionEffect}
          </Text>

          <Group justify="space-between" mt="xs">
            <Group gap={4}>
              <StarIcon size={16} color={COLORS.star} />
              <Text size="xs" style={{ color: COLORS.textMuted }}>
                {formatNumber(stargazers_count)}
              </Text>
            </Group>
            <Group gap={4}>
              <PackageIcon size={16} color={COLORS.fork} />
              <Text size="xs" style={{ color: COLORS.textMuted }}>
                {formatNumber(forks_count)}
              </Text>
            </Group>
          </Group>
        </Stack>

        <Group gap="xs" mt="md" className="relative z-10">
          {topics?.map((topic: string, i: number) => (
            <Badge key={i} color="violet" variant="light" size="sm" radius="sm">
              {topic}
            </Badge>
          ))}
        </Group>
      </Card>
    </Link>
  );
};
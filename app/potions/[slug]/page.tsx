import { fetchPotion } from "@/modules/potions/services/github";
import PotionInfo from "@/modules/potions/components/potion-info";
import { COLORS } from "@/shared/utils/color";
import { ORIGIN_URL } from "@/shared/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [owner, repo] = slug.split("_");

  const potion = await fetchPotion(owner, repo);

  if (!potion) {
    notFound();
  }

  return {
    title: `${potion.name}`,
    description: potion.description,
    alternates: {
      canonical: `/potions/${owner}_${repo}`,
    },
  };
}

export async function generateStaticParams() {
  const popularRepos = [
    "facebook/react",
    "tailwindlabs/tailwindcss",
    "nodejs/node",
    "vercel/next.js",
    "typescript/TypeScript",
  ];

  return popularRepos.map((repo) => ({
    slug: repo.replace("/", "_"),
  }));
}

export default async function PotionPage({ params }: Props) {
  const { slug } = await params;
  const [owner, repo] = slug.split("_");

  if (!owner || !repo) {
    notFound();
  }

  const potion = await fetchPotion(owner, repo);

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
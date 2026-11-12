import { GithubRepo, MagicalType } from "@/modules/potions/types/github";
import { MAGICAL_TYPES } from "@/shared/utils/constants";

const GITHUB_API_URL = "https://api.github.com";

const POTION_EFFECTS = [
  "Grants the power of rapid development",
  "Enhances code clarity and maintainability",
  "Boosts performance and efficiency",
  "Provides magical debugging abilities",
  "Unlocks the secrets of clean architecture",
];

const transformRepoToPotion = (repo: GithubRepo, index: number) => {
  return {
    ...repo,
    topics: repo.topics?.slice(0, 3) || [],
    potionEffect: POTION_EFFECTS[index % POTION_EFFECTS.length],
    magicalType: MAGICAL_TYPES[index % MAGICAL_TYPES.length].id as MagicalType,
  };
};

export async function fetchPotions() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>5000&sort=stars&order=desc`;
  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
  };

  try {
    const response = await fetch(url, { headers, cache: "force-cache" });
    if (!response.ok) throw new Error(`Failed to fetch potions`);
    
    const data = await response.json();
    return data.items.map((repo: GithubRepo, index: number) => transformRepoToPotion(repo, index));
  } catch (error) {
    console.error("Failed to fetch potions", (error as Error).message);
    return [];
  }
}

export async function fetchPotion(owner: string, repo: string) {
  const url = `${GITHUB_API_URL}/repos/${owner}/${repo}`;
  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
  };

  try {
    const response = await fetch(url, { headers, cache: "force-cache" });
    if (!response.ok) throw new Error(`Failed to fetch potion`);
    
    const data = await response.json();
    return transformRepoToPotion(data, 0);
  } catch (error) {
    console.error("Failed to fetch potion", (error as Error).message);
    return null;
  }
}

export async function fetchRandomTrendingPotion() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>5000&sort=stars&order=desc`;
  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
  };

  try {
    const response = await fetch(url, { headers, cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to fetch potions`);

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error("No items found in the response");
    }

    const randomIndex = Math.floor(Math.random() * data.items.length);
    return transformRepoToPotion(data.items[randomIndex], randomIndex);
  } catch (error) {
    console.log("error", error);
    if (
      error instanceof Error &&
      "digest" in error &&
      (error as { digest: string }).digest === "DYNAMIC_SERVER_USAGE"
    ) {
      throw error;
    }
    console.error("Failed to fetch potions", (error as Error).message);
    return null;
  }
}
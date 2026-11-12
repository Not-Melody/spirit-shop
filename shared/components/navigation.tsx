import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { COLORS } from "@/shared/utils/color";

export default function Navigation() {
  return (
    <header className="w-full relative py-4">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: COLORS.background, opacity: 0.25 }}
      ></div>

      <div className="container mx-auto flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <SparklesIcon className="h-6 w-6" style={{ color: COLORS.primary }} />
          <span className="font-bold text-xl" style={{ color: COLORS.primary }}>
            Spirit Shop
          </span>
        </Link>

        <Link
          href="/mystery-potion"
          className="px-4 py-2 rounded-lg text-white transition-colors hover:bg-white/10"
        >
          Mystery Potion 🔥
        </Link>
      </div>
    </header>
  );
}
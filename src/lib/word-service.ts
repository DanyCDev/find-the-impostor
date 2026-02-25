import { Locale } from "../config/language";
import { FALLBACK_WORDS_WITH_HINTS } from "@/src/data/fallbackwords";
import { WordWithHints } from "@/src/types/game";

export function getRandomWordWithHints(
  category: string,
  language: Locale,
): WordWithHints {
  const categoryKey =
    category.toLowerCase() as keyof (typeof FALLBACK_WORDS_WITH_HINTS)[typeof language];
  const fallbackWords = FALLBACK_WORDS_WITH_HINTS[language]?.[categoryKey];

  if (fallbackWords && fallbackWords.length > 0) {
    return fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
  }

  throw new Error(
    `No words available for category "${category}" in language "${language}"`,
  );
}

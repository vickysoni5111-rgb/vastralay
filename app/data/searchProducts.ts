import { productsData, Product } from './products';

// "Red Kurti!" -> ['red', 'kurti']
const toWords = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

// "shirts" -> "shirt", "kurtis" -> "kurti" (dress / sharara jaise words ko chhedta nahi)
const singular = (word: string) =>
  word.length > 3 && word.endsWith('s') && !word.endsWith('ss')
    ? word.slice(0, -1)
    : word;

export function searchProducts(
  query: string,
  list: Product[] = productsData
): Product[] {
  const tokens = toWords(query).map(singular);

  // Khali search = saare products (original order me)
  if (tokens.length === 0) return list;

  const scored: { product: Product; score: number }[] = [];

  for (const product of list) {
    const colorWords = toWords(product.color).map(singular);
    const titleWords = toWords(product.title).map(singular);
    const otherWords = toWords(
      `${product.fabric} ${product.fit} ${product.description ?? ''}`
    ).map(singular);

    let score = 0;
    let matchedAll = true;

    // Har word kisi na kisi field ke shuru se match hona chahiye ("men" se "women" match nahi hoga)
    for (const token of tokens) {
      if (colorWords.some((w) => w.startsWith(token))) score += 3;
      else if (titleWords.some((w) => w.startsWith(token))) score += 2;
      else if (otherWords.some((w) => w.startsWith(token))) score += 1;
      else {
        matchedAll = false;
        break;
      }
    }

    if (matchedAll) scored.push({ product, score });
  }

  // Zyada relevant pehle, barabar score par original order
  return scored.sort((a, b) => b.score - a.score).map((s) => s.product);
}
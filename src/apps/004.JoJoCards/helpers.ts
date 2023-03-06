export function shuffle<T extends unknown[]>(cards: T): T {
  const len = cards.length
  for (let i = 0; i < len; i++) {
    const randomIdx = ~~(Math.random() * (len - i)) + i
    ;[cards[i], cards[randomIdx]] = [cards[randomIdx], cards[i]]
  }
  return cards
}

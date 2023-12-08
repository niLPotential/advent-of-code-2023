import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";

const cubeRe = /(\d+)\s(red|green|blue)/g;

export function getPowerOfGame(game: string) {
  const gameMatch = game.matchAll(cubeRe);
  const bag = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const match of gameMatch) {
    const count = parseInt(match[1]);
    const color = match[2] as "red" | "green" | "blue";
    if (bag[color] < count) {
      bag[color] = count;
    }
  }
  return bag.red * bag.green * bag.blue;
}

Deno.test(function examples() {
  const examples = {
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green": 48,
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue": 12,
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red": 1560,
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red": 630,
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green": 36,
  };

  for (const [k, v] of Object.entries(examples)) {
    assertEquals(getPowerOfGame(k), v);
  }
});

import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";

const idRe = /^Game\s(\d+)/;
const cubeRe = /(\d+)\s(red|green|blue)/g;

const limit = {
  red: 12,
  green: 13,
  blue: 14,
};

export function validateGame(str: string) {
  const cubeMatch = [...str.matchAll(cubeRe)];
  return cubeMatch.every((match) => {
    const n = parseInt(match[1]);
    const color = match[2];
    return validateCubeCount(n, color);
  });
}

function validateCubeCount(n: number, color: string) {
  switch (color) {
    case "red":
    case "green":
    case "blue":
      return n <= limit[color];
    default:
      return null;
  }
}

export function getGameId(str: string) {
  const id = idRe.exec(str)?.[1];
  if (id) {
    return parseInt(id);
  } else {
    return NaN;
  }
}

Deno.test(function examples() {
  const examples = {
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green": true,
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue": true,
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red":
      false,
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red":
      false,
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green": true,
  };

  for (const [k, v] of Object.entries(examples)) {
    assertEquals(validateGame(k), v);
  }
});

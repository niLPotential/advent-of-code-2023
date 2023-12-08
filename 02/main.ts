import { validateGame, getGameId } from "./part_1.ts";

const input = await Deno.readTextFile("02/input.txt");
const lines = input.split("\n");

let sum = 0;

for (const line of lines) {
  if (line.length > 0 && validateGame(line)) {
    sum += getGameId(line);
  }
}

console.log("Day 2: ", sum);

import { calibrateValue } from "./part_2.ts";

const input = await Deno.readTextFile("01/input.txt");
const lines = input.split("\n");

let sum = 0;

for (const line of lines) {
  const value = calibrateValue(line);
  if (value) {
    sum += value;
  }
}

console.log("Day 1: ", sum);

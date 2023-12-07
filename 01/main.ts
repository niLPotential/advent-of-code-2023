import { calibrationToValue } from "./calibrate.ts";

const input = await Deno.readTextFile("01/input.txt");
const lines = input.split("\n");

let sum = 0;

for (const line of lines) {
  const value = calibrationToValue(line);
  if (value !== null) {
    sum += value;
  }
}

console.log("Day 1: ", sum);

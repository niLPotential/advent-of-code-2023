import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

const re = /(?=(one|two|three|four|five|six|seven|eight|nine|[1-9]))/g;

export function calibrateValue(str: string) {
  const matched = Array.from(str.matchAll(re), (x) => x[1]);
  const firstDigit = matched.at(0);
  const lastDigit = matched.at(-1);

  if (firstDigit && lastDigit) {
    const firstNum = digitToNumber(firstDigit);
    const lastNum = digitToNumber(lastDigit);
    return firstNum * 10 + lastNum;
  }
  return NaN;
}

function digitToNumber(str: string) {
  const parsed = parseInt(str);
  return isNaN(parsed) ? wordToNumber(str) : parsed;
}

function wordToNumber(str: string) {
  switch (str) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return NaN;
  }
}

Deno.test(function examples() {
  const examples = {
    two1nine: 29,
    eightwothree: 83,
    abcone2threexyz: 13,
    xtwone3four: 24,
    "4nineeightseven2": 42,
    zoneight234: 14,
    "7pqrstsixteen": 76,
    eightwo: 82,
  };

  for (const [k, v] of Object.entries(examples)) {
    assertEquals(calibrateValue(k), v);
  }
});

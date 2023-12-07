import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";

const firstDigit = /\d/;
const lastDigit = /\d(?=([a-z]*)$)/;

function digitsToNumber(first: string, last: string) {
  return parseInt(first + last);
}

export function calibrationToValue(line: string) {
  const first = firstDigit.exec(line);
  const last = lastDigit.exec(line);

  if (first !== null && last !== null) {
    return digitsToNumber(first[0], last[0]);
  } else {
    console.log(line);
  }
  return null;
}

Deno.test(function examples() {
  const firstExample = "1abc2";
  assertEquals(firstDigit.exec(firstExample)?.[0], "1");
  assertEquals(lastDigit.exec(firstExample)?.[0], "2");
  assertEquals(calibrationToValue(firstExample), 12);

  const secondExample = "pqr3stu8vwx";
  assertEquals(firstDigit.exec(secondExample)?.[0], "3");
  assertEquals(lastDigit.exec(secondExample)?.[0], "8");
  assertEquals(calibrationToValue(secondExample), 38);

  const thirdExample = "a1b2c3d4e5f";
  assertEquals(firstDigit.exec(thirdExample)?.[0], "1");
  assertEquals(lastDigit.exec(thirdExample)?.[0], "5");
  assertEquals(calibrationToValue(thirdExample), 15);

  const fourthExample = "treb7uchet";
  assertEquals(firstDigit.exec(fourthExample)?.[0], "7");
  assertEquals(lastDigit.exec(fourthExample)?.[0], "7");
  assertEquals(calibrationToValue(fourthExample), 77);
});

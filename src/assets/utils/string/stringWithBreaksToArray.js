export default function stringWithBreaksToArray(str) {
  return str
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line, i, arr) => i < arr.length - 1 || line !== ""); // Remove trailing blank lines
}

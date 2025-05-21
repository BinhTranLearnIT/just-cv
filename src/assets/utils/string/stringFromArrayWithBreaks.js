export default function stringFromArrayWithBreaks(arr) {
  if (Array.isArray(arr)) {
    return arr.join("\n");
  } else {
    return "";
  }
}

export function longestWord(value) {
  const words = value.split(" ");
  let min = words[0];
  for (const word of words) {
    if (word.length > min.length) {
      min = word;
    }
  }
  return min;
}

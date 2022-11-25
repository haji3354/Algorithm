function solution(s) {
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < words.length; i++) {
    s = s.replaceAll(words[i], number[i]);
  }
  return Number(s);
}

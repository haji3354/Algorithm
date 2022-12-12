function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
    .join(" ");
}

function solution(n) {
  let answer = 0;
  let N = n.toString(3).split("").reverse().join("");
  return parseInt(N, 3);
}

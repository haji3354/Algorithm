function solution(n) {
  let answer = 0;
  let count = n.toString(2).split("1").length - 1;
  while (1) {
    n++;
    if (n.toString(2).split("1").length - 1 === count) {
      answer = n;
      break;
    }
  }
  return answer;
}

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i];
      answer++;
    }
  }
  return answer;
}

function solution(n, m) {
  let answer = [];
  let N = 0;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      N = i;
    }
  }
  answer.push(N);
  answer.push((n * m) / N);

  return answer;
}

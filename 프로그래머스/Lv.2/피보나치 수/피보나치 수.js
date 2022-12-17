function solution(n) {
  var answer = 0;
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 1] + fibo[i - 2]) % 1234567);
  }
  answer = fibo[n];
  return answer;
}

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let get = 0;
    get = parseInt(n / a) * b;
    n = get + (n % a);
    answer += get;
  }
  return answer;
}

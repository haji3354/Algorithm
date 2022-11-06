function solution(left, right) {
  let answer = 0;
  let result = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        result++;
      }
    }
    if (result % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
    result = 0;
  }
  return answer;
}

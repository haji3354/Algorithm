function solution(num) {
  var answer = 0;
  while (1) {
    if (answer >= 500) {
      answer = -1;
      break;
    }
    if (num === 1) {
      break;
    }
    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
      answer++;
    }
  }
  return answer;
}

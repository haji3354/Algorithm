function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = answer.filter((el, idx) => {
    return answer.indexOf(el) === idx;
  });
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}

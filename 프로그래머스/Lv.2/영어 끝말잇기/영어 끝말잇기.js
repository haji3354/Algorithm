function solution(n, words) {
  let answer = [0, 0];
  let check = [];
  check.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (
      !check.includes(words[i]) &&
      words[i][0] === words[i - 1][words[i - 1].length - 1]
    ) {
      check.push(words[i]);
    } else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }
  return answer;
}

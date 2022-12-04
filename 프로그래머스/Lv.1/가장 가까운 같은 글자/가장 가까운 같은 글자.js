function solution(s) {
  let answer = [];
  let same = {};

  for (let i = 0; i < s.length; i++) {
    if (same[s[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - same[s[i]]);
    }
    same[s[i]] = i;
  }
  return answer;
}

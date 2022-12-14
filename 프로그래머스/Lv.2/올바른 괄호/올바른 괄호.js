function solution(s) {
  let result = [];
  let count1 = 0;
  let count2 = 0;

  if (s.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      result.push(s[i]);
    } else {
      if (result.length === 0) {
        return false;
      }
      result.pop();
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "(") {
      count1++;
    } else if (result[i] === ")") {
      count2++;
    }
  }
  if (count1 !== count2) {
    return false;
  }

  return true;
}

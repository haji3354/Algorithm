function solution(s, n) {
  let answer = "";
  let ascii = [];
  for (let i = 0; i < s.length; i++) {
    ascii.push(s.charCodeAt(i));
  }

  for (let i = 0; i < ascii.length; i++) {
    if (ascii[i] === 32) {
      answer += " ";
    } else if (ascii[i] <= 90) {
      if (ascii[i] + n > 90) {
        answer += String.fromCharCode(ascii[i] + n - 26);
      } else {
        answer += String.fromCharCode(ascii[i] + n);
      }
    } else if (ascii[i] >= 97) {
      if (ascii[i] + n > 122) {
        answer += String.fromCharCode(ascii[i] + n - 26);
      } else {
        answer += String.fromCharCode(ascii[i] + n);
      }
    }
  }
  return answer;
}

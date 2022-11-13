function solution(s) {
  let answer = "";
  let ss = s.split(" ");

  for (let i = 0; i < ss.length; i++) {
    for (let j = 0; j < ss[i].length; j++) {
      if (j % 2 === 0) {
        answer += ss[i][j].toUpperCase();
      } else {
        answer += ss[i][j].toLowerCase();
      }
    }
    if (i < ss.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

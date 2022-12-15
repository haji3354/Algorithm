function solution(s) {
  let answer = [];
  let cycle = 0;
  let del = 0;
  while (s !== "1") {
    let xx = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        xx += s[i];
      } else {
        del++;
      }
    }
    s = xx.length.toString(2);
    cycle++;
  }
  answer.push(cycle);
  answer.push(del);
  return answer;
}

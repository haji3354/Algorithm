function solution(s) {
  let answer = "";
  let ss = s.split(" ");
  answer = Math.min(...ss) + " " + Math.max(...ss);
  return answer;
}

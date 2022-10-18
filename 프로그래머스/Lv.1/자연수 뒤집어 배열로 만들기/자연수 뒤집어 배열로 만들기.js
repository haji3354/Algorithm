function solution(n) {
  let answer = [];
  let strn = String(n);
  for(let i=0; i<strn.length; i++){
      answer.push(Number(strn[(strn.length - i -1)]));
  }
  return answer;
}
function solution(n) {
  let answer = -1;
  if(n === 1){
      answer =4;
  }
  for(let i=2;i<=n/2;i++){
      if(i*i === n){
          answer = (i+1) ** 2;
          break;
      }
  }
  return answer;
}

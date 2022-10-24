function solution(x) {
  let answer = true;
  let sum =0;
  let strx = String(x);
  for(let i=0;i<strx.length;i++){
      sum += Number(strx[i]);
  }
  console.log(sum)
  if(x % sum !== 0){
      answer = false;
  }
  return answer;
}
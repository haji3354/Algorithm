function solution(s){
  let answer = true;
  let num =0;
  s = s.toUpperCase();
  for(let i=0;i<s.length;i++){
      if(s[i] === "P"){
          num--;          
      }
      else if(s[i]==="Y"){
          num++;      
      }
  }
  if(num !==0){
      answer = false;
  }
  return answer;
}
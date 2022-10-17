function solution(n){
  let stn = String(n);
  let result =0;
  for(let i=0 ; i<stn.length;i++){
      result +=Number(stn[i])
  }
  return result;
}
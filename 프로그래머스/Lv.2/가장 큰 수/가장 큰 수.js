function solution(numbers) {
  var answer = '';
  
  let newanswer = numbers.map((num) => String(num));
  newanswer.sort((a,b) => {
      return ((b+a) - (a+b));
  })
  answer = newanswer.join('');
  if(answer[0] === '0'){
      return '0';
  }
  
  return answer;
}
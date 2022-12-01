function solution(food) {
  let answer = "";
  for (let i = 0; i < food.length; i++) {
    if (food[i] !== 1) {
      answer += String(i).repeat(parseInt(food[i] / 2));
    }
  }
  let red = answer.split("").reverse().join("");
  return answer + "0" + red;
}

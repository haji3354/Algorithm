function solution(ingredient) {
  let answer = 0;
  let finish = [];
  for (let i = 0; i < ingredient.length; i++) {
    finish.push(ingredient[i]);
    if (finish.length >= 4) {
      if (
        finish[finish.length - 1] === 1 &&
        finish[finish.length - 2] === 3 &&
        finish[finish.length - 3] === 2 &&
        finish[finish.length - 4] === 1
      ) {
        answer++;
        finish.splice(-4);
      }
    }
  }
  return answer;
}

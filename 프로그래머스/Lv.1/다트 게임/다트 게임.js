function solution(dartResult) {
  let answer = 0;
  let score = [];
  let turn = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
        score.push(10);
        turn++;
      }
      score.push(Number(dartResult[i - 1]));
      turn++;
    } else if (dartResult[i] === "D") {
      if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
        score.push(100);
        turn++;
      }
      score.push(dartResult[i - 1] ** 2);
      turn++;
    } else if (dartResult[i] === "T") {
      if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
        score.push(1000);
        turn++;
      }
      score.push(dartResult[i - 1] ** 3);
      turn++;
    } else if (dartResult[i] === "*") {
      if (turn === 1) {
        score[turn - 1] = score[turn - 1] * 2;
      } else {
        score[turn - 1] = score[turn - 1] * 2;
        score[turn - 2] = score[turn - 2] * 2;
      }
    } else if (dartResult[i] === "#") {
      score[turn - 1] = score[turn - 1] * -1;
    }
  }
  for (let i = 0; i < score.length; i++) {
    answer += score[i];
  }
  return answer;
}

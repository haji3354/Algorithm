function solution(lottos, win_nums) {
  let answer = [];
  let zero = 0;
  let collect = 0;
  let ranking = [6, 6, 5, 4, 3, 2, 1];
  for (i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zero++;
    } else if (win_nums.includes(lottos[i])) {
      collect++;
    }
  }
  answer.push(ranking[collect + zero]);
  answer.push(ranking[collect]);

  return answer;
}

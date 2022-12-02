function solution(answers) {
  var answer = [0, 0, 0];
  let st1 = [1, 2, 3, 4, 5];
  let st2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (st1[i % 5] === answers[i]) {
      answer[0]++;
    }

    if (st2[i % 8] === answers[i]) {
      answer[1]++;
    }

    if (st3[i % 10] === answers[i]) {
      answer[2]++;
    }
  }

  let max = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] > max) {
      max = answer[i];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (max === answer[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

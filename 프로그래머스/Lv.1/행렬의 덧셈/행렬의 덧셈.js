function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let plus = [];
    for (let j = 0; j < arr1[0].length; j++) {
      plus.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(plus);
  }
  return answer;
}

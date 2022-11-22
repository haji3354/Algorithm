function solution(n, arr1, arr2) {
  let answer = [];
  let narr1 = [];
  let narr2 = [];

  for (let i = 0; i < n; i++) {
    narr1.push(arr1[i].toString(2).padStart(n, "0"));
    narr2.push(arr2[i].toString(2).padStart(n, "0"));
  }
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if (narr1[i][j] === "1" || narr2[i][j] === "1") {
        line += "#";
      } else {
        line += " ";
      }
    }
    answer.push(line);
  }
  return answer;
}

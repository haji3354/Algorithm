function solution(operations) {
  let answer = [];
  let box = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === "I") {
      let a = operations[i].split(" ");
      box.push(a[1]);
      box.sort((a, b) => a - b);
    } else if (operations[i][0] === "D" && operations[i][2] === "1") {
      box.pop();
    } else {
      box.shift();
    }
  }
  if (box.length === 0) {
    return [0, 0];
  }
  answer.push(Number(box.pop()));
  answer.push(Number(box.shift()));
  return answer;
}

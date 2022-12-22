function solution(record) {
  let answer = [];
  let user = {};

  for (let i = 0; i < record.length; i++) {
    let text = record[i].split(" ");
    if (text[0] === "Enter" || text[0] === "Change") {
      user[text[1]] = text[2];
    }
  }
  for (let i = 0; i < record.length; i++) {
    let text = record[i].split(" ");
    if (text[0] === "Enter") {
      answer.push(user[text[1]] + "님이 들어왔습니다.");
    } else if (text[0] === "Leave") {
      answer.push(user[text[1]] + "님이 나갔습니다.");
    }
  }
  return answer;
}

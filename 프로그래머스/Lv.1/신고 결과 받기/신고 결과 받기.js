function solution(id_list, report, k) {
  let result = Array(id_list.length).fill(0);
  let mail = Array(id_list.length).fill(0);
  let reportId = [];
  let setReport = [...new Set(report)];

  for (let i of setReport) {
    let user2 = i.split(" ")[1];
    let index = id_list.indexOf(user2);
    result[index]++;

    if (result[index] >= k) {
      reportId.push(id_list[index]);
    }
  }
  setReport.map((i, idx) => {
    let user1 = i.split(" ")[0];
    let user2 = i.split(" ")[1];

    if (reportId.indexOf(user2) !== -1) {
      let index = id_list.indexOf(user1);
      mail[index]++;
    }
  });

  return mail;
}

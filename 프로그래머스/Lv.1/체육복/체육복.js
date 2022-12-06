function solution(n, lost, reserve) {
  let answer = 0;
  let newlost = lost
    .sort((a, b) => a - b)
    .filter((el) => !reserve.includes(el));
  let newres = reserve.sort((a, b) => a - b).filter((el) => !lost.includes(el));

  answer = n - newlost.length;
  if (newres.length === 0) {
    return answer;
  }

  for (let i = 0; i < newlost.length; i++) {
    if (newres.includes(newlost[i] - 1)) {
      newres = newres.filter((a) => newlost[i] - 1 !== a);
      answer++;
    } else if (newres.includes(newlost[i] + 1)) {
      newres = newres.filter((a) => newlost[i] + 1 !== a);
      answer++;
    }
  }
  return answer;
}

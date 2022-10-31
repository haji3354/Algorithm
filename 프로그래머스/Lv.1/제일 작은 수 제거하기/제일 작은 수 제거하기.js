function solution(arr) {
  let answer = [];
  let min = Math.min(...arr);
  answer = arr.filter((num) => num !== min);
  return arr.length === 1 ? [-1] : answer;
}

function solution(nums) {
  let answer = 0;
  let newarr = new Set(nums);
  newarr = [...newarr];

  if (newarr.length <= nums.length / 2) {
    answer = newarr.length;
  } else {
    answer = nums.length / 2;
  }
  return answer;
}

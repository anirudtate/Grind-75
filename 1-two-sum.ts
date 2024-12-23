function twoSum(nums: number[], target: number): number[] {
  const m = new Map();
  nums.forEach((num, index) => m.set(num, index));

  for(let i = 0; i < nums.length; i++) {
    const requiredNum = target - nums[i];
    if(m.has(requiredNum) && m.get(requiredNum) != i) {
      return [i, m.get(requiredNum)];
    }
  }
  return [-1, -1];
};

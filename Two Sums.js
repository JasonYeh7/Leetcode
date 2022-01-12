var twoSum = function (nums, target) {
  for (var i= 0; i < nums.length; i++) {
    if (nums[i] + nums[i+1] === target) {
        var result = [];
        result.push(nums[i]);
        result.push(nums[i+1]);
        return result;
    }
}
};
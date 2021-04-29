function bubbleSort (nums) {
	for (let i = 0; i < nums.length; i++) {
		let swapped = false;
		for (let j = 0; j < nums.length - i; j++) {
			if (nums[j] > nums[j + 1]) {
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return nums;
}

module.exports = bubbleSort;

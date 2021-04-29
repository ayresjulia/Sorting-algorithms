/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot (arr, left = 0, right = arr.length - 1) {
	const swap = (arr, i, j) => {
		[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
	};

	let pivot = arr[left];
	let swapIdx = left;
	for (let i = left + 1; i <= right; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, left, swapIdx);
	return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort (arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);

		quickSort(arr, left, pivotIdx - 1);

		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

module.exports = { quickSort, pivot };

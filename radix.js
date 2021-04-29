function getDigit (num, idx) {
	const foundNum = String(num)[String(num).length - 1 - idx];
	return foundNum === undefined ? 0 : parseInt(foundNum);
}

function digitCount (arr) {
	if (arr.length > 1) {
		let res = Math.max(...arr).toString().length;
		return parseInt(res);
	} else {
		let res = arr.toString().length;
		return parseInt(res);
	}
}

function radixSort (arr) {
	let maxLength = digitCount(arr);

	for (let i = 0; i < maxLength; i++) {
		let buckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < arr.length; j++) {
			let num = getDigit(arr[j], i);

			if (num !== undefined) buckets[num].push(arr[j]);
		}
		arr = buckets.flat();
	}
	return arr;
}

module.exports = { radixSort, getDigit, digitCount };

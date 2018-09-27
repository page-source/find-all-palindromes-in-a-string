const findPalindromes = (str = '', minLengthOfPalindrome = 3) => {
	for(let i = 0; i < str.length - minLengthOfPalindrome + 1 ; i++) {
		let subStr = '';
		for (let j = i; j < str.length - minLengthOfPalindrome + 1; j++) {
			subStr = str.substring(i , j + minLengthOfPalindrome);
			isPalindrome(subStr);
		}
	}
  }

const isPalindrome = subStr => {
	var subPalin = subStr.split('').reverse().join('');
	if(subStr === subPalin) {
		console.log(subStr);
	}
}

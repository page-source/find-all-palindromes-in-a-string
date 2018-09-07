# Find all palindromes in a string
#### All palindromes in a string with minimum length of a palindrome to be given by User.

This repository deals with finding all palindromes in a string. The minimum length of desried palindromes can be set by user. If 
user doesn't set any length ,the default minimum of any palindrome will be set to 3.

Examples - Let's say our function name is **findPalindromes** which accepts two parameters - one string & desried minimum length of palindrome.

- findPalindromes('level' , 5);   //*outputs level*
- findPalindromes('level' , 4);   //*outputs level*
- findPalindromes('level' , 3);   //*outputs level , eve*
- findPalindromes('level' , 2);   //*outputs level , eve*


You get the idea probably!


#### Here's my code for finding all palindromes in a string-

```
const findPalindromes = (str = '', minLengthOfPalindrome = 3) => {
	for(i = 0; i < str.length - minLengthOfPalindrome + 1 ; i++) {
		let subStr = '';
		for (j = i; j < str.length - minLengthOfPalindrome + 1; j++) {
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
```

Happy Coding!

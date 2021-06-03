---
title: "Essential javascript string methods"
date: "2021-05-27"
---

### The `.length()` _string_ method used for? #flashcard
Calling `.length()` on a string will return the number of characters that the string contains. 
```Javascript
const str = 'this string has 29 characters';
console.log(str.length) 
// => 29
```
Since `length` counts code _units_ instead of _characters_, if you want to get the number of characters you need something like this: 
```Javascript
function getCharacterLength (str) {
  // The string iterator that is used here iterates over characters,
  //  not mere code units
  return [...str].length;
}
console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3
// While not recommended, you could add this to each string as follows:
Object.defineProperty(String.prototype, 'charLength', {
  get () {
    return getCharacterLength(this);
  }
});
console.log('A\uD87E\uDC04Z'.charLength); // 3
```
Assigning to length
```Javascript
let myString = "bluebells";
// Attempting to assign a value to a string's .length property has no observable effect.
myString.length = 4;
console.log(myString);
// expected output: "bluebells"
console.log(myString.length);
// expected output: 9
```
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
<!--ID: 1619111282036-->

---

### What is the `.trim()` _string_ method used for? #flashcard 
The `trim()` function removes white space from the _beginning_ and _end_ of a string. 
🧠 You will find yourself using this one most often when processing the string of a _user input field_ 
=> It is easy to accidentally add spaces, and this 👆 ensures you handle the relevant characters. 
```Javascript
const str = '     the secret to life is 42         ';
console.log(str.trim()) 
// => "the secret to life is 42"
```
Running the following code before any other code will create `trim()` if it's not natively available.
```Javascript
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```
<!--ID: 1619111282057-->

---

### What is the `includes()` _string_ method used for? #flashcard 
The `includes()` function determines if a sub-string is contained in a larger string and returns `true` or `false`. 
💡 This has many applications, but one common-use case is for _string matching for searching/parsing_. 
```Javascript
const author = 'George Orwell';
cont userSearchTerm1 = 'George';
const userSearchTerm2 = 'Douglas';
console.log(author.includes(userSearchTerm1)); 
// true
console.log(author.includes(userSearchTerm2)); 
// false
```
Example 2: 
```Javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
```
The `includes()` method is case sensitive. For example, the following expression returns `false`:
```Javascript
'Blue Whale'.includes('blue')  // returns false
```
<!--ID: 1619111282073-->

---

### What is the `indexOf()` _string_ method used for? #flashcard 
The function `indexOf()` returns the index of the sub-string within the string. If the sub-string  is not contained in the original string, it will return `-1`.
👀 Before `includes()` was introduced to the JavaScript spec, `indexOf()` was the primary way you would check if a sub-string existed in a string. 
Example 1: 
```JavaScript
const author = 'George Orwell';
const userSearchTerm1 = 'George';
const userSearchTerm2 = 'Douglas';
console.log(author.indexOf(userSearchTerm1)); 
// true
console.log(author.indexOf(userSearchTerm2)); 
// false
```
The common pattern for `indexOf()` which mimics the behavior of `includes()` which is to check if the index is greater than -1:
```JavaScript
const author = 'George Orwell';
cont userSearchTerm` = 'Orwell';
const stringIncludesSubstring = author.indexOf(userSearchTerm) > -1;
// true
if (stringIncludesSubstring) {
	console.log('We found a matching author');
}
```
Example 3: 
```Javascript
const str = 'Brave new world'
console.log('Index of first w from start is ' + str.indexOf('w'))   // logs 8
console.log('Index of "new" from start is ' + str.indexOf('new'))   // logs 6
```
<!--ID: 1619111282089-->

---

### What is the `.toUpperCase()` _string_ method used for? #flashcard 
The `toUpperCase()` function returns a string with all upper case letters. 
```Javascript
const str = 'We are some small letters that want to be big';
console.log(str.toUpperCase());
// WE ARE SOME SMALL LETTERS THAT WANT TO BE BIG"
```
Conversion of non-string `this` values to strings
```Javascript
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});
const b = String.prototype.toUpperCase.call(true);
// prints out 'ABCDEF TRUE'.
console.log(a, b);
```
<!--ID: 1619111282106-->


---

### What is the `.toLowerCase()` _string_ method used for? #flashcard 
The `toLowerCase()` function returns a string with all lower case letters. 
```Javascript
const str = 'This has BIG LETTERS. They want to all be small.';
console.log(str.toLowerCase());
// "this has big letters. they want to all be small."
```
<!--ID: 1619111282121-->


---

### What is the `.replace()` _string_ method used for? #flashcard 
The `replace()` function is called on a string and will return a string with a `pattern` replaced by a `replacement` string. It takes either a regex or a string as the `pattern`. 
🧠 With a regex you can globally replace all matches(using the `g` option), but with a string it will only replace the first occurrence. 
```Javascript
const str = 'Hello world! My name is also world. How funny.';
const stringPattern = 'world';
const regexPattern = /world/gi;1
const replacement = 'gitconnected';
console.log(str.replace(stringPattern, replacement));
// returned output: "Hello gitconnected! My name is also world. How funny."
console.log(str.replace(regexPattern, replacement));
// returned output: "Hello gitconnected! My name is also gitconnected. How funny."
```
👀 In the example 👆 , you'll notice that `world` is replaced only once in the _first call_ since it uses a string pattern. 
Example 2: Switching words in a string
```Javascript
let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
```
Example 3: Replacing a Fahrenheit degree with its Celsius equivalent
```Javascript
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```
<!--ID: 1619111282137-->

---

### What is the `.slice()` _string_ method used for? #flashcard 
The `slice()` method will extract a section of a string based on the index supplied and return it as a new string. 
🧠 This is useful when you know the structure of a string and want to retrieve a certain portion, or it can be used with the `indexOf`  method to find the index of the first occurrence of a sub-string and use that as a reference point for slicing. 
```Javascript
const str1 = 'User input: Hello there friends!';
console.log(str1.slice(12));
// "Hello there friends!"
const str2 = 'Random characters fjfjdjdjd posted by-gitconnected';
const usernamePrefixIndex = str2.indexOf('-') + 1;
// Account for character itself with + 1
const username = str2.slice(usernamePrefixIndex);
console.log(username);
// "gitconnected"
```
1. `slice()` takes the beginning index as the first parameter and an optional ending index as the second parameter - `str.slice(beginIndex[,endIndex])`. 
2. If no ending index is supplied, it slices to the end of the string starting with your `beginIndex`. 
3. If a negative `beginIndex` is used, it will slice _backwards_ from the end of the string. 
```Javascript
let str = 'The quick red fox jumped over the lazy dog\'s back.';
console.log(str.slice(30));
// expected output: "the lazy dog's back."
console.log(str.slice(4, 17));
// expected output: "quick red fox"
console.log(str.slice(-5));
// expected output: "back"
console.log(str.slice(-11, -6));
// expected output: "dog's"
```
Example 3 => Using `slice()` to create a new string
```Javascript
let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""
```
<!--ID: 1619111282153-->

---

### What does the `.split()` _string_ method do? #flashcard 
The `split()` method takes a `separator` which you want to split apart the string on, and returns an array of strings. 
🧠 This is useful when you know your string uses a certain character to separate data (like white space => ' ' ), or if you want to operate on specific sub-strings individually. 
```Javascript
const str = 'The quick brown fox jumped over the lazy dog.';
const words = str.split(' ');
const wordCount = words.length;
console.log(words); 
// ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog."]
console.log(wordCount); 
// 9
const strColumns = 'username:firstName:lastName:email';
const columnIds = strColumns.split(':');
console.log(columnIds);
// ["username", "firstName", "lastName". "email"]
```
Example 2 => Reversing a String using `split()`
⚠️ Not a robust way to reverse a string
```Javascript
const str = 'asdfghjkl'
const strReverse = str.split('').reverse().join('')
// 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied
```
It doesn't work if the string contains [[grapheme clusters]], even when using a unicode-aware split. 
```Javascript
const str = 'résumé'
const strReverse = str.split(/(?:)/u).reverse().join('')
// => "́emuśer"
```
**Bonus:** use `===`operator to test if the original string was a palindrome.
<!--ID: 1619111282170-->

---

### What does the `.repeat()` _string_ method do? #flashcard 
The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
```Javascript
const str = "Hello World 😎. ";
console.log(str.repeat(3));
// "Hello World 😎 . Hello World 😎. Hello World 😎. "
```
Using `repeat()`
```Javascript
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError
({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)
```
Happy lyrics
```Javascript
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
```
<!--ID: 1619111282185-->

---

### What does the `.match()` _string_ method do? #flashcard 
The `match()` method retrieves the matches when matching a `string` against a `regular expression`. 
```Javascript
let paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
let regex = /[A-Z]/g;
let found = paragraph.match(regex);
console.log(found);
// Array ["T", "I"]
```
This 👆 example searches our string for _all_ capital letters. It returns an _array_ of string for the values that match the regex.
Example 2: In the following example, `match()` is used to find '`Chapter`' followed by 1 or more numeric characters followed by a decimal point and numeric character 0 or more times. The regular expression includes the `i` flag so that upper/lower case differences will be ignored.
```Javascript
const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);
console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]
// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.
```
Example 3: Using global and ignore case flags with `match()`. All letters `A` through `E` and `a` through `e` are returned, each its own element in the array.
```Javascript
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);
console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```
<!--ID: 1619111282202-->

---

### What does the `.charAt()` _string_ method return? #flashcard 
The `charAt()` function returns the string character at a given index. 
Example 1
```Javascript
const str = "Hello World";
console.log(str.charAt(0));
// "H"
console.log(str.charAt(8));
// "r"
```
Example 2
```Javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q">)
```
Example 3
```Javascript
let anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default
console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```
<!--ID: 1619111282217-->

---

### What does the `.charCodeAt()` _string_ method return? #flashcard 
The `charCodeAt()` method returns the unicode of the character at a specified index in a string. This is a UTF-16 cone integer between 0 and 65535.
Example 1: 
```Javascript
const str = "Hello World 😎 ";
console.log(str.charCodeAt(0));
// 72
console.log(str.charCodeAt(8));
// 114
console.log(str.charCodeAt(12));
// 55357
```
Example 2: 
```Javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q">)
```
Example 3: Fixing `charCodeAt()` to handle [[non-Basic-Multilingual-Plane characters]] if their presence earlier in the string is unknown. 
```Javascript
function fixedCharCodeAt(str, idx {
	// ex.fixedCharCodeAt('\uD800\uDC00', 0); //65536
	// ex.fixedCharCodeAt('\uD800\uDC00', 1 //false
	idx = idx || 0;
	let code = str.charCodeAt(idx);
	let hi, low;
	// High surrogate (could change last hex to 0xDB7F to treat high private 	
	surrogates as single characters)
	if (0xD800 <= code && code <= 0xDBFF) {
		hi = code;
		low = str.charCodeAt(idx + 1);
		if (isNaN(low)) {
		throw 'High surrogate not followed by ' + 'low surrogate in fixedCharacterCodeAt()';
		}
		return (
		(hi - 0xD800) * 0x400) + 
		(low - 0xDC00) + 0x10000;
	}
	if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
	// We return false to allow loops to skip this iteration since it should have already handled high surrogate above in previous iteration
	return false;
	// hi = str.charCodeAt(idx - 1);
	// low = code;
	// return ((hi - 0xD800) * 0x400) + 
			(low - 0xDC00) + 0x10000;
	}
	return code;
}
```
<!--ID: 1619111282233-->


---

### What does the `concat()` string method do? #flashcard 
The `concat()` method concatenates the string arguments to the calling string and returns a new string. Strings in JavaScript are **immutable**, so `concat()` doesn't modify the string in place.
Syntax
```Javascript
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
```
Example 1: 
```Javascript
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"
console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
```
Example 2
```Javascript
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.
let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"
"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```
The downside of using `concat()` is that you must be certain `str1` is a string. You can pass non-string parameters to `concat()`, but you will get a TypeError if `str == null`.
Example 3
```Javascript
// If `str` is null or not a string, can't use `concat()`
const str = 'Values: ';
// 'Values: 42 null'
str.concat(42, ' ', null);
```
The `concat()` function is rarely used because it has more error cases than the `+` operator. For example, you would get unexpected behavior if you call `concat()` on a value that [happens to be an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat). You should use `+` instead of `concat()` unless you have a very good reason.
If you must use `concat()`, it is usually best to call it on an empty string:
```Javascript
''.concat('Hello', ' ', 'World');
```
<!--ID: 1621551106369-->



---

### What does the `search()` string method do? #flashcard 
The `search()` method executes a search for a match between a regular expression and a _string_ object.
```Javascript
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
```
Example 2: 
```Javascript
let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation
```
<!--ID: 1621551106392-->



--- 

### What does the `.substr()` string method do? #flashcard 
The `substr()` method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
```Javascript
let aString = 'Mozilla';
console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```
<!--ID: 1621551106418-->



---


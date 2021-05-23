---
title: "Array methods"
date: "2021-05-15"
---

TARGET DECK
JavaScript

### What _array methods_ can be used to [add/remove] elements? #flashcard 
- `push(...items)` => adds items to the end
- `pop()` => extracts an item from the end
- `shift()` => extracts an item from the beginning
- `unshift(...items)` => adds items to the beginning
- `splice(pos, deleteCount, ...items)` => at index `pos` deletes `deleteCount` elements and inserts `items`.
- `slice(start, end)` => creates a _new_ array, copies elements from index `start` till `end` (not inclusive) into it. 
- `concat(...items)` => returns a new array: copies all members of the current one and adds `items` to it. If any of `items` is an array, then its elements are taken. 
<!--ID: 1619637965472-->


---

### What _array methods_ can be used to [search] among elements? #flashcard 
- `indexOf/lastIndexOf(item, pos)` => look for `item` starting from position `pos`, return the index or `-1` if not found.
- `includes(value)` => returns `true` if the array has `value`, otherwise `false`.
- `find/filter(func)`=> filter elements through the function, return first/all values that make it return `true`.
- `findIndex` => like `find`, but returns the _index_ instead of a value.
<!--ID: 1619637965492-->


---

### What _array methods_ can be used to [iterate] over elements? #flashcard 
- `forEach` => calls `func` for every element, does not return anything.
- `for`
- `for...of`
<!--ID: 1619637965508-->


---

### What _array methods_ can be used to [transform] the array? #flashcard 
- `map(func)` => creates a _new_ array from results of calling `func` on every element. 
- `sort(func)` => sorts the array in-place, then returns it.
- `reverse()` => reverses the array in-place, then returns it
- `split/join` => convert a string to array and back
- `reduce/reduceRight(func, initial)` => calculate a single value over the array by calling `func` for each element and passing an intermediate result between the calls. 
<!--ID: 1619637965524-->


---

### What is the `splice` array method used for? #flashcard
We can use the `splice` array method to **delete** an element from the array. 
The `splice` method is a "swiss army knife" for arrays. It can do everything: insert, remove and replace elements. 
The syntax is: 
```
arr.splice(start[, deleteCount, elem1, ..., elemN])
```
It modifies `arr` starting from the index `start`, removes `deleteCount` elements and then inserts `elem1, ..., elemN` in their place and returns the array of **removed elements.**
```Javascript
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0,2);
alert( removed )l // "I", "study" <-- array of removed elements
```
Here are some examples of `splice` uses: 
- Deletion
```Javascript
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]
```
- Inserting elements
```Javascript
let arr = ["I", "study", "JavaScript"];
//from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert(arr); // "I", "study", "complex", "language", "JavaScript"
```
In order to insert elements _without_ removals, we set the `deleteCount` = 0.
<!--ID: 1619637965540-->

---

### What is the `slice` array method used for? #flashcard 
The `slice` method is very similar to `splice`, it returns a _new_ array copying to it all items from index `start` to `end` (not inclusive). 
💡 Both `start` and `end` can be negative, in which case position from the end of the array is assumed. 
🧠 If we call `arr.slice()` without any arguments, it will create a copy of `arr` => often used to obtain a copy for further transformations without affecting the original array. 
```Javascript
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```
<!--ID: 1619637965556-->


---

### What is the `concat` array method used for? #flashcard 
The method `concat` creates a _new_ array that includes values from other arrays _and_ additional items.
The syntax is: 
```
arr.concat(arg1, arg2...)
```
- It accepts **any** number of arguments - either **arrays** or **values**.
- The result is a new array containing items from `arr`, then `arg1`, `arg2`, etc.
- If an argument `argN` is an array, then **all** its elements are copied. Otherwise, the argument itself is copied. 
```Javascript
let arr = [1, 2];
// create an array from: arr and [3,4]
alert ( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3, 4] and [5, 6]
alert (arr.concat( [3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3, 4], then add values 5 and 6
alert (arr.concat( [3, 4], 5, 6 )); // 1,2,3,4,5,6
```
<!--ID: 1619637965573-->


---

### What is the `forEach` array method used for? #flashcard 
The `forEach` method runs a function for every element of the array. 
The syntax is:
```Javascript
arr.forEach(function(item, index, array) {
	// ... do something with item
});
```
For example, this shows each element of the array
```Javascript
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```
<!--ID: 1619637965590-->


---

### What are the `indexOf`/`lastIndexOf` and `includes` array methods used for? #flashcard 
The methods `indexOf`, `lastIndexOf` and `includes` have the same syntax and do essentially the same as their string counterparts, but operate on **items** instead of characters: 
- `arr.indexOf(item, from)` => looks for `item` starting from index `from`, and returns the index where it was found, otherwise `-1`.
- `arr.lastIndexOf(item, from)` => same, but looks from right to left.
- `arr.includes(item, from)` => looks for `item` starting from index `from`, returns `true` if found. 
For example
```Javascript
let arr = [1, 0, false];
alert ( arr.indexOf(0) ); // 1
alert ( arr.indexOf(false) ); // 2
alert ( arr.indexOf(null) ); // -1
alert ( arr.includes(1) ); // true
```
🧠  These methods use the `===` comparison. So if we look for `false`, it finds **exactly** `false` and not the zero. 
⚠️ A very minor difference of `includes` is that it **correctly** handles `NaN`, unlike `indexOf/lastIndexOf`:
```Javascript
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
alert( arr.includes(NaN) ); // true (correct)
```
<!--ID: 1619637965606-->


---

### What are the `find` and `findIndex` array methods used for? #flashcard 
The `find` and `findIndex` array methods are used to find an object that meets a _specific condition_.
The syntax is: 
```Javascript
let result = arr.find(function(item, index, array) {
	// if true is returned, item is returned and iteration is stopped
	// for falsy scenario returns undefined
});
```
The function is called for elements of the array, one after another: 
- `item` is the element
- `index` is the index
- `array` is the array itself
For example
```Javascript
let users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"}, 
	{id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
```
🧠 In real life arrays of objects is a common thing, so the `find` method is very useful.
```Javascript
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```
👆 This is an example of `indexOf`
<!--ID: 1619637965623-->

---

### What is the `filter` array method used for? #flashcard 
The `find` method looks for a single(first) element that makes the function return `true`, if there is more than one element that makes the function return `true`, we can use the `filter` array method.  
The syntax is similar to `find`, but `filter` returns an array of a _all_ matching elements: 
```Javascript
let results = arr.filter(function(item, index, array) {
	// if true item is pushed to results and the iteration continues
	// returns empty array if nothing found
});
```
For instance
```
let users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"}, 
	{id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
```
<!--ID: 1619637965639-->
---

### What is the `map` array method used for? #flashcard 
The `map` array method calls the function for each element of the array and returns the array of results. 
The syntax is: 
```Javascript
let result = arr.map(function(item, index, array) {
	// returns the new value instead of item
});
```
For instance, here we transform each element into its length: 
```Javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5, 7, 6
```
<!--ID: 1619637965655-->


---

### What is the `sort(fn)` array method used for? #flashcard 
The call to `arr.sort()` sorts the array _in place_, changing its element order.
It **also** returns the sorted array, but the returned value is usually ignored, as `arr` itself is modified. 
⚠️ **Items are sorted as strings by default**
To use your own sorting order, supply a function as the argument of `arr.sort()`
```Javascript
function compare(a, b) {
	if ( a > b ) return 1; // if the first value  is greater than the second
	if ( a == b ) return 0; // if values are equal
	if ( a < b ) return -1; // if the first value is less than the second
}
```
🧠 We can use an arrow function to make our function neater
```Javascript
arr.sort( ( a, b ) => { a - b} );
```
🧠  Use `localeCompare` for strings => For many alphabets, it's better to use `str.localeCompare` method to correctly sort letters. 
For example
```Javascript
let countries = ['Österrreich', 'Andorra', 'Vietnam'];
alert( countries.sort( ( a, b ) => a > b ? 1 : -1 ) ); //Andorra, Vietnam, Österreich
alert ( countries.sort( ( a, b ) => a.localeCompare(b) ) ); // Andorra, Österreich, Vietnam
```
<!--ID: 1619643608190-->


---

### What is the `reverse` array method used for? #flashcard 
The method `arr.reverse` reverses the order of elements in `arr`
For example
```Javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5, 4, 3, 2, 1
```
It also returns the array `arr` after the reversal
<!--ID: 1619643608226-->


---

### What are the `split` and `join` array methods used for? #flashcard 
The `split` array method splits a string into an array by a given delimiter. 
For example
```Javascript
let names = 'Bilbo', 'Gandalf', 'Nazgul';
let arr = names.split(', ');
for ( let name of arr ) {
	alert( `A message to ${name}.` ); // A message to Bilbo (and other names)
}
```
🧠 The `split` method has an optional second numeric argument => a _limit_ on the array length. If provided, the extra elements are ignored. 
For example
```Javascript
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf
```
The `join` array method does the reverse to `split`. It creates a string of `arr` items.
For example
```Javasript
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string
alert( str ); // Bilbo;Gandalf;Nazgul
```
<!--ID: 1619643608258-->


---

### What are the `reduce`/`reduceRight` array methods used for? #flashcard 
The `reduce` and `reduceRight` are used to calculate a single value based on the array passed as an argument. 
The syntax is
```
let value = arr.reduce(function(accumulator, item, index, array) {
	// ...
}, [ initial ] );
```
The function is applied to all array elements one after another and the result is "carried" on to the next call. 
For example
```
let arr = [ 1, 2, 3, 4, 5 ];
let result = arr.reduce( ( sum, current ) => sum + current, 0 );
alert( result ); // 15
```
The calculation flow:
![[Screen Shot 2021-04-28 at 1.31.09 PM.png]]
Calculation flow in the form of a table where each row represents a function call on the next array element
![[Screen Shot 2021-04-28 at 1.32.08 PM.png]]
The method `reduceRight` does the same, but goes from right to left.
<!--ID: 1619643608287-->


---

### Arrays are objects, so you can't use `typeof` to distinguish one from another. What array method is used to distinguish between an array and an object? #flashcard 
The `isArray` array method returns `true` if the `value` is an array, and `false` otherwise.
```
alert( Array.isArray({}) ); // false
alert( Array.isArray([])); // true
```
<!--ID: 1619643608317-->


---

### What is the `thisArg` array method? #flashcard 
Almost all array methods that call functions (i.e. `find, filter, map`) with the exception of `sort` accept and additional parameter `thisArg`.
Here's the full syntax
```
arr.find( func, thisArg );
arr.filter( func, thisArg );
arr.map( func, thisArg );
// ...
// thisArg is the optional last argument
```
The value of `thisArg` parameter becomes `this` or `func`
For example, here we use a method of `army` object as a filter, and `thisArg` passes the context:
```
let army = {
	minAge: 18,
	maxAge: 27,
	canJoin(user) {
		return user.age >= this.minAge && user.age < this.maxAge;
	}
};
let users = [
	{ age: 16 },
	{ age: 20 },
	{ age: 23 },
	{ age: 30 }
];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```
👆 If we use `users.filter(army.canJoin)`, then `army.canJoin` would be called as a standalone function, with `this = undefined`, leading to an error. 
A call to `users.filter(army.canJoin, army)` can be replaced with `users.filter( user => army.canJoin(user) ).` 
<!--ID: 1619643608358-->
---

### Which array methods modify the array itself? #flashcard 
The `sort`, `reverse` and `splice` methods. 
<!--ID: 1619643608387-->

---

### What is the `fill` array method used for? #flashcard 
The `fill` array method fills the array with a repeating `value` from index `start` to `end`. 
The syntax is:
```
arr.fill(value, start,end)
```
<!--ID: 1619643915464-->


---

### What is the `copyWithin` array method used for? #flashcard 
The `copyWithin` array method copies its elements from position `start` till position `end` into _itself_, at position `target` 
⚠️ overwrites existing array
<!--ID: 1619643915492-->


---

### What do the `flat`/`flatMap` array methods do? #flashcard 
The `flat` and `flatMap` array methods create a new flat array from a multi-dimensional array. 
<!--ID: 1619643915520-->


---

Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

### What does the `pop` array method do? #flashcard 
`arr.pop()` => extracts an item from the end of the array. 
```Javascript
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```
<!--ID: 1621441679692-->


---

### What does the `shift` array method do? #flashcard 
`arr.shift()` => extracts an item from the beginning of the array. 
```Javascript
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```
<!--ID: 1621441679710-->


---

### What does the `push` array method do? #flashcard 
`arr.push(...items)` => adds items to the end of the arrays
```Javascript
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```
<!--ID: 1621441679724-->


---

### What does the `unshift` array method do? #flashcard 
`arr.unshift(...items)` => adds items to the beginning of the array.
```Javascript
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```
<!--ID: 1621441679737-->


---

### What does the `every` array method do? #flashcard 
The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
The `every` method executes the provided `callbackFn` function once for each element present in the array until it finds the one where `callbackFn` returns a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value. If such an element is found, the `every` method immediately returns `false`. Otherwise, if `callbackFn` returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value for all elements, `every` returns `true`.
```Javascript
	const isBelowThreshold = (currentValue) => currentValue < 40;
	const array1 = [1, 30, 39, 29, 10, 13];
	console.log(array1.every(isBelowThreshold));
	// expected output: true
```
🧐 **Syntax** => **Arrow function**🧠
```Javascript
	every((element) => { ... } )
	every((element, index) => { ... } )
	every((element, index, array) => { ... } )
```
🧐 **Syntax** => **Callback function**🧠
```Javascript
	// Callback function
	every(callbackFn)
	every(callbackFn, thisArg)
```
🧐 **Syntax** => **Callback function**🧠
```Javascript
	// Inline callback function
	every(function callbackFn(element) { ... })
	every(function callbackFn(element, index) { ... })
	every(function callbackFn(element, index, array){ ... })
	every(function callbackFn(element, index, array) { ... }, thisArg)
```
<!--ID: 1621441679752-->


---

### How would you test whether all elements in an array are bigger than 10? #flashcard 
Using the `every` array method
```Javascript
	function isBigEnough(element, index, array) {
  		return element >= 10;
	}
	[12, 5, 8, 130, 44].every(isBigEnough);   // false
	[12, 54, 18, 130, 44].every(isBigEnough); // true
```
[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.
```Javascript
	[12, 5, 8, 130, 44].every(x => x >= 10);   // false
	[12, 54, 18, 130, 44].every(x => x >= 10); // true
```
<!--ID: 1621441679766-->


---

### Which array methods accept a `callback function` as a parameter (i.e. they're asynchronous) #flashcard 
- `find/filter(func)`
- `every(callbackFn)`
```Javascript
every(callbackFn)
every(callbackFn, thisArg)
```
- `map(fn)`
```Javascript
let result \= arr.map(function(item, index, array) { // returns the new value instead of item });
```
- `sort(fn)` => **The items are sorted as strings by default.**
```Javascript
let arr \= \[ 1, 2, 15 \]; // the method reorders the content of arr arr.sort(); alert( arr ); // _1, 15, 2_
```
<!--ID: 1621441679779-->


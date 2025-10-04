1. What is js?

“JavaScript is a lightweight, client-side programming language used to make web pages interactive and dynamic.. It can handle events, manipulate the DOM, and works alongside HTML and CSS to create dynamic web applications
→  Client-side language → Runs in the browser (no need for server).
→ Lightweight & fast → Executes directly in the browser.
→ JavaScript (JS) is a programming language used to make web pages interactive and dynamic.
→ HTML → gives structure.
→ CSS → gives style.
→ JavaScript → adds behavior (Example: clicking a button, showing/hiding content, animations, form validation.).


2. What are the different data types in JavaScript?

“JavaScript has two types of data: Primitive (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and Non-Primitive/Reference (Object, Array, Function). Primitive types store  immutable & single values, while non-primitive store mutable, collections or complex structures.”

→ “Mutable means the data can be changed after creation, like objects and arrays. Immutable means it cannot be changed, like strings and numbers.”


3. What is the difference between == and ===?

“== checks equality after converting types (loose equality), while === checks value and type exactly (strict equality). Always use === because avoid unexpected results.”

				Ex- == (loose equality)->  5 == "5";   // true → string converted to number   | null == undefined; // true


4.  What are truthy and falsy values in JavaScript?

“Truthy values in JavaScript are values that evaluate to true in a boolean context, while falsy values evaluate to false. Falsy values include false, 0, "", null, undefined, NaN, and 0n. Everything else is truthy.”

→ Truthy → Values that evaluate to true.
→ Falsy → Values that evaluate to false.
						
				Ex-	if(0){
 					 console.log("Truthy");
					} else {
  					console.log("Falsy");  // Output: Falsy
					}


5.  Why Objects & Arrays are Always Truthy

“Objects, arrays, and functions are always truthy because they are reference types. Even if empty, they exist in memory, so in a boolean context, they are considered true.”
				EX-	if([]) {
					 console.log("Truthy");   // Output: Truthy
					}
					if(function(){}) {
					 console.log("Truthy");   // Output: Truthy
					}

6. How does type coercion work?

“Type coercion in JavaScript is when the language automatically converts a value from one type to another, like string to number or boolean to number. It can be implicit (automatic) or explicit (manual using functions like Number(), String(), Boolean()).”	
											EX-
→ Implicit Type Coercion (Automatic):-
    String + Number → converts number to string   |   Number - String → converts string to number |   Boolean in arithmetic → converts to number
→ Explicit Type Coercion (Manual):-
    Comparisons (==) → converts types	|    String(10);    // converts number to string → "10"   |     Boolean(0);    // converts number 0 to false					

7.What is the difference between var, let, and const?

“var is function-scoped, can be re-declared, and hoisted with undefined. let and const are block-scoped, not re-declarable, and have temporal dead zone. let allows re-assignment, but const does not allow.”
uses:-var- to use old js(avoid) , let - use when value changes , const - use for constant / fixed


8.var vs let inside loops (with setTimeout):-

Using var in loops with async functions causes issues because var is function-scoped, so all callbacks share the same variable. let is block-scoped, so each iteration gets its own variable, and the callbacks print expected values.”

“Async function causes issue” ka matlab:-
Jab hum setTimeout, setInterval, ya fetch jaise asynchronous functions use karte hain,
Ye turant execute nahi hote. Ye sirf “schedule” ho jaate hain, aur baad me chalenge.

EX-	for (let i = 0; i < 3; i++) {									for (let i = 0; i < 3; i++) {						
 	 setTimeout(() => console.log(i), 1000);						 setTimeout(() => console.log(i), 1000);
	} o/p-3 3 3													}o/p-0 1 2


9.What is hoisting in JavaScript?

“Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before execution. Variables declared with var are hoisted and initialized with undefined. let and const are hoisted too but remain in the Temporal Dead Zone. Function declarations are fully hoisted, but function expressions are not.”

“Hoisting ka matlab hai JS pehle declarations ko top par le jaata hai. var ko undefined ke saath hoist karta hai. let aur const bhi hoist hote hain but wo TDZ me rehte hain jab tak declare na ho. Function declarations fully hoist hote hain, lekin function expressions nahi.”
EX-		console.log(a); // undefined			console.log(b); // ❌ ReferenceError		
		var a = 10;							let b = 20;

		-function decleartion are fully hoist but function expression not


10. Temporal Dead Zone (TDZ) Kya hai?

→ Jab variable let ya const se declare kiya jata hai → uska scope start ho jaata hai line ke upar se hi,
→ Lekin usko tab tak access nahi kar sakte jab tak actual declaration line execute na ho.
→ Ye “beech ka zone” hota hai jisme variable exist karta hai par use access karne par ReferenceError aata hai.
→ Isko hi Temporal Dead Zone (TDZ) bolte hain.



11. Explain block scope vs function scope.

→ Function Scope → Variable works only inside the function. (var)
→ Block Scope → Variable works only inside { } block (like if, for). (let, const)
EX- 	 if (true) {
 	 var a = 10;   // function scope
	  let b = 20;   // block scope
	}
	console.log(a); // ✅ 10 (accessible)
	console.log(b); // ❌ Error (not accessible)


12. What is the difference between function declaration and function expression?
Function Declaration:-

→ A named function defined with the function keyword.
→ Hoisted → you can call it before it is defined.
Function Expression:-
→ A function assigned to a variable (can be named or anonymous).
→ Not hoisted → you cannot call it before definition.


13.  What are arrow functions? How do they handle this differently?

“Arrow functions are a shorter way to write functions. Main difference: normal functions have their own this, but arrow functions don’t — they use this from outside (parent scope).”
Ex-	const obj1 = {
	  value: 10,
	  normal: function() {
	    console.log(this.value); // ✅ 10 (this = obj1)  }};     obj1.normal(); //   o/p-   10
	const obj2 = {
	  value: 20,
	  arrow: () => {
  	  console.log(this.value); // ❌ undefined (this not from obj2)  }};      obj2.arrow();  // o/p-   undefined


14. What is string?
“A string in JavaScript is a sequence of characters used to represent text. It can be written in single quotes, double quotes, or backticks (template literals). Strings are immutable in JavaScript.”

let name = "Rahul";
let greeting = `Hello, ${name}!`; 
console.log(greeting); // "Hello, Rahul!"

15. Are strings mutable or immutable in JavaScript?

Answer: Strings are immutable. Once created, their value cannot be changed.

let str = "Hello";
str[0] = "h";  
console.log(str); // "Hello" (not changed)

16. Difference between slice(), substring(), and substr()?
ANS:- 1. slice(start, end)

-> Extracts part of the string from start index to end index (not included).
-> Supports negative indexes.
-> If end is not given → extracts till the end.(4) all print after 4 
Ex :-
let str = "JavaScript";
console.log(str.slice(0, 4));   // "Java"
console.log(str.slice(-6, -3)); // "Scr"  if end < start automatically swap

2. substring(start, end)

-> Similar to slice(), extracts from start to end (not included).
-> Does NOT support negative indexes → if used, it treats them as 0.
-> If start > end, it swaps them automatically.
Ex :-
console.log(str.substring(0, 4));   // "Java"
console.log(str.substring(4, 0));   // "Java" (swaps values)

3. substr(start, length)

-> Extracts part of the string starting from start and for given length.
=> Supports negative start index (counts from end).
=> ⚠️ Deprecated → avoid using in new code.
Example:-
console.log(str.substr(0, 4));   // "Java" (start=0, length=4)
console.log(str.substr(-6, 3));  // "Scr" (start 6 from end, length=3)

17. Difference between split() and join()?

-> split() → converts string → array.(based on a given seperator)
let s = "a,b,c";
console.log(s.split(","));  // ["a", "b", "c"]

-> join() → converts array → string.(based on a given seperator)
let arr = ["x", "y", "z"];
console.log(arr.join("-")); // "x-y-z"

//oject

1. Dot Notation (obj.key)
Syntax: objectName.propertyName
Simple, clean, and most commonly used.
Property name must be a valid identifier (no spaces, no -, can’t start with a number).
EX-
let person = { name: "Alice", age: 25 };
console.log(person.name); // "Alice"
console.log(person.age);  // 25

2. Bracket Notation (obj["key"])
Syntax: objectName["propertyName"]
Property name is given as a string (or expression that evaluates to a string).
Useful when: The key is stored in a variable.
The key is not a valid identifier (e.g., contains spaces, starts with a number, has -).
EX-
let person = { name: "Alice", "favorite-color": "blue" };

console.log(person["favorite-color"]); // "blue"

let key = "name";
console.log(person[key]); // "Alice"

- Use dot notation when property names are simple.
- Use bracket notation when keys are dynamic or not valid identifiers.\


3. in operator

Checks if a property exists in the object or its prototype chain.
Returns true even if the property is inherited.
EX-
let person = { name: "Alice", age: 25 };
console.log("name" in person);   // true
console.log("toString" in person); // true (inherited from Object.prototype)

4. hasOwnProperty()

Checks if the property exists directly on the object itself (not inherited).
Safer if you only care about the object’s own properties.
EX-
let person = { name: "Alice", age: 25 };
console.log(person.hasOwnProperty("name"));     // true
console.log(person.hasOwnProperty("toString")); // false

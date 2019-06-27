//return true of false as to whether or not the string has proper nesting structure on ({[]})

//
const balancedBrackets = string => {
	let stack = [];
	for (let i = 0; i < string.length; i++)
		if (string[i] == '{' || string[i] == '(' || string[i] == '[')
			stack.push(string[i]);
		else if (string[i] == ']' && stack[stack.length - 1] == '[')
			stack.pop();
		else if (string[i] == '}' && stack[stack.length - 1] == '{')
			stack.pop();
		else if (string[i] == ')' && stack[stack.length - 1] == '(')
			stack.pop();

	if (stack.length == 0) return true;
	return false;
};

console.log(balancedBrackets('{}[]()')); // should print true
console.log(balancedBrackets('{(([]))}')); // should print true
console.log(balancedBrackets('{ [ ] ( ) }')); // should print true
console.log(balancedBrackets('{ [ ( ] ) }')); // should print false
console.log(balancedBrackets('(')); // should print false
console.log(balancedBrackets('{[}')); // should print false

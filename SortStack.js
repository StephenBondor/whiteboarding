// https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/SortStack

// Write a function sortStack that receives a stack of integers into ascending
// order (with largest integers on top) and returns another stack with sorted
// integers. You may use at most one additional stack to hold items, but you may
// not copy the elements into any other data structure.

class Stack {
	constructor() {
		this.storage = [];
	}

	push(item) {
		this.storage.push(item);
	}

	pop() {
		return this.storage.pop();
	}

	peek() {
		return this.storage[this.storage.length - 1];
	}

	isEmpty() {
		return this.storage.length === 0;
	}

	printContents() {
		this.storage.forEach(elem => console.log(elem));
	}
}

// WRITE CODE HERE

function sortStack(stack) {
	stack.storage.sort((a, b) => a - b);
	return stack;
}

// END WRITTEN CODE

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

sortedStack.printContents(); // should print 1, 4, 5, 6, 8, 10

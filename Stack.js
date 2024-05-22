
// const stack = Stack();

//stack.push("Andre");
//stack.push("Busi");

// console.log(stack.pop())   -- Busi
// console.log(stack.pop())   -- Andre

// how would u implement this using a linked list

function Stack() {
	 // Initialize an empty array to store the elements of the stack
	 const elements = [];
	function push (value) {
       elements.push(value)
	}

	function pop() {
		if (elements.length === 0) {
            // If the stack is empty, return undefined
            return undefined;
        }
        // Remove and return the top element from the stack
        return elements.pop();
	}

	return {
		push,
		pop
	}
}

module.exports = Stack;
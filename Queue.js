function Queue() {
     // Initialize an empty array to store the elements of the queue
	const elements = [];
	// Function to add an element to the end of the queue
	function enqueue(value) {
        elements.push(value);
	}

	function dequeue() {
		// return a value
		if (elements.length === 0) {
            // If the queue is empty, return undefined
            return undefined;
        }
        // Remove and return the first element from the queue
        return elements.shift();
	}

	// Return an object with the enqueue and dequeue functions
    return {
        enqueue,
        dequeue
    };
}
module.exports = Queue;
// const queue = Queue();

// queue.enqueue("Andre")
// queue.enqueue("Busi");

// console.log(queue.dequeue())  -- Andre
// console.log(queue.dequeue())  -- Busi
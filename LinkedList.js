
function LinkedList() {

	let startNode = null;
	let lastNode = null;
	let length = 0;

	function add(value) {
		const newNode = {
            value: value,
            next: null
        };

        if (!startNode) {
            startNode = newNode;
            lastNode = newNode;
        } else {
            lastNode.next = newNode;
            lastNode = newNode;
        }

        length++
		
	}

	function count(){
		return length;
	}

	function clear() {
		startNode = null;
        lastNode = null;
        length = 0;
	}

	function contains(value) {
		let current = startNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
	}

	function forEach(fn) {
		let current = startNode;
        while (current) {
            fn(current.value);
            current = current.next;
        }
	}

	function first() {
		if (startNode) {
            return startNode.value;
        }
        return null;
	}

	function last() {
		if (lastNode) {
            return startNode.value;
        }
        return null;
	}

	return {
		add,
		clear,
		contains,
		count,
		first,
		last,
		forEach
	}
}
module.exports = LinkedList;
// function LinkedList() {

//     let startNode = null;
//     let lastNode = null;
//     let length = 0;

//     function add(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };

//         if (!startNode) {
//             startNode = newNode;
//             lastNode = newNode;
//         } else {
//             lastNode.next = newNode;
//             lastNode = newNode;
//         }

//         length++;
//     }

//     function count(){
//         return length;
//     }

//     function clear() {
//         startNode = null;
//         lastNode = null;
//         length = 0;
//     }

//     function contains(value) {
//         let current = startNode;
//         while (current) {
//             if (current.value === value) {
//                 return true;
//             }
//             current = current.next;
//         }
//         return false;
//     }

//     function forEach(fn) {
//         let current = startNode;
//         while (current) {
//             fn(current.value);
//             current = current.next;
//         }
//     }

//     function first() {
//         if (startNode) {
//             return startNode.value;
//         }
//         return null;
//     }

//     function last() {
//         if (lastNode) {
//             return lastNode.value;
//         }
//         return null;
//     }

//     return {
//         add,
//         clear,
//         contains,
//         count,
//         first,
//         last,
//         forEach
//     }
// }

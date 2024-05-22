// do data structure work here

const Node = require('./node');


const linkedList = Node("Lebo", null);
linkedList.setNextNode(Node("Zenzele", null)); // Add a node with value "Zenzele" after "Lebo"
linkedList.setNextNode(Node("Zandile", null)); // Replace "Zenzele" with "Zandile"

//console.log(linkedList.getValue()); // Print the value of the first node, which is "Lebo"
//console.log(linkedList.getNextNode().getValue()); // Print the value of the second node, which is "Zandile"
//console.log(linkedList.getNextNode().getNextNode().getValue()); // Print the value of the third node, which is null (there is no third node)
//console.log(linkedList.getNextNode().getNextNode().getNextNode().getValue())


//this is how you know you at the end of a link list
//let currentNode = linkedList

//Traverse the linked list to find the last node
let currentNode = linkedList;

while (true){
    console.log(currentNode.getValue());
    if(currentNode.getNextNode() !== null) {
        break;
    }
    currentNode = currentNode.getNextNode();
}



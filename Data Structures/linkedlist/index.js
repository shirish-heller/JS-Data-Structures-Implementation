// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        let headNode = new Node(data, this.head);
        this.head = headNode;
    }

    size() {
        let counter = 0;
        let traversalPointer = this.head;
            while(traversalPointer) {
                counter++;
                traversalPointer= traversalPointer.next;
            }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let traversalPointer = this.head;
        while(traversalPointer.next) {
            traversalPointer = traversalPointer.next;
        }
        return traversalPointer
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        let traversalPointer = this.head;
        if(this.head == null) {
            return;
        }
        if(this.head.next == null) {
            this.head = null;
            return;
        }
        if(this.head!==null) {
            while(traversalPointer.next.next) {
                traversalPointer = traversalPointer.next;
            }
            traversalPointer.next = null;
        }

    }
    insertLast(data) {
        let newNode = new Node(data, null);
        let previousNode = this.head;
        if(previousNode == null) {
            this.head = newNode;
            return;
        }
        let nextNode = this.head.next;
        while(nextNode) {
            previousNode = nextNode;
            nextNode = nextNode.next;
        }
        previousNode.next = newNode;
    }

    getAt(n) {
        if (this.head == null) {
            return null;
        }
        let index = 0;
        let nextNode = this.head;
        while (index!==n && nextNode.next!==null) {
            nextNode = nextNode.next;
            index++;
        }
        if(index<n) {
            return null;
        } else {
            return nextNode;
        }
    }

    removeAt(n) {
        if (!this.head) {
            return;
        }

        if(n ===0) {
            this.head = this.head.next;
        }

        let previousNode = this.getAt(n-1);
        let nextNode = this.getAt(n);

        if(previousNode && nextNode) {
            previousNode.next = nextNode.next;
        }
    }

    insertAt(data, n) {
        let newNode = new Node(data, this.head);
        if(!this.head || n===0) {
            this.head = newNode;
            return;
        }

        let prevNode = this.getAt(n-1);
        if(prevNode) {
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }
        return;
    }
}


module.exports = { Node, LinkedList };

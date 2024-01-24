class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    toString() {
        return `${this.value}`
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;

    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        //here we change next* pointer of last element to our new element
        this.tail.next = newNode;
        // here we change pointer of tail to new node
        this.tail = newNode;

        return this;
    }

    find(value) {
        let currentNode = this.head;

        if(!this.head) {
            return null;
        }

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next
            }
        }

        return null;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null)  {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail?.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    insertAfter(value, afterValue) {
        if (afterValue === null) {
            return this;
        }
        const newNode = new LinkedListNode(value);
        const nodeToInsert = this.find(afterValue);

        newNode.next = nodeToInsert.next;
        nodeToInsert.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }

        return this;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString() {
        return this.toArray().map((item) => item.toString()).toString()
    }
}

const ll = new LinkedList();
ll.append('a').append('b').append('c').append('d');

console.log(ll.insertAfter('x','c').toArray());
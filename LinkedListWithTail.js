class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail=null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new LinkedListNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail=node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new LinkedListNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail=node;
        }
        else
        {
            this.tail.next=node;
            this.tail=node;
        }

        this.size++;

    }

    print() {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        }
        else {
            let current = this.head;
            let listValues = '';
            while (current) {
                listValues += `${current.value}`
                current = current.next;
            }
            console.log(listValues);
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index == 0) {
            this.prepend(value);
        }
        else {
            const node = new LinkedListNode(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

   removeFromFront()
   {
    if(this.isEmpty())
    {
        return null;
    }
    const value=this.head.value;
    this.head=this.head.next;
    this.seize--;
    return value;
   }

   removeFromEnd()
   {
    if(this.isEmpty())
    {
        return null;
    }
    const value=this.tail.value;
    if(this.size==1)
    {
        this.tail=null;
        this.head=null
    }
    else
    {
        let prev=this.head;
        while(prev.next!==this.tail)
        {
            prev=prev.next;
        }
        prev.next=null;
        this.tail=prev;
    }
    this.size--;
    return value;
   }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }
}

module.exports=LinkedList;

// const list = new LinkedList();
// console.log('List is Empty ?', list.isEmpty());
// console.log('List size is ', list.getSize())

// // list.prepend(10);
// // list.prepend(20);
// // list.prepend(30);
// list.append(10);
// list.append(20);
// list.append(30);

// list.insert(15, 1);
// //list.removeFrom(1);
// //list.removeValue(20);
// console.log(list.search(50));
// list.reverse();

// list.print();
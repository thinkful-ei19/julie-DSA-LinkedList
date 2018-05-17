class _Node {
    constructor(value, next) {
        this.value=value;
        this.next=next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
        
    }

    remove(item) {
        if (!this.head){
            return null;
        }
        if (this.head.value == item) {
            this.head = this.head.mext;
            return
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            reurn;
        }
        previousNode.next = currNode.next;
    }

    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        }
        while(currNode.value !== item) {
            if (currNode.next == null) {
                return null
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
   
}

function main(){
    let SSL = new LinkedList();
        SSL.insertFirst('Apollo');
        SSL.insertFirst('Boomer');
        SSL.insertFirst('Helo');
        SSL.insertFirst('Husker');
        SSL.insertFirst('Starbuck');
    console.log(SSL)
}

main()
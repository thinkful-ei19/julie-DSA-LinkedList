'use strict';

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

    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertBefore(beforeItem, newItem){
        if(!this.head) {
            return null;
        }
        if(this.head.value === beforeItem) {
            this.insertFirst(item)
            return
        // } else {
        //     let currNode = this.head;
        //     let previousNode = this.head;
        //     while ((currNode !== null) && (currNode.value!==beforeItem)){
        //         previousNode = currNode;
        //         currNode = currNode.next;
        //     }
        //     if(currNode.value === beforeItem) {
        //         previousNode.next = new _Node(newItem, currNode)
        //     } else if (currNode === null) {
        //         console.log(`${beforeItem} is not found`)
        //     }
        // } 
        }
        let currNode = this.head;
        let previousNode = this.head;
        while(currNode.value != beforeItem) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode.value == beforeItem) {
            previousNode.next = new _Node(newItem, currNode)
        } else if (currNode === null) {
            console.log(`${beforeItem} is not found`)
        }
    }

    //inserts a new node after a node containing the key
    insertAfter(newItem, afterItem){
        //find the item after which you want ot insert
        //create node
        //keep track of node after it
        //new node tracker will point to that
        if(!this.head){
            return null;
        }



        
    }
    insertAt(){

    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    remove(item) {
        if (!this.head){
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
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
            return;
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
        // SSL.insertFirst('Husker');
        // SSL.insertFirst('Starbuck');
        // SSL.insertFirst('Tauhida');
        // SSL.remove('squirrel');
        SSL.insertBefore('Boomers', 'Mike')
    console.log(SSL)
}

function display(){

}

function size(){

}

main()
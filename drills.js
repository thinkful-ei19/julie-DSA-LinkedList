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

    insertBefore(newItem, beforeItem){
        if(!this.head) {
            return null;
        }
        if(this.head.value === beforeItem) {
            this.insertFirst(item)
            return
        } else {
            let currNode = this.head;
            let previousNode = this.head;
            while ((currNode !== null) && (currNode.value!==beforeItem)){
                previousNode = currNode;
                currNode = currNode.next;
            }
            if(currNode.value === beforeItem) {
                previousNode.next = new _Node(newItem, currNode)
            } else if (currNode === null) {
                console.log(`${beforeItem} is not found`)
            }
        } 
        // }
        // let currNode = this.head;
        // let previousNode = this.head;
        // while(currNode.value != beforeItem) {
        //     previousNode = currNode;
        //     currNode = currNode.next;
        // }
        // if(currNode.value == beforeItem) {
        //     previousNode.next = new _Node(newItem, currNode)
        // } else if (currNode === null) {
        //     console.log(`${beforeItem} is not found`)
        // }
    }

    //inserts a new node after a node containing the key
    insertAfter(item, afterItem){
        //find the item after which you want to insert
        //create node
        //keep track of node after it
        //new node tracker will point to that
        if(!this.head){
            return null;
        }
        let currNode = this.head;
        let afterNode = this.head.next;
        while((currNode !== null) && (currNode !== afterNode)) {
            afterNode = currNode;
            currNode = currNode.next;
        }
            afterNode.next = new _Node(item, currNode)
    }
    insertAt(position, item){
        if(!this.head === null) {
        this.insertFirst(item);
        } else {
            let currNode = this.head;
            let targetNode = this.head;
            let address = 0;

        // while ((currNode !== null) && (currNode.value!== targetNode)) {
        //     targetNode = currNode;
        //     currNode = currNode.next;
        // }
            while (address !== position) {
                targetNode = currNode;
                currNode = currNode.next;
                address++;
            }    
        
        // if(currNode === null) {
        //     console.log('Item not found')
        // }

        let insertItem = new _Node(item)
        // this.insertBefore(item, targetNode)
        targetNode.next = insertItem;
        insertItem.next = currNode;
        //just changing index value
        }
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
        SSL.insertFirst('Tauhida');
        // SSL.insertFirst('Husker');
        // SSL.insertFirst('Starbuck');
        // SSL.remove('squirrel');
        // SSL.insertBefore('Athena', 'Boomer')
        // SSL.insertAfter('Hotdog', 'Helo')
        // SSL.insertAfter('Jen', 'Boomer')
        SSL.insertAt(3, 'Cat');
        SSL.remove('Tauhida');
        // display(SSL);
        // size(SSL);
        // isEmpty(SSL);
        findPrevious(SSL, 'Cat');
    console.log(JSON.stringify(SSL))
}
//display the linked list

main();


function display(list){
    let currentNode = list.head;
    // if(list.head) {
    //     console.log(list.head.value)
    // } else {
    //     console.log('Empty')
    // }
    while(currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next;
    }
}




//return size of the linked list
function size(list){
    let currentNode = list.head;
    let listSize = 0;
    if(currentNode) {
        listSize = 1;
    }
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        listSize++;
    }
    console.log(listSize);
    return listSize;
}


// finds if list is empty or not without using size of function
function isEmpty(list){
    let currentNode = list.head;
    if(!currentNode) {
        return "Empty";
    }
}


//find node before the item you are looking for
function findPrevious(list, item) {
    let currentNode = list.head;
    let previousNode = list.head;
    while ((currentNode !== null) && (currentNode.value!==item)){
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    console.log(previousNode.value);
    return previousNode.value;
}


//returns the last node in the linked list
function findLast(){

}




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
    insertAfter(value, itemToInsert){  
        //find the item after which you want to insert
        //create node
        //keep track of node after it
        //new node tracker will point to that
        if(!this.head){
            return null;
        }
        let currNode = this.head;
        while((currNode !== null) && (value !== currNode.value)) { //cant look in wrong place and not value we want(not found what we want so we can move on)
            currNode = currNode.next;
        }
            currNode.next = new _Node(itemToInsert, currNode.next) //creating spot for item to insert to be placed
    }

    //[bird, dog], cat  
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
        // findPrevious(SSL, 'Cat');
        findLast(SSL)
    console.log(JSON.stringify(SSL))
}
//display the linked list

main();


function display(lst){
    let currentNode = lst.head;
    // if(lst.head) {
    //     console.log(lst.head.value)
    // } else {
    //     console.log('Empty')
    // }
    while(currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next;
    }
}




//return size of the linked lst
function size(lst){
    let currentNode = lst.head;
    let lstSize = 0;
    if(currentNode) {
        lstSize = 1;
    }
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        lstSize++;
    }
    console.log(lstSize);
    return lstSize;
}


// finds if lst is empty or not without using size of function
function isEmpty(lst){
    let currentNode = lst.head;
    if(!currentNode) {
        return "Empty";
    }
}


//find node before the item you are looking for
function findPrevious(lst, item) {
    let currentNode = lst.head;
    let previousNode = lst.head;
    while ((currentNode !== null) && (currentNode.value!==item)){
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    console.log(previousNode.value);
    return previousNode.value;
}


//returns the last node in the linked lst
function findLast(lst){
    let currentNode = lst.head;
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    console.log(currentNode.value);
    return currentNode.value;
}



//Mystery Program
//What is the problem trying to solve? What is the runtime of this algorithm?
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
// O(n^2) - Polynomial time
// this function runs a loop within a loop. goes to the head of the linked list
// and places new value   

//Reverse a list
//Linear algo for reverse linked list
function reverseList(lst) {
    let result = null;
    let stack = null;
    let current = lst.head;
    while(current) {
        stack.push(current)
        current = current.next;
    }     
    // Set head to end of list.
    result = stack.pop() || [];
    current = result;
    
    while (current) {
        current.next = stack.pop();
        current = current.next;
    }

    return result;
};

}
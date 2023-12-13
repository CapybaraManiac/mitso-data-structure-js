const { NotImplementedError } = require('../extensions/index.js'); 
 
// const { ListNode } = require('../extensions/list-node.js'); 
 
/** 
 * Implement the Queue with a given interface via linked list (use ListNode extension above). 
 * 
 * @example 
 * const queue = new Queue(); 
 * 
 * queue.enqueue(1); // adds the element to the queue 
 * queue.enqueue(3); // adds the element to the queue 
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1 
 * queue.getUnderlyingList() // returns { value: 3, next: null } 
 */ 
module.exports = class Queue 
 { 
 
  queue1 = [] 
  index = 0 
 
  getUnderlyingList()  
  { 
    let result = null; 
   
    while (this.index < this.queue1.length) { 
      let obj = {value: this.queue1[this.index], next: null}; 
       
      if (result === null) { 
        result = obj; 
      } else { 
        let currentNode = result; 
        while (currentNode.next !== null) { 
          currentNode = currentNode.next; 
        } 
        currentNode.next = obj; 
      } 
       
      this.index++; 
    } 
     
    return result; 
  } 
 
  enqueue(value) 
   { 
    this.queue1.push(value); 
  } 
 
  dequeue() 
   { 
    let i = this.queue1[0]; 
    this.queue1.shift(); 
    return i; 
  } 
 
}
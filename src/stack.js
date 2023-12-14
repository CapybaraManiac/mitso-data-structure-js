const { NotImplementedError } = require("../extensions/index.js"); 
 
class Stack { 
  constructor() { 
    this.items = []; 
  } 
 
  push(element) { 
    this.items.push(element); 
  } 
 
  pop() { 
    if (this.isEmpty()) { 
      return undefined; 
    } 
    return this.items.pop(); 
  } 
 
  peek() { 
    if (this.isEmpty()) { 
      return undefined; 
    } 
    return this.items[this.items.length - 1]; 
  } 
 
  isEmpty() { 
    return this.items.length === 0; 
  } 
} 
 
module.exports = Stack;
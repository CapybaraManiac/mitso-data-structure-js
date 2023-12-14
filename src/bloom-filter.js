const { NotImplementedError } = require("../extensions/index.js"); 
 
// const { Node } = require('../extensions/list-tree.js'); 
 
/** 
 * Implement simple binary search tree according to task description 
 * using Node from extensions 
 */ 
class Node { 
  constructor(data) { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
  } 
} 
 
module.exports = class BinarySearchTree { 
  constructor() { 
    this.treeRoot = null; 
  } 
 
  root() { 
    return this.treeRoot; 
  } 
 
  add(data) { 
    const newNode = new Node(data); 
 
    if (this.treeRoot === null) { 
      this.treeRoot = newNode; 
    } else { 
      this.insertNode(this.treeRoot, newNode); 
    } 
  } 
 
  insertNode(node, newNode) { 
    if (newNode.data < node.data) { 
      if (node.left === null) { 
        node.left = newNode; 
      } else { 
        this.insertNode(node.left, newNode); 
      } 
    } else { 
      if (node.right === null) { 
        node.right = newNode; 
      } else { 
        this.insertNode(node.right, newNode); 
      } 
    } 
  } 
 
  has(data) { 
    return this.searchNode(this.treeRoot, data) !== null; 
  } 
 
  find(data) { 
    return this.searchNode(this.treeRoot, data); 
  } 
 
  searchNode(node, data) { 
    if (node === null) { 
      return null; 
    } else if (data < node.data) { 
      return this.searchNode(node.left, data); 
    } else if (data > node.data) { 
      return this.searchNode(node.right, data); 
    } else { 
      return node; 
    } 
  } 
 
  remove(data) { 
    this.treeRoot = this.removeNode(this.treeRoot, data); 
  } 
 
  removeNode(node, key) { 
    if (node === null) { 
      return null; 
    } else if (key < node.data) { 
      node.left = this.removeNode(node.left, key); 
      return node; 
    } else if (key > node.data) { 
      node.right = this.removeNode(node.right, key); 
      return node; 
    } else { 
      if (node.left === null && node.right === null) { 
        node = null; 
        return node; 
      } 
 
      if (node.left === null) { 
        node = node.right; 
        return node; 
      } 
 
      if (node.right === null) { 
        node = node.left; 
        return node; 
      } 
 
      const minNode = this.findMinNode(node.right); 
      node.data = minNode.data; 
      node.right = this.removeNode(node.right, minNode.data); 
      return node; 
    } 
  } 
 
  findMinNode(node) { 
    if (node.left === null) { 
      return node; 
    } else { 
      return this.findMinNode(node.left); 
    } 
  } 
 
  min() { 
    if (this.treeRoot === null) { 
      return null; 
    } 
 
    let currentNode = this.treeRoot; 
    while (currentNode.left !== null) { 
      currentNode = currentNode.left; 
    } 
    return currentNode.data; 
  } 
 
  max() { 
    if (this.treeRoot === null) { 
      return null; 
    } 
 
    let currentNode = this.treeRoot; 
    while (currentNode.right !== null) { 
      currentNode = currentNode.right; 
    } 
    return currentNode.data; 
  } 
};
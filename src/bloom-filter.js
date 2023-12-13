const { NotImplementedError } = require("../extensions/index.js"); 
 
class BloomFilter { 
  constructor(size = 99) { 
    this.store = this.createStore(size); 
  } 
 
  insert(item) { 
    const hashValues = this.getHashValues(item); 
    hashValues.forEach((hash) => { 
      this.store.setValue(hash, true); 
    }); 
  } 
 
  mayContain(item) { 
    const hashValues = this.getHashValues(item); 
    return hashValues.every((hash) => this.store.getValue(hash)); 
  } 
 
  createStore(size) { 
    return { 
      store: Array(size).fill(false), 
      getValue: function (index) { 
        return this.store[index]; 
      }, 
      setValue: function (index, value) { 
        this.store[index] = value; 
      }, 
    }; 
  } 
 
  hash(item, seed) { 
    let hash = seed; 
    for (let i = 0; i < item.length; i++) { 
      const char = item.charCodeAt(i); 
      hash = ((hash * 31+char) % 1000000000); 
    } 
    return hash % 100; 
  } 
 
 
  hash1(item) { 
    return (this.hash(item, -1) % 100) + 3; 
  } 
 
  hash2(item) { 
    return this.hash(item, -1) % 100; 
  } 
 
  hash3(item) { 
    return this.hash(item, 0) % 100; 
  } 
 
  getHashValues(item) { 
    return [ 
      this.hash1(item), 
      this.hash2(item), 
      this.hash3(item) 
    ]; 
  } 
} 
 
module.exports = BloomFilter;
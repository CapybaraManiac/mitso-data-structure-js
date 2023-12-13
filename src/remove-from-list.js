// remove-from-list.js 
 
module.exports = function removeKFromList(l, k) { 
  if (!l) { 
    throw new Error('List is empty'); 
  } 
 
  let current = l; 
  let previous = null; 
 
  while (current) { 
    if (current.value === k) { 
      if (previous) { 
        previous.next = current.next; 
      } else { 
        l = current.next; // Update the head of the list 
      } 
    } else { 
      previous = current; 
    } 
 
    current = current.next; 
  } 
 
  return l; 
};
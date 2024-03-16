export const createNode = (data, left = null, right = null) => {    
    return {data, left, right};
}

export const Tree = (array) => {
  const buildTree = (array, start, end) => {
    if (start > end) return null;
    
    const mid = Math.floor((start + end) / 2);
    const node = createNode(array[mid]);
    
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
  }

  const insert = (value, currentNode) => {
    if (currentNode.data === null || currentNode.data === value) return null;
    

    if (value < currentNode.data) {
      if(currentNode.left === null) currentNode.left = createNode(value);
      currentNode = currentNode.left;
      insert(value, currentNode)
    }
    else {
      if(currentNode.right === null) currentNode.right = createNode(value);
      currentNode = currentNode.right;
      insert(value, currentNode);
    }
  }

  const deleteItem = (value) => {
    let nodeToRemove = find(value, root);
    if (nodeToRemove.left === null && nodeToRemove.right === null) nodeToRemove = null;
    else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {

    }
    else if (nodeToRemove.left || nodeToRemove.right) {

    }
    else {
      console.log("The given value isn't in this Tree, or something went wrong.");
      return null;
    }
  }

  const getParent = (value, currentNode) => {
    if (currentNode.data === value) return null;

    while (currentNode.left !== value || currentNode.right !== value) {
      if (value < currentNode.data) {
        
      }
    }
  }

  const traverseTree = (value, currentNode) => {
    if (value < currentNode.data) return currentNode = currentNode.left;
    else if (value > currentNode.data) return currentNode = currentNode.right;
    else return null;
  }

  const find = (value, currentNode) => { 
    if (currentNode.data === value) return currentNode;
    while (currentNode.data !== null || currentNode.data !== value) {
      
    }
    return null;
  }
  
  //sort least to greatest, then remove duplicates
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    const nextElement = array[i+1];
    
    if (element === nextElement) array.splice(array.indexOf(element), 1);
  }
    
    let root = buildTree(array, 0, array.length - 1);
    
    return {
      root, 
      insert, 
      deleteItem,
      find
    };
}

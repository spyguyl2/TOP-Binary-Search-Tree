const createNode = (data, left = null, right = null) => {    
    return {data, left, right};
}

const Tree = (array) => {
  const buildTree = (array, start, end) => {
    if (start > end) return null;
    
    const mid = Math.floor((start + end) / 2);
    const node = createNode(array[mid]);
    
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
  }

  const insert = (value) => {
    
  }

  const deleteItem = (value) => {

  }
  
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    const nextElement = array[i+1];
    
    if (element === nextElement) array.splice(array.indexOf(element), 1);
  }
    
    let root = buildTree(array, 0, array.length - 1);
    
    return {root};
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 

  let tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  
  prettyPrint(tree.root);
import prettyPrint from "./prettyPrint.js";
import { Tree } from "./BalancedBST.js";

  let tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  tree.insert(66, tree.root);

  console.log(tree.find(23, tree.root));
  prettyPrint(tree.root);
/**
 *  == PROBLEM 03 ==
 *  29 / july / 2021
 *
 * Given the root to a binary tree, implement serialize(root), which 
 * serializes the tree into a string, and deserialize(s), which 
 * deserializes the string back into the tree.
 */

const serialized = []

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  serialize() {
    if (root.left !== null || root.right !== null) {
      (root.left).serialize();
      serialized.push(root.val);
      (root.right).serialize();
    }
  }
}


const tree = new Node(1, new Node(2), new Node(3));
tree.serialize()
console.log(serialized)

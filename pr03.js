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
}

class Codec {
  /**
    * This serializes the tree in preorde fashion
    */
  serialize(root) {
    let ans = [];

    function dfs(node) {
      if(!node) {
        ans.push('NULL');
        return;
      }
      console.log(ans)
      ans.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
    dfs(root);
    return ans;
  }

  deserialize(data) {

  }
}


const tree = new Node(1, new Node(2), new Node(3));
const c = new Codec()
c.serialize(tree)
console.log(serialized)

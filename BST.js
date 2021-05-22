class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.rootNode = null;
  }

  /**
   * Finds the best position for the given value and inserts it into that position
   * If the the value exists, no insertion will occur
   * @param {Object} value
   * @returns nothing
   */
  add(value) {
    if (this.rootNode === null) return (this.rootNode = new Node(value));

    const insert = (parent) => {
      if (value < parent.data) {
        if (parent.left == null) {
          // console.log("creating left node for " + value);
          parent.left = new Node(value);
          return;
        } else insert(parent.left);
      } else if (value > parent.data) {
        if (parent.right == null) {
          // console.log("creating right node for " + value);
          parent.right = new Node(value);
          return;
        } else insert(parent.right);
      } else return;
    };

    return insert(this.rootNode);
  }

  /**
   *
   * Finds minimum value in the tree.
   * @returns Integer
   */
  findMinValue() {
    return this.findMin().data;
  }
  /**
   *
   * Finds maximum value in the tree.
   * @returns Integer
   */
  findMaxValue() {
    return this.findMax().data;
  }
  /**
   *
   * Returns Minimum value Node from the tree.
   * @returns Node
   */
  findMin(root = this.rootNode) {
    if (root == null) return -1;
    if (root.left === null) return root;
    return this.findMin(root.left);
  }
  /**
   *
   * Returns Maximum value Node from the tree.
   * @returns Node
   */
  findMax(root = this.rootNode) {
    if (root == null) return -1;
    if (root.right === null) return root;
    return this.findMax(root.right);
  }
  /**
   *
   * Returns Minimum Height of the tree.
   * @returns Integer
   */
  findMinHeight(root = this.rootNode) {
    if (root === null) return -1;

    let left = this.findMinHeight(root.left);
    let right = this.findMinHeight(root.right);
    return left < right ? left + 1 : right + 1;
  }
  /**
   *
   * Returns Maximum Height of the tree.
   * @returns Integer
   */
  findMaxHeight(root = this.rootNode) {
    if (root === null) return -1;

    let left = this.findMaxHeight(root.left);
    let right = this.findMaxHeight(root.right);

    return left > right ? left + 1 : right + 1;
  }
  /**
   *
   * @param {Object} find
   * Returns Array consisting of exact path that leads to the item (find) in the tree.
   * @returns Array[]
   */
  findPath(find, root = this.rootNode) {
    if (root === null) return null;
    if (find === root.data) return [find];
    if (find < root.data) {
      let result = this.findPath(find, root.left);
      if (result) {
        return [...result, root.data];
      }
    }
    if (find > root.data) {
      let result = this.findPath(find, root.right);
      if (result) {
        return [...result, root.data];
      }
    }
  }

  /**
   * Returns false/ true if the tree is balanced/un-balanced
   * @returns Boolean
   */
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  /**
   * Removes a node from the tree and re-arranges subsequent nodes accordingly.
   * @param {Object} data
   * @param {Node} root
   * @returns Root Node
   */
  remove(data, root = this.rootNode) {
    if (root === null) return null;

    if (data < root.data) {
      root.left = this.remove(data, root.left);
      return root;
    } else if (data > root.data) {
      root.right = this.remove(data, root.right);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }
      /**
       * if the not to be removed has two nodes, go to the right node,
       * move all the way towards its left nodes,
       * when the last left node is reached, replace it with the target node.
       */
      let tempNode = root.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      root.data = tempNode.data;
      //remove the duplicate of tempNode from the tree
      //This goes deep down to the leaf node and simply deletes it as it is a leaf without children.
      root.right = this.remove(tempNode.data, root.right);
      return root;
    }
  }

  /**
   * Checks whether item exists in the tree or not
   * @param {Object} data
   * @param {*} root
   * @returns true/false
   */
  contains(data, root = this.rootNode) {
    if (!root) return false;
    if (root.data == data) return true;
    else if (data < root.data) return this.contains(data, root.left);
    else return this.contains(data, root.right);
  }

  /**
   * Returns an array of items sorted inOrder
   * @param {Node} root
   * @returns Array[]
   */

  inOrder(root = this.rootNode) {
    if (root === null) return null;
    else {
      let result = [];
      function traverseInOder(node) {
        node.left && traverseInOder(node.left);
        result = [...result, node.data];
        node.right && traverseInOder(node.right);
      }
      traverseInOder(root);
      return result;
    }
  }
  /**
   * Returns an array of items sorted preOrder
   * @param {Node} root
   * @returns Array[]
   */
  preOrder(root = this.rootNode) {
    if (root === null) return null;
    else {
      let result = [];
      function traverseInOder(node) {
        result = [...result, node.data];
        node.left && traverseInOder(node.left);
        node.right && traverseInOder(node.right);
      }
      traverseInOder(root);
      return result;
    }
  }
  /**
   * Returns an array of items sorted postOrder
   * @param {Node} root
   * @returns Array[]
   */

  postOrder(root = this.rootNode) {
    if (root === null) return null;
    else {
      let result = [];
      function traverseInOder(node) {
        node.left && traverseInOder(node.left);
        node.right && traverseInOder(node.right);
        result = [...result, node.data];
      }
      traverseInOder(root);
      return result;
    }
  }

  /**
   * Returns an array of items sorted levelOrder
   * @param {Node} root
   * @returns Array[]
   */

  levelOrder(root = this.rootNode) {
    if (root === null) return null;
    let queue = [];
    queue.push(root);
    let result = [];
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.data);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return result;
  }
}

function main() {
  const bst = new BST();
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);

  console.log("Min Height: " + bst.findMinHeight());
  console.log("Max Height: " + bst.findMaxHeight());
  console.log("Min Value: " + bst.findMinValue());
  console.log("Max Value: " + bst.findMaxValue());
  console.log("Tree is balanced ?" + bst.isBalanced() ? "Yes" : "No");
  bst.add(10);
  console.log("Min Height: " + bst.findMinHeight());
  console.log("Max Height: " + bst.findMaxHeight());
  console.log("Tree contains 10 : " + bst.contains(10));
  console.log("Max Value: " + bst.findMaxValue());
  console.log("Tree is balanced ?" + bst.isBalanced() ? "Yes" : "No");
  bst.remove(10);
  console.log(bst.findPath(22));
  console.log(bst.inOrder());
  console.log(bst.preOrder());
  console.log(bst.postOrder());
  console.log(bst.levelOrder());
}

main();

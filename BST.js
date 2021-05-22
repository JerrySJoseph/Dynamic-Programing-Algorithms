class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function newNode(value) {
  return {
    data: value,
    left: null,
    right: null,
  };
}

class BST {
  constructor() {
    this.rootNode = null;
  }

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

  findMinValue() {
    return this.findMin().data;
  }
  findMaxValue() {
    return this.findMax().data;
  }
  findMin(root = this.rootNode) {
    if (root == null) return -1;
    if (root.left === null) return root;
    return this.findMin(root.left);
  }
  findMax(root = this.rootNode) {
    if (root == null) return -1;
    if (root.right === null) return root;
    return this.findMax(root.right);
  }
  findMinHeight(root = this.rootNode) {
    if (root === null) return -1;

    let left = this.findMinHeight(root.left);
    let right = this.findMinHeight(root.right);
    return left < right ? left + 1 : right + 1;
  }

  findMaxHeight(root = this.rootNode) {
    if (root === null) return -1;

    let left = this.findMinHeight(root.left);
    let right = this.findMinHeight(root.right);

    return left > right ? left + 1 : right + 1;
  }

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
  contains(data, root = this.rootNode) {
    if (!root) return false;
    if (root.data == data) return true;
    else if (data < root.data) return this.contains(data, root.left);
    else return this.contains(data, root.right);
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
  bst.remove(22);
  console.log("Tree contains 22 : " + bst.contains(22));
  console.log("Max Value: " + bst.findMaxValue());
  
  console.log(bst.findPath(22));
}

main();

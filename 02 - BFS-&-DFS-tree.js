class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
    return this;
  }

  removeNode(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      var current = node.right;

      while (current.left !== null) {
        current = current.left;
      }

      node.value = current.value;
      node.right = this.removeNode(node.right, current.value);
    }

    return node;
  }

  // BFS
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var bfs = new BinarySearchTree();

bfs.insert(10);
bfs.insert(6);
bfs.insert(15);
bfs.insert(3);
bfs.insert(8);
bfs.insert(20);

console.log(bfs.BFS());
console.log(bfs.DFSPreOrder());

// var bst = new BinarySearchTree();

// bst.insert(15);
// bst.insert(10);
// bst.insert(20);
// bst.insert(12);

// bst.remove(10);

// console.log(bst.root.value);
// console.log(bst.root.left.value);
// console.log(bst.root.right.value);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       var current = this.root;
//       while (true) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }
// }

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// console.log(binarySearchTree.root.value);
// console.log(binarySearchTree.root.right.value);
// console.log(binarySearchTree.root.left.right.value);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     if (this.root === null) {
//       this.root = new Node(value);
//       return this;
//     } else {
//       var current = this.root;
//       while (true) {
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = new Node(value);
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = new Node(value);
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }

//   find(value) {
//     if (this.root === null) return false;
//     var current = this.root,
//       found = false;

//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         found = true;
//       }
//     }

//     if (!found) return undefined;
//     return current;
//   }
// }

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// var foundNode = binarySearchTree.find(20);
// console.log(foundNode.value);
// console.log(foundNode.left);
// console.log(foundNode.right);

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
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
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

  //   remove(value) {
  //     var current = this.root;
  //     var parent = null;

  //     while(current !== null){
  //         if(value === current.value){

  //             if(current.left === null){
  //                 if(parent === null){
  //                     this.root = current.right;
  //                 } else if (parent.left === current) {
  //                     parent.left = current.right;
  //                 } else{
  //                     parent.right = current.right;
  //                 }
  //             } else if(current.right === null){
  //                 if(parent === null){
  //                     this.root = current.left;
  //                 } else if(parent.left === current){
  //                     parent.left = current.left;
  //                 } else {
  //                     parent.right = current.left;
  //                 }
  //             }

  //             return this;
  //         }

  //         parent = current;

  //         if(value < current.value){
  //             current = current.left;
  //         } else{
  //             current = current.right;
  //         }
  //     }
  //      return this;
  //   }
}

var bst = new BinarySearchTree();

bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(12);

bst.remove(10);

console.log(bst.root.value);
console.log(bst.root.left.value);
console.log(bst.root.right.value);

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value);
// console.log(binarySearchTree.root.right.right);

// binarySearchTree.remove(5);
// console.log(binarySearchTree.root.left.left.value);
// console.log(binarySearchTree.root.left.left.right);

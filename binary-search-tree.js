class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with
   *  value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    if (!this.root) {
      const rootNode = new Node(val);
      this.root = rootNode;
      current = rootNode;
    }
    while (current.left || current.right) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          break;
        }
      }
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          break;
        }
      }
    }
    if (current.val < val) {
      const rightNode = new Node(val);
      current.right = rightNode;
    }
    if (current.val > val) {
      const leftNode = new Node(val);
      current.left = leftNode;
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into
   *  the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this) {
    if (currentNode.root === null) {
      currentNode.root = new Node(val);
      return currentNode;
    }
    if (currentNode.root) currentNode = currentNode.root;
    if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
      } else {
        currentNode = currentNode.right;
        this.insertRecursively(val, currentNode);
      }
    }
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
      } else {
        currentNode = currentNode.left;
        this.insertRecursively(val, currentNode);
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value
   *  val.
   * return the node, if found; else undefined. Uses
   *  iteration. */
  find(val) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node
   *  with value val.
   * return the node, if found; else undefined. Uses
   *  recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode === null ) {
      return undefined;
    }
    if (val === currentNode.val) {
      return currentNode;
    }
    if (val > currentNode.val) {
      currentNode = currentNode.right;
      return this.findRecursively(val, currentNode);
    } else {
      currentNode = currentNode.left;
      return this.findRecursively(val, currentNode);
    }
  }

  /** dfsPreOrder(): Traverse the array using 
   * pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root) {
    const visitedNodes = [];
    function traversePre(currentNode, visitedNodes) {
      visitedNodes.push(currentNode.val);
      if (currentNode.left) traversePre(currentNode.left, visitedNodes);
      if (currentNode.right) traversePre(currentNode.right, visitedNodes);
    }
    traversePre(currentNode, visitedNodes);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root) {
    const visitedNodes = [];
    function traverseInOrder(currentNode, visitedNodes) {
      if (currentNode.left) traverseInOrder(currentNode.left, visitedNodes);
      visitedNodes.push(currentNode.val);
      if (currentNode.right) traverseInOrder(currentNode.right, visitedNodes);
    }
    traverseInOrder(currentNode, visitedNodes);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode = this.root) {
    const visitedNodes = [];
    function traversePost(currentNode, visitedNodes) {
      if (currentNode.left) traversePost(currentNode.left, visitedNodes);
      if (currentNode.right) traversePost(currentNode.right, visitedNodes);
      visitedNodes.push(currentNode.val);
    }
    traversePost(currentNode, visitedNodes);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(currentNode = this.root) {
    let visitedNodes = [];
    let queue = [currentNode];
    function traverseBFS(queue, visitedNodes) {
      while (queue.length !== 0) {
        let current = queue.shift();
        visitedNodes.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
    traverseBFS(queue, visitedNodes);
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

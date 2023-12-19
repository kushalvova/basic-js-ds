const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }
  
  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);
    let currentPoint = this.root();
    let flag = true;

    if (currentPoint === null) this.treeRoot = node;
    else {
      while (flag) {
        if (currentPoint.data > data) {
          if (currentPoint.left) currentPoint = currentPoint.left;
          else {
            currentPoint.left = node;
            flag = !flag;
          }
        } else if (currentPoint.data < data) {
          if (currentPoint.right) currentPoint = currentPoint.right;
          else {
            currentPoint.right = node;
            flag = !flag;
          }
        } else if (currentPoint.data = data) {
          flag = !flag;
        }
      }
    }
  }

  has(data) {
    let currentPoint = this.root();
    let flag = true;

    if (currentPoint === null) return false;
    while (flag) {
      if (currentPoint.data > data) {
        if (currentPoint.left) currentPoint = currentPoint.left;
        else return false;
      } else if (currentPoint.data < data) {
        if (currentPoint.right) currentPoint = currentPoint.right;
        else return false;
      } else if (currentPoint.data = data) {
        return true;
      }
    }
  }

  find(data) {
    let currentPoint = this.root();
    let flag = true;

    if (currentPoint === null) return null;
    while (flag) {
      if (currentPoint.data > data) {
        if (currentPoint.left) currentPoint = currentPoint.left;
        else return null;
      } else if (currentPoint.data < data) {
        if (currentPoint.right) currentPoint = currentPoint.right;
        else return null;
      } else if (currentPoint.data = data) {
        return currentPoint;
      }
    }
  }

  remove(data) {
    let currentPoint = this.root();
    let prevPoint = this.root();
    let leftOrRight = '';
    let flag = true;

    if (currentPoint === null) return;
    while (flag) {
      if (currentPoint.data > data) {
        if (currentPoint.left) {
          prevPoint = currentPoint;
          currentPoint = currentPoint.left;
          leftOrRight = 'left';
        }
        else flag = !flag;
      } else if (currentPoint.data < data) {
        if (currentPoint.right) {
          prevPoint = currentPoint;
          currentPoint = currentPoint.right;
          leftOrRight = 'right';
        }
        else flag = !flag;
      } else if (currentPoint.data = data) {
        if (currentPoint.left && currentPoint.right) {
          let maxFromLeft = currentPoint.left;
          while(maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          };
          maxFromLeft.right = currentPoint.right;

          if (prevPoint[leftOrRight]) prevPoint[leftOrRight] = currentPoint.left;
          else this.treeRoot = currentPoint.left;
        }
        if (currentPoint.left && !currentPoint.right) {
          if (prevPoint[leftOrRight]) prevPoint[leftOrRight] = currentPoint.left;
          else this.treeRoot = currentPoint.left;
        }
        if (!currentPoint.left && currentPoint.right) {
          if (prevPoint[leftOrRight]) prevPoint[leftOrRight] = currentPoint.right;
          else this.treeRoot = currentPoint.left;
        }
        if (!currentPoint.left && !currentPoint.right) {
          if (prevPoint[leftOrRight])  prevPoint[leftOrRight] = null;
          else this.treeRoot = currentPoint.left;
        }
        flag = !flag;
      }
    }
  }

  getMinOrMax(str) {
    let currentPoint = this.root();
    let flag = true;

    if (currentPoint === null) return null;
    while (flag) {
      if (currentPoint[`${str}`]) currentPoint = currentPoint[`${str}`];
      else {
        flag = !flag;
        return currentPoint.data;
      }
    }
  }

  min() {
    return this.getMinOrMax('left');
  }

  max() {
    return this.getMinOrMax('right');
  }
}

module.exports = {
  BinarySearchTree
};
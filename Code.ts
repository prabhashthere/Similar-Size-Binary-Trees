//implemented with TypeScript
class BinaryTreeNode {
  binaryNodeValue: string;
  rightBinaryNode?: BinaryTreeNode;
  leftBinaryNode?: BinaryTreeNode;

  constructor(binaryNodeValue: string, rightBinaryNode?: BinaryTreeNode, leftBinaryNode?: BinaryTreeNode) {
    this.binaryNodeValue = binaryNodeValue;
    this.rightBinaryNode = rightBinaryNode;
    this.leftBinaryNode = leftBinaryNode;
  }

  // check if two binary trees are similar
  similarTrees(firstTree: BinaryTreeNode, secondTree: BinaryTreeNode): boolean {
    let firstTreeArr = [];
    let secondTreeArr = [];
    firstTreeArr.push(firstTree);
    secondTreeArr.push(secondTree);

    return this.similarTreeArrays(firstTreeArr, secondTreeArr);
  }

  // recursive function
  similarTreeArrays(firstTreeArr: BinaryTreeNode[], secondTreeArr: BinaryTreeNode[]): boolean {
    if ( !this.similarChildCounts(firstTreeArr, secondTreeArr) ) {
      return false;
    } else {
      firstTreeArr = this.getNextLevelNodesArray(firstTreeArr);
      secondTreeArr = this.getNextLevelNodesArray(secondTreeArr);
      // check if both trees has nodes in the next level
      if (firstTreeArr.length > 0 && secondTreeArr.length > 0) {
        this.similarTreeArrays(firstTreeArr, secondTreeArr);
      // check if length of one array is 0 and length of other array is non-zero
      } else if (firstTreeArr.length != secondTreeArr.length) {
        return false;
      }
    }
    return true;
  }

  // check if sum of number of children are equal in the two arrays
  similarChildCounts(firstTreeArr: BinaryTreeNode[], secondTreeArr: BinaryTreeNode[]): boolean {
    let count1 = 0;
    let count2 = 0;
    firstTreeArr.forEach(node => {
      count1 += node.childCount();
    });
    secondTreeArr.forEach(node => {
      count2 += node.childCount();
    });
    return count1 === count2;
  }

  // put children of all nodes in the input array to a new array
  getNextLevelNodesArray(nodeArray: BinaryTreeNode[]): BinaryTreeNode[] {
    let newNodeArray: BinaryTreeNode[] = [];
    nodeArray.forEach( node => {
      if (node.leftBinaryNode) {
        newNodeArray.push(node.leftBinaryNode);
      }
      if (node.rightBinaryNode) {
        newNodeArray.push(node.rightBinaryNode);
      }
    });
    return newNodeArray;
  }

  //function to return number of children in a node
  childCount() {
    if (this.rightBinaryNode != null && this.leftBinaryNode != null) {
      return 2;
    } else if (this.rightBinaryNode == null && this.leftBinaryNode == null) {
      return 0;
    } else {
      return 1;
    }
  }

}

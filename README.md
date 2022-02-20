# Similar-Size-Binary-Trees
Check whether two binary trees are similar in size at each level.
Coded in TypeScript

INPUT: 2 Binary Tree Objects
OUTPUT: Boolean

Two binary trees are called similar sized if the number of nodes is the same at each level of the tree

class TreeNode {
    String nodeValue;
    TreeNode rightNode;
    TreeNode leftNode;

    TreeNode(String nodeValue, TreeNode rightNode, TreeNode leftNode) {
        this.nodeValue = nodeValue;
        this.rightNode = rightNode;
        this.leftNode = leftNode;
    }
}

The goal of this question is to write a function that will validate if two trees are similar sized.
The function should return true if this is correct and false otherwise.

![image](https://user-images.githubusercontent.com/29755487/154828187-03762a74-c0f8-4b15-95fe-0e125959f9e9.png)
 
The above images shows a binary tree with similar sizes at each level,
This code will return TRUE for this type of input.



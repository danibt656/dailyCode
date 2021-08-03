'''
Given the root to a binary tree, implement serialize(root), 
which serializes the tree into a string, and deserialize(s), 
which deserializes the string back into the tree.
'''

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root):
        ans = []

        def dfs(node):
            if not node:
                ans.append('NULL')
                return
            ans.append(node.val)
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return ans


    def deserialize(self, data):
        self.i = 0
        def dfs():
            if data[self.i] == 'NULL':
                self.i += 1
                return
            node = Node(data[self.i])
            self.i += 1
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()


def main():
    c = Codec()
    node = Node('root', Node('left', Node('left.left')), Node('right'))
    print(
        c.deserialize(
            c.serialize(node)
        ).left.left.val == 'left.left'
    )


if __name__ == '__main__':
    main()
